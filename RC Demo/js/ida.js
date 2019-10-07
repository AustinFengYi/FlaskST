$(function(){
    csmapi.set_endpoint ('http://140.113.199.188:9999');
    var profile = {
      'dm_name': 'Austin_ping',          
	    'idf_list':[],
	    'odf_list':[austin_ping],
      'd_name': undefined,
    };

		
    var o_y = 0;
			
    function austin_ping(data){
      o_y = data[0];
      
      
			console.log(o_y);
      
    }
      
/*******************************************************************/                
    function ida_init(){
      	 console.log(profile.d_name);
    }
    var ida = {
        'ida_init': ida_init,
    }; 
    dai(profile,ida);     
});
