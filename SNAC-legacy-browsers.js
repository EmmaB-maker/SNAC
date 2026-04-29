/************* 
 * Snac *
 *************/


// store info about the experiment session:
let expName = 'SNAC';  // from the Builder filename that created this script
let expInfo = {
    'Please keep this number!': `${util.pad(Number.parseFloat(util.randint(0, 999)).toFixed(0), 3)}`,
    'What letter were you given?': ["", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(start_pRoutineBegin());
flowScheduler.add(start_pRoutineEachFrame());
flowScheduler.add(start_pRoutineEnd());
flowScheduler.add(p_equationRoutineBegin());
flowScheduler.add(p_equationRoutineEachFrame());
flowScheduler.add(p_equationRoutineEnd());
flowScheduler.add(p_imageRoutineBegin());
flowScheduler.add(p_imageRoutineEachFrame());
flowScheduler.add(p_imageRoutineEnd());
flowScheduler.add(p_math_answerRoutineBegin());
flowScheduler.add(p_math_answerRoutineEachFrame());
flowScheduler.add(p_math_answerRoutineEnd());
flowScheduler.add(p_time_startRoutineBegin());
flowScheduler.add(p_time_startRoutineEachFrame());
flowScheduler.add(p_time_startRoutineEnd());
flowScheduler.add(p_time_endRoutineBegin());
flowScheduler.add(p_time_endRoutineEachFrame());
flowScheduler.add(p_time_endRoutineEnd());
flowScheduler.add(p_vastnessRoutineBegin());
flowScheduler.add(p_vastnessRoutineEachFrame());
flowScheduler.add(p_vastnessRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);









flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Please wait for one moment while we load the final forms.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Please wait for one moment while we load the final forms.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Beach 2.jpg', 'path': 'Beach 2.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'z.csv', 'path': 'z.csv'},
    {'name': 'y.csv', 'path': 'y.csv'},
    {'name': 'x.csv', 'path': 'x.csv'},
    {'name': 'w.csv', 'path': 'w.csv'},
    {'name': 'v.csv', 'path': 'v.csv'},
    {'name': 'u.csv', 'path': 'u.csv'},
    {'name': 't.csv', 'path': 't.csv'},
    {'name': 's.csv', 'path': 's.csv'},
    {'name': 'r.csv', 'path': 'r.csv'},
    {'name': 'q.csv', 'path': 'q.csv'},
    {'name': 'p.csv', 'path': 'p.csv'},
    {'name': 'o.csv', 'path': 'o.csv'},
    {'name': 'LANature/BotanicGardens_0836.JPG', 'path': 'LANature/BotanicGardens_0836.JPG'},
    {'name': 'LANature/BotanicGardens_0924.JPG', 'path': 'LANature/BotanicGardens_0924.JPG'},
    {'name': 'LANature/BotanicGardens_0941.JPG', 'path': 'LANature/BotanicGardens_0941.JPG'},
    {'name': 'LANature/BotanicGardens_0947.JPG', 'path': 'LANature/BotanicGardens_0947.JPG'},
    {'name': 'LANature/BotanicGardens_0997.JPG', 'path': 'LANature/BotanicGardens_0997.JPG'},
    {'name': 'LANature/GotG_0053.jpg', 'path': 'LANature/GotG_0053.jpg'},
    {'name': 'LANature/GotG_0060.jpg', 'path': 'LANature/GotG_0060.jpg'},
    {'name': 'LANature/GotG_0072.jpg', 'path': 'LANature/GotG_0072.jpg'},
    {'name': 'LANature/GotG_0084.jpg', 'path': 'LANature/GotG_0084.jpg'},
    {'name': 'LANature/GotG_0100.jpg', 'path': 'LANature/GotG_0100.jpg'},
    {'name': 'LANature/Hyalite_0093.JPG', 'path': 'LANature/Hyalite_0093.JPG'},
    {'name': 'LANature/Hyalite_0174.JPG', 'path': 'LANature/Hyalite_0174.JPG'},
    {'name': 'LANature/Hyalite_0180.JPG', 'path': 'LANature/Hyalite_0180.JPG'},
    {'name': 'LANature/Hyalite_0191.JPG', 'path': 'LANature/Hyalite_0191.JPG'},
    {'name': 'LANature/Hyalite_0213.JPG', 'path': 'LANature/Hyalite_0213.JPG'},
    {'name': 'LANature/Tarryall_0622.JPG', 'path': 'LANature/Tarryall_0622.JPG'},
    {'name': 'LANature/Vacation_1925.JPG', 'path': 'LANature/Vacation_1925.JPG'},
    {'name': 'LANature/Vacation_5781.JPG', 'path': 'LANature/Vacation_5781.JPG'},
    {'name': 'LANature/Vacation_7034.JPG', 'path': 'LANature/Vacation_7034.JPG'},
    {'name': 'LANature/Vacation_7074.JPG', 'path': 'LANature/Vacation_7074.JPG'},
    {'name': 'LANature/Vacation_7080.JPG', 'path': 'LANature/Vacation_7080.JPG'},
    {'name': 'LANature/Vacation_7082.JPG', 'path': 'LANature/Vacation_7082.JPG'},
    {'name': 'LANature/Vacation_7115.JPG', 'path': 'LANature/Vacation_7115.JPG'},
    {'name': 'LANature/Vacation_7919.JPG', 'path': 'LANature/Vacation_7919.JPG'},
    {'name': 'LANature/Vacation_7996.JPG', 'path': 'LANature/Vacation_7996.JPG'},
    {'name': 'LANature/Zoo_0075.JPG', 'path': 'LANature/Zoo_0075.JPG'},
    {'name': 'LANature/Zoo_0172.JPG', 'path': 'LANature/Zoo_0172.JPG'},
    {'name': 'LANature/Zoo_0176.JPG', 'path': 'LANature/Zoo_0176.JPG'},
    {'name': 'LANature/03L.jpg', 'path': 'LANature/03L.jpg'},
    {'name': 'LANature/04H.jpg', 'path': 'LANature/04H.jpg'},
    {'name': 'LANature/05H.jpg', 'path': 'LANature/05H.jpg'},
    {'name': 'LANature/06L.jpg', 'path': 'LANature/06L.jpg'},
    {'name': 'LANature/08H.jpg', 'path': 'LANature/08H.jpg'},
    {'name': 'LANature/09L.jpg', 'path': 'LANature/09L.jpg'},
    {'name': 'LANature/15H.jpg', 'path': 'LANature/15H.jpg'},
    {'name': 'LANature/15L.jpg', 'path': 'LANature/15L.jpg'},
    {'name': 'LANature/17H.jpg', 'path': 'LANature/17H.jpg'},
    {'name': 'LANature/20L.jpg', 'path': 'LANature/20L.jpg'},
    {'name': 'LANature/22H.jpg', 'path': 'LANature/22H.jpg'},
    {'name': 'LANature/23L.jpg', 'path': 'LANature/23L.jpg'},
    {'name': 'LANature/24L.jpg', 'path': 'LANature/24L.jpg'},
    {'name': 'LANature/25L.jpg', 'path': 'LANature/25L.jpg'},
    {'name': 'LANature/28L.jpg', 'path': 'LANature/28L.jpg'},
    {'name': 'LANature/29H.jpg', 'path': 'LANature/29H.jpg'},
    {'name': 'LANature/29L.jpg', 'path': 'LANature/29L.jpg'},
    {'name': 'LANature/31H.jpg', 'path': 'LANature/31H.jpg'},
    {'name': 'LANature/31L.jpg', 'path': 'LANature/31L.jpg'},
    {'name': 'LANature/34L.jpg', 'path': 'LANature/34L.jpg'},
    {'name': 'LANature/39H.jpg', 'path': 'LANature/39H.jpg'},
    {'name': 'LANature/Aquarium_0261.JPG', 'path': 'LANature/Aquarium_0261.JPG'},
    {'name': 'LANature/Aquarium_0325.JPG', 'path': 'LANature/Aquarium_0325.JPG'},
    {'name': 'LANature/Aquarium_0343.JPG', 'path': 'LANature/Aquarium_0343.JPG'},
    {'name': 'LANature/Aquarium_0442.JPG', 'path': 'LANature/Aquarium_0442.JPG'},
    {'name': 'LANature/Aquarium_0450.JPG', 'path': 'LANature/Aquarium_0450.JPG'},
    {'name': 'LANature/Aquarium_0465.JPG', 'path': 'LANature/Aquarium_0465.JPG'},
    {'name': 'LANature/Aquarium_0605.JPG', 'path': 'LANature/Aquarium_0605.JPG'},
    {'name': 'LANature/Aquarium_0632.JPG', 'path': 'LANature/Aquarium_0632.JPG'},
    {'name': 'LANature/Aquarium_0660.JPG', 'path': 'LANature/Aquarium_0660.JPG'},
    {'name': 'LANature/BotanicGardens_0176.JPG', 'path': 'LANature/BotanicGardens_0176.JPG'},
    {'name': 'LANature/BotanicGardens_0497.JPG', 'path': 'LANature/BotanicGardens_0497.JPG'},
    {'name': 'HAUrban/16thStreetMall_0760.JPG', 'path': 'HAUrban/16thStreetMall_0760.JPG'},
    {'name': 'HAUrban/Billings_0243.JPG', 'path': 'HAUrban/Billings_0243.JPG'},
    {'name': 'HAUrban/Billings_0250.JPG', 'path': 'HAUrban/Billings_0250.JPG'},
    {'name': 'HAUrban/Billings_0270.JPG', 'path': 'HAUrban/Billings_0270.JPG'},
    {'name': 'HAUrban/Billings_0277.JPG', 'path': 'HAUrban/Billings_0277.JPG'},
    {'name': 'HAUrban/Billings_0285.JPG', 'path': 'HAUrban/Billings_0285.JPG'},
    {'name': 'HAUrban/Billings_0295.JPG', 'path': 'HAUrban/Billings_0295.JPG'},
    {'name': 'HAUrban/Billings_0299.JPG', 'path': 'HAUrban/Billings_0299.JPG'},
    {'name': 'HAUrban/Billings_0306.JPG', 'path': 'HAUrban/Billings_0306.JPG'},
    {'name': 'HAUrban/Billings_0309.JPG', 'path': 'HAUrban/Billings_0309.JPG'},
    {'name': 'HAUrban/Billings_0310.JPG', 'path': 'HAUrban/Billings_0310.JPG'},
    {'name': 'HAUrban/Billings_0313.JPG', 'path': 'HAUrban/Billings_0313.JPG'},
    {'name': 'HAUrban/Bozeman_0049.JPG', 'path': 'HAUrban/Bozeman_0049.JPG'},
    {'name': 'HAUrban/CO_Blvrd_3.jpg', 'path': 'HAUrban/CO_Blvrd_3.jpg'},
    {'name': 'HAUrban/CO_Blvrd_4.jpg', 'path': 'HAUrban/CO_Blvrd_4.jpg'},
    {'name': 'HAUrban/CO_Blvrd_8.jpg', 'path': 'HAUrban/CO_Blvrd_8.jpg'},
    {'name': 'HAUrban/CO_Blvrd_9.jpg', 'path': 'HAUrban/CO_Blvrd_9.jpg'},
    {'name': 'HAUrban/CO_Blvrd_11.jpg', 'path': 'HAUrban/CO_Blvrd_11.jpg'},
    {'name': 'HAUrban/CO_Blvrd_12.jpg', 'path': 'HAUrban/CO_Blvrd_12.jpg'},
    {'name': 'HAUrban/CO_Blvrd_14.jpg', 'path': 'HAUrban/CO_Blvrd_14.jpg'},
    {'name': 'HAUrban/CO_Blvrd_21.jpg', 'path': 'HAUrban/CO_Blvrd_21.jpg'},
    {'name': 'HAUrban/CO_Blvrd_22.jpg', 'path': 'HAUrban/CO_Blvrd_22.jpg'},
    {'name': 'HAUrban/CO_Blvrd_23.jpg', 'path': 'HAUrban/CO_Blvrd_23.jpg'},
    {'name': 'HAUrban/CO_Blvrd_28.jpg', 'path': 'HAUrban/CO_Blvrd_28.jpg'},
    {'name': 'HAUrban/CO_Blvrd_38.jpg', 'path': 'HAUrban/CO_Blvrd_38.jpg'},
    {'name': 'HAUrban/CO_Blvrd_41.jpg', 'path': 'HAUrban/CO_Blvrd_41.jpg'},
    {'name': 'HAUrban/Downtown_0304.jpg', 'path': 'HAUrban/Downtown_0304.jpg'},
    {'name': 'HAUrban/Downtown_0306.jpg', 'path': 'HAUrban/Downtown_0306.jpg'},
    {'name': 'HAUrban/Downtown_0317.jpg', 'path': 'HAUrban/Downtown_0317.jpg'},
    {'name': 'HAUrban/Downtown_0324.jpg', 'path': 'HAUrban/Downtown_0324.jpg'},
    {'name': 'HAUrban/Downtown_0330.jpg', 'path': 'HAUrban/Downtown_0330.jpg'},
    {'name': 'HAUrban/Downtown_0341.jpg', 'path': 'HAUrban/Downtown_0341.jpg'},
    {'name': 'HAUrban/Downtown_0344.jpg', 'path': 'HAUrban/Downtown_0344.jpg'},
    {'name': 'HAUrban/Downtown_0345.jpg', 'path': 'HAUrban/Downtown_0345.jpg'},
    {'name': 'HAUrban/Downtown_0346.jpg', 'path': 'HAUrban/Downtown_0346.jpg'},
    {'name': 'HAUrban/Downtown_0351.jpg', 'path': 'HAUrban/Downtown_0351.jpg'},
    {'name': 'HAUrban/Downtown_0353.jpg', 'path': 'HAUrban/Downtown_0353.jpg'},
    {'name': 'HAUrban/Downtown_0354.jpg', 'path': 'HAUrban/Downtown_0354.jpg'},
    {'name': 'HAUrban/Downtown_0387.jpg', 'path': 'HAUrban/Downtown_0387.jpg'},
    {'name': 'HAUrban/Downtown_0392.jpg', 'path': 'HAUrban/Downtown_0392.jpg'},
    {'name': 'HAUrban/DTC_12.jpg', 'path': 'HAUrban/DTC_12.jpg'},
    {'name': 'HAUrban/DTC_13.jpg', 'path': 'HAUrban/DTC_13.jpg'},
    {'name': 'HAUrban/DTC_32.jpg', 'path': 'HAUrban/DTC_32.jpg'},
    {'name': 'HAUrban/DTC_47.jpg', 'path': 'HAUrban/DTC_47.jpg'},
    {'name': 'HAUrban/DU_19.jpg', 'path': 'HAUrban/DU_19.jpg'},
    {'name': 'HAUrban/DU_20.jpg', 'path': 'HAUrban/DU_20.jpg'},
    {'name': 'HAUrban/DU_24.jpg', 'path': 'HAUrban/DU_24.jpg'},
    {'name': 'HAUrban/DU_38.jpg', 'path': 'HAUrban/DU_38.jpg'},
    {'name': 'HAUrban/DU_43.jpg', 'path': 'HAUrban/DU_43.jpg'},
    {'name': 'HAUrban/Golden_40.jpg', 'path': 'HAUrban/Golden_40.jpg'},
    {'name': 'HAUrban/Golden_47.jpg', 'path': 'HAUrban/Golden_47.jpg'},
    {'name': 'HAUrban/Golden_62.jpg', 'path': 'HAUrban/Golden_62.jpg'},
    {'name': 'HAUrban/Golden_64.jpg', 'path': 'HAUrban/Golden_64.jpg'},
    {'name': 'HAUrban/Golden_71.jpg', 'path': 'HAUrban/Golden_71.jpg'},
    {'name': 'HAUrban/Golden_77.jpg', 'path': 'HAUrban/Golden_77.jpg'},
    {'name': 'HAUrban/Golden_78.jpg', 'path': 'HAUrban/Golden_78.jpg'},
    {'name': 'HAUrban/Urban_Berman_15.jpg', 'path': 'HAUrban/Urban_Berman_15.jpg'},
    {'name': 'HAUrban/Urban_Berman_19.jpg', 'path': 'HAUrban/Urban_Berman_19.jpg'},
    {'name': 'HAUrban/Urban_Berman_24.jpg', 'path': 'HAUrban/Urban_Berman_24.jpg'},
    {'name': 'HAUrban/Urban_Berman_32.jpg', 'path': 'HAUrban/Urban_Berman_32.jpg'},
    {'name': 'LAUrban/16thStreetMall_0740.JPG', 'path': 'LAUrban/16thStreetMall_0740.JPG'},
    {'name': 'LAUrban/16thStreetMall_0744.JPG', 'path': 'LAUrban/16thStreetMall_0744.JPG'},
    {'name': 'LAUrban/16thStreetMall_0756.JPG', 'path': 'LAUrban/16thStreetMall_0756.JPG'},
    {'name': 'LAUrban/16thStreetMall_0765.JPG', 'path': 'LAUrban/16thStreetMall_0765.JPG'},
    {'name': 'LAUrban/16thStreetMall_0771.JPG', 'path': 'LAUrban/16thStreetMall_0771.JPG'},
    {'name': 'LAUrban/16thStreetMall_0782.JPG', 'path': 'LAUrban/16thStreetMall_0782.JPG'},
    {'name': 'LAUrban/16thStreetMall_0795.JPG', 'path': 'LAUrban/16thStreetMall_0795.JPG'},
    {'name': 'LAUrban/16thStreetMall_0806.JPG', 'path': 'LAUrban/16thStreetMall_0806.JPG'},
    {'name': 'LAUrban/16thStreetMall_0813.JPG', 'path': 'LAUrban/16thStreetMall_0813.JPG'},
    {'name': 'LAUrban/16thStreetMall_0838.JPG', 'path': 'LAUrban/16thStreetMall_0838.JPG'},
    {'name': 'LAUrban/Billings_0266.JPG', 'path': 'LAUrban/Billings_0266.JPG'},
    {'name': 'LAUrban/Billings_0274.JPG', 'path': 'LAUrban/Billings_0274.JPG'},
    {'name': 'LAUrban/Billings_0276.JPG', 'path': 'LAUrban/Billings_0276.JPG'},
    {'name': 'LAUrban/Billings_0280.JPG', 'path': 'LAUrban/Billings_0280.JPG'},
    {'name': 'LAUrban/Billings_0286.JPG', 'path': 'LAUrban/Billings_0286.JPG'},
    {'name': 'LAUrban/Billings_0290.JPG', 'path': 'LAUrban/Billings_0290.JPG'},
    {'name': 'LAUrban/Billings_0317.JPG', 'path': 'LAUrban/Billings_0317.JPG'},
    {'name': 'LAUrban/Bozeman_0005.JPG', 'path': 'LAUrban/Bozeman_0005.JPG'},
    {'name': 'LAUrban/Bozeman_0008.JPG', 'path': 'LAUrban/Bozeman_0008.JPG'},
    {'name': 'LAUrban/Bozeman_0012.JPG', 'path': 'LAUrban/Bozeman_0012.JPG'},
    {'name': 'LAUrban/Bozeman_0038.JPG', 'path': 'LAUrban/Bozeman_0038.JPG'},
    {'name': 'LAUrban/Bozeman_0044.JPG', 'path': 'LAUrban/Bozeman_0044.JPG'},
    {'name': 'LAUrban/CO_Blvrd_40.jpg', 'path': 'LAUrban/CO_Blvrd_40.jpg'},
    {'name': 'LAUrban/Downtown_0299.jpg', 'path': 'LAUrban/Downtown_0299.jpg'},
    {'name': 'LAUrban/Downtown_0348.jpg', 'path': 'LAUrban/Downtown_0348.jpg'},
    {'name': 'LAUrban/Downtown_0367.jpg', 'path': 'LAUrban/Downtown_0367.jpg'},
    {'name': 'LAUrban/Downtown_0371.jpg', 'path': 'LAUrban/Downtown_0371.jpg'},
    {'name': 'LAUrban/Downtown_0381.jpg', 'path': 'LAUrban/Downtown_0381.jpg'},
    {'name': 'LAUrban/Downtown_0390.jpg', 'path': 'LAUrban/Downtown_0390.jpg'},
    {'name': 'LAUrban/DTC_1.jpg', 'path': 'LAUrban/DTC_1.jpg'},
    {'name': 'LAUrban/DTC_19.jpg', 'path': 'LAUrban/DTC_19.jpg'},
    {'name': 'LAUrban/DTC_21.jpg', 'path': 'LAUrban/DTC_21.jpg'},
    {'name': 'LAUrban/DTC_41.jpg', 'path': 'LAUrban/DTC_41.jpg'},
    {'name': 'LAUrban/DTC_50.jpg', 'path': 'LAUrban/DTC_50.jpg'},
    {'name': 'LAUrban/DU_17.jpg', 'path': 'LAUrban/DU_17.jpg'},
    {'name': 'LAUrban/DU_18.jpg', 'path': 'LAUrban/DU_18.jpg'},
    {'name': 'LAUrban/DU_23.jpg', 'path': 'LAUrban/DU_23.jpg'},
    {'name': 'LAUrban/DU_35.jpg', 'path': 'LAUrban/DU_35.jpg'},
    {'name': 'LAUrban/Golden_18.jpg', 'path': 'LAUrban/Golden_18.jpg'},
    {'name': 'LAUrban/Golden_24.jpg', 'path': 'LAUrban/Golden_24.jpg'},
    {'name': 'LAUrban/Golden_30.jpg', 'path': 'LAUrban/Golden_30.jpg'},
    {'name': 'LAUrban/Golden_33.jpg', 'path': 'LAUrban/Golden_33.jpg'},
    {'name': 'LAUrban/Golden_48.jpg', 'path': 'LAUrban/Golden_48.jpg'},
    {'name': 'LAUrban/Golden_49.jpg', 'path': 'LAUrban/Golden_49.jpg'},
    {'name': 'LAUrban/Golden_55.jpg', 'path': 'LAUrban/Golden_55.jpg'},
    {'name': 'LAUrban/Golden_59.jpg', 'path': 'LAUrban/Golden_59.jpg'},
    {'name': 'LAUrban/Golden_65.jpg', 'path': 'LAUrban/Golden_65.jpg'},
    {'name': 'LAUrban/Urban_Berman_06.jpg', 'path': 'LAUrban/Urban_Berman_06.jpg'},
    {'name': 'LAUrban/Urban_Berman_25.jpg', 'path': 'LAUrban/Urban_Berman_25.jpg'},
    {'name': 'LAUrban/Urban_Berman_27.jpg', 'path': 'LAUrban/Urban_Berman_27.jpg'},
    {'name': 'LAUrban/Urban_Berman_35.jpg', 'path': 'LAUrban/Urban_Berman_35.jpg'},
    {'name': 'LAUrban/Urban_Berman_37.jpg', 'path': 'LAUrban/Urban_Berman_37.jpg'},
    {'name': 'LAUrban/Urban_Berman_40.jpg', 'path': 'LAUrban/Urban_Berman_40.jpg'},
    {'name': 'LAUrban/Vacation_5018.JPG', 'path': 'LAUrban/Vacation_5018.JPG'},
    {'name': 'LAUrban/Vacation_5135.JPG', 'path': 'LAUrban/Vacation_5135.JPG'},
    {'name': 'LAUrban/Vacation_8420.JPG', 'path': 'LAUrban/Vacation_8420.JPG'},
    {'name': 'LAUrban/Vacation_8448.JPG', 'path': 'LAUrban/Vacation_8448.JPG'},
    {'name': 'LAUrban/Vacation_8493.JPG', 'path': 'LAUrban/Vacation_8493.JPG'},
    {'name': 'LAUrban/Vacation_8585.JPG', 'path': 'LAUrban/Vacation_8585.JPG'},
    {'name': 'LAUrban/Vacation_8664.JPG', 'path': 'LAUrban/Vacation_8664.JPG'},
    {'name': 'HANature/Berman_Nature__17.jpg', 'path': 'HANature/Berman_Nature__17.jpg'},
    {'name': 'HANature/Berman_Nature__19.jpg', 'path': 'HANature/Berman_Nature__19.jpg'},
    {'name': 'HANature/Berman_Nature__32.jpg', 'path': 'HANature/Berman_Nature__32.jpg'},
    {'name': 'HANature/Berman_Nature__34.jpg', 'path': 'HANature/Berman_Nature__34.jpg'},
    {'name': 'HANature/Berman_Nature__36.jpg', 'path': 'HANature/Berman_Nature__36.jpg'},
    {'name': 'HANature/Berman_Nature__41.jpg', 'path': 'HANature/Berman_Nature__41.jpg'},
    {'name': 'HANature/Berman_Nature__43.jpg', 'path': 'HANature/Berman_Nature__43.jpg'},
    {'name': 'HANature/Berman_Nature__45.jpg', 'path': 'HANature/Berman_Nature__45.jpg'},
    {'name': 'HANature/Berman_Nature__46.jpg', 'path': 'HANature/Berman_Nature__46.jpg'},
    {'name': 'HANature/Berman_Nature__49.jpg', 'path': 'HANature/Berman_Nature__49.jpg'},
    {'name': 'HANature/BotanicGardens_0043.JPG', 'path': 'HANature/BotanicGardens_0043.JPG'},
    {'name': 'HANature/BotanicGardens_0044.JPG', 'path': 'HANature/BotanicGardens_0044.JPG'},
    {'name': 'HANature/BotanicGardens_0059.JPG', 'path': 'HANature/BotanicGardens_0059.JPG'},
    {'name': 'HANature/BotanicGardens_0893.JPG', 'path': 'HANature/BotanicGardens_0893.JPG'},
    {'name': 'HANature/Castlewood_Canyon_6.jpg', 'path': 'HANature/Castlewood_Canyon_6.jpg'},
    {'name': 'HANature/Hyalite_0084.JPG', 'path': 'HANature/Hyalite_0084.JPG'},
    {'name': 'HANature/Hyalite_0141.JPG', 'path': 'HANature/Hyalite_0141.JPG'},
    {'name': 'HANature/Hyalite_0159.JPG', 'path': 'HANature/Hyalite_0159.JPG'},
    {'name': 'HANature/Hyalite_0218.JPG', 'path': 'HANature/Hyalite_0218.JPG'},
    {'name': 'HANature/Hyalite_0222.JPG', 'path': 'HANature/Hyalite_0222.JPG'},
    {'name': 'HANature/Hyalite_0229.JPG', 'path': 'HANature/Hyalite_0229.JPG'},
    {'name': 'HANature/Hyalite_0230.JPG', 'path': 'HANature/Hyalite_0230.JPG'},
    {'name': 'HANature/Hyalite_0231.JPG', 'path': 'HANature/Hyalite_0231.JPG'},
    {'name': 'HANature/Hyalite_0236.JPG', 'path': 'HANature/Hyalite_0236.JPG'},
    {'name': 'HANature/Hyalite_0237.JPG', 'path': 'HANature/Hyalite_0237.JPG'},
    {'name': 'HANature/Hyalite_0238.JPG', 'path': 'HANature/Hyalite_0238.JPG'},
    {'name': 'HANature/Hyalite_0239.JPG', 'path': 'HANature/Hyalite_0239.JPG'},
    {'name': 'HANature/Practice.jpg', 'path': 'HANature/Practice.jpg'},
    {'name': 'HANature/Ranch_1.jpeg', 'path': 'HANature/Ranch_1.jpeg'},
    {'name': 'HANature/Ranch_4.jpeg', 'path': 'HANature/Ranch_4.jpeg'},
    {'name': 'HANature/Ranch_5.jpeg', 'path': 'HANature/Ranch_5.jpeg'},
    {'name': 'HANature/Tarryall_0607.JPG', 'path': 'HANature/Tarryall_0607.JPG'},
    {'name': 'HANature/Tarryall_0613.JPG', 'path': 'HANature/Tarryall_0613.JPG'},
    {'name': 'HANature/Tarryall_0618.JPG', 'path': 'HANature/Tarryall_0618.JPG'},
    {'name': 'HANature/Tarryall_0620.JPG', 'path': 'HANature/Tarryall_0620.JPG'},
    {'name': 'HANature/Vacation_0924.JPG', 'path': 'HANature/Vacation_0924.JPG'},
    {'name': 'HANature/Vacation_1443.JPG', 'path': 'HANature/Vacation_1443.JPG'},
    {'name': 'HANature/Vacation_1449.JPG', 'path': 'HANature/Vacation_1449.JPG'},
    {'name': 'HANature/Vacation_2692.JPG', 'path': 'HANature/Vacation_2692.JPG'},
    {'name': 'HANature/Vacation_2695.JPG', 'path': 'HANature/Vacation_2695.JPG'},
    {'name': 'HANature/Vacation_5469.JPG', 'path': 'HANature/Vacation_5469.JPG'},
    {'name': 'HANature/Vacation_5473.JPG', 'path': 'HANature/Vacation_5473.JPG'},
    {'name': 'HANature/Vacation_5512.JPG', 'path': 'HANature/Vacation_5512.JPG'},
    {'name': 'HANature/Vacation_5514.JPG', 'path': 'HANature/Vacation_5514.JPG'},
    {'name': 'HANature/Vacation_5553.JPG', 'path': 'HANature/Vacation_5553.JPG'},
    {'name': 'HANature/Vacation_5554.JPG', 'path': 'HANature/Vacation_5554.JPG'},
    {'name': 'HANature/Vacation_5558.JPG', 'path': 'HANature/Vacation_5558.JPG'},
    {'name': 'HANature/Vacation_5647.JPG', 'path': 'HANature/Vacation_5647.JPG'},
    {'name': 'HANature/Vacation_5661.JPG', 'path': 'HANature/Vacation_5661.JPG'},
    {'name': 'HANature/Vacation_5663.JPG', 'path': 'HANature/Vacation_5663.JPG'},
    {'name': 'HANature/Vacation_5665.JPG', 'path': 'HANature/Vacation_5665.JPG'},
    {'name': 'HANature/Vacation_5672.JPG', 'path': 'HANature/Vacation_5672.JPG'},
    {'name': 'HANature/Vacation_5756.JPG', 'path': 'HANature/Vacation_5756.JPG'},
    {'name': 'HANature/Vacation_6301.JPG', 'path': 'HANature/Vacation_6301.JPG'},
    {'name': 'HANature/Vacation_6668.JPG', 'path': 'HANature/Vacation_6668.JPG'},
    {'name': 'HANature/Vacation_7001.JPG', 'path': 'HANature/Vacation_7001.JPG'},
    {'name': 'HANature/Vacation_7596.JPG', 'path': 'HANature/Vacation_7596.JPG'},
    {'name': 'HANature/Vacation_7629.JPG', 'path': 'HANature/Vacation_7629.JPG'},
    {'name': 'HANature/Vacation_7657.JPG', 'path': 'HANature/Vacation_7657.JPG'},
    {'name': 'HANature/Vacation_7683.JPG', 'path': 'HANature/Vacation_7683.JPG'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://csbsutah.co1.qualtrics.com/jfe/form/SV_bkO77dxG6dtzM58', 'https://csbsutah.co1.qualtrics.com/jfe/form/SV_bkO77dxG6dtzM58');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/raw_${expInfo["Please keep this number!"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var start_pClock;
var text_15;
var key_resp_3;
var p_equationClock;
var text_9;
var p_imageClock;
var image_6;
var p_math_answerClock;
var text_10;
var p_a;
var p_b;
var mouse;
var p_time_startClock;
var text_11;
var polygon;
var polygon_2;
var mouse_2;
var p_time_endClock;
var text_12;
var polygon_3;
var polygon_4;
var mouse_3;
var p_vastnessClock;
var vast_Q;
var slider;
var mouse_4;
var define_vast;
var Submit_score_button;
var Submit_score;
var start_eClock;
var text;
var key_resp;
var equationsClock;
var math_equation;
var ImageClock;
var image;
var math_answerClock;
var answers;
var answer_a;
var answer_b;
var answer_end;
var time_startClock;
var start_time;
var hg_start_bottom;
var hg_start_top;
var start_time_mouse;
var time_endClock;
var end_time;
var hg_end_bottom;
var hg_end_top;
var end_time_mouse;
var catchClock;
var text_3;
var key_resp_2;
var endClock;
var text_2;
var text_6;
var text_7;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "start_p"
  start_pClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Click the spacebar to start the practice trial.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  var givenLetter = expInfo['What letter were you given?'];
  expInfo['conditionFile'] = givenLetter + '.csv';
  // Initialize components for Routine "p_equation"
  p_equationClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '16 + 27',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "p_image"
  p_imageClock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : 'norm', 
    image : 'Beach 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.8, 1.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "p_math_answer"
  p_math_answerClock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Please answer the addition problem.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  p_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'p_a',
    text: '48',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.2), (- 0.075)], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  p_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'p_b',
    text: '43',
    font: 'Arial',
    units: 'norm', 
    pos: [0.2, (- 0.075)], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "p_time_start"
  p_time_startClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Click the hourglass to start the timer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 0.0, 
    pos: [0, (- 0.07)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('gray'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 180.0, 
    pos: [0, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('gray'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "p_time_end"
  p_time_endClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Click the hourglass to stop the timer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  polygon_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_3', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 0.0, 
    pos: [0, (- 0.07)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: undefined, 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  polygon_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_4', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 180.0, 
    pos: [0, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: undefined, 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "p_vastness"
  p_vastnessClock = new util.Clock();
  vast_Q = new visual.TextStim({
    win: psychoJS.window,
    name: 'vast_Q',
    text: 'How vast was the image?',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.2], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: 50,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: 'height',
    labels: [0, 100], fontSize: 0.035, ticks: [0, 100],
    granularity: 0.0, style: ["SLIDER", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('DarkGray'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  define_vast = new visual.TextStim({
    win: psychoJS.window,
    name: 'define_vast',
    text: 'Vastness: a perceptual phenomenon that occurs when a space seems to extend to very far distances, seemingly without limit.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.4], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('gray'),  opacity: 1.0,
    depth: -3.0 
  });
  
  Submit_score_button = new visual.Rect ({
    win: psychoJS.window, name: 'Submit_score_button', units : 'norm', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0.0, 
    pos: [0, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('#b9b9b9'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  Submit_score = new visual.TextStim({
    win: psychoJS.window,
    name: 'Submit_score',
    text: 'Submit Score',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.3)], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "start_e"
  start_eClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Press the spacebar to start the next trial.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "equations"
  equationsClock = new util.Clock();
  math_equation = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_equation',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Image"
  ImageClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'norm', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.8, 1.8],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "math_answer"
  math_answerClock = new util.Clock();
  answers = new visual.TextStim({
    win: psychoJS.window,
    name: 'answers',
    text: 'Please answer the addition problem',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  answer_a = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_a',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.2), (- 0.075)], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  answer_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'answer_b',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.2, (- 0.075)], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  answer_end = new core.Mouse({
    win: psychoJS.window,
  });
  answer_end.mouseClock = new util.Clock();
  // Initialize components for Routine "time_start"
  time_startClock = new util.Clock();
  start_time = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_time',
    text: 'Click the hourglass to start the timer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  hg_start_bottom = new visual.ShapeStim ({
    win: psychoJS.window, name: 'hg_start_bottom', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 0.0, 
    pos: [0, (- 0.07)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('gray'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  hg_start_top = new visual.ShapeStim ({
    win: psychoJS.window, name: 'hg_start_top', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 180.0, 
    pos: [0, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('gray'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  start_time_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  start_time_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "time_end"
  time_endClock = new util.Clock();
  end_time = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_time',
    text: 'Click the hourglass to stop the timer',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.18], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  hg_end_bottom = new visual.ShapeStim ({
    win: psychoJS.window, name: 'hg_end_bottom', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 0.0, 
    pos: [0, (- 0.07)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  hg_end_top = new visual.ShapeStim ({
    win: psychoJS.window, name: 'hg_end_top', units : 'height', 
    vertices: [[-[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [+[0.15, 0.15][0]/2.0, -[0.15, 0.15][1]/2.0], [0, [0.15, 0.15][1]/2.0]],
    ori: 180.0, 
    pos: [0, (- 0.05)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -2, 
    interpolate: true, 
  });
  
  end_time_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  end_time_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "catch"
  catchClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please remember this number, you will need to enter it on the next page:',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.2], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: expInfo["Please keep this number!"],
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: "Press 'esc' twice whem you are done viewing the number",
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.2)], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var start_pMaxDurationReached;
var _key_resp_3_allKeys;
var start_pMaxDuration;
var start_pComponents;
function start_pRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_p' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    start_pClock.reset();
    routineTimer.reset();
    start_pMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('start_p.started', globalClock.getTime());
    start_pMaxDuration = null
    // keep track of which components have finished
    start_pComponents = [];
    start_pComponents.push(text_15);
    start_pComponents.push(key_resp_3);
    
    start_pComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_pRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_p' ---
    // get current time
    t = start_pClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_pComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_pRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_p' ---
    start_pComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_p.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "start_p" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_equationMaxDurationReached;
var p_equationMaxDuration;
var p_equationComponents;
function p_equationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_equation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_equationClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    p_equationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('p_equation.started', globalClock.getTime());
    p_equationMaxDuration = null
    // keep track of which components have finished
    p_equationComponents = [];
    p_equationComponents.push(text_9);
    
    p_equationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function p_equationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_equation' ---
    // get current time
    t = p_equationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_equationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_equationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_equation' ---
    p_equationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_equation.stopped', globalClock.getTime());
    if (p_equationMaxDurationReached) {
        p_equationClock.add(p_equationMaxDuration);
    } else {
        p_equationClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_imageMaxDurationReached;
var p_imageMaxDuration;
var p_imageComponents;
function p_imageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_image' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_imageClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    p_imageMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('p_image.started', globalClock.getTime());
    p_imageMaxDuration = null
    // keep track of which components have finished
    p_imageComponents = [];
    p_imageComponents.push(image_6);
    
    p_imageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function p_imageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_image' ---
    // get current time
    t = p_imageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_imageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_imageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_image' ---
    p_imageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_image.stopped', globalClock.getTime());
    if (p_imageMaxDurationReached) {
        p_imageClock.add(p_imageMaxDuration);
    } else {
        p_imageClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_math_answerMaxDurationReached;
var gotValidClick;
var p_math_answerMaxDuration;
var p_math_answerComponents;
function p_math_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_math_answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_math_answerClock.reset();
    routineTimer.reset();
    p_math_answerMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('p_math_answer.started', globalClock.getTime());
    p_math_answerMaxDuration = null
    // keep track of which components have finished
    p_math_answerComponents = [];
    p_math_answerComponents.push(text_10);
    p_math_answerComponents.push(p_a);
    p_math_answerComponents.push(p_b);
    p_math_answerComponents.push(mouse);
    
    p_math_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function p_math_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_math_answer' ---
    // get current time
    t = p_math_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *p_a* updates
    if (t >= 0.0 && p_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p_a.tStart = t;  // (not accounting for frame time here)
      p_a.frameNStart = frameN;  // exact frame index
      
      p_a.setAutoDraw(true);
    }
    
    
    // *p_b* updates
    if (t >= 0.0 && p_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p_b.tStart = t;  // (not accounting for frame time here)
      p_b.frameNStart = frameN;  // exact frame index
      
      p_b.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([p_a, p_b])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_math_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_math_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_math_answer' ---
    p_math_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_math_answer.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "p_math_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_time_startMaxDurationReached;
var p_time_startMaxDuration;
var p_time_startComponents;
function p_time_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_time_start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_time_startClock.reset();
    routineTimer.reset();
    p_time_startMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('p_time_start.started', globalClock.getTime());
    p_time_startMaxDuration = null
    // keep track of which components have finished
    p_time_startComponents = [];
    p_time_startComponents.push(text_11);
    p_time_startComponents.push(polygon);
    p_time_startComponents.push(polygon_2);
    p_time_startComponents.push(mouse_2);
    
    p_time_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function p_time_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_time_start' ---
    // get current time
    t = p_time_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([polygon, polygon_2])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_time_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_time_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_time_start' ---
    p_time_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_time_start.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "p_time_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_time_endMaxDurationReached;
var p_time_endMaxDuration;
var p_time_endComponents;
function p_time_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_time_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_time_endClock.reset();
    routineTimer.reset();
    p_time_endMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('p_time_end.started', globalClock.getTime());
    p_time_endMaxDuration = null
    // keep track of which components have finished
    p_time_endComponents = [];
    p_time_endComponents.push(text_12);
    p_time_endComponents.push(polygon_3);
    p_time_endComponents.push(polygon_4);
    p_time_endComponents.push(mouse_3);
    
    p_time_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function p_time_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_time_end' ---
    // get current time
    t = p_time_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *polygon_3* updates
    if (t >= 0.0 && polygon_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_3.tStart = t;  // (not accounting for frame time here)
      polygon_3.frameNStart = frameN;  // exact frame index
      
      polygon_3.setAutoDraw(true);
    }
    
    
    // *polygon_4* updates
    if (t >= 0.0 && polygon_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_4.tStart = t;  // (not accounting for frame time here)
      polygon_4.frameNStart = frameN;  // exact frame index
      
      polygon_4.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([polygon_3, polygon_4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_3.clicked_name.push(null);
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_time_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_time_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_time_end' ---
    p_time_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_time_end.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    // the Routine "p_time_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var p_vastnessMaxDurationReached;
var p_vastnessMaxDuration;
var p_vastnessComponents;
function p_vastnessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'p_vastness' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    p_vastnessClock.reset();
    routineTimer.reset();
    p_vastnessMaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('p_vastness.started', globalClock.getTime());
    p_vastnessMaxDuration = null
    // keep track of which components have finished
    p_vastnessComponents = [];
    p_vastnessComponents.push(vast_Q);
    p_vastnessComponents.push(slider);
    p_vastnessComponents.push(mouse_4);
    p_vastnessComponents.push(define_vast);
    p_vastnessComponents.push(Submit_score_button);
    p_vastnessComponents.push(Submit_score);
    
    p_vastnessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function p_vastnessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'p_vastness' ---
    // get current time
    t = p_vastnessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *vast_Q* updates
    if (t >= 0.0 && vast_Q.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vast_Q.tStart = t;  // (not accounting for frame time here)
      vast_Q.frameNStart = frameN;  // exact frame index
      
      vast_Q.setAutoDraw(true);
    }
    
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval([Submit_score, Submit_score_button])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_4.clicked_name.push(null);
          }
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *define_vast* updates
    if (t >= 0.0 && define_vast.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      define_vast.tStart = t;  // (not accounting for frame time here)
      define_vast.frameNStart = frameN;  // exact frame index
      
      define_vast.setAutoDraw(true);
    }
    
    
    // *Submit_score_button* updates
    if (t >= 0.0 && Submit_score_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Submit_score_button.tStart = t;  // (not accounting for frame time here)
      Submit_score_button.frameNStart = frameN;  // exact frame index
      
      Submit_score_button.setAutoDraw(true);
    }
    
    
    // *Submit_score* updates
    if (t >= 0.0 && Submit_score.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Submit_score.tStart = t;  // (not accounting for frame time here)
      Submit_score.frameNStart = frameN;  // exact frame index
      
      Submit_score.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    p_vastnessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function p_vastnessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'p_vastness' ---
    p_vastnessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('p_vastness.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    // the Routine "p_vastness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: expInfo["conditionFile"],
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(start_eRoutineBegin(snapshot));
      trialsLoopScheduler.add(start_eRoutineEachFrame());
      trialsLoopScheduler.add(start_eRoutineEnd(snapshot));
      trialsLoopScheduler.add(equationsRoutineBegin(snapshot));
      trialsLoopScheduler.add(equationsRoutineEachFrame());
      trialsLoopScheduler.add(equationsRoutineEnd(snapshot));
      trialsLoopScheduler.add(ImageRoutineBegin(snapshot));
      trialsLoopScheduler.add(ImageRoutineEachFrame());
      trialsLoopScheduler.add(ImageRoutineEnd(snapshot));
      trialsLoopScheduler.add(math_answerRoutineBegin(snapshot));
      trialsLoopScheduler.add(math_answerRoutineEachFrame());
      trialsLoopScheduler.add(math_answerRoutineEnd(snapshot));
      trialsLoopScheduler.add(time_startRoutineBegin(snapshot));
      trialsLoopScheduler.add(time_startRoutineEachFrame());
      trialsLoopScheduler.add(time_startRoutineEnd(snapshot));
      trialsLoopScheduler.add(time_endRoutineBegin(snapshot));
      trialsLoopScheduler.add(time_endRoutineEachFrame());
      trialsLoopScheduler.add(time_endRoutineEnd(snapshot));
      trialsLoopScheduler.add(p_vastnessRoutineBegin(snapshot));
      trialsLoopScheduler.add(p_vastnessRoutineEachFrame());
      trialsLoopScheduler.add(p_vastnessRoutineEnd(snapshot));
      trialsLoopScheduler.add(catchRoutineBegin(snapshot));
      trialsLoopScheduler.add(catchRoutineEachFrame());
      trialsLoopScheduler.add(catchRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var start_eMaxDurationReached;
var _key_resp_allKeys;
var start_eMaxDuration;
var start_eComponents;
function start_eRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_e' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    start_eClock.reset();
    routineTimer.reset();
    start_eMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('start_e.started', globalClock.getTime());
    start_eMaxDuration = null
    // keep track of which components have finished
    start_eComponents = [];
    start_eComponents.push(text);
    start_eComponents.push(key_resp);
    
    start_eComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_eRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_e' ---
    // get current time
    t = start_eClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_eComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_eRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_e' ---
    start_eComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_e.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "start_e" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var equationsMaxDurationReached;
var equationsMaxDuration;
var equationsComponents;
function equationsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'equations' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    equationsClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    equationsMaxDurationReached = false;
    // update component parameters for each repeat
    math_equation.setText(equation);
    psychoJS.experiment.addData('equations.started', globalClock.getTime());
    equationsMaxDuration = null
    // keep track of which components have finished
    equationsComponents = [];
    equationsComponents.push(math_equation);
    
    equationsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function equationsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'equations' ---
    // get current time
    t = equationsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *math_equation* updates
    if (t >= 0.0 && math_equation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_equation.tStart = t;  // (not accounting for frame time here)
      math_equation.frameNStart = frameN;  // exact frame index
      
      math_equation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (math_equation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      math_equation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    equationsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function equationsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'equations' ---
    equationsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('equations.stopped', globalClock.getTime());
    if (equationsMaxDurationReached) {
        equationsClock.add(equationsMaxDuration);
    } else {
        equationsClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ImageMaxDurationReached;
var ImageMaxDuration;
var ImageComponents;
function ImageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Image' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ImageClock.reset();
    routineTimer.reset();
    ImageMaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(imagename);
    psychoJS.experiment.addData('Image.started', globalClock.getTime());
    ImageMaxDuration = null
    // keep track of which components have finished
    ImageComponents = [];
    ImageComponents.push(image);
    
    ImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ImageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Image' ---
    // get current time
    t = ImageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Image' ---
    ImageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Image.stopped', globalClock.getTime());
    // the Routine "Image" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var math_answerMaxDurationReached;
var math_answerMaxDuration;
var math_answerComponents;
function math_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'math_answer' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    math_answerClock.reset();
    routineTimer.reset();
    math_answerMaxDurationReached = false;
    // update component parameters for each repeat
    answer_a.setText(a);
    answer_b.setText(b);
    // setup some python lists for storing info about the answer_end
    // current position of the mouse:
    answer_end.x = [];
    answer_end.y = [];
    answer_end.leftButton = [];
    answer_end.midButton = [];
    answer_end.rightButton = [];
    answer_end.time = [];
    answer_end.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('math_answer.started', globalClock.getTime());
    math_answerMaxDuration = null
    // keep track of which components have finished
    math_answerComponents = [];
    math_answerComponents.push(answers);
    math_answerComponents.push(answer_a);
    math_answerComponents.push(answer_b);
    math_answerComponents.push(answer_end);
    
    math_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function math_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'math_answer' ---
    // get current time
    t = math_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *answers* updates
    if (t >= 0.0 && answers.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answers.tStart = t;  // (not accounting for frame time here)
      answers.frameNStart = frameN;  // exact frame index
      
      answers.setAutoDraw(true);
    }
    
    
    // *answer_a* updates
    if (t >= 0.0 && answer_a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_a.tStart = t;  // (not accounting for frame time here)
      answer_a.frameNStart = frameN;  // exact frame index
      
      answer_a.setAutoDraw(true);
    }
    
    
    // *answer_b* updates
    if (t >= 0.0 && answer_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_b.tStart = t;  // (not accounting for frame time here)
      answer_b.frameNStart = frameN;  // exact frame index
      
      answer_b.setAutoDraw(true);
    }
    
    // *answer_end* updates
    if (t >= 0.0 && answer_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_end.tStart = t;  // (not accounting for frame time here)
      answer_end.frameNStart = frameN;  // exact frame index
      
      answer_end.status = PsychoJS.Status.STARTED;
      answer_end.mouseClock.reset();
      prevButtonState = answer_end.getPressed();  // if button is down already this ISN'T a new click
      }
    if (answer_end.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = answer_end.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          answer_end.clickableObjects = eval([answer_a, answer_b])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(answer_end.clickableObjects)) {
              answer_end.clickableObjects = [answer_end.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of answer_end.clickableObjects) {
              if (obj.contains(answer_end)) {
                  gotValidClick = true;
                  answer_end.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              answer_end.clicked_name.push(null);
          }
          _mouseXYs = answer_end.getPos();
          answer_end.x.push(_mouseXYs[0]);
          answer_end.y.push(_mouseXYs[1]);
          answer_end.leftButton.push(_mouseButtons[0]);
          answer_end.midButton.push(_mouseButtons[1]);
          answer_end.rightButton.push(_mouseButtons[2]);
          answer_end.time.push(answer_end.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    math_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function math_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'math_answer' ---
    math_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('math_answer.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('answer_end.x', answer_end.x);
    psychoJS.experiment.addData('answer_end.y', answer_end.y);
    psychoJS.experiment.addData('answer_end.leftButton', answer_end.leftButton);
    psychoJS.experiment.addData('answer_end.midButton', answer_end.midButton);
    psychoJS.experiment.addData('answer_end.rightButton', answer_end.rightButton);
    psychoJS.experiment.addData('answer_end.time', answer_end.time);
    psychoJS.experiment.addData('answer_end.clicked_name', answer_end.clicked_name);
    
    // the Routine "math_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var time_startMaxDurationReached;
var time_startMaxDuration;
var time_startComponents;
function time_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'time_start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    time_startClock.reset();
    routineTimer.reset();
    time_startMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the start_time_mouse
    // current position of the mouse:
    start_time_mouse.x = [];
    start_time_mouse.y = [];
    start_time_mouse.leftButton = [];
    start_time_mouse.midButton = [];
    start_time_mouse.rightButton = [];
    start_time_mouse.time = [];
    start_time_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('time_start.started', globalClock.getTime());
    time_startMaxDuration = null
    // keep track of which components have finished
    time_startComponents = [];
    time_startComponents.push(start_time);
    time_startComponents.push(hg_start_bottom);
    time_startComponents.push(hg_start_top);
    time_startComponents.push(start_time_mouse);
    
    time_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function time_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'time_start' ---
    // get current time
    t = time_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_time* updates
    if (t >= 0.0 && start_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_time.tStart = t;  // (not accounting for frame time here)
      start_time.frameNStart = frameN;  // exact frame index
      
      start_time.setAutoDraw(true);
    }
    
    
    // *hg_start_bottom* updates
    if (t >= 0.0 && hg_start_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hg_start_bottom.tStart = t;  // (not accounting for frame time here)
      hg_start_bottom.frameNStart = frameN;  // exact frame index
      
      hg_start_bottom.setAutoDraw(true);
    }
    
    
    // *hg_start_top* updates
    if (t >= 0.0 && hg_start_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hg_start_top.tStart = t;  // (not accounting for frame time here)
      hg_start_top.frameNStart = frameN;  // exact frame index
      
      hg_start_top.setAutoDraw(true);
    }
    
    // *start_time_mouse* updates
    if (t >= 0.0 && start_time_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_time_mouse.tStart = t;  // (not accounting for frame time here)
      start_time_mouse.frameNStart = frameN;  // exact frame index
      
      start_time_mouse.status = PsychoJS.Status.STARTED;
      start_time_mouse.mouseClock.reset();
      prevButtonState = start_time_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_time_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_time_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          start_time_mouse.clickableObjects = eval([hg_start_top, hg_start_bottom])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(start_time_mouse.clickableObjects)) {
              start_time_mouse.clickableObjects = [start_time_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of start_time_mouse.clickableObjects) {
              if (obj.contains(start_time_mouse)) {
                  gotValidClick = true;
                  start_time_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              start_time_mouse.clicked_name.push(null);
          }
          _mouseXYs = start_time_mouse.getPos();
          start_time_mouse.x.push(_mouseXYs[0]);
          start_time_mouse.y.push(_mouseXYs[1]);
          start_time_mouse.leftButton.push(_mouseButtons[0]);
          start_time_mouse.midButton.push(_mouseButtons[1]);
          start_time_mouse.rightButton.push(_mouseButtons[2]);
          start_time_mouse.time.push(start_time_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    time_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'time_start' ---
    time_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('time_start.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('start_time_mouse.x', start_time_mouse.x);
    psychoJS.experiment.addData('start_time_mouse.y', start_time_mouse.y);
    psychoJS.experiment.addData('start_time_mouse.leftButton', start_time_mouse.leftButton);
    psychoJS.experiment.addData('start_time_mouse.midButton', start_time_mouse.midButton);
    psychoJS.experiment.addData('start_time_mouse.rightButton', start_time_mouse.rightButton);
    psychoJS.experiment.addData('start_time_mouse.time', start_time_mouse.time);
    psychoJS.experiment.addData('start_time_mouse.clicked_name', start_time_mouse.clicked_name);
    
    // the Routine "time_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var time_endMaxDurationReached;
var time_endMaxDuration;
var time_endComponents;
function time_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'time_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    time_endClock.reset();
    routineTimer.reset();
    time_endMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the end_time_mouse
    // current position of the mouse:
    end_time_mouse.x = [];
    end_time_mouse.y = [];
    end_time_mouse.leftButton = [];
    end_time_mouse.midButton = [];
    end_time_mouse.rightButton = [];
    end_time_mouse.time = [];
    end_time_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('time_end.started', globalClock.getTime());
    time_endMaxDuration = null
    // keep track of which components have finished
    time_endComponents = [];
    time_endComponents.push(end_time);
    time_endComponents.push(hg_end_bottom);
    time_endComponents.push(hg_end_top);
    time_endComponents.push(end_time_mouse);
    
    time_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function time_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'time_end' ---
    // get current time
    t = time_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_time* updates
    if (t >= 0.0 && end_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_time.tStart = t;  // (not accounting for frame time here)
      end_time.frameNStart = frameN;  // exact frame index
      
      end_time.setAutoDraw(true);
    }
    
    
    // *hg_end_bottom* updates
    if (t >= 0.0 && hg_end_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hg_end_bottom.tStart = t;  // (not accounting for frame time here)
      hg_end_bottom.frameNStart = frameN;  // exact frame index
      
      hg_end_bottom.setAutoDraw(true);
    }
    
    
    // *hg_end_top* updates
    if (t >= 0.0 && hg_end_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hg_end_top.tStart = t;  // (not accounting for frame time here)
      hg_end_top.frameNStart = frameN;  // exact frame index
      
      hg_end_top.setAutoDraw(true);
    }
    
    // *end_time_mouse* updates
    if (t >= 0.0 && end_time_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_time_mouse.tStart = t;  // (not accounting for frame time here)
      end_time_mouse.frameNStart = frameN;  // exact frame index
      
      end_time_mouse.status = PsychoJS.Status.STARTED;
      end_time_mouse.mouseClock.reset();
      prevButtonState = end_time_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (end_time_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = end_time_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          end_time_mouse.clickableObjects = eval([hg_end_top, hg_end_bottom])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(end_time_mouse.clickableObjects)) {
              end_time_mouse.clickableObjects = [end_time_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of end_time_mouse.clickableObjects) {
              if (obj.contains(end_time_mouse)) {
                  gotValidClick = true;
                  end_time_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              end_time_mouse.clicked_name.push(null);
          }
          _mouseXYs = end_time_mouse.getPos();
          end_time_mouse.x.push(_mouseXYs[0]);
          end_time_mouse.y.push(_mouseXYs[1]);
          end_time_mouse.leftButton.push(_mouseButtons[0]);
          end_time_mouse.midButton.push(_mouseButtons[1]);
          end_time_mouse.rightButton.push(_mouseButtons[2]);
          end_time_mouse.time.push(end_time_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    time_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'time_end' ---
    time_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('time_end.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('end_time_mouse.x', end_time_mouse.x);
    psychoJS.experiment.addData('end_time_mouse.y', end_time_mouse.y);
    psychoJS.experiment.addData('end_time_mouse.leftButton', end_time_mouse.leftButton);
    psychoJS.experiment.addData('end_time_mouse.midButton', end_time_mouse.midButton);
    psychoJS.experiment.addData('end_time_mouse.rightButton', end_time_mouse.rightButton);
    psychoJS.experiment.addData('end_time_mouse.time', end_time_mouse.time);
    psychoJS.experiment.addData('end_time_mouse.clicked_name', end_time_mouse.clicked_name);
    
    // the Routine "time_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var catchMaxDurationReached;
var _key_resp_2_allKeys;
var catchMaxDuration;
var catchComponents;
function catchRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'catch' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    catchClock.reset();
    routineTimer.reset();
    catchMaxDurationReached = false;
    // update component parameters for each repeat
    text_3.setText('');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // Run 'Begin Routine' code from code_2
    if ((trials.thisN + 1) % 10 !== 0) {
        continueRoutine = false;
    }
    
    // Randomly choose the target key for this trial (no import needed)
    var target_key = ['c', 'a', 'g', 'o', 't'][Math.floor(Math.random() * 5)];
    
    // Set the text to prompt the participant
    text_3.setText("Press '" + target_key + "' to continue with the study");
    psychoJS.experiment.addData('catch.started', globalClock.getTime());
    catchMaxDuration = null
    // keep track of which components have finished
    catchComponents = [];
    catchComponents.push(text_3);
    catchComponents.push(key_resp_2);
    
    catchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function catchRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'catch' ---
    // get current time
    t = catchClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_2.clock.reset();
      key_resp_2.start();
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['c', 'a', 'g', 'o', 't'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    catchComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function catchRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'catch' ---
    catchComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('catch.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "catch" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    endClock.reset();
    routineTimer.reset();
    endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end.started', globalClock.getTime());
    endMaxDuration = null
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_2);
    endComponents.push(text_6);
    endComponents.push(text_7);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end.stopped', globalClock.getTime());
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  // Disable downloading results to browser
  psychoJS._saveResults = 0;
  
  // Generate filename for results
  let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
  
  // Extract data object from experiment
  let dataObj = psychoJS._experiment._trialsData;
  
  // Convert data object to CSV
  let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
      return Object.values(it).toString()
  }).join('\n')
  
  // Send data to OSF via DataPipe
  console.log('Saving data...');
  fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      },
      body: JSON.stringify({
      experimentID: 'XXXXXXXXXXXXX', // * UPDATE WITH YOUR DATAPIKE EXPERIMENT ID *
      filename: filename,
      data: data,
      }),
  }).then(response => response.json()).then(data => {
      // Log response and force experiment end
      console.log(data);
      quitPsychoJS();
  });
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
