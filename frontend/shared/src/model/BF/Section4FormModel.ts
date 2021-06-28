export const section4FormModel: Array<Record<string, any>> = [
  {
    type: 'bigtitle',
    label: 'Surgical Management',
  },
  {
    name: 'surgicalPlan',
    type: 'checkbox',
    label: 'Choose surgical plan',
    props: [
      {
        part1: 'Early surgical debridement',
        option: ['(all patients)'],
      },
      {
        part1:
          'Transcutaneous retrobulbar Amphotericin B (TRAMB) 1ml of 3.5mg/ml',
        option: ['(select cases)'],
      },
      {
        part1: 'Orbital Exenteration',
        option: ['(patients with extensive orbital involvement)'],
      },
      {
        part1:
          'Nasal and sinus involvement is present without bony erosion of maxilla/zygoma and orbital floor',
        option: ['Endoscopic sinus surgery debridement'],
      },
      {
        part1: 'Maxilla involvement',
        option: ['Maxillectomy(partial/total)'],
      },
      {
        part1: 'Maxilla+Minimal zygoma involvement',
        option: ['Maxillectomy(partial/total) with zygoma debridement'],
      },
      {
        part1: 'Maxilla + Zygoma + orbit',
        option: [
          'Maxillectomy(partial/total)',
          'zygoma debridement',
          'Debridement of orbital floor/walls',
        ],
      },
      {
        part1: 'Exenteration of eye in case of',
        option: [
          'Vision loss',
          'Total ophthalmoplegia',
          'Chemosis',
          'Necrosis of orbital tissues',
        ],
      },
      {
        part1: 'Frontal bone and skull base',
        option: [
          'Anterior table: Debridement',
          'Posterior table: Cranialization',
          'Debridement of Osteomyelitic skull bone and involvement of the cerebral parenchyma (Safe maximum resection)',
        ],
      },
      {
        part1: 'Follow up after surgery',
        option: [
          'Relook nasal endoscopy of weekly intervals for 6 weeks to assess epithelization of nasal cavity and to remove any residual necrotic bone',
        ],
      },
    ],
  },
];
