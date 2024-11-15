'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface Comment {
    id: number
    username: string
    content: string
    avatar?: string
}

interface PollOption {
    id: string
    text: string
    votes: number
    isSelected?: boolean
}

export default function DetailView() {
    const [options, setOptions] = useState<PollOption[]>([
        { id: '1', text: '👍', votes: 62 },
        { id: '2', text: '👎', votes: 38 }
    ])
    const [voted, setVoted] = useState<string | null>(null)
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            username: '익명',
            content: '여기에 자유롭게 댓글 입력란!'
        }
    ])
    const [newComment, setNewComment] = useState('')

    const totalVotes = options.reduce((sum, option) => sum + option.votes, 0)

    const handleVote = (optionId: string) => {
        if (voted) return

        setOptions(options.map(option => ({
            ...option,
            votes: option.id === optionId ? option.votes + 1 : option.votes,
            isSelected: option.id === optionId
        })))
        setVoted(optionId)
    }

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.trim()) return

        setComments([...comments, {
            id: Date.now(),
            username: '익명',
            content: newComment
        }])
        setNewComment('')
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card className="bg-gray-50">
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-8 w-8 bg-red-200">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>오</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">오규찬</span>
                            <span className="text-xs text-gray-500">온라인본부</span>
                        </div>
                    </div>

                    <h3 className="text-base mb-2">병장 월급 200만원 타당하다고 생각하시나요?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        병장 월급 200만원 타당하다고 생각하시나요?병장 월급 200만원 타당하다고 생각하시나요?병장 월급 200만원 타당하다고 생각하시
                    </p>

                    <div className="space-y-2">
                        {options.map((option) => {
                            const percentage = Math.round((option.votes / totalVotes) * 100)

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleVote(option.id)}
                                    disabled={voted !== null}
                                    className={`w-full text-left relative ${option.isSelected ? 'bg-red-100' : 'bg-gray-100'
                                        } rounded-md p-3 transition-colors`}
                                >
                                    <div className="relative z-10 flex justify-between items-center">
                                        <span>{option.text}</span>
                                        <span>{percentage}%</span>
                                    </div>
                                    <div
                                        className={`absolute top-0 left-0 h-full ${option.isSelected ? 'bg-red-100' : 'bg-gray-200'
                                            } rounded-md transition-all`}
                                        style={{ width: `${percentage}%`, opacity: 0.5 }}
                                    />
                                </button>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gray-50">
                <CardContent className="p-4">
                    <h4 className="text-sm font-medium mb-4">댓글 {comments.length}</h4>
                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex gap-2">
                                <Avatar className="h-8 w-8 bg-gray-200">
                                    <AvatarFallback>{comment.username[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 bg-gray-100 p-3 rounded-md">
                                    <div className="text-sm">{comment.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator className="my-4" />

                    <form onSubmit={handleAddComment} className="flex gap-2">
                        <Input
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="댓글을 입력하세요"
                            className="flex-1"
                        />
                        <Button type="submit">등록</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}