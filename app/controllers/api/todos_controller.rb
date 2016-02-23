class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all.reverse
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

  private
  def todo_params
    params.require(:todo).permit(:title)
  end
end
