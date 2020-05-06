class Api::V1::QuotesController < ApplicationController
  def index
    quotes = Quote.order(id: :asc)
    render json: { quotes: quotes }
  end

  def create
    @quote = Quote.new(quote_params)
    if @quote.save
      render json: @quote, status: :created
    else
      render json: @quote.errors, status: :unprocessable_entity
    end
  end

  def show
    quote = Quote.last
    render json: quote
  end

  # def update 
  #   quote = Quote.find(params[:id])
  #   quote.update_attributes(quote_param)
  #   render json: todo
  # end

  # def destroy
  #   quote = Quote.find(params[:id])
  #   quote.destroy
  #   render json: { message: 'Quote Deleted' }
  # end

  private 

  def quote_params
    params.require(:quote).permit(:first_name, :last_name, :email, :number, :project_info)
  end
end
