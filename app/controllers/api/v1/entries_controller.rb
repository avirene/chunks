class Api::V1::EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :edit, :update, :destroy]
  def index
    @entries = Entry.all
  end
  def show
  end
  def create
    @entry = current_user.entries.build(entry_params)
    if authorized?
      respond_to do |format|
        if @entry.save
          format.json { render :show, status: :created, location: api_v1_entry_path(@entry) }
        else
          format.json { render json: entry.errors, status: :unprocessable_entity }
        end
      end
    else
      handle_unauthorised
    end  
  end
  def update
  end
  def destroy
  end
  private
    def set_entry
      @entry = Entry.find(params[:id])
    end

    def entry_params
      params.require(:entry).permit(:word, :definition, :example)
    end
end
