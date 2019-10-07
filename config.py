import logging
 
class EnvironmentConfig(): 
    host = '0.0.0.0'
    port = 7789
    df_his_record_len = 200
    max_thresholds = 5 
    server_ip = 'https://test.iottalk.tw/'
    mac_addr = 'ThreeST'
    ctlboard_profile = {
        'd_name': 'ToggleRC',
        'dm_name': 'ThreeST',
        'u_name': 'yb',
        'is_sim': False,
        'df_list': ['toggle'],
    } 

env_config = EnvironmentConfig() 