from flask import Flask, render_template, jsonify, request
app = Flask(__name__)



## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('start.html')

@app.route('/q1')
def q1():
    return render_template('q1.html')

@app.route('/q2')
def q2():
    return render_template('q2.html')

@app.route('/q3')
def q3():
    return render_template('q3.html')

@app.route('/q4')
def q4():
    return render_template('q4.html')

@app.route('/q5')
def q5():
    return render_template('q5.html')

@app.route('/q6')
def q6():
    return render_template('q6.html')

@app.route('/p0')
def p0():
    return render_template('p0.html')

@app.route('/p1')
def p1():
    return render_template('p1.html')

@app.route('/p2')
def p2():
    return render_template('p2.html')

@app.route('/p3')
def p3():
    return render_template('p3.html')

@app.route('/p4')
def p4():
    return render_template('p4.html')

@app.route('/p5')
def p5():
    return render_template('p5.html')

@app.route('/p6')
def p6():
    return render_template('p6.html')
    
@app.route('/p7')
def p7():
    return render_template('p7.html')

@app.route('/p8')
def p8():
    return render_template('p8.html')

@app.route('/p9')
def p9():
    return render_template('p9.html')

@app.route('/p10')
def p10():
    return render_template('p10.html')

@app.route('/p11')
def p11():
    return render_template('p11.html')







if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
