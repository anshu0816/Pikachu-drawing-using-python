# Pikachu Drawing Using Python

I demonstrate how to draw Pikachu using Python’s Turtle module! 🐱‍💻🎨 This fun and creative coding project is great for beginners who want to explore graphics programming with Python.

## Introduction

This project leverages Python's `turtle` library to draw an illustration of Pikachu. The code defines various functions to draw different parts of Pikachu, including its eyes, mouth, cheeks, ears, and body. By running the script, you can see the drawing process unfold step by step.

## Prerequisites

Make sure you have the following software installed on your computer:
- Python (download from [python.org](https://www.python.org/))
- Turtle (included with Python's standard library)

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/anshu0816/Pikachu-drawing-using-python.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Pikachu-drawing-using-python
    ```

## Usage

To run the script and see the Pikachu drawing:
1. Execute the following command in your terminal:
    ```bash
    python pikachu.py
    ```

You will see the turtle graphics window open, and the drawing process will start. Sit back and enjoy as Pikachu comes to life on your screen!

## Functions

The code contains several functions to draw different parts of Pikachu. Here's a brief overview:

- **my_goto(x, y)**: Moves the turtle to the specified coordinates.
- **leftEye(x, y)**: Draws the left eye of Pikachu.
- **rightEye(x, y)**: Draws the right eye of Pikachu.
- **mouth(x, y)**: Draws Pikachu's mouth.
- **leftCheek(x, y)**: Draws Pikachu's left red cheek.
- **rightCheek(x, y)**: Draws Pikachu's right red cheek.
- **LeftEar(x, y)**: Draws Pikachu's left ear.
- **RightEar(x, y)**: Draws Pikachu's right ear.
- **body()**: Draws Pikachu's body outline and calls other functions to complete the drawing.
- **cap(x, y)**: Draws Pikachu's cap.

## Example Code

Here is an example of the main function that runs the drawing process:

```python
if __name__ == '__main__':
    # Window control
    screensize(800, 700, "#f0f0f0")
    screen = Screen()
    screen.setup(width=1.0, height=1.0)

    # Setting the pen size
    pensize(3)

    # Setting the speed
    speed(10)
    body()
    my_goto(250, -230)
    write("by jiya_06", font=("Arial", 15))
    mainloop()
```

## Contributors

- **jiya_06**: Initial drawing and coding.
- **Anshu Gaur**: Project setup and repository management.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify any parts to better suit your needs. If you need any more help, just let me know! 😊
