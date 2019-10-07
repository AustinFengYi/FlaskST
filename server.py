import atexit
import time
import threading
import logging

from flask import Flask
from flask import render_template, url_for
from flask import request


import DAN , random  


from config import env_config

app = Flask(__name__)

 
def on_exit():
    # DAN.deregister()
    return

@app.route('/') 
def main_page():
    return render_template('index.html')

@app.route('/<df>', methods=['POST'])
def get_push(df):
    data = request.json
    print(data)
    DAN.push (df, data)
    return '', 200
 

if '__main__' == __name__:
    DAN.profile = env_config.ctlboard_profile
    DAN.device_registration_with_retry(env_config.server_ip, env_config.mac_addr)

    atexit.register(on_exit)

    app.run(
        host=env_config.host,
        port=env_config.port,
        threaded=True,
        debug=True
    )


