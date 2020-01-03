import logging
 
class EnvironmentConfig(): 
    host = '0.0.0.0'
    port = 7789
    df_his_record_len = 200
    max_thresholds = 5 
    server_ip = 'http://140.113.199.183:9999'
    mac_addr = 'ThreeST'
    ctlboard_profile = {
        'd_name': 'CES_Panel',
        'dm_name': 'Toggle',
        'u_name': 'yb',
        'is_sim': False,
        'df_list': ['toggle1','toggle2','toggle3','toggle4','toggle5'],
    } 

env_config = EnvironmentConfig() 