from flask import Flask , request,jsonify
from AI import gen


from flask_cors import CORS

app = Flask(__name__)
CORS(app)




@app.get("/")
def index():
    return "this is Eventually AI backend api server"


def one_per_prompt(data):
    one_per = f'''
{data}
__________________________________________________

this is journal of mine from past 10 days in form of each day divided into multiple events can you tell me how to be 1% better today in personal life in me in 5 to 10 words and only give me the answer no other explanation on answer


act as a mentor and tell:
'''
    return one_per


def week_prompt(data):
    one_per = f'''
{data}
__________________________________________________

------------------------------------------------------------------------
this is journal of mine from past 7 days in form of each day divided into multiple events, please tell me summary on past week in 30 to 50 words , only give me the answer no other explanation on answer

and write it like if its your journal :
'''
    return one_per

@app.post("/api/ai")
def ai():
    type = request.form.get("type")
    data = request.form.get("data")
    if type == "1":
        data = one_per_prompt(data)
    if type == "2":
        data = week_prompt(data)
    rsp = gen(data)
    return jsonify({"data":rsp})



if __name__ == "__main__":

    app.run(debug=True)


