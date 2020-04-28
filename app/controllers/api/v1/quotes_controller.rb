class Api::V1::QuotesController < ApplicationController
  def index
    quote = Quote.all.order(created_at: :desc)
    render json: quotes
  end

  def create
    quote = Quote.create(quote_params)
      render json: quote
  end

  def show
    if quote
      render json: quote
    else 
      render json: quote.errors
    end
  end

  def update 
    quote = Quote.find(params[:id])
    quote.update_attributes(quote_param)
    render json: todo
  end

  def destroy
    quote = Quote.find(params[:id])
    quote.destroy
    render json: { message: 'Quote Deleted' }
  end

  private 

  def quote_param
    params.permit(:first_name, :last_name, :email, :number, :project_info)
  end
end
