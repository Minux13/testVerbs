 //infinitivo     pasado,        participio,       3er p,	         gerundio,              significado			significado extendido
var v= [

	["want",	"wanted","wanted","wants","wanting","querer/desear/necesitar",""],
	["ignore",	"ignored","ignored","ignores","ignoring","ignorar/pasarporalto/hacercasoomiso",""],
	["travel",	"travelled","travelled","travels","travelling","viajar/recorrer/desplazarse/ir",""],
	["tune",	"tuned","tuned","tunes","tuning","afinar/sintonizar/ajustar",""],
	["change",	"changed","changed","changes","changing","cambiar/modificar/variar",""],
	["increase",	"increased","increased","increases","increasing","aumentar/incrementar/mejorar",""],		
	["exercise",	"exercised","exercised","exercises","exercising","ejercer/ejercitar/actuar",""],
	["locate",	"located","located","locates","locating","localizar/ubicar/encontrar",""],
	["purchase",	"purchased","purchased","purchases","purchasing","adquirir/contratar/comprar",""],
	["impress",	"impressed","impressed","impresses","impressing","impresionar/recalcar/impactar/marcar",""],
	["try",		"tried","tried","tries","trying","intentar/tratar/probar",""],
	["discover",	"discovered","discovered","discovers","discovering","descubrir/conocer/encontrar",""],
	["recommend",	"recommended","recommended","recommends","recommending","recomendar/aconsejar/recomendarse",""],
	["manage",	"managed","managed","manages","managing","gestionar/administrar/manejar/lograr",""],
	["die",		"died","died","dies","dying","morir/morirse/matar",""],
	["knock",	"knocked","knocked","knocks","knocking","llamar/golpear/tocar",""],
	["join",	"joined","joined","joins","joining","unirsea/unir/unirse",""],
	["look",	"looked","looked","looks","looking","mirar/parecer/buscar",""],
	["express",	"expressed","expressed","expresses","expressing","expresar/manifestar/expresarse",""],
	["talk",	"talked","talked","talks","talking","hablar/decir/conversar",""],
	["hunt",	"hunted","hunted","hunts","hunting","cazar/buscar/perseguir",""],
	["witness",	"witnessed","witnessed","witnesses","witnessing","presenciar/atestiguar/sertestigo",""],
	["notice",	"noticed","noticed","notices","noticing","notar/darsecuenta/observar",""],
	["love",	"loved","loved","loves","loving","amar/encantar/querer",""],
	["relax",	"relaxed","relaxed","relaxes","relaxing","relajar/relajarse/calmar",""],
	["fix",		"fixed","fixed","fixes","fixing","arreglar/fijar/solucionar",""],
	["excuse",	"excused","excused","excuses","excusing","excusar/disculpar/justificar",""],
	["organize",	"organized","organized","organizes","organizing","organizar/ordenar/convocar",""],
	["greet",	"greeted","greeted","greets","greeting","saludar/recibir/darlabienvenida",""],
	["introduce",	"introduced","introduced","introduces","introducing","introducir/presentar/establecer/adoptar","to make something exist or happen for the first time./He took me around the room and introduced me to everyone."],
	["review",	"reviewed","reviewed","reviews","reviewing","examinar/revisar/estudiar",""],
	["chat",	"chatted","chatted","chats","chatting","hablar/charlar/conversar",""],
	["disagree",	"disagreed","disagreed","disagrees","disagreeing","discrepar/estarendesacuerdo/disentir",""],
	["terrorize",	"terrorized","terrorized","terrorizes","terrorizing","aterrorizara/aterrorizar/atemorizara",""],
	["program",	"programmed","programmed","programs","programming","programar",""],
	["share",	"shared","shared","shares","sharing","compartir/intercambiar/repartir",""],
	["date",	"dated","dated","dates","dating","salir/datar/partir",""],
	["like",	"liked","liked","likes","liking","gustar/parecer/agradar",""],
	["list",	"listed","listed","lists","listing","enumerar/registrar/listar",""],
	["interview",	"interviewed","interviewed","interviews","interviewing","entrevistar/interrogar/entrevistarse",""],
	["enjoy",	"enjoyed","enjoyed","enjoys","enjoying","disfrutar/gozar/gustar",""],
	["plan",	"planned","planned","plans","planning","planear/planificar/prever",""],
	["participate",	"participated","participated","participates","participating","participar/intervenir/colaborar",""],
	["push",	"pushed","pushed","pushes","pushing","empujar/presionar/impulsar",""],
	["dry",		"dried","dried","dries","drying","secar/secarse/enjugar",""],
	["substitute",	"substituted","substituted","substitutes","substituting","sustituir/reemplazar/substituir",""],
	["snow",	"snowed","snowed","snows","snowing","",""],
	["remember",	"remembered","remembered","remembers","remembering","recordar/acordar/acordarse",""],
	["follow",	"followed","followed","follows","following","seguir/aplicar/cumplir",""],
	["move",	"moved","moved","moves","moving","mover/avanzar/mudar",""],
	["water",	"watered","watered","waters","watering","regar/beber/diluir",""],
	["present",	"presented","presented","presents","presenting","presentar/plantear/exponer",""],
	["welcome",	"welcomed","welcomed","welcomes","welcoming","acoger/recibir/saludar/agradecer",""],
	["check",	"checked","checked","checks","checking","comprobar/revisar/mirar",""],
	["handle",	"handled","handled","handles","handling","manejar/manipular/soportar/hacer",""],
	["discuss",	"discussed","discussed","discusses","discussing","discutir/examinar/debatir",""],
	["protect",	"protected","protected","protects","protecting","proteger/protegerse/defender",""],
	["receive",	"received","received","receives","receiving","recibir/obtener/percibir",""],
	["work",	"worked","worked","works","working","trabajar/funcionar/obrar",""],
	["underline",	"underlined","underlined","underlines","underlining","subrayar/resaltar/destacar/recalcar",""],
	["release",	"released","released","releases","releasing","liberar/soltar/entregar",""],
	["decide",	"decided","decided","decides","deciding","decidir/determinar/pronunciarse",""],
	["design",	"designed","designed","designs","designing","diseñar/elaborar/proyectar",""],
	["fill",	"filled","filled","fills","filling","llenar/rellenar/cubrir",""],
	["entertain",	"entertained","entertained","entertains","entertaining","entretener/considerar/entretenerse",""],
	["provide",	"provided","provided","provides","providing","proveer/mantener/proporcionar/suministrar",""],
	["live",	"lived","lived","lives","living","vivir/residir/habitar",""],
	["guess",	"guessed","guessed","guesses","guessing","adivinar/imaginar/suponer",""],
	["use",		"used","used","uses","using","utilizar/usar/consumir",""],
	["describe",	"described","described","describes","describing","describir/indicar/explicar",""],
	["improve",	"improved","improved","improves","improving","mejorar/aumentar/perfeccionar",""],
	["miss",	"missed","missed","misses","missing","extrañar/perder/echardemenos",""],
	["scare",	"scared","scared","scares","scaring","asustar/espantar/intimidar",""],
	["expect",	"expected","expected","expects","expecting","esperar/suponer/prever",""],
	["last",	"lasted","lasted","lasts","lasting","durar/aguantar/perdurar",""],
	["chase",	"chased","chased","chases","chasing","perseguir/seguir/cazar",""],
	["suggest",	"suggested","suggested","suggests","suggesting","sugerir/indicar/proponer",""],
	["surprise",	"surprised","surprised","surprises","surprising","sorprender/extrañar/sorprenderse",""],
	["listen",	"listened","listened","listens","listening","escuchar/oír/prestaratención",""],
	["dress",	"dressed","dressed","dresses","dressing","vestir/vestirse/vendar",""],
	["scan",	"scanned","scanned","scans","scanning","escanear/ojear/explorar/rastrear",""],
	["label",	"labelled","labelled","labels","labelling","etiquetar/calificar/marcar",""],
	["repair",	"repaired","repaired","repairs","repairing","reparar/arreglar/repararse",""],
	["open",	"opened","opened","opens","opening","abrirse/iniciar/incoar",""],
	["touch",	"touched","touched","touches","touching","tocar/abordar/afectar",""],
	["practice",	"practiced","practiced","practices","practicing","practicar/ensayar/ejercer",""],
	["invite",	"invited","invited","invites","inviting","invitar/pedir/solicitar",""],
	["rain",	"rained","rained","rains","raining","llover",""],
	["wish",	"wished","wished","wishes","wishing","desear/felicitar",""],
	["freeze",	"froze","frozen","freezes","freezing","congelar/congelarse/bloquear",""],
	["disturb",	"disturbed","disturbed","disturbs","disturbing","molestar/perturbar/alterar",""],
	["mark",	"marked","marked","marks","marking","marcar/conmemorar/celebrar",""],
	["relate",	"related","related","relates","relating","relacionar/relatar/narrar","Rlacion, relacionarse con"],
	["play",	"played","played","plays","playing","jugar/desempeñar/tocar",""],
	["spell",	"spelled/spelt","spelled/spelt","spells","spelling","deletrear/escribir/explicar",""],
	["solve",	"solved","solved","solves","solving","resolver/solucionar/arreglar",""],
	["end",		"ended","ended","ends","ending","terminar/acabar/finalizar",""],
	["jump",	"jumped","jumped","jumps","jumping","saltar/salirse/tirar",""],
	["walk",	"walked","walked","walks","walking","caminar/ir/pasear",""],
	["watch",	"watched","watched","watches","watching","mirar/vigilar/cuidar",""],
	["depend",	"depended","depended","depends","depending","depender/contar/confiar",""],
	["need",	"needed","needed","needs","needing","necesitar/precisar/requerir",""],
	["pardon",	"pardoned","pardoned","pardons","pardoning","disculpar/perdonar/indultar",""],
	["resist",	"resisted","resisted","resists","resisting","resistir/resistirse/evitar",""],
	["sail",	"sailed","sailed","sails","sailing","navegar/zarpar/salir",""],
	["imagine",	"imagined","imagined","imagines","imagining","imaginar/imaginarse/suponer",""],
	["warn",	"warned","warned","warns","warning","advertir/prevenir/avisar/alertar",""],
	["hate",	"hated","hated","hates","hating","odiar",""],
	["slow",	"slowed","slowed","slows","slowing","reducir/bajar/alentar/retardar/ralentizar",""],
	["destroy",	"destroyed","destroyed","destroys","destroying","destruir/destrozar/destruirse",""],
	["name",	"named","named","names","naming","llamar/nombrar/mencionar",""],
	["turn",	"turned","turned","turns","turning","girar/voltear/convertir/apagar",""],
	["pick",	"picked","picked","picks","picking","recoger/elegir/escoger/seleccionar",""],
	["study",	"studied","studied","studies","studying","estudiar/examinar/analizar",""],
	["sneeze",	"sneezed","sneezed","sneezes","sneezing","estornudar",""],
	["jog",		"jogged","jogged","jogs","jogging","correr/refrescar/trotar",""],
	["prefer",	"preferred","preferred","prefers","preferring","preferir/presentar",""],
	["dance",	"danced","danced","dances","dancing","bailar/danzar/hacerbailar",""],
	["please",	"pleased","pleased","pleases","pleasing","complacer/placer/agradar",""],
	["happen",	"happened","happened","happens","happening","pasar/suceder/ocurrir",""],
	["order",	"ordered","ordered","orders","ordering","ordenar/pedir/decretar",""],
	["deliver",	"delivered","delivered","delivers","delivering","entregar/dar/","Entregar una pizza, He delivered a long speech, Asistir en un parto"],
	["hail",	"hailed","hailed","hails","hailing","granizar/saludar/aclamar/llamar/aplaudir",""],
	["fish",	"fished","fished","fishes","fishing","pescar/faenar/buscar",""],
	["return",	"returned","returned","returns","returning","volver/regresar/devolver",""],
	["damage",	"damaged","damaged","damages","damaging","dañar/perjudicar/lesionar",""],
	["offer",	"offered","offered","offers","offering","ofrecer/dar/brindar",""],
	["pack",	"packed","packed","packs","packing","empacar/envasar/hacerlasmaletas",""],
	["measure",	"measured","measured","measures","measuring","medir/evaluar/cuantificar",""],
	["taste",	"tasted","tasted","tastes","tasting","probar/saber/saborear",""],
	["vary",	"varied","varied","varies","varying","variar/diferir/modificar",""],
	["rest",	"rested","rested","rests","resting","descansar/reposar/recaer",""],
	["hope",	"hoped","hoped","hopes","hoping","esperar/esperanzar",""],
	["number",	"numbered","numbered","numbers","numbering","sumar/numerar/contar",""],
	["worry",	"worried","worried","worries","worrying","preocupar/preocuparse/temer",""],
	["wait",	"waited","waited","waits","waiting","esperar/aguardar/aguantar",""],
	["skate",	"skated","skated","skates","skating","patinar",""],
	["identify",	"identified","identified","identifies","identifying","identificar/determinar/detectar",""],
	["mention",	"mentioned","mentioned","mentions","mentioning","mencionar/hablar/señalar",""],
	["paint",	"painted","painted","paints","painting","pintar/pintarse/describir",""],
	["note",	"noted","noted","notes","noting","observar/señalar/notar",""],
	["match",	"matched","matched","matches","matching","igualar/coincidir/corresponder",""],
	["step",	"stepped","stepped","steps","stepping","avanzar/pasar/pisar",""],
	["help",	"helped","helped","helps","helping","ayudar/contribuir/evitar",""],
	["shop",	"shopped","shopped","shops","shopping","comprar/irdecompras/hacercompras",""],
	["persuade",	"persuaded","persuaded","persuades","persuading","persuadir/convencer/incitara",""],
	["stress",	"stressed","stressed","stresses","stressing","subrayar/destacar/acentuar/recalcar",""],
	["predict",	"predicted","predicted","predicts","predicting","predecir/prever/pronosticar",""],
	["eliminate",	"eliminated","eliminated","eliminates","eliminating","eliminar/erradicar/suprimir",""],
	["fry",		"fried","fried","fries","frying","freír/freírse/quemar",""],
	["include",	"included","included","includes","including","incluir/figurar/comprender",""],
	["wash",	"washed","washed","washes","washing","lavar/lavarse/limpiar",""],
	["thank",	"thanked","thanked","thanks","thanking","agradecer/darlasgracias/felicitar",""],
	["land",	"landed","landed","lands","landing","aterrizar/desembarcar/conseguir",""],
	["film",	"filmed","filmed","films","filming","filmar/grabar/rodar",""],
	["shout",	"shouted","shouted","shouts","shouting","gritar/chillar/vociferar",""],
	["wrestle",	"wrestled","wrestled","wrestles","wrestling","luchar/pelear/forcejear",""],
	["pass",	"passed","passed","passes","passing","pasar/aprobar/transmitir",""],
	["perform",	"performed","performed","performs","performing","realizar/desempeñar/cumplir",""],
	["stop",	"stopped","stopped","stops","stopping","dejar/detener/parar",""],
	["ski",		"skied","skied","skis","skiing","esquiar",""],
	["pamper",	"pampered","pampered","pampers","pampering","mimar/consentir",""],
	["start",	"started","started","starts","starting","empezar/comenzar/iniciar",""],
	["link",	"linked","linked","links","linking","vincular/relacionar/conectar",""],
	["repeat",	"repeated","repeated","repeats","repeating","repetir/reiterar/repetirse",""],
	["park",	"parked","parked","parks","parking","estacionar/aparcar/estacionarse",""],
	["save",	"saved","saved","saves","saving","salvar/ahorrar/guardar",""],
	["learn",	"learned/learnt","learned/learnt","learns","learning","aprender/saber/enterarse",""],
	["exhibit",	"exhibited","exhibited","exhibits","exhibiting","exhibir/mostrar/presentar",""],
	//
	["harm",	"harmed","harmed","harms","harming","perjudicar/dañar/lesionar",""],
	["grant",	"granted","granted","grants","granting","conceder/otorgar/dar",""],
	["decrease",	"decreased","decreased","decreases","decreasing","disminuir/reducir/bajar",""],
	//
	
	["laugh",	"laughed","laughed","laughs","laughing","reir",""],	
	["cough",	"coughed","coughed","coughs","coughing","toser",""],
	["advise",	"advised","advised","advises","advising","aconsejar/asesorar/avisar",""],
	["argue",	"argued","argued","argues","arguing","discutir/argumentar/sostener","Also; Persuadir de(positivo); disuadir de (negativo)I’ll try to argue him into going;He argued her out of buying the dress/Sostener con argumentos"],
	["apply",	"applied","applied","applies","applying","aplicar/aplicarse/solicitar",""],
	["appear",	"appeared","appeared","appears","appearing","parecer/aparecer/figurar",""],
	["answer",	"answered","answered","answers","answering","responder/contestar/atender",""],
	["allow",	"allowed","allowed","allows","allowing","permitir/dejar/poder",""],
	["aim",		"aimed","aimed","aims","aiming","apuntar/pretender/aspirar","Aspirar, pretender:We’re aiming for a ten percent increase in sales/Apuntar:He aimed the gun at the target/Pretender, tener la intención, proponerse:He aims at finishing tomorrow"],
	["agree",	"agreed","agreed","agrees","agreeing","acordar/aceptar/estardeacuerdo",""],
	["affect",	"affected","affected","affects","affecting","afectar/influiren/alterar",""],
	["admit",	"admitted","admitted","admits","admitting","admitir/reconocer/confesar",""],
	["add",		"added","added","adds","adding","añadir/agregar/sumar",""],
	["act",		"acted","acted","acts","acting","actuar/comportar",""],
	["achieve",	"achieved","achieved","achieves","achieving","lograr/alcanzar/conseguir","Conseguir: We finally achieved our goal of buying a house"],
	["accept",	"accepted","accepted","accepts","accepting","aceptar/asumir/admitir",""],
	["clean",	"cleaned","cleaned","cleans","cleaning","limpiar/lavar/recoger",""],
	["claim",	"claimed","claimed","claims","claiming","reclamar/afirmar/alegar","Reclamar:She claimed $2,500 in travel expenses./Afirmar, pretender:She claimed that the dog attacked her."],
	["charge",	"charged","charged","charges","charging","cobrar/acusar/cargar","Cobrar:How much do you charge for delivery?/Acusar:He has been charged with murder/Cargar un celular/Embestir, arremeter:The bull charged at the boy/Correr: The children charged out of the school."],
	["cause",	"caused","caused","causes","causing","causar/provocar/producir",""],
	["carry",	"carried","carried","carries","carrying","llevar/cargar/transportar","He was carrying my bags/She still carries his photo in her wallet/Trasportar en aviones o mosquitos enfermedades"],
	["care",	"cared","cared","cares","caring","importar/cuidar/preocupar",""],
	["call",	"called","called","calls","calling","llamar/pedir/avisar",""],
	["belong",	"belonged","belonged","belongs","belonging","pertenecer/corresponder/formarparte",""],
	["believe",	"believed","believed","believes","believing","creer/pensar/parecer",""],
	["base",	"based","based","bases","basing","basar/fundamentar/basarse",""],
	["avoid",	"avoided","avoided","avoids","avoiding","evitar/eludir/impedir",""],
	["attack",	"attacked","attacked","attacks","attacking","atacar/combatir/agredir",""],
	["ask",		"asked","asked","asks","asking","preguntar/pedir/hacer",""],
	["arrive",	"arrived","arrived","arrives","arriving","llegar/lograr/venir",""],
	["arrange",	"arranged","arranged","arranges","arranging","organizar/arreglar/disponer","organizar, concertar:I’ve arranged a meeting with him."],
	["contain",	"contained","contained","contains","containing","contener/incluir/figurar",""],
	["contact",	"contacted","contacted","contacts","contacting","contactar/comunicarsecon/dirigirse",""],
	["consist",	"consisted","consisted","consists","consisting","componerse/consistir/constar",""],
	["consider",	"considered","considered","considers","considering","considerar/examinar/estudiar",""],
	["connect",	"connected","connected","connects","connecting","conectar/conectarse/relacionar",""],
	["confirm",	"confirmed","confirmed","confirms","confirming","confirmar/afirmar/comprobar",""],
	["concern",	"concerned","concerned","concerns","concerning","preocupar/referir/concernir",""],
	["complete",	"completed","completed","completes","completing","completar/concluir/terminar",""],
	["complain",	"complained","complained","complains","complaining","quejar/quejarse/reclamar","I complain about the noise"],
	["compare",	"compared","compared","compares","comparing","comparar/compararse/cotejar",""],
	["commit",	"committed","committed","commits","committing","cometer/comprometer","Cometer:He went to prison for a crime he didn’t commit/Comprometer:I haven’t committed myself yet/Internar:She was committed to prison."],
	["collect",	"collected","collected","collects","collecting","coleccionar/acumular/reunir/recopilar",""],
	["close",	"closed","closed","closes","closing","cerrar/acercar/clausurar/concluir",""],
	["climb",	"climbed","climbed","climbs","climbing","subir/escalar/trepar",""],
	["clear",	"cleared","cleared","clears","clearing","aclarar/despejar/limpiar",""],
	["disappear",	"disappeared","disappeared","disappears","disappearing","desaparecer/desparecer/desvanecerse",""],
	["develop",	"developed","developed","develops","developing","desarrollar/elaborar/establecer",""],
	["deny",	"denied","denied","denies","denying","negar/denegar/rechazar",""],
	["demand",	"demanded","demanded","demands","demanding","exigir/pedir/demandar",""],
	["cry",		"cried","cried","cries","crying","llorar/gritar",""],
	["cross",	"crossed","crossed","crosses","crossing","cruzar/atravesar/pasar",""],
	["create",	"created","created","creates","creating","crear/generar/establecer",""],
	["cover",	"covered","covered","covers","covering","cubrir/abarcar/sufragar",""],
	["count",	"counted","counted","counts","counting","contar/valer/importar",""],
	["correct",	"corrected","corrected","corrects","correcting","corregir/rectificar/subsanar",""],
	["copy",	"copied","copied","copies","copying","copiar/imitar",""],
	["cook",	"cooked","cooked","cooks","cooking","cocinar/preparar/cocer",""],
	["control",	"controlled","controlled","controls","controlling","controlar/combatir/fiscalizar",""],
	["contribute",	"contributed","contributed","contributes","contributing","contribuir/aportar/participar",""],
	["continue",	"continued","continued","continues","continuing","seguir/continuar/proseguir",""],
	["fold",	"folded","folded","folds","folding","doblar/plegar/retirarse","Cruzarse de brazos/to bend something so that one part of it lies flat on top of another part, or to bend in this way"],
	["finish",	"finished","finished","finishes","finishing","terminar/acabar/finalizar",""],
	["fasten",	"fastened","fastened","fastens","fastening","abrochar/sujetar/fijar/ajustar",""],
	["fail",	"failed","failed","fails","failing","fallar/fracasar/dejar",""],
	["face",	"faced","faced","faces","facing","enfrentar/afrontar/hacerfrente","dar a, mirar hacia:The room faces south.She turned to face him/To have a problem,encontrarse con:Passengers could face long delays./to accept that something unpleasant is true and start to deal with the situation,aceptar: I think he has to face the fact that she no longer loves him."],
	["extend",	"extended","extended","extends","extending","ampliar/extender/prorrogar",""],
	["explain",	"explained","explained","explains","explaining","explicar/explicarse/aclarar",""],
	["experience",	"experienced","experienced","experiences","experiencing","experimentar/sufrir/disfrutar",""],
	["exist",	"existed","existed","exists","existing","existir/haber/subsistir",""],
	["examine",	"examined","examined","examines","examining","examinar/estudiar/analizar",""],
	["encourage",	"encouraged","encouraged","encourages","encouraging","fomentar/alentar/animar/promover",""],
	["enable",	"enabled","enabled","enables","enabling","permitir/poder/facilitar",""],
	["drop",	"dropped","dropped","drops","dropping","dejar/caer/tirar",""],
	["divide",	"divided","divided","divides","dividing","dividir/separar/dividirse",""],
	["own",		"owned","owned","owns","owning","tener/poseer/confesar",""],
	["occur",	"occurred","occurred","occurs","occurring","ocurrir/producirse/producir",""],
	["obtain",	"obtained","obtained","obtains","obtaining","obtener/conseguir/recibir",""],
	["mind",	"minded","minded","minds","minding","importar/molestar/pensar",""],
	["matter",	"mattered","mattered","matters","mattering","importar/darigual",""],
	["limit",	"limited","limited","limits","limiting","limitar/reducir/restringir",""],
	["kill",	"killed","killed","kills","killing","matar/asesinar/acabar",""],
	["kick",	"kicked","kicked","kicks","kicking","patear/echar/golpear",""],
	["involve",	"involved","involved","involves","involving","implicar/entrañar/incluir",""],
	["intend",	"intended","intended","intends","intending","pretender/proponer/intentar",""],
	["inform",	"informed","informed","informs","informing","informar/comunicar/fundamentar",""],
	["influence",	"influenced","influenced","influences","influencing","influiren/influir/influenciar",""],
	["indicate",	"indicated","indicated","indicates","indicating","indicar/señalar/indicarse",""],
	["head",	"headed","headed","heads","heading","ir/dirigir/dirigirse",""],
	["gain",	"gained","gained","gains","gaining","ganar/adquirir/obtener/conseguir/aumentar","You’ll gain a lot of experience working there/He's gained a lot of weight in the last few months."],
	["form",	"formed","formed","forms","forming","formar/constituir/crear",""],
	["force",	"forced","forced","forces","forcing","obligar/forzar/imponer",""],
	["survive",	"survived","survived","survives","surviving","sobrevivir/vivir/subsistir",""],
	["tend",	"tended","tended","tends","tending","tender/cuidar","Tener tendencia/to take care of; to look after, guardar:A shepherd tends his sheep."],
	["test",	"tested","tested","tests","testing","ensayar/probar/comprobar",""],
	["train",	"trained","trained","trains","training","entrenar/formar/capacitara",""],
	["treat",	"treated","treated","treats","treating","tratar/considerar/curar",""],
	["vote",	"voted","voted","votes","voting","votar/elegir/aprobar",""],
	["stay",	"stayed","stayed","stays","staying","quedar/quedarse/permanecer",""],
	["visit",	"visited","visited","visits","visiting","visitar/viajar/consultar",""],
	["wonder",	"wondered","wondered","wonders","wondering","preguntar/preguntarse/pensar",""],
	["separate",	"separated","separated","separates","separating","separar/apartar/separarse",""],
	["serve",	"served","served","serves","serving","servir/cumplir/atender",""],
	//["settle",	"settled","settled","settles","settling","resolver/arreglar/solucionar",""],
	["smile",	"smiled","smiled","smiles","smiling","sonreír/reír/sonreírse",""],
	["sort",	"sorted","sorted","sorts","sorting","arreglar",""],
	["sound",	"sounded","sounded","sounds","sounding","sonar/parecer/tocar",""],
	["state",	"stated","stated","states","stating","indicar/afirmar/decir/declarar","The medical report stated that he was mentally ill."],
	["succeed",	"succeeded","succeeded","succeeds","succeeding","teneréxito/lograr/conseguir/triunfar",""],
	["suffer",	"suffered","suffered","suffers","suffering","sufrir/padecer/serobjeto",""],
	["suit",	"suited","suited","suits","suiting","convenir/satisfacer/adaptarse",""],
	["supply",	"supplied","supplied","supplies","supplying","suministrar/proporcionar/abastecer",""],
	["support",	"supported","supported","supports","supporting","apoyar/ayudar/respaldar",""],
	["suppose",	"supposed","supposed","supposes","supposing","suponer/creer/presumir",""],
	["reflect",	"reflected","reflected","reflects","reflecting","reflejar/reflexionar/recoger",""],
	["refuse",	"refused","refused","refuses","refusing","negar/rechazar/negarse",""],
	["regard",	"regarded","regarded","regards","regarding","considerar/mirar/tratar",""],
	["remain",	"remained","remained","remains","remaining","permanecer/quedar/mantener",""],
	["remove",	"removed","removed","removes","removing","eliminar/quitar/retirar",""],
	["replace",	"replaced","replaced","replaces","replacing","sustituir/reemplazar/cambiar",""],
	["reply",	"replied","replied","replies","replying","responder/contestar/replicar",""],
	["report",	"reported","reported","reports","reporting","informar/reportar/denunciar",""],
	["represent",	"represented","represented","represents","representing","representar/constituir/suponer",""],
	["require",	"required","required","requires","requiring","requerir/exigir/necesitar",""],
	["result",	"resulted","resulted","results","resulting","resultar/derivar/ocasionar",""],
	["reveal",	"revealed","revealed","reveals","revealing","revelar/mostrar/ponerdemanifiesto",""],
	["roll",	"rolled","rolled","rolls","rolling","rodar/tirar/girar",""],
	["seem",	"seemed","seemed","seems","seeming","parecer/resultar/sonar",""],
	["record",	"recorded","recorded","records","recording","registrar/grabar/constar",""],
	["recognize",	"recognized","recognized","recognizes","recognizing","reconocer/conocer/reconocerse",""],
	["realize",	"realized","realized","realizes","realizing","darsecuenta/realizar/hacerrealidad",""],
	["reach",	"reached","reached","reaches","reaching","alcanzar/llegar/lograr","llegar a:We won’t reach Miami till five or six o’clock/alargar la mano, extender el brazo: She reached for a cigarette."],
	["raise",	"raised","raised","raises","raising","",""],
	["pull",	"pulled","pulled","pulls","pulling","",""],
	["publish",	"published","published","publishes","publishing","publicar",""],
	["prove",	"proved","proved","proves","proving","probar/demostrar/resultar",""],
	["promise",	"promised","promised","promises","promising","prometer/jurar/comprometerse",""],
	["produce",	"produced","produced","produces","producing","producir/elaborar/presentar",""],
	["prevent",	"prevented","prevented","prevents","preventing","",""],
	["press",	"pressed","pressed","presses","pressing","",""],
	["prepare",	"prepared","prepared","prepares","preparing","preparar/prepararse/elaborar",""],
	["point",	"pointed","pointed","points","pointing","señalar/apuntar/indicar",""],
	["place",	"placed","placed","places","placing","colocar/poner/hacer",""],
	["refer",	"referred","referred","refers","referring","referir/remitir/referirse",""],
	["reduce",	"reduced","reduced","reduces","reducing","reducir/disminuir/limitar",""],
	["focus",	"focused","focused","focuses","focusing","centrar/centrarse/concentrar",""],
	["enter",	"entered","entered","enters","entering","entrar/entraren/introducir",""],
	["determine",	"determined","determined","determines","determining","determinar/decidir/establecer",""],
	// stretch, grab, approach wail grumble, whine, bleat, carp, hurry rush creep flee know lie sew shine sow spill (split spil lie lay) spoil tear tread weave wring tie atach

	["curse",	"cursed","cursed","curses","cursing","",""],
	["crash",	"crashed","crashed","crashes","crashing","chocar/estallar",""],
	["compete",	"competed","competed","competes","competing","",""],
	["celebrate",	"celebrated","celebrated","celebrates","celebrating","",""],
	["cancel",	"cancelled","cancelled","cancels","cancelling","",""],
	["bother",	"bothered","bothered","bothers","bothering","",""],
	["borrow",	"borrowed","borrowed","borrows","borrowing","",""],
	["blame",	"blamed","blamed","blames","blaming","culpar/reprochar/acusar",""],
	["behave",	"behaved","behaved","behaves","behaving","",""],
	["bake",	"baked","baked","bakes","baking","hornear",""],
	["amuse",	"amused","amused","amuses","amusing","",""],
	["amaze",	"amazed","amazed","amazes","amazing","asombrar",""],
	["admire",	"admired","admired","admires","admiring","admirar/contemplar/admirarse",""],

	["disgust",	"disgusted","disgusted","disgusts","disgusting","",""],
];

//No esta el sonido de consist, refer

