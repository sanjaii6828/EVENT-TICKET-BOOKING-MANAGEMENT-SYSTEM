# Event Ticket Booking Management System

## Project Description

The Event Ticket Booking Management System is a web-based application developed using Python, Flask, and SQLite. It allows users to explore events, book tickets, view booking confirmations, and cancel bookings. Administrators can manage events, ticket availability, and booking records.

## Technologies Used

* Python
* Flask
* SQLite
* HTML
* CSS
* JavaScript

## Features

* Browse upcoming events
* Search and filter events
* View event details
* Book event tickets
* Generate booking confirmations
* View and cancel bookings
* Admin dashboard for event management
* Track ticket availability

## Installation and Setup

1. Clone or download the project.

2. Open the project folder in VS Code.

3. Install Flask:

   ```bash
   pip install flask
   ```

4. Run the application:

   ```bash
   python app.py
   ```

5. Open your browser and visit:

   `http://127.0.0.1:5000`

## Project Structure

```text
Event-Ticket-Booking/
├── app.py
├── events.db
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── events.html
│   ├── event_details.html
│   ├── booking.html
│   ├── confirmation.html
│   ├── my_bookings.html
│   └── admin.html
└── static/
    ├── style.css
    └── script.js
```

## Purpose

The main objective is to simplify event registration and ticket booking through a user-friendly web application.

## Future Enhancements

* Secure administrator login
* Online payment integration
* Email booking confirmations
* QR-code-based tickets
* Booking analytics and reports

## License

This project is developed for educational purposes.
