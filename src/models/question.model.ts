export interface QuestionResponseDto {
    id: number
    title: string
    description: string
    createdAt: string
}



export interface AnswerDto {
    text: string
    author: string
    createdAt?: Date | string
    userId: number
    questionId: number
    Question: any
}
