class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :update, :destroy]

  def index
    @appointments = Appointment.order('appt_time ASC')
    render json: @appointments
  end

  def show
    render json: @appointment
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @appointment.destroy
      head :no_content, status: :ok
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private
    def appointment_params
      params.require(:appointment).permit(:title, :appt_time)
    end

    def set_appointment
      @appointment = Appointment.find(params[:id])
    end
end
