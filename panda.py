import turtle as t

def draw_circle(color, radius, x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    t.color(color)
    t.begin_fill()
    t.circle(radius)
    t.end_fill()

def draw_panda():
    t.speed(15)
    
    # Draw head
    draw_circle("black", 100, 0, 50)
    draw_circle("white", 90, 0, 50)

    # Draw ears
    draw_circle("black", 30, -70, 200)
    draw_circle("black", 30, 70, 200)

    # Draw eyes
    draw_circle("black", 20, -35, 135)
    draw_circle("black", 20, 35, 135)
    draw_circle("white", 10, -35, 145)
    draw_circle("white", 10, 35, 145)

    # Draw nose
    draw_circle("black", 15, 0, 110)

    # Draw mouth
    t.penup()
    t.goto(-25, 100)
    t.pendown()
    t.right(90)
    t.circle(25, 180)
    t.penup()
    t.goto(25, 100)
    t.pendown()
    t.circle(25, -180)
    
    # Draw body
    draw_circle("black", 120, -100, -55)
    draw_circle("white", 110, -90, -50)

    # Draw arms
    draw_circle("black", 35, -90, 10)
    draw_circle("black", 35, 90, 10)

    # Draw legs
    draw_circle("black", 50, -70, -120)
    draw_circle("black", 50, 70, -120)

    t.hideturtle()

draw_panda()
t.done()
