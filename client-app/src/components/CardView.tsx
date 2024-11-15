'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface PollOption {
    id: string
    text: string
    votes: number
    isSelected?: boolean
}

interface PollProps {
    question?: string
    initialOptions?: PollOption[]
    username?: string
    userRole?: string
}

export default function CardView({
    question = "병장 월급 200만원 타당하다고 생각하시나요?",
    initialOptions = [
        { id: '1', text: '👍', votes: 62 },
        { id: '2', text: '👎', votes: 38 }
    ],
    username = "오규찬",
    userRole = "온라인본부"
}: PollProps) {
    const [options, setOptions] = useState(initialOptions)
    const [voted, setVoted] = useState<string | null>(null)

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

    return (
        <Card className="w-full max-w-md bg-gray-50">
            <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-8 w-8 bg-red-200">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{username[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{username}</span>
                        <span className="text-xs text-gray-500">{userRole}</span>
                    </div>
                </div>

                <h3 className="text-base mb-4">{question}</h3>

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
    )
}