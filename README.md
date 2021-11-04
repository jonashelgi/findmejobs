### findmejobs
Ert þú þreytt/ur á að leita í tugi starfsumsókna eftir rétta starfinu?
<br> Væri ekki betra ef þú fengir lista af störfum sem innihalda ákveðinn leitarorð?
<br> Þetta forrit leitar af störfum á Alfred.is, tvinna.is og storf.is fyrir þig og gefur þér lista af öllum þeim störfum sem passa við þín leitarorð.
<br>  
Til þess að nota þetta kerfi þarft þú að vera með Node.js á tölvunni. Hægt er downloada því hérna: https://nodejs.org/en/.

### Notkun: 
1. Hlaða niður zip eða clona repoið.
2. Opna möppuna í command line. (Til dæmis: "cd C:\Users\nafn\findmejobs").
3. Hlaða niður öllum dependency með "npm install".
4. Opna findmejobs.js og bæta við þínum leitarorðum í keywords.
5. Keyra skránna findmejobs.js með "node findmejobs.js" frá command line.
6. Skoða öll störfin sem birtast í Outcome möppunni.

### Gallar
Ekki er hægt að leita af Javascript, HTML og CSS eins og er hjá Tvinna.is og Storf.is þar sem leitað er í HTML kóða hjá þeim.
<br> En það er hægt hjá Alfred.is.
<br>
<br> Ef leitarorð er t.d. react að þá mun það passa líka við reaction. Þetta verður lagað í framtíðinni.

### Alfred.is
Ætti einungis að taka nokkrar sec að fá niðurstöður.

### Tvinna.is & Storf.is
Ætti að taka 3mín að fá niðurstöður.
