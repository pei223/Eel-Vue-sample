import eel

eel.init('view', allowed_extensions=['.js', '.html', '.css'])


@eel.expose  # Expose this function to Javascript
def print_hello_from_header():
    print("Hello from header")


@eel.expose
def on_button_clicked():
    print("Button clicked[Python]")
    eel.showAlert("Button clicked!")


eel.start('html/index.html', port=9999)
