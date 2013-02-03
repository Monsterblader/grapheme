UserDict = new Meteor.Collection("userDictionary");
LastPhrase = new Meteor.Collection("lastPhrase");


UserDict.insert({word:"after", entry:{"Entries":{"Entry":[{"@id":"6e2b450a_114ee8912f5_1f5","@field":"201","Ref":{"@resource":"etymologies","@topic":"00663"},"Head":{"HWD":{"#text":"after"},"HYPHENATION":{"#text":"af‧ter"},"HOMNUM":{"#text":"1"},"FREQ":[{"#text":"S1"},{"#text":"W1"}],"PronCodes":{"PRON":{"#text":"ˈɑːftə"},"AMEVARPRON":{"#text":"ˈæftər"}},"POS":[{"#text":"preposition"},{"#text":"conjunction"},{"#text":"adverb"}]},"Sense":[{"@id":"6e2b450a_114ee8912f5_202","DEF":{"#text":"when a particular event or time has happened, or when someone has done something"},"OPP":{"#text":"before"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_206","#text":"After the war many soldiers stayed in France.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975696.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975696.mp3"}},{"@id":"6e2b450a_114ee8912f5_207","#text":"I go swimming every day after work.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975697.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975697.mp3"}},{"@id":"6e2b450a_114ee8912f5_208","#text":"Do you believe in life after death?","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975699.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975699.mp3"}},{"@id":"6e2b450a_114ee8912f5_209","#text":"The first attack started just after midnight.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813680.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813680.mp3"}},{"@id":"6e2b450a_114ee8912f5_20a","#text":["David went to bed "," supper."],"COLLOINEXA":{"#text":"straight after"},"GLOSS":{"#text":"immediately after"},"multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813681.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813681.mp3"}},{"@id":"6e2b450a_114ee8912f5_20d","#text":"After you’d called the police, what did you do?","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813686.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813686.mp3"}},{"@id":"6e2b450a_114ee8912f5_20e","#text":"Zimmerman changed his name after he left Germany.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813687.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813687.mp3"}},{"@id":"6e2b450a_114ee8912f5_20f","#text":["People still remember the 1958 revolution and what ","."],"COLLOINEXA":{"#text":"came after"},"GLOSS":{"#text":"happened after it"},"multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813688.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813688.mp3"}}],"GramExa":{"PROPFORM":{"#text":"after doing something"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_214","#text":"After leaving school, Mackay worked in a restaurant for a year."}},"ColloExa":[{"COLLO":{"#text":"two days\/three weeks etc after (something)"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_217","#text":"Ten years after he bought the painting, Carswell discovered that it was a fake."}},{"COLLO":{"#text":"the day\/week\/year etc after (something)"},"GLOSS":{"#text":"the next day, week etc"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_21b","#text":"His car was outside your house the morning after Bob’s engagement party."},{"@id":"6e2b450a_114ee8912f5_21c","#text":"I’ll see you again tomorrow or the day after."},{"@id":"6e2b450a_114ee8912f5_21d","#text":"She retired from politics the year after she received the Nobel Prize."}]},{"COLLO":{"#text":"soon\/not long\/shortly after (something)"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_220","#text":"Not long after the wedding, his wife became ill."},{"@id":"6e2b450a_114ee8912f5_221","#text":"The family moved to Hardingham in June 1983, and Sarah’s first child was born soon after."}]}]},{"@id":"6e2b450a_114ee8912f5_222","DEF":{"#text":"when a particular amount of time has passed"},"OPP":{"#text":"before"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_226","#text":"After ten minutes remove the cake from the oven.","multimedia":{"@href":"\/multimedia\/exa_pron\/ldoce5_exa000039.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/ldoce5_exa000039.mp3"}},{"@id":"6e2b450a_114ee8912f5_227","#text":"You’ll get used to it after a while.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813700.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813700.mp3"}},{"@id":"6e2b450a_114ee8912f5_228","#text":"After months of negotiation, an agreement was finally reached.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813701.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813701.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_229","DEF":{"#text":"following someone or something else in a list or a piece of writing, or in order of importance"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_22c","#text":"Whose name is after yours on the list?","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975726.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975726.mp3"}},{"@id":"6e2b450a_114ee8912f5_22d","#text":"The date should be written after the address.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975727.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975727.mp3"}},{"@id":"6e2b450a_114ee8912f5_22e","#text":"After football, tennis is my favourite sport.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813702.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813702.mp3"}},{"@id":"6e2b450a_114ee8912f5_22f","#text":"The UK is the world’s third largest arms producer, after the USA and Russia.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813703.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813703.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_230","GEO":{"#text":"American English"},"DEF":{"#text":"used when telling the time to say how many minutes have passed since a particular hour"},"BREQUIV":{"#text":"past"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_235","#text":["The movie starts at a quarter "," after seven."],"GLOSS":{"#text":"fifteen minutes"},"multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975741.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975741.mp3"}}},{"@id":"6e2b450a_114ee8912f5_237","LEXUNIT":{"#text":"day after day\/year after year etc"},"DEF":{"#text":"continuously for a very long time"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_23b","#text":"He’s worked in that same office week after week, year after year, since he was 18.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975746.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975746.mp3"}}},{"@id":"6e2b450a_114ee8912f5_23c","Subsense":[{"DEF":{"#text":"following someone in order to stop or speak to them"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_240","#text":"Go after him and apologize."},{"@id":"6e2b450a_114ee8912f5_241","#text":"I heard someone running after me, and a voice called my name."}]},{"DEF":{"#text":"in the direction of someone who has just left"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_244","#text":"‘Good luck,’ she called after me as I left."},{"@id":"6e2b450a_114ee8912f5_245","#text":"Harry stood in the doorway gazing after her."}]}]},{"@id":"6e2b450a_114ee8912f5_246","DEF":{"#text":"when someone has left a place or has finished doing something"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_249","#text":"Remember to close the door after you.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975750.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975750.mp3"}},{"@id":"6e2b450a_114ee8912f5_24a","#text":"I spend all day cleaning up after the kids.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975751.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975751.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_24b","DEF":{"#text":"because of something that happened earlier"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_24e","#text":"I’m not surprised he walked out, after the way she treated him.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975760.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975760.mp3"}},{"@id":"6e2b450a_114ee8912f5_24f","#text":"After your letter, I didn’t think I’d ever see you again.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975761.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975761.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_250","DEF":{"#text":"in spite of something that was done in the past"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_253","#text":"How can you treat me like this after all I’ve done for you?","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813713.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813713.mp3"}}},{"@id":"6e2b450a_114ee8912f5_254","DEF":{"#text":"when you have passed a particular place or travelled a certain distance along a road"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_256","#text":"Turn left after the hotel.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813717.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813717.mp3"}},{"@id":"6e2b450a_114ee8912f5_257","#text":"After a mile you will come to a crossroads.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813718.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813718.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_258","LEXUNIT":{"#text":"be after somebody\/something"},"Subsense":[{"DEF":{"#text":"to be looking for someone or something"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_25d","#text":"That boy’s always in trouble – the police are after him again."},{"@id":"6e2b450a_114ee8912f5_25e","#text":"‘Were you after anything in particular?’ ‘No, we’re just looking.’"}]},{"REGISTERLAB":{"#text":"informal"},"DEF":{"#text":"to want to have something that belongs to someone else"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_263","#text":"I think Chris is after my job."}}]},{"@id":"6e2b450a_114ee8912f5_264","LEXUNIT":{"#text":"one after another\/one after the other"},"DEF":{"#text":"if a series of events or actions happen one after another, each one happens soon after the previous one"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_268","#text":"Ever since we moved here it’s been one problem after another.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975788.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975788.mp3"}}},{"@id":"6e2b450a_114ee8912f5_269","LEXUNIT":{"#text":"after all"},"Subsense":[{"DEF":{"#text":"in spite of what you thought was true or expected to happen"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_26e","#text":"He wrote to say they couldn’t give me a job after all."},{"@id":"6e2b450a_114ee8912f5_26f","#text":"Union leaders announced that they would, after all, take part in the national conference."}]},{"DEF":{"#text":"used to say that something should be remembered or considered, because it helps to explain what you have just said"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_273","#text":"Prisoners should be treated with respect – they are human beings after all."},{"@id":"6e2b450a_114ee8912f5_274","#text":"I don’t know why you’re so concerned – it isn’t your problem after all."}]}]},{"@id":"6e2b450a_114ee8912f5_275","GEO":{"#text":"especially British English"},"DEF":{"#text":"used to say who or what first had the name that someone or something has been given"},"EXAMPLE":[{"@id":"6e2b450a_114ee8912f5_279","#text":"His name is Alessandro, after his grandfather.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975809.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975809.mp3"}},{"@id":"6e2b450a_114ee8912f5_27a","#text":"It was named Waterloo Bridge, after the famous battle.","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-001813723.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-001813723.mp3"}}]},{"@id":"6e2b450a_114ee8912f5_27b","REGISTERLAB":{"#text":"formal"},"DEF":{"#text":"in the same style as a particular painter, musician etc"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_280","#text":"a painting after Rembrandt","multimedia":{"@href":"\/multimedia\/exa_pron\/p008-000975816.mp3","@type":"EXA_PRON","#text":"\/multimedia\/exa_pron\/p008-000975816.mp3"}}},{"@id":"6e2b450a_114ee8912f5_281","Subsense":[{"LEXUNIT":{"#text":"after you"},"REGISTERLAB":{"#text":"spoken"},"DEF":{"#text":"used to say politely that someone else can use or do something before you do"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_287","#text":"‘Do you need the copier?’ ‘After you.’"}},{"LEXUNIT":{"#text":"after you with something"},"DEF":{"#text":"used to ask someone if you can have or use something after they have finished"},"EXAMPLE":{"@id":"6e2b450a_114ee8912f5_28c","#text":"After you with that knife, please."}}]}],"Tail":{"Crossref":{"Crossrefto":[{"@href":"6e2b450a.11503f8242d.6195","REFLEX":{"#text":"a man\/woman after my own heart"},"REFHWD":{"#text":"heart"},"REFSENSENUM":{"#text":"22"}},{"@href":"6e2b450a.1150446158e.2630","REFLEX":{"#text":"take after"},"REFHWD":{"#text":"take"},"REFHOMNUM":{"#text":"1"}}]},"ThesBox":{"Section":{"Exponent":[{"EXP":{"#text":"after"},"POS":{"#text":"preposition"},"DEF":{"#text":["after something happens, or after a period of time has passed. "," is used especially when talking about the past"],"DEFBOLD":{"#text":"After"}},"THESEXA":[{"#text":"We went for a walk after lunch."},{"#text":"After an hour, we got tired of waiting and went home."},{"@class":"DVD","#text":["They got married "," Christmas."],"COLLOINEXA":{"#text":"just after"}}]},{"EXP":{"#text":"in"},"POS":{"#text":"preposition"},"DEF":{"#text":["after a particular period of time. "," is used especially when talking about the future, especially the next few minutes, hours, days etc"],"DEFBOLD":{"#text":"In"}},"THESEXA":[{"#text":"The concert’s due to start in a few minutes."},{"#text":"I’ll come back in an hour."},{"#text":"In a few years’ time, this place will look completely different."}]},{"EXP":{"#text":"within"},"POS":{"#text":"preposition"},"DEF":{"#text":"after less than a month, two weeks etc has passed – used especially when the time seems surprisingly short"},"THESPROPFORM":{"#text":"within a month\/two weeks etc"},"THESEXA":[{"@class":"DVD","#text":"He developed a headache at lunchtime, and within two hours he was dead."},{"#text":"Within two days of arriving she had managed to upset everyone."}]},{"EXP":{"#text":"24 hours\/a year etc from now"},"DEF":{"#text":"at a time 24 hours, a year etc after now"},"THESEXA":{"#text":"A week from now we’ll be in Paris."}},{"EXP":{"#text":"afterwards"},"Variant":{"LINKWORD":{"#text":"also "},"LEXVAR":{"#text":"afterward"},"GEO":{"#text":"especially American English"}},"POS":{"#text":"adverb"},"DEF":{"#text":"after an event or time you have mentioned"},"THESEXA":[{"@class":"DVD","#text":"Jones admitted afterwards that she had been very nervous during the game."},{"@class":"DVD","#text":"Speaking to reporters afterward, he said the operation had been a success."},{"#text":["He moved to Belgium, and "," he met Angela."],"COLLOINEXA":{"#text":"soon afterwards"}}]},{"EXP":{"#text":"later"},"POS":{"#text":"adverb"},"DEF":{"#text":"some time after now or after the time you are talking about"},"THESEXA":[{"#text":"I’ll tell you about it later when I’m less busy."},{"#text":"James went off, and came back ten minutes later with some food."}],"THESPROPFORM":{"#text":"two months\/three years etc later"}},{"EXP":{"#text":"subsequently"},"POS":{"#text":"adverb"},"REGISTERLAB":{"#text":"formal"},"DEF":{"#text":"after something had happened in the past"},"THESEXA":{"#text":"The book was published in 1954 and was subsequently translated into fifteen languages."}}]}}},"multimedia":[{"@href":"\/multimedia\/us_hwd\/after1.mp3","@type":"US_PRON","#text":"\/multimedia\/us_hwd\/after1.mp3"},{"@href":"\/multimedia\/gb_hwd\/after_prep0205.mp3","@type":"GB_PRON","#text":"\/multimedia\/gb_hwd\/after_prep0205.mp3"}]},{"@id":"6e2b450a_114ee8912f5_297","Head":{"HWD":{"#text":"after"},"HYPHENATION":{"#text":"after"},"HOMNUM":{"#text":"2"},"POS":{"#text":"adjective"},"GRAM":{"#text":"only before noun"}},"Sense":[{"@id":"6e2b450a_114ee8912f5_29e","LEXUNIT":{"#text":"in after years"},"REGISTERLAB":{"#text":"literary"},"DEF":{"#text":"in the years after the time that has been mentioned"}},{"@id":"6e2b450a_114ee8912f5_2a3","REGISTERLAB":{"#text":"technical"},"DEF":{"#text":"in the back part of a boat or an aircraft"}}],"multimedia":[{"@href":"\/multimedia\/us_hwd\/after1.mp3","@type":"US_PRON","#text":"\/multimedia\/us_hwd\/after1.mp3"},{"@href":"\/multimedia\/gb_hwd\/after_prep0205.mp3","@type":"GB_PRON","#text":"\/multimedia\/gb_hwd\/after_prep0205.mp3"}]}]}}})


