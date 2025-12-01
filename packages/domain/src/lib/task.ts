export type Task = {
  id: string
  title: string
  description: string
  completed_at: Date | null
  archived_at: Date | null
  user_id: string
}