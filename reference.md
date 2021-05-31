# Form template
Modified protocol for Mucormycosis

Please read in detail.

We are bound to see a lot of such cases in our routine practice soon.

We had 2 cases so far of which one went in for maxillectomy today.

This particular patient had Covid two months back and an extraction done for a maxillary molar one week back.

 Additional considerations for all OPD patients in view of COVID complications , particularly Mucormycosis:

A). Screening - COVID history

1. Were you tested positive for COVID ?
2. Home care/Hospitalised?
3. On Ventilator or prolonged oxygen support  

B). OP History taking- past illness

Document specifically:
1. Diabetic status
2. Immunocompromised state/ Steroid history
3. Post Covid symptoms:
    - fatigue, cough, breathing difficulty
    - bleeding gums, dry mouth, loss of taste
    - check discharge summary for blood sugar , CRP and Ferritin levels 

C). On Examination, look for symptoms of Mucormycosis:

1. Sinusitis / Paranasal sinus pain
2. Nasal blockage or congestion / Cough. Nasal discharge- epistaxis or black purulent discharge
3. Blackish discolouration over the bridge of the nose or palate
4. Facial erythema
5. Eye symptoms- Blurred or double vision (diplopia) ptosis, periorbital edema , erythema
6. Facial pain or numbness on one side
7. Toothache/ Mobile tooth
8. Palatal ulceration
9. Halitosis
10. Skin lesions
11. Fever 
12.  Headache
13. Altered sensorium

D). In suspected Mucormycosis,

- OMFS evaluation and lab evaluation of pus from sinus  or abscess ( KOH mount and fungal culture ) 
- Biopsy
- Blood examination
    -CBC, CRP, 
    -Serum galactomannan and Beta D Glucan , if available
- ENT , infectious disease referral
- CT PNS and MRI if needed.

E). For all post covid patients,

 1. Defer invasive oral and dental procedures, esp extraction of even mobile teeth till 3 months 

2. Patient education regarding 

- Oral hygiene maintenance
 - Glycemic control 
- High protein , low sugar diet
 - Prescribe betadine mouth gargle( 2%) 
- 0.5 % betadine nasal irrigation
 - Steam inhalation 
- Vitamin supplements as needed
- Early recognition of symptoms of mucormycosis and report to the hospital at the earliest.

# fungus section1 TS format
declare module namespace {

    export interface CovidScreeningTest {
        testedPositiveForCovid: string;
        homeCare/hospitalised: string;
        ventilator/prolongedLifeSupport: string;
    }

    export interface MucormycosisSymptoms {
        sinusitis: string;
        nasalBlockage: string;
        blackishDiscoloration: string;
        facialErythema: string;
        eyeSymptoms: string;
        facialPain/numbness: string;
        toothache/mobileTooth: string;
        palatalUlceration: string;
        halitosis: string;
        skinLesions: string;
        fever: string;
        headache: string;
        alteredSensorium: string;
    }

    export interface RootObject {
        mongoid: string;
        date: Date;
        age: number;
        gender: string;
        treatingDentist: string;
        purposeOfVisit: string;
        referralSource: string;
        personalHistory: string;
        occupation: string;
        allergiesToMedication: string;
        covidScreeningTest: CovidScreeningTest;
        diabeticStatus: string;
        Immunocompromised state: string;
        SteroidHistory: string;
        postCovidSymptoms: string[];
        mucormycosisSymptoms: MucormycosisSymptoms;
    }

}

