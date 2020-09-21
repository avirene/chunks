class EntriesController < ApplicationController
  def index
    @entries = Entry.all
  end

  def show
    @entry = Entry.find(params[:id])
  end
  
  def new
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(article_params)

    if @entry.save
      redirect_to @entry
    else
      render "new"
    end
  end

  private
    def article_params
      params.require(:entry).permit(:word, :definition, :example)
    end
end
