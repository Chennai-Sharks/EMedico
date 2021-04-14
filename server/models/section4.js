const mongoose = require('mongoose');

const section4Schema = new mongoose.Schema({
    "self_Reported_Habits" : {
        type: [String]
        // see OFP docs for option values
    },
    "sleep_History":{
        "do_you_sleep_well":{
            type:string,
            enum:['yes','no']
        },
        "are_you_tired_upon_awakening":{
            type:string,
            enum:['yes','no']
        },
        "are_you_tired_during_the_day":{
            type:string,
            enum:['yes','no']
        },
        "does_pain_awaken_you_at_night":{
            type:string,
            enum:['yes','no']
        },
        "do_you_snore_or_gasp_for_air_while_sleeping":{
            type:string,
            enum:['yes','no']
        },
        "do_you_have_trouble_going_to_sleep_or_maintaining_sleep":{
            type:string,
            enum:['yes','no']
        },
        "do_you_take_medications_for_sleep":{
            type:string,
            enum:['yes','no']
        },
        "medications":{
            type:[string]
        }
    },
    "pyschosocial_history":{
        "do_you_have_stressful_situation_At_home_work":{
            type:string,
            enum:['yes','no']
        },
        "are_you_under_increased_stress_lately":{
            type:string,
            enum:['yes','no']
        },
        "have_there_been_any_recent_lifestyle_changes":{
            type:string,
            enum:['yes','no']
        },
        "have_you_seen_a_psychiatrist_psychologist_pr_social_worker_in_the_past":{
            type:string,
            enum:['yes','no']
        },
        "are_you_currently_under_treatment":{
            type:string,
            enum:['yes','no']
        },
    }
});

module.exports = mongoose.model('section4',section4Schema);