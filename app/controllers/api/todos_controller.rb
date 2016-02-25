class Api::TodosController < ApplicationController
  def index
    @todos = Todo.order('created_at DESC')
  end

  def create
    @todo = Todo.create(todo_params)
    render :show
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render :show
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render :show
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :done)
  end
end
