class Api::V1::EntriesController < ApplicationController
  before_action :set_todo_item, only: [:show, :edit, :update, :destroy]
  def index
    @entries = Entry.all
  end
  def show
  end
  def create
  end
  def update
  end
  def destroy
  end
  private
    def set_entry
      @entry = Entry.find(params[:id])
    end
end
