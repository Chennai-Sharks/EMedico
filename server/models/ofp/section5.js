const mongoose = require('mongoose');

const section5Schema = new mongoose.Schema({
    "head_and_neck_screening":{
        "inspection": String,
        "palpation": String,
        "asymmetry": String,
        "lymph_nodes": String,
        "skin": String,
        "salivary_glands": String
    },
    "cranial_nerve_screening":{
        "i":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "ii":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "iii_iv_vi":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "v":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "vii":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "viii":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "ix_x":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "xi":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "xii":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "v1":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "v2":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "v3":{
            "R":['yes','no'],
            "L":['yes','no']
        },
        "all_wnl":{
            "R":['yes','no'],
            "L":['yes','no']
        },
    },
    "tmj_evaluation":{
        "maximum_opening+OB":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
        "active":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
        "passive":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
        "protrusive":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
        "left_lateral":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
        "right_lateral":{
            "opening":String,
            "pain":String,
            "location":String,
            "sounds":String
        },
    },
    "joint Palpation":{
        "Lateral":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
            "comments":String
        },
        "posterior":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
            "comments":String
        },
        "swelling":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
            "comments":String
        }
    },
    "muscle_palpation":{
        "ant_temporalis":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "post_temporalis":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "mid_temporalis":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "superficial_masseter":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "styloid_area":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "scm":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "post_cervicals":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "suboccipital":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "temporalis_tendon_upper":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "deep_masseter":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "suprahyoids":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "infrahyoids":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "trapezius":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
        "lat_petrygoid_test":{
            "R":['0','1','2','3'],
            "L":['0','1','2','3'],
        },
    },
    "fibromyalgia_screening":{
        "generalised_aching/pain?":['yes','no'],
   
        "chronic_fatigue":['yes','no'],
   
        "multiple_tender_points":['yes','no'],
   
        "number_of_tender_points":String,
   
        "referral_indicated":['yes','no'],
    },
    "intra_oval_evaluation":{
        "hygiene":['Good','Fair','Poor'],
   
        "periodontal_status":['Good','Fair','Poor'],
   
        "gingiva":['Normal','Abnormal'],
   
        "buccal_mucosa":['Normal','Abnormal'],
   
        "floor":['Normal','Abnormal'],
   
        "tongue":['Normal','Abnormal'],
   
        "hard_soft_palate":['Normal','Abnormal'],
   
        "oropharynx":['Normal','Abnormal'],
   
        "occulusion":String,
   
        "prosthesis":String,
   
        "possible_intraoral_pain_sources":String,
   
        "comments":String
    },
    "cervical_screening":{
        "overall_body_posture":['Normal','Abnormal'],
   
        "forward_head_posture":['Absent','Mild','Moderate','Severe'],
   
        "aroma":{
            "extension":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            },
            "flexion":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            },
            "r_rotation":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            },
            "l_rotation":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            },
            "r_bend":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            },
            "l_bend":{
                "normal_abnormal":['Normal','Abnormal'],
                "%restricted":String,
                "pain":String
            }
        },
        "is_patient_under_cervical_treatment":[String],    // if 'yes' pass the values of the treatments, if 'no' just pass no.

        "is_further_evaluation_indicated":[String]     // same as above one 
    },

});

module.exports = mongoose.model('ofpSection5',section5Schema);