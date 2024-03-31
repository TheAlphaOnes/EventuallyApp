import google.generativeai as genai


from bs4 import BeautifulSoup
from markdown import markdown



key  =  open("mysite/key").read()
genai.configure(api_key=key)

generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 80,
}

model = genai.GenerativeModel(model_name="gemini-1.0-pro",
                              generation_config=generation_config,)

def gen(data):
    response = model.generate_content(data)

    html = markdown(response.text)
    soup = BeautifulSoup(html, features='html.parser')
    text = soup.get_text()
    return text
