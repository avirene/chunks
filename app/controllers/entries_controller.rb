class EntriesController < ApplicationController
  def index
    @entries = Entry.all
  end
  
  def show
    @entry = Entry.find(params[:id])
  end
  
  def new
  end

  def create
    @entry = Entry.new(article_params)

    @entry.save
    redirect_to @entry
  end

  private
    def article_params
      params.require(:entry).permit(:word, :definition, :example)
    end
end
