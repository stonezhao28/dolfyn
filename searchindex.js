Search.setIndex({docnames:["about","api/dolfyn","api/dolfyn.adp","api/dolfyn.adv","api/dolfyn.data","api/dolfyn.example_data","api/dolfyn.io","api/dolfyn.nortek","api/dolfyn.nortek.rotate","api/dolfyn.rdi","api/dolfyn.tools","glossary","index","install","plotting-tools","usage","usage-specific"],envversion:53,filenames:["about.rst","api/dolfyn.rst","api/dolfyn.adp.rst","api/dolfyn.adv.rst","api/dolfyn.data.rst","api/dolfyn.example_data.rst","api/dolfyn.io.rst","api/dolfyn.nortek.rst","api/dolfyn.nortek.rotate.rst","api/dolfyn.rdi.rst","api/dolfyn.tools.rst","glossary.rst","index.rst","install.rst","plotting-tools.rst","usage.rst","usage-specific.rst"],objects:{"":{dolfyn:[1,0,0,"-"]},"dolfyn.OrderedSet":{OrderedSet:[1,1,1,""]},"dolfyn.OrderedSet.OrderedSet":{add:[1,2,1,""],discard:[1,2,1,""],pop:[1,2,1,""]},"dolfyn.adp":{api:[2,0,0,"-"],base:[2,0,0,"-"],clean:[2,0,0,"-"]},"dolfyn.adp.base":{adcp_binned:[2,1,1,""],adcp_raw:[2,1,1,""],binner:[2,1,1,""],diffz_first:[2,4,1,""]},"dolfyn.adp.base.adcp_binned":{inds:[2,3,1,""]},"dolfyn.adp.base.adcp_raw":{S2:[2,3,1,""],diff_style:[2,3,1,""],dudz:[2,3,1,""],dvdz:[2,3,1,""],dwdz:[2,3,1,""],z:[2,3,1,""],zd:[2,3,1,""]},"dolfyn.adp.base.binner":{__call__:[2,2,1,""],calc_stresses:[2,2,1,""],calc_ustar_fitstress:[2,2,1,""]},"dolfyn.adp.clean":{fillgaps_depth:[2,4,1,""],fillgaps_time:[2,4,1,""],find_surface:[2,4,1,""],medfilt_orientation:[2,4,1,""],nan_above_surface:[2,4,1,""],vel_exceeds_thresh:[2,4,1,""]},"dolfyn.adv":{api:[3,0,0,"-"],base:[3,0,0,"-"],clean:[3,0,0,"-"],motion:[3,0,0,"-"],turbulence:[3,0,0,"-"]},"dolfyn.adv.base":{ADVbinned:[3,1,1,""],ADVraw:[3,1,1,""]},"dolfyn.adv.clean":{GN2002:[3,4,1,""],cleanFill:[3,4,1,""],fillpoly:[3,4,1,""],rangeLimit:[3,4,1,""]},"dolfyn.adv.motion":{CalcMotion:[3,1,1,""],CorrectMotion:[3,1,1,""],correct_motion:[3,4,1,""],get_body2imu:[3,4,1,""]},"dolfyn.adv.motion.CalcMotion":{__call__:[3,2,1,""],calc_velacc:[3,2,1,""],calc_velrot:[3,2,1,""]},"dolfyn.adv.motion.CorrectMotion":{__call__:[3,2,1,""]},"dolfyn.adv.turbulence":{TurbBinner:[3,1,1,""],calc_turbulence:[3,4,1,""]},"dolfyn.adv.turbulence.TurbBinner":{__call__:[3,2,1,""],calc_Lint:[3,2,1,""],calc_epsilon_LT83:[3,2,1,""],calc_epsilon_SF:[3,2,1,""],calc_epsilon_TE01:[3,2,1,""],up_angle:[3,2,1,""]},"dolfyn.base":{BadDeterminantWarning:[1,5,1,""]},"dolfyn.data":{base:[4,0,0,"-"],binned:[4,0,0,"-"],spec:[4,0,0,"-"],time:[4,0,0,"-"],velocity:[4,0,0,"-"]},"dolfyn.data.base":{FreqData:[4,1,1,""],TimeData:[4,1,1,""],config:[4,1,1,""],data:[4,1,1,""],indent:[4,4,1,""]},"dolfyn.data.binned":{TimeBinner:[4,1,1,""]},"dolfyn.data.binned.TimeBinner":{"var":[4,2,1,""],calc_acov:[4,2,1,""],calc_lag:[4,2,1,""],calc_omega:[4,2,1,""],calc_xcov:[4,2,1,""],cohere:[4,2,1,""],cpsd:[4,2,1,""],demean:[4,2,1,""],detrend:[4,2,1,""],do_avg:[4,2,1,""],do_var:[4,2,1,""],mean:[4,2,1,""],mean_angle:[4,2,1,""],phase_angle:[4,2,1,""],psd:[4,2,1,""],reshape:[4,2,1,""],std:[4,2,1,""]},"dolfyn.data.spec":{cohereobj:[4,1,1,""],denoise_specobj:[4,4,1,""],ind_specobj:[4,4,1,""],mean_specobj:[4,4,1,""],specobj:[4,1,1,""],specobj_hz2rad:[4,4,1,""],specobj_rad2hz:[4,4,1,""]},"dolfyn.data.spec.specobj":{iter4axgroup:[4,2,1,""],iter_wd:[4,3,1,""],mean:[4,2,1,""],shape:[4,3,1,""],specvars:[4,3,1,""],trapz:[4,2,1,""]},"dolfyn.data.time":{date2num:[4,4,1,""],isotime2mpltime:[4,4,1,""],mpltime2matlab_datenum:[4,4,1,""],num2date:[4,4,1,""],time_array:[4,1,1,""]},"dolfyn.data.time.time_array":{datetime:[4,3,1,""],day:[4,3,1,""],hour:[4,3,1,""],matlab_datenum:[4,3,1,""],minmax:[4,2,1,""],minute:[4,3,1,""],month:[4,3,1,""],second:[4,3,1,""],year:[4,3,1,""]},"dolfyn.data.velocity":{VelBinner:[4,1,1,""],VelTkeData:[4,1,1,""],Velocity:[4,1,1,""]},"dolfyn.data.velocity.VelBinner":{calc_stress:[4,2,1,""],calc_tke:[4,2,1,""],calc_vel_cpsd:[4,2,1,""],calc_vel_psd:[4,2,1,""],do_cross_spec:[4,2,1,""],do_spec:[4,2,1,""],do_tke:[4,2,1,""]},"dolfyn.data.velocity.VelTkeData":{Ecoh:[4,3,1,""],I:[4,2,1,""],Itke:[4,2,1,""],rotate:[4,2,1,""],tau_is_pd:[4,2,1,""],tauij:[4,3,1,""],tke:[4,3,1,""],upup_:[4,3,1,""],upvp_:[4,3,1,""],upwp_:[4,3,1,""],vpvp_:[4,3,1,""],vpwp_:[4,3,1,""],wpwp_:[4,3,1,""]},"dolfyn.data.velocity.Velocity":{U:[4,3,1,""],U_angle:[4,3,1,""],U_mag:[4,3,1,""],calc_principal_angle:[4,2,1,""],has_imu:[4,3,1,""],make:[4,3,1,""],make_model:[4,3,1,""],model:[4,3,1,""],n_time:[4,3,1,""],principal_angle:[4,3,1,""],rotate:[4,2,1,""],shape:[4,3,1,""],u:[4,3,1,""],v:[4,3,1,""],w:[4,3,1,""]},"dolfyn.io":{api:[6,0,0,"-"],base:[6,0,0,"-"],hdf5:[6,0,0,"-"],main:[6,0,0,"-"],mat:[6,0,0,"-"],nortek2:[6,0,0,"-"],nortek2_defs:[6,0,0,"-"],nortek2lib:[6,0,0,"-"],nortek:[6,0,0,"-"],nortek_defs:[6,0,0,"-"],rdi:[6,0,0,"-"]},"dolfyn.io.api":{read:[6,4,1,""]},"dolfyn.io.base":{DataFactory:[6,1,1,""],VarAtts:[6,1,1,""],WrongFileType:[6,5,1,""]},"dolfyn.io.base.DataFactory":{closefile:[6,3,1,""],filename:[6,3,1,""]},"dolfyn.io.base.VarAtts":{sci_func:[6,2,1,""],shape:[6,2,1,""]},"dolfyn.io.hdf5":{is_pydicth5:[6,4,1,""],load:[6,4,1,""],pkl_loads:[6,4,1,""]},"dolfyn.io.mat":{Saver:[6,1,1,""]},"dolfyn.io.mat.Saver":{close:[6,2,1,""],ver:[6,3,1,""],write:[6,2,1,""]},"dolfyn.io.nortek":{NortekReader:[6,1,1,""],crop_data:[6,4,1,""],int2binarray:[6,4,1,""],read_nortek:[6,4,1,""],recatenate:[6,4,1,""]},"dolfyn.io.nortek.NortekReader":{checksum:[6,2,1,""],code_spacing:[6,2,1,""],dat2sci:[6,2,1,""],filesize:[6,3,1,""],findnext:[6,2,1,""],findnextid:[6,2,1,""],fun_map:[6,3,1,""],init_ADV:[6,2,1,""],init_AWAC:[6,2,1,""],pos:[6,3,1,""],rd_time:[6,2,1,""],read:[6,2,1,""],read_awac_profile:[6,2,1,""],read_head_cfg:[6,2,1,""],read_hw_cfg:[6,2,1,""],read_id:[6,2,1,""],read_microstrain:[6,2,1,""],read_user_cfg:[6,2,1,""],read_vec_checkdata:[6,2,1,""],read_vec_data:[6,2,1,""],read_vec_hdr:[6,2,1,""],read_vec_sysdata:[6,2,1,""],readfile:[6,2,1,""],readnext:[6,2,1,""],sci_awac_profile:[6,2,1,""],sci_microstrain:[6,2,1,""],sci_vec_data:[6,2,1,""],sci_vec_sysdata:[6,2,1,""]},"dolfyn.io.nortek2":{Ad2cpReader:[6,1,1,""],read_signature:[6,4,1,""],reduce:[6,4,1,""],reorg:[6,4,1,""],split_to_hdf:[6,4,1,""]},"dolfyn.io.nortek2.Ad2cpReader":{debug:[6,3,1,""],init_data:[6,2,1,""],read_burst:[6,2,1,""],read_filehead_config_string:[6,2,1,""],read_hdr:[6,2,1,""],read_string:[6,2,1,""],readfile:[6,2,1,""],reopen:[6,2,1,""],sci_data:[6,2,1,""]},"dolfyn.io.nortek2_defs":{BadCheckSum:[6,5,1,""],DataDef:[6,1,1,""],LinFunc:[6,1,1,""],calc_burst_struct:[6,4,1,""],get_group:[6,4,1,""],nans:[6,4,1,""]},"dolfyn.io.nortek2_defs.DataDef":{format:[6,3,1,""],init_data:[6,2,1,""],read2dict:[6,2,1,""],read:[6,2,1,""],read_into:[6,2,1,""],sci_data:[6,2,1,""]},"dolfyn.io.nortek2_defs.LinFunc":{__call__:[6,2,1,""]},"dolfyn.io.nortek2lib":{BitIndexer:[6,1,1,""],beams_cy_int2dict:[6,4,1,""],calc_config:[6,4,1,""],calc_time:[6,4,1,""],collapse:[6,4,1,""],create_index_slow:[6,4,1,""],get_index:[6,4,1,""],getbit:[6,4,1,""],headconfig_int2dict:[6,4,1,""],index2ens_pos:[6,4,1,""],isuniform:[6,4,1,""],reduce_by_average:[6,4,1,""],reduce_by_average_angle:[6,4,1,""],status2data:[6,4,1,""]},"dolfyn.io.nortek2lib.BitIndexer":{nbits:[6,3,1,""]},"dolfyn.io.rdi":{adcp_loader:[6,1,1,""],ensemble:[6,1,1,""],get:[6,4,1,""],get_size:[6,4,1,""],idata:[6,4,1,""],in_group:[6,4,1,""],pop:[6,4,1,""],read_rdi:[6,4,1,""],setd:[6,4,1,""],variable_setlist:[6,1,1,""]},"dolfyn.io.rdi.adcp_loader":{check_offset:[6,2,1,""],checkheader:[6,2,1,""],extrabytes:[6,3,1,""],finalize:[6,2,1,""],init_data:[6,2,1,""],load_data:[6,2,1,""],mean:[6,2,1,""],print_pos:[6,2,1,""],print_progress:[6,2,1,""],progress:[6,3,1,""],read_bottom:[6,2,1,""],read_buffer:[6,2,1,""],read_cfg:[6,2,1,""],read_cfgseg:[6,2,1,""],read_corr:[6,2,1,""],read_dat:[6,2,1,""],read_echo:[6,2,1,""],read_fixed:[6,2,1,""],read_hdr:[6,2,1,""],read_hdrseg:[6,2,1,""],read_nocode:[6,2,1,""],read_prcnt_gd:[6,2,1,""],read_status:[6,2,1,""],read_var:[6,2,1,""],read_vel:[6,2,1,""],read_vmdas:[6,2,1,""],read_winriver2:[6,2,1,""],read_winriver:[6,2,1,""],remove_end:[6,2,1,""],search_buffer:[6,2,1,""],skip_Nbyte:[6,2,1,""],skip_Ncol:[6,2,1,""],vars_read:[6,3,1,""]},"dolfyn.io.rdi.ensemble":{clean_data:[6,2,1,""],k:[6,3,1,""],n_avg:[6,3,1,""]},"dolfyn.main":{read_example:[1,4,1,""]},"dolfyn.nortek":{rotate:[8,0,0,"-"]},"dolfyn.nortek.rotate":{awac:[8,0,0,"-"],signature:[8,0,0,"-"],vector:[8,0,0,"-"]},"dolfyn.nortek.rotate.vector":{beam2inst:[8,4,1,""],earth2principal:[8,4,1,""],euler2orient:[8,4,1,""],inst2earth:[8,4,1,""],orient2euler:[8,4,1,""]},"dolfyn.rdi":{rotate:[9,0,0,"-"]},"dolfyn.rdi.rotate":{beam2inst:[9,4,1,""],calc_beam_rotmatrix:[9,4,1,""],inst2earth:[9,4,1,""],inst2earth_heading:[9,4,1,""]},"dolfyn.rotate":{rotate:[1,4,1,""]},"dolfyn.tools":{misc:[10,0,0,"-"],psd:[10,0,0,"-"],within:[10,4,1,""]},"dolfyn.tools.misc":{degN2cartDeg:[10,4,1,""],delta:[10,1,1,""],detrend:[10,4,1,""],fillgaps:[10,4,1,""],find:[10,4,1,""],group:[10,4,1,""],interpgaps:[10,4,1,""],medfiltnan:[10,4,1,""],nans:[10,4,1,""],nans_like:[10,4,1,""],slice1d_along_axis:[10,4,1,""]},"dolfyn.tools.misc.delta":{__call__:[10,2,1,""],abs:[10,2,1,""],shape:[10,3,1,""]},"dolfyn.tools.psd":{cohere:[10,4,1,""],cpsd:[10,4,1,""],cpsd_quasisync:[10,4,1,""],phase_angle:[10,4,1,""],psd:[10,4,1,""],psd_freq:[10,4,1,""]},"dolfyn.turbulence":{calc_epsilon_LT83:[1,4,1,""]},dolfyn:{OrderedSet:[1,0,0,"-"],adp:[2,0,0,"-"],adv:[3,0,0,"-"],base:[1,0,0,"-"],data:[4,0,0,"-"],example_data:[5,0,0,"-"],io:[6,0,0,"-"],main:[1,0,0,"-"],nortek:[7,0,0,"-"],rdi:[9,0,0,"-"],rotate:[1,0,0,"-"],tools:[10,0,0,"-"],turbulence:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"033hz":16,"03d":6,"03hz":16,"0x00":6,"0x04":6,"0x05":6,"0x07":6,"0x10":6,"0x11":6,"0x12":6,"0x20":6,"0x71":6,"0xa5":6,"1hz":16,"30mb":4,"30second":16,"32hz":15,"3dm":8,"6byte":6,"abstract":[4,6],"boolean":[3,10],"break":3,"byte":[6,8],"case":[4,16],"class":[1,2,3,4,6,10,15],"default":[1,2,3,4,6,8,9,10,15,16],"final":[6,15],"float":[3,4,10],"function":[2,3,4,6,8,9,10,13,15,16],"import":[3,4,15,16],"int":[3,4,6,10],"long":[3,15,16],"new":[1,4,6,13],"public":0,"return":[1,3,4,6,8,10,16],"true":[1,3,4,6,8,9,10,16],"var":[2,4],And:[3,15],For:[3,4,10,13,15,16],GPS:3,MKS:15,One:16,That:15,The:[1,2,3,4,6,8,9,10,12,13,16],Then:[3,15,16],There:3,These:[6,13,15,16],Use:[6,10],With:[1,3],__call__:[2,3,6,10],_search_num:6,_var:4,abc:1,abil:3,abl:13,about:[3,12,15],abov:[2,15,16],abs:10,absent:1,accel:3,accel_filtfreq:[3,16],acceler:3,acceleromet:16,accelst:3,access:[3,15],accord:[3,10],accur:3,accuraci:[3,16],ach:4,acoust:[3,12,15,16],actual:[4,10,13],ad2cp:[1,6],ad2cpread:6,adcp:[2,6,9,12],adcp_bin:2,adcp_load:6,adcp_raw:[2,6],adcpo:[2,9],add:[1,3,4,14],added:[3,4,10,16],addit:15,adjust:6,adp:[1,3,4,6,9,12,15],adp_raw:2,adpo:9,adv:[1,6,8,12],adv_data:6,adv_data_rotated2princip:[3,15],adv_raw:3,advanc:15,advantag:[4,16],advb:3,advbin:3,advo:[3,8],advr:3,advraw:[3,6,8,16],after:[3,13,16],align:15,all:[1,2,3,4,6,8,13,16],allow:16,along:[4,10,15],alreadi:3,also:[2,3,4,6,8,9,10,15,16],amount:[2,4],amp:15,amplifi:3,amplitud:15,analyz:15,ang:10,angl:[3,4,8,9,10,15],angn:10,angrt:[3,15],ani:[3,10,12,13,15,16],anoth:15,apd:2,api:[1,15,16],appar:4,append:6,appli:[2,9,10],applic:16,apply_over_ax:10,apply_over_axi:10,approach:[3,6,16],appropri:16,april:8,arbitrari:16,arg:[4,6,10],arm:16,around:[15,16],arr:[4,10],arr_shap:10,arrai:[1,3,4,6,8,10,15,16],array_lik:10,arrow:16,articl:16,assembl:16,assign:2,assum:[3,4,16],assumpt:3,attempt:6,attribut:[3,4,6,8,15,16],auto:[3,4,10],avail:[1,3,15],averag:[1,3,4,6,9,10,15],avg_data_object:4,avg_func:6,avm:3,avmot:3,awac:[1,6,7],awac_test01:1,awai:4,axes:[3,8,10,15],axi:[2,4,10],back:[3,9],bad:[2,3,4],badchecksum:6,baddeterminantwarn:1,band:16,base:[10,12,15,16],basic:[3,12,13],batt:15,batteri:15,beam1:15,beam1vel:2,beam2:15,beam2inst:[8,9],beam2vel:2,beam3vel:2,beam4vel:2,beam:[1,2,3,4,6,8,9,15],beamang:2,beamn:15,beams_cy_int2dict:6,beamvel:2,becaus:[3,13,16],becom:[1,3],been:[1,3,4,13,15,16],befor:13,begin:[4,6,10,15],behavior:10,being:6,below:15,benchfile01:1,benignus1969:10,best:4,between:[3,4,6,10,15],beyond:16,bia:[3,16],big:6,bin:[1,3],binari:[6,12,13,16],binner:[2,3,4,15],bit:6,bitindex:6,black:16,block:6,bodi:[3,16],body2head_rotmat:[3,16],body2head_vec:[3,16],bool:[1,3,4,6,8,9,10,15],both:10,bottom:[3,4],boxcar:10,buffer:6,bufsiz:6,build:13,burau:2,burst:6,burst_mode01:1,byt:6,byte_offset:6,c_sound:15,cabl:16,calc:10,calc_acov:[3,4],calc_beam_rotmatrix:9,calc_burst_struct:6,calc_config:6,calc_epsilon_lt83:[1,3],calc_epsilon_sf:3,calc_epsilon_te01:3,calc_lag:4,calc_lint:3,calc_omega:4,calc_principal_angl:[4,15],calc_stress:[2,4],calc_tim:6,calc_tk:4,calc_turbul:3,calc_ustar_fitstress:2,calc_vel_cpsd:4,calc_vel_psd:4,calc_velacc:3,calc_velrot:3,calc_xcov:4,calcmot:3,calcul:[1,2,3,4,6,8,9,10],call:[2,3,6,16],can:[3,4,6,10,13,15,16],cannot:16,cap:[3,16],cartesian:10,cast:6,caus:4,center:[3,10],challeng:3,chang:15,check:[6,8,9,13],check_offset:6,checkbox:16,checkhead:6,checksum:6,chelton:10,choos:16,chosen:4,chunk:3,citat:8,clean:[1,15],clean_data:6,cleanfil:3,clockwis:[10,15],clone:13,close:6,closefil:6,code:[6,13,15],code_spac:6,coh:4,coher:[4,10],cohereobj:4,collaps:6,collect:[1,13],com:13,combin:6,come:[4,13],command:[13,16],common:15,commun:8,complet:15,complex:[3,4,10],complimentari:[4,10],compon:[1,3,4],comput:[3,4,8,10],concav:9,condens:6,config:[4,6,9,15],configur:[6,9,15,16],confirm:13,conj:10,conjug:10,connect:[3,16],consid:[2,10],consist:10,construct:16,constructor:4,consult:13,contain:[3,4,6,8,9,15,16],contamin:[3,16],continu:10,continuo:10,control:4,convect:[1,3],convers:13,convert:[6,10],convex:9,coord:3,coord_si:[3,15],coord_sys_principal_ref:4,coordin:[1,3,4,6,8,9,12,16],copi:[1,4,10],copyright:0,corner:4,corr:15,corr_vel:3,correct:[3,12,15],correct_mot:[3,16],corrected_data:3,correctli:[13,16],correctmot:3,correl:[10,15],could:16,count:6,counter:[10,15],covari:[3,4,10],cpsd:[4,10],cpsd_quasisync:10,creat:[3,6,13,15,16],create_index_slow:6,credit:10,crop:6,crop_data:6,cropdata:6,cross:[4,10,15],cspec:4,current:[4,6,10,13],cyan:16,d_range_filt:2,dai:[4,6],dang:16,dat1:4,dat2:[4,15],dat2sci:6,dat:[1,2,3,4,6,15,16],dat_bin:[3,15],dat_bin_copi:[3,15],dat_earth:15,data:[1,2,3,6,8,9,10,12],data_group:6,data_object:4,datadef:6,datafactori:6,dataset:[3,15],date2num:4,datetim:4,datetime64:4,deal:4,debia:[3,4,10],debug:6,debug_level:6,decim:4,declin:16,default_v:6,defin:[3,10,15],definit:10,defualt:[3,10],deg:3,degn2cartdeg:10,degre:[3,4,6,8,9,10,15],deklerk:16,delta:10,demean:4,denoise_specobj:4,densiti:[4,10],depend:[4,10,12],deploy:[3,12],depth:[2,4,16],describ:16,descript:3,design:[12,16],despik:3,detail:[6,15,16],detect:2,determin:[1,6,15,16],detrend:[4,10],develop:13,deviat:[3,4],dflt_ax:4,dfrac:2,dict:[6,9,15,16],dictionari:[3,6,15,16],diff_styl:2,differ:[2,3,4,6,10,13,15],diffz_first:2,dim:[6,10],dim_nam:6,dimens:[3,4,6,10,15],dimension:10,dind:2,direct:[3,4,15,16],directli:[4,10,15],directori:[13,16],discard:1,disk:6,displai:15,dissip:[1,3],distanc:10,distort:16,divid:10,dlfn:15,do_avg:4,do_c:6,do_checksum:6,do_compress:6,do_cross_spec:4,do_spec:4,do_tk:4,do_var:4,document:[6,12,15,16],doe:[3,4,9,10,15],doesn:[3,15],dolfyn:[0,11,13,14,15,16],doppler:[3,12,15,16],down:4,download:12,download_loc:13,drift:[3,16],dtype:[3,6,10,15],dudz:2,due:3,dure:15,dvdz:2,dvel:16,dwdz:2,each:[3,4,6,13,15],earth2princip:[3,8,15],earth:[1,2,3,4,8,9,15],easier:15,east:[10,15,16],echo:[2,6],ecoh:4,effect:[9,16],either:[3,13,16],element:[1,4,6,10,16],elgar:3,empti:[1,6,10],enabl:16,encount:13,end:[3,4,6,10,16],endian:6,energi:[1,3,4,16],ens:6,ens_start:6,ens_stop:6,ensembl:[4,6,10],enter:15,entir:6,entri:[10,15],enu:16,env:15,environment:[6,15],epsilon:[1,3],equal:1,equat:3,equip:3,equival:10,err_vel:2,error:[3,15],essenti:10,estim:[3,16],etc:6,euler2ori:8,euler:8,even:10,everi:4,exampl:[1,4,10,13,14,15,16],example_data:[1,12],exce:2,exceed:2,except:[1,6],execut:13,exist:[2,13],expect:16,expens:3,explicitli:[6,10,16],extra:15,extrabyt:6,extrapflg:10,extrapol:10,facilit:15,fact:16,factor:6,factori:6,fairli:16,fall:[3,10],fals:[1,3,4,6,8,9,10,15],fast_psd:10,faster:10,featur:12,fetch:13,few:[13,15],fft:[3,4,10],field:[1,3,6],figur:16,file:[0,1,3,6,12,15,16],filenam:6,files:6,fill:[2,10],fillgap:10,fillgaps_depth:2,fillgaps_tim:2,fillpoli:3,filter:[2,3,10,16],find:[2,4,6,10],find_surfac:2,findnext:6,findnextid:6,first:[2,4,6,10,13,15],fit:[3,4],fix:[3,4,9,15,16],fixed_orient:9,flag:[3,9,16],float32:[6,15],float64:15,flow:[2,3,15],fluctuat:3,fname:6,fobj:6,folder:13,follow:[3,16],forc:[8,9],format:[3,4,6,15,16],formula:[1,3],forthcom:16,forward:9,found:[10,16],four:15,fraction:[2,4,10],frame:[3,8,9,15,16],framework:13,freebsd:0,freq:[3,10],freq_rng:3,freqdata:4,frequenc:[1,3,4,10,16],freqvar:4,from:[1,2,3,4,6,8,9,10,13,15,16],full:[4,10],fun_map:6,func:15,funciton:6,funni:10,further:6,futur:4,gap:[2,3,10],gener:[6,15],get:[6,13],get_body2imu:3,get_group:6,get_index:6,get_siz:6,getbit:6,git:13,github:13,given:10,glider:3,glossari:12,gn2002:[3,15],going:4,good:2,gore:[3,15],grab:6,greater:4,group:[6,10,12],gx3:8,h5py:[6,13],half:[4,10],han:[4,10],handl:[3,15],hann:[3,4,10],happi:16,hardwar:6,has:[1,3,4,8,9,10,13,15,16],has_imu:4,have:[3,4,10,13,15,16],hdf5:1,head:[2,3,8,9,15,16],headconfig_int2dict:6,heavili:6,here:[10,14,15],high:[3,6,16],histori:12,hit:[2,15],hold:[3,6],horizont:[3,4,15],hour:[4,6,15],hous:13,how:[13,15],howev:3,http:13,idata:6,identifi:16,ien:6,imag:16,implement:[3,4,10],implicitli:3,imu:[3,4,12,15],in_group:6,in_plac:10,includ:[4,6,12,13,15],incorpor:16,increas:2,ind:[2,4],ind_specobj:4,indat:[2,3,4],indent:4,independ:4,index2ens_po:6,index:[4,6,10,12],indic:[3,4,6,10,13,15,16],indiscern:16,inds_rang:[6,16],indt1:4,indt2:4,induc:3,inerti:[3,4,15,16],inf:[2,10],infil:6,info:[6,15],inform:[6,13,15,16],inher:16,inherit:15,init_adv:6,init_awac:6,init_data:6,initi:6,inplac:[1,4],input:[1,3,4,6,9,10,16],insid:10,inst2earth:[3,8,9,15,16],inst2earth_head:9,inst:[1,2,4,9,15],inst_mak:15,inst_model:15,inst_typ:15,instal:[12,16],instead:[4,6],instrument:[2,3,8,9,15],int2binarrai:6,integ:[4,10],integr:[1,3],intens:[3,4],interact:15,interest:3,interfac:6,interpgap:10,interpol:[3,10],invers:[8,9],is_pydicth5:6,isotime2mpltim:4,issu:[4,12,13],isuniform:6,item:3,iter4axgroup:4,iter:[1,3,8,10],iter_wd:4,iternum:6,itk:[3,4],itke_thresh:3,its:[4,15],januari:9,jgr:2,journal:16,jpo:[1,3],json:[6,16],jun:15,june:15,just:[4,6],kalman:3,keep:13,kei:[1,6,15,16],kellei:4,kernel:[2,10],kernel_s:2,keyerror:1,keyword:10,kilcher:[0,16],kilcher_etal_2016:16,kinemat:[1,3],kinet:[1,3,4],knowledg:3,known:[3,16],kwarg:[4,6,10],ky0:6,ky1:6,l_long:10,l_short:10,lab:16,lack:3,lag:[3,4],larg:[3,13],larger:16,last:[1,3,4,10,15],lat:16,later:[15,16],lead:[3,10],leader:6,least:10,left:4,len:3,length:[2,3,10],level:[3,4,6,10,15],levi:0,lfs:13,librari:[10,12,15],licens:12,like:[4,16],limit:13,linalg:10,line:[4,13,15,16],linear:[6,10],linearli:[3,10],linfunc:6,linger:13,lint:3,list:[3,4,6,8,10,15],list_of_def:6,littl:6,lkilcher:13,load:[3,6,13,15,16],load_data:6,locat:6,logic:3,lon:16,longer:10,look:13,loop:[6,10],low:[3,16],lower:[3,4],lstsq:10,lt83:[1,3],lumlei:[1,3],mac:13,made:10,magenta:16,magnet:16,magnitud:[1,3,4,10],mai:[3,10,13,15],main:12,major:16,make:[4,16],make_model:[3,4],mani:16,manual:[9,13],manufactur:15,map:3,mark:16,mask:[4,6],mask_thresh:4,mat:1,matlab:[6,16],matlab_datenum:4,matplotlib:[4,10,15],matrix:[3,4,8,9,16],max:4,maxgap:[2,10],maxim:[4,10],maximum:[2,4,10],mcalc:3,mean:[4,6,10,13],mean_angl:4,mean_specobj:4,measur:[2,3,4,12,15],medfilt:2,medfilt_orient:2,medfiltnan:10,median:[2,10],memori:3,meta:6,meter:[3,15],method:[3,6,10,15,16],microstrain:[6,8],might:16,min:4,min_length:10,minim:[4,10,13,16],minimum:[4,10],minmax:4,minut:[4,6],misc:1,mlab:10,mmload:3,mod:4,mode:6,model:[4,15],moder:13,modifi:[6,15],modul:[12,15],monosmith:2,month:[4,6],moor:[3,16],more:[3,10,15,16],most:15,mostli:[6,15],mot:3,motcorrect_vector:16,motcorrect_vectori:16,motion:[1,4,12,15],mount:[3,16],move:[3,4,16],mpl:10,mpltime2matlab_datenum:4,mpltime:[4,6,15],much:10,multi:10,multipl:[6,10,16],must:[2,3,4,16],mutableset:1,my_1d_funct:10,my_data_fil:[3,15],n_avg:6,n_bin1:4,n_bin2:4,n_bin:[2,3,4,15],n_cell:6,n_en:6,n_f:[1,3],n_fft:[2,3,4,15],n_fft_coh:[2,3,4],n_lastdim:6,n_pad:4,n_skip:6,n_time:[1,3,4],name:[1,3,4,6,15,16],nan:[2,3,4,6,10],nan_above_surfac:2,nanmedianfilt:2,nans_lik:10,nation:16,navg:6,nbit:6,nbt:6,nbyte:6,ncell:6,ndarrai:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],nearest:4,necessarili:15,need:[4,10,13,14,15],nen:[4,6],nens_per_fil:6,never:6,new_data:6,next:[4,6,15],nfft:10,nfilt:2,niel:4,nikora2002:3,nikora:[3,15],nline:6,nois:[3,4,10],non:[3,4],none:[1,2,3,4,6,8,10],noon:15,norm:4,normal:15,nortek2:1,nortek2_def:1,nortek2lib:1,nortek:[1,3,12,15,16],nortek_def:1,nortekread:6,north:[10,15,16],nose:13,nosetest:13,notch:16,note:[1,3,4,6,8,9,10,15,16],notori:3,now:[3,4,16],nping:6,npt:[3,4],num2dat:4,number:[3,4,6,10,16],numer:[2,6],numpi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],numpy_arrai:10,obj:[1,4,6],object:[1,2,3,4,6,8,9,10,15,16],objet:8,objout:[1,4],occur:[3,6],oceanograph:15,oceanographi:12,odd:2,offset:6,often:3,old_data:6,omega:[1,3,4],omega_rang:[1,3],omega_range_epsilon:3,onc:[4,13,16],one:[3,4,6,10,13,15,16],one_sid:4,oned_a:6,ones:10,onli:[4,6,8,10,15],onlin:4,onward:13,open:13,oper:[1,3,4,10,15],oppos:[4,16],opposit:3,option:[3,4,6,10],order:[4,13,16],orderedset:12,ordin:4,organ:[6,15],orient2eul:8,orient:[2,3,6,8,9,15,16],orientation_down:15,orientmat:[3,8],origin:3,orth:15,ortho:15,other:[3,6,13,15,16],otherwis:[6,16],out:[2,4,10,13],out_fram:[1,4],out_typ:[2,3],outdat:4,outfil:6,output:[4,6,10],outsid:3,over:[1,3,4,6,9,10],overlap:[4,10],overrid:4,overwrit:4,packag:[12,13,15,16],pad:4,page:[13,15],pair:16,paramet:[1,2,3,4,6,8,9,10,16],part:6,particular:[4,16],pass:[3,13,16],path:[6,15,16],pd0:[1,6],per:15,perform:[3,6,8,9,10,15,16],period:16,perspect:16,phase:[4,10],phase_angl:[4,10],ping:[6,15],pip:13,pitch:[2,8,15],pkl_load:6,place:[4,6],placehold:6,plan:16,plane:15,platform:16,pleas:[12,16],plot:12,point:[3,4,6,10,13,15],polyfit:3,polynomi:3,pop:[1,6,9],pos:6,posit:[3,6,10,15,16],possibl:[3,16],post:3,potenti:13,pow:10,power:[4,10],practic:3,pre:12,prefix:6,preserv:[1,3],pressur:[15,16],previou:4,primari:[3,6,15],princip:[1,3,4,8,15],principal_angl:[4,15],print:6,print_po:6,print_progress:6,prior:[3,4,8,9,13],probabl:13,probe:[3,16],problem:13,process:[3,12,15],produc:2,product:10,profil:[2,12,15],progress:6,prompt:13,prop:[3,4,8,9,15,16],properli:16,properti:[6,16],protocol:8,provid:[3,6,16],psd:[1,3,4],psd_freq:10,pull:13,purchas:16,purpos:6,pydicth5:4,python:[12,13,16],pythonxi:13,qualiti:15,quantiti:[4,16],quarter:4,rad:[1,3],radial:[3,4],radian:[4,9,15],rais:[1,6],random:[1,3],rang:[1,2,3,4,6,10,16],rangelimit:3,rate:[1,3,4,10,15],rather:16,ratio:4,raw:[3,4],raw_data_object:4,rawdat:4,rd_time:6,rdi:[1,12],rdi_test01:1,read2dict:6,read:[1,3,6,12,16],read_awac_profil:6,read_bottom:6,read_buff:6,read_burst:6,read_cfg:6,read_cfgseg:6,read_corr:6,read_dat:6,read_echo:6,read_exampl:1,read_filehead_config_str:6,read_fix:6,read_hdr:6,read_hdrseg:6,read_head_cfg:6,read_hw_cfg:6,read_id:6,read_into:6,read_microstrain:6,read_nocod:6,read_nortek:[3,6,15,16],read_prcnt_gd:6,read_rdi:6,read_signatur:6,read_statu:6,read_str:6,read_user_cfg:6,read_var:6,read_vec_checkdata:6,read_vec_data:6,read_vec_hdr:6,read_vec_sysdata:6,read_vel:6,read_vmda:6,read_winriv:6,read_winriver2:6,readbyt:6,reader:6,readfil:6,readnext:6,real:[3,10],reason:3,rebuild_index:6,recaten:6,recent:13,recogn:16,recommend:[13,16],record:[9,16],recov:3,reduc:6,reduce_by_averag:6,reduce_by_average_angl:6,refer:[2,3,15],region:10,reimplemnt:4,rel:[15,16],releas:0,reli:6,reload:[3,6,15],remov:[1,3,4,6,10,16],remove_end:6,renew:16,renois:4,reopen:6,reorg:6,repeat:6,repeatedli:10,replac:10,repo:13,report:16,repositori:[0,13],repres:8,request:12,requir:12,reshap:4,respect:[4,10,16],retval:6,rev:8,reveal:15,revers:[8,9],reynold:[2,3,4],right:4,rigidli:[3,16],rmat:4,rms:4,roll:[2,8,15],rotat:[3,4,6,7,12,16],rotate_u:4,rotate_var:[3,8,15],rotation:15,round:4,round_to:4,routin:[3,6,10],row:[6,15],run:[10,13],same:[4,6,10],sampl:[3,4,10,15],save:[3,6,12,16],save_mat:6,saveabl:6,saver:6,scale:[3,6],scale_func:6,sci_awac_profil:6,sci_data:6,sci_func:6,sci_microstrain:6,sci_vec_data:6,sci_vec_sysdata:6,scientif:6,scipi:[2,6,13],scope:16,screen:2,script:[13,16],search:[6,12],search_buff:6,searchcod:6,sec:10,second:[3,4,6,10,15],section:[10,15],see:[0,2,3,4,6,10,13,15,16],seem:3,segment:10,self:[2,4,6],semi:3,sens:15,sensor:[3,6,16],separ:3,separate_prob:3,seri:10,set:[2,3,4,6,9,10,15,16],setd:6,setup:13,sever:[4,13,15],shape:[3,4,6,10],shell:15,ship:[3,9],shorter:10,should:[3,4,6,10,15,16],show:15,shown:15,side:[3,4],sidelin:6,sigma_uh:3,sign:3,signal:[2,3,4,10,15,16],signatur:[1,6,7],similar:[13,15],simpl:[6,16],simpli:[4,13,15],simplifi:[6,10],singl:[3,6,8,10,16],site:16,size:[4,6,10,13,15],skip:[4,10],skip_nbyt:6,skip_ncol:6,slc:10,slice1d_along_axi:10,slice:[2,4,10],slide:15,slightli:16,slowli:[3,13],small:3,softwar:16,some:[3,4],someth:6,sound:15,sourc:[1,2,3,4,6,8,9,10,13,15],sourcedatatyp:4,space:6,spec:[1,3],special:16,specif:[6,15,16],specifi:[2,3,4,6,9,10,13,15,16],specobj:4,specobj_hz2rad:4,specobj_rad2hz:4,spectra:[3,4,10],spectral:[4,10],spectrum:[1,3,4],specvar:4,speed:[10,15],split:6,split_to_hdf:6,sqrt:4,squar:10,stacei:2,standard:[1,3,4,16],start:[3,6,8,15,16],start_file_num:6,stationari:[3,15],statist:3,statu:15,status2data:6,std:[4,10],stem:16,step:[4,10,15,16],still:[3,13],stop:6,store:[13,16],stream:15,streamlin:15,streamwis:15,stress:[2,3,4],string:[1,2,4,6,10],strng:6,struct:6,structur:[3,4,6,15,16],style:15,submit:[12,13],submodul:[7,12],subpackag:12,subset:13,subtract:3,suffix:4,suit:3,sum:[3,4],support:[6,9,10,15,16],sure:[13,16],surf:3,surfac:2,suu:3,suu_hz:3,svv:3,svv_hz:3,sww:3,sww_hz:3,sync:6,synchron:[3,10],syntax:15,sys:[3,15],system:[1,3,4,6,9,12,13,16],take:[4,6,9],taken:[8,9],talbert:16,tau_is_pd:4,tauij:4,te01:3,techniqu:3,teledyn:[9,12],temp:15,temperatur:15,terrai:[1,3],test:[3,4,12],text:[4,16],than:[3,4,6,9,10,15,16],thei:[2,16],them:[6,15],therefor:[3,10,16],theta:[3,9],thi:[1,2,3,4,6,8,9,10,13,15,16],thomson:16,those:[3,16],three:[1,3,4,15],thresh:[2,4,10],threshold:[2,3],tidal:2,tightli:[3,10],time:[1,3,6,15],time_arrai:[4,15],time_rang:6,timebinn:4,timedata:[4,15],timeseri:4,tint:3,tip:3,title_nam:6,tke:4,tke_vec:3,to_earth:3,to_hdf5:15,tool:[1,12,13,15],top:[4,6],track:3,transduc:16,transform:[3,9],translat:[3,15],translation:15,trapz:4,trend:[4,10],trowbridg:3,tupl:[6,10],turbbinn:[3,15],turbul:[4,12,16],turn:6,two:[3,4,10],type:[6,15],type_map:6,typeobj:4,u_angl:4,u_corr:3,u_inst:2,u_mag:[1,3,4],u_raw:3,uh_complex:3,uint8:15,umag:3,umot:3,unbias:10,uncorrect:3,under:[0,13],underli:15,undersea:3,underutil:10,uniform:6,unimodular:16,unit:[3,4,6,8,10,13,15,16],unitsdict:6,unstratifi:2,until:6,unus:6,up_angl:3,updat:[13,15],upon:3,upper:4,upup_:[3,4],upvp_:[3,4],upwp_:[3,4],usag:[6,15],use:[2,3,4,6,10,13,15,16],use_pitchrol:9,usec:6,used:[2,3,4,6,9,10,13,15,16],useful:15,user:[6,16],userdata:[6,16],userwarn:1,uses:[1,3,4,6,10,16],using:[3,13,15,16],usual:[3,9],util:[3,6,16],v_inst:2,val:[2,4,6,10],valid:10,valu:[1,2,3,4,6,9,10,15,16],varatt:6,vari:3,variabl:[2,3,4,6,8,15],variable_setlist:6,varianc:[1,2,3,4],variou:3,vars_read:6,vec:[1,3,6,15,16],vec_filenam:16,vec_sysdata:6,vector:[1,3,4,6,7,10,15,16],vector_data01:[1,3,15],vector_data_imu01:[1,16],vector_data_imu02:16,vel:[3,4,8,15],vel_exceeds_thresh:2,vel_filtfreq:3,velacc:3,velbinn:[2,3,4],veldat:[3,4],veloc:[1,2,3,9,15,16],velocimet:[3,12,15,16],velocitiesfrom:9,velraw:3,velrot:3,veltkedata:[2,3,4],ver:6,versa:8,version:13,via:[12,15],vice:8,view:[6,15],view_typ:6,vmda:6,vpvp_:[3,4],vpwp_:[3,4],w_inst:2,wahl2003:3,wai:[3,13,15],want:[10,13,15,16],warn:[1,6],wave:[1,3],wavenumb:[1,3],well:16,were:[3,6],whatev:10,when:[3,6,9,15,16],where:[1,2,3,4,10],whether:[2,3,4,6,9,10,15],which:[1,3,4,6,8,9,10,15,16],white:4,who:16,whole:9,width:[2,10],window:[3,4,10,13],winriver01:1,winriver02:1,wise:15,within:[6,10,15],work:[3,6,10,12,13],wpr:[1,6],wpwp_:[3,4],write:[6,16],wrongfiletyp:6,xcode:13,xyz:[3,16],year:[4,6],yellow:16,yes:9,yet:[3,8],you:[3,10,13,15,16],your:[13,15,16],zero:[3,4],zone:3},titles:["About","dolfyn package","dolfyn.adp package","dolfyn.adv package","dolfyn.data package","dolfyn.example_data package","dolfyn.io package","dolfyn.nortek package","dolfyn.nortek.rotate package","dolfyn.rdi package","dolfyn.tools package","Glossary","Welcome to the DOLfYN home page","Download and Install","Plotting Tools","The Basics","Motion Correcting ADV-IMU measurements"],titleterms:{The:15,about:0,adp:2,adv:[3,15,16],api:[2,3,6],awac:8,base:[1,2,3,4,6],basic:15,bin:4,clean:[2,3],content:[1,2,3,4,5,6,7,8,9,10,12],coordin:15,correct:16,data:[4,13,15,16],depend:13,deploy:16,dolfyn:[1,2,3,4,5,6,7,8,9,10,12],download:13,exampl:3,example_data:5,file:13,glossari:11,group:15,hdf5:6,histori:0,home:12,imu:16,indic:12,instal:13,licens:0,main:[1,6],mat:6,measur:16,misc:10,modul:[1,2,3,4,5,6,7,8,9,10],motion:[3,16],nortek2:6,nortek2_def:6,nortek2lib:6,nortek:[6,7,8],nortek_def:6,note:12,orderedset:1,packag:[1,2,3,4,5,6,7,8,9,10],page:12,plot:14,pre:16,process:16,psd:10,rdi:[6,9],read:15,requir:16,rotat:[1,8,9,15],save:15,signatur:8,spec:4,submodul:[1,2,3,4,6,8,9,10],subpackag:[1,7],system:15,tabl:12,test:13,time:4,tool:[10,14],turbul:[1,3],vector:8,veloc:4,welcom:12,work:15}})