from repository.task_repository import TaskRepository
from dto.response.task.task_response import TaskResponse
from dto.request.task.create_task_request import TaskCreateRequest
from typing import List

class TaskService():
    def __init__(self):
        self.task_repository = TaskRepository()

    def create_task(self, task_request: TaskCreateRequest) -> TaskResponse:
        task = self.task_repository.create_task(
            room_id = task_request.room_id,
            task_name = task_request.task_name,
            task_description = task_request.task_description,
            assigner_id = task_request.assigner_id,
            assignee_id = task_request.assignee_id,
            status = task_request.status
        )

        return TaskResponse(
            room_id = task.room_id,
            task_name = task.task_name,
            task_description = task.task_description,
            assigner_id = task.assigner_id,
            assignee_id = task.assignee_id,
            status = task.status,
            created_at = task.created_at,
            updated_at = task.updated_at
        )

        return task
    
    def get_task_by_id(self, task_id: str) -> TaskResponse:
        
        task = self.task_repository.get_task_by_id(task_id=task_id)

        if not task:
            return None

        return TaskResponse(
            task_id = task.task_id,
            room_id = task.room_id,
            task_name = task.task_name,
            task_description = task.task_description,
            assigner_id = task.assigner_id,
            assignee_id = task.assignee_id,
            status = task.status,
            created_at = task.created_at,
            updated_at = task.updated_at
        )
    
    def get_list_task_by_room_id(self, room_id: str) -> List[TaskResponse]:
        list_tasks = self.task_repository.get_list_task_by_room_id(room_id)
        if not list_tasks:
            return None
        
        return [
            TaskResponse(
                task_id = task.task_id,
                room_id=task.room_id,
                task_name=task.task_name,
                task_description=task.task_description,
                assigner_id=task.assigner_id,
                assignee_id=task.assignee_id,
                status=task.status,
                created_at=task.created_at,
                updated_at=task.updated_at
            )
            for task in list_tasks
    ]

    def update_task_status(self, task_id: str, status: str) -> TaskResponse:
        task = self.task_repository.update_task_status(task_id, status)
        if not task:
            return None

        return TaskResponse(
            task_id = task.task_id,
            room_id = task.room_id,
            task_name = task.task_name,
            task_description = task.task_description,
            assigner_id = task.assigner_id,
            assignee_id = task.assignee_id,
            status = task.status,
            created_at = task.created_at,
            updated_at = task.updated_at
        )

    
    def delete_task_by_id(self, task_id: str):
        return self.task_repository.delete_task(task_id)

