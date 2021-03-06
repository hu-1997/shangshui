/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-30 10:37:58
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-30 10:46:26
 */
export const originalUrl = 'http://122.51.80.50:8000/';   //服务器
// export const originalUrl = 'http://10.41.119.14:8000/';
// export const originalUrl = 'http://10.41.7.235:8000/';
// export const originalUrl = 'http://192.168.1.103:8000/';
// export const websocketConnect = 'ws://10.41.7.235:90/' 
export const websocketConnect = 'ws://122.51.80.50:90/' 
// export const websocketConnect = 'ws://192.168.1.113:90/' 

export const pumpInfoUrl = 'pump/';           //泵表
export const pumpPowerAccountUrl = 'app/pump_and_user/'     //获取该泵权限对应的用户
export const pumpActionDeleteUrl = 'pump_permission/'         //删除泵的操作者
export const addPumpActionUrl = 'pump_permission/'            //增加泵的操作者
export const unequipmentPimpUrl = 'app/get_unequipped_pump/'   //获取未使用的所有的泵

export const enginInfoUrl = 'main_engine/';

export const messageCUrl = 'client/';      //获得所有客户信息   创建新客户  删除  编辑
export const contactUrl = 'contact_people/';                //增加联系人  编辑  删除
export const ClientContactUrl = 'app/ClientContactPeople/';     //获取客户联系人信息

export const sensorInfoUrl = 'app/typemodel/';
export const sensorTypeUrl = 'app/sensor_type/';
export const sensorModelUrl = 'app/sensor_type_to_model/';
export const sensorCodeUrl = 'app/sensor_model_to_code/';
export const addSensorTypeUrl = 'sensor_type/';                 //增加传感器类型
export const addSensorModelUrl = 'sensor_model/';               //增加传感器模型
export const addSensorUrl = 'sensor/';                          //增加传感器
export const allEngineName = 'app/main_engine_code_and_name/'   //获取所有主机的名称和编号(状态)

export const epuipmentInfoUrl = 'app/equipment_to_engine_name/';  //设备的所有信息
export const sensorOfequipmentUrl = 'app/equipment_to_sensor3/';  //设备对应的传感器的路由   
export const pumpsOfequipmentUrl = 'app/get_equipped_pump/';        //设备对应的泵的路由     x
export const addEquipment = 'equipment/';                         //新增设备    
export const editEquipment = 'equipment/';                        //编辑设备
export const sensorequipmentUrl = 'app/deviceNum_to_typename/'    //通过设备编号获取传感器信息  好像没用了  x
export const allcationEquipmentUrl = '/equipment_allocation/'   //发送调拨单数据

export const equipmentConfiureUrl = 'app/equipment_configuration_retrieve/'      //获取设备配置记录     
export const equipmentAllocation = 'app/equipment_allocation_retrieve/'          //设备调配配置记录    
export const equipmentScrap = 'app/equipment_scrap_retrieve/'     //设备报废记录
export const backToFactory = '/app/equipment_allocate_factory/'   //调拨回厂

export const maintenanceUrl = 'app/operation/';
export const equipmentUrl = 'app/real_time_monitoring_high/'
export const equipMaintainUrl = 'app/maintenance/'              //设备维护记录
export const addEquipMaintainUrl = 'equipment_maintenance/'     //设备维护增加记录
export const sensorDataUrl = 'app/real_time_monitoring_down/'   //实时监测的传感器数据
export const device = 'app/deviceNum_to_typename/'             //设备对应的传感器
export const clientUrl = 'client/'                          //实时监测客户信息
export const waterRemindUrl = 'app/water_quality_notice/' //水质提醒记录
export const equipmentInfoUrl = 'app/equipment_detail/'   // 设备详情信息
export const equipmentCalibration = 'equipment_calibration/' //增加补偿值
export const CalibrationMark = 'app/sensor_calibration_retrieve/' //获得标定值记录
export const ClientWaterRemindUrl = 'app/water_notice_retrieve/' //客户端水质提醒记录数据
export const ClientWaterPutUrl = 'water_quality_notice/'  //处理水质记录
export const ScrapEquipmentUrl = 'equipment_scrap/'     //发送报废数据
export const loginUrl = 'app/login_in/'                 //登录账号
export const verifyUrl = 'app/verify/'                  //获得角色各种数据
export const autoControlUrl = '/auto_operation/'        //设备自动控制
export const operationRecordUrl = 'app/get_operation_log/' // 设备使用日志记录
export const getEquipmentPumsUrl = 'app/get_equipped_pump/' // 获得设备对应的泵信息
export const getRealTimeDataUrl = 'real_time_data/' // 获得实时传感器数据

export const role = 'role/'        //查看所有的角色
export const rolePower = 'app/role_power/'    //获取角色对应权限
export const accountPower = 'app/verify/'    //获取该账户对应权限
export const outLoginUrl = 'app/logout/'     //登出

export const user = 'user/'   //查看账户信息  增加 编辑 删除 

export const power = 'power/'      //查看所有的权限 

export const websocketUrl = '/app/websocket_relation/'

export const downLoadDataUrl = 'app/export_excel/'
