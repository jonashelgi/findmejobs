## findmejobs
Ert þú þreyttur að leita í tugi starfsumsókna eftir rétta starfinu?
<br> Væri ekki betra ef þú fengir lista af störfum sem innihalda ákveðinn leitarorð?
<br> Þetta forrit leitar af störfum á Alfred.is og tvinna.is fyrir þig og gefur þér lista af öllum þeim störfum sem passa við þín leitarorð.
<br>  
<br>Til þess að nota þetta kerfi þarft þú að vera með Node.js á tölvunni. Hægt er downloada því hérna: https://nodejs.org/en/.

### Notkun: 
1. Hlaða niður zip af öllum kóðanum eða clonaðu repoið.
<br>2. Opna möppuna í command line. (Til dæmis: "cd C:\Users\nafn\findmejobs").
<br>3. Hlaða niður öllum dependency með "npm install".
<br>4. Keyra skránna index.js með "node index.js".
<br>5. Skoða öll störfin sem birtast í Outcome möppunni sem er inn í möppunni sem þú ert í.

### Gallar
Ekki er hægt að leita af Javascript eins og er hjá Tvinna.is og Storf.is þar sem leitað er í HTML kóða hjá þeim.

### Alfred.is
Það ætti ekki að tala langan tíma að fá niðurstöður hér því við köllum á Alfred API til að fá niðurstöður.

### Tvinna.is & Storf.is
Þar sem við þurfum að skoða hvern link tvisvar því þeir eru ekki með aðgengilegt API þá tekur svona 3mín að fá niðurstöður á fínu neti.
