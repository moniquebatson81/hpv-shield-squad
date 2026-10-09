// Edit lessons and questions here. Each level has four challenges.
// answer is the position of the correct choice, starting at 0.
window.MISSIONS = [
 {title:'Meet Your Defenders', icon:'✦', lesson:'Your immune system is your body’s team of defenders. It helps protect you from germs. Some germs, like viruses, are so tiny you cannot see them with just your eyes.', challenges:[
  {type:'train', question:'Meet three helpers! Select each card to learn its job.', cards:[['Spot','Defenders can spot germs that do not belong.'],['Respond','Defenders work together to fight germs.'],['Remember','Some defenders remember germs and can respond faster next time.']], explanation:'Your immune system can spot, respond, and remember. What a team!'},
  {question:'What is your immune system?', choices:['Your body’s team of defenders','A superhero cape','A kind of video game'], answer:0, explanation:'Your immune system helps your body defend against germs.'},
  {question:'Can you see a virus with just your eyes?', choices:['Yes, it glows','No, viruses are very tiny','Yes, it is as big as a ball'], answer:1, explanation:'Viruses are very tiny. Scientists use special tools to study them.'},
  {question:'What can some immune defenders remember?', choices:['Your favorite color','A game password','Germs they have learned to recognize'], answer:2, explanation:'Remembering helps your immune system respond faster when it meets that germ again.'}
 ]},
 {title:'Train Your Team', icon:'★', lesson:'A vaccine helps train your immune system to recognize a germ. Think of it as practice for your defenders. Vaccines help your team get ready before it meets that germ.', challenges:[
  {type:'train',question:'Power up your training plan! Select all three cards.',cards:[['Learn','A vaccine helps your immune system learn what a germ looks like.'],['Practice','Your defenders practice responding to that germ.'],['Get ready','Your team can be better prepared if that germ shows up later.']],explanation:'Learning and practice help your defenders get ready. Protection takes time to build.'},
  {question:'How does a vaccine help?',choices:['It gives you flying powers','It helps train your immune system','It replaces your immune system'],answer:1,explanation:'Vaccines help your immune system learn to recognize and respond to a germ.'},
  {question:'When is a good time to prepare your defenders?',choices:['Before meeting the germ','Only after getting sick','Only when you are a grown-up'],answer:0,explanation:'Vaccines help your team prepare before it meets the germ.'},
  {question:'Does a vaccine protect you from every germ?',choices:['Yes, every germ','Yes, and scraped knees too','No, vaccines protect against certain germs'],answer:2,explanation:'Different vaccines help protect against different germs. No vaccine protects against everything.'}
 ]},
 {title:'Stop HPV', icon:'◆', lesson:'HPV is a common virus. It can cause certain cancers later in life. Cancer is an illness where some cells in the body grow out of control. HPV vaccination helps prevent several types of cancer caused by HPV.', challenges:[
  {question:'What is HPV?',choices:['A common virus','A superhero’s name','A type of vitamin'],answer:0,explanation:'HPV is a common virus that can cause certain cancers later in life.'},
  {question:'What can HPV vaccination help prevent?',choices:['Every type of cancer','Several types of cancer caused by HPV','Every cold'],answer:1,explanation:'HPV vaccination helps prevent several types of cancer caused by HPV. It does not prevent every cancer.'},
  {question:'At what age can HPV vaccination begin?',choices:['Only at age 18','Only at age 15','At age 9'],answer:2,explanation:'HPV vaccination can begin at age 9. A caregiver and healthcare professional can help plan it.'},
  {question:'Why prepare now for your future health?',choices:['To help your defenders get ready early','Because protection happens instantly','Because vaccines give you magic powers'],answer:0,explanation:'Preparing early helps protect your future health. Vaccine protection takes time to build.'}
 ]},
 {title:'Future Defender', icon:'✧', lesson:'Final mission! Use what you learned to earn your shield. Your shield celebrates learning. Real protection comes from your immune system and recommended vaccines—not game points.', challenges:[
  {question:'Your teammate says, “Vaccines train our defenders.” Is that right?',choices:['Yes! They help the immune system prepare','No, they only change our clothes','No, they are magic shields'],answer:0,explanation:'You’ve got it! Vaccines help prepare your immune system.'},
  {question:'Choose the true HPV fact.',choices:['HPV vaccination prevents every cancer','HPV vaccination helps prevent several types of cancer','HPV is a giant germ you can see'],answer:1,explanation:'HPV vaccination helps prevent several types of cancer caused by HPV.'},
  {question:'A friend asks when HPV vaccination can begin. What do you say?',choices:['Only when you finish school','Only when you grow up','It can begin at age 9'],answer:2,explanation:'That’s right! It can begin at age 9. Ask a caregiver or healthcare professional to learn more.'},
  {question:'Who can help you learn about your vaccines?',choices:['A caregiver and healthcare professional','Only a game character','Only a superhero movie'],answer:0,explanation:'A caregiver and healthcare professional can answer questions and help plan your vaccines. Keep being curious!'}
 ]}
];
