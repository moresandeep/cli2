/* 
mostly this is here for the control characters. event.keyCode
is actually a keyboard scancode of some sort, so it's a fool's errand 
to try to translate keyCode (which, charCode) to actual characters. 
Despite what the websites will tell you. The strategy used here is to 
use a hidden textarea to collect characters. It goes:

-event fires
-does textarea have a character in it?
	-use that character, clear the textarea, done
-is it a keyup event?
	- yes: exit
-construct a name for the keypress: [ALT_][CTRL_][SHIFT_]keyname
-act (or not) on the name

-Note the browser reserves a *lot* of keys. 
*/
var keycodes={
	1:'CTRL_a',
	2:'CTRL_b', // bookmark, Konq
	3:'CTRL_c',
	4:'CTRL_d', // "duplicate", i guess (Konq), bookmark FF
	5:'CTRL_e',
	6:'CTRL_f', // Konq/FF find text
	7:'CTRL_g',
	8:'BACKSPACE', // safari traps this
	9:'TAB', // also CTRL_i = page info
	10:'CTRL_j',
	11:'CTRL_k',
	12:'CTRL_l', // location bar, FF&K 
	13:'ENTER',
	14:'CTRL_n', // new, FF,K
	15:'CTRL_o', // Open, K&FF
	16:'SHIFT', // CTRL_p = print
	17:'CTRL', //CTRL_q = quit
	18:'ALT', //CTRL_r = reload, K
	19:'CTRL_s', // and 'BREAK',
	20:'CAPSLOCK', // CTRL_t=new tab K,FF
	21:'CTRL_u',
	22:'CTRL_v',
	23:'CTRL_w', // = close (tab) K
	24:'CTRL_x',
	25:'CTRL_y',
	26:'CTRL_z',
	27:'ESC',
	28:'LEFT', //iCab
	29:'RIGHT', //iCab
	30:'UP', //iCab
	31:'DOWN', //iCab
	32:' ',
	33:'PGUP', //=!(Konq)
	34:'PGDN',
	35:'END', //=#(Konq)
	36:'HOME', //=$(Konq)
	37:'LEFT', //=%(Konq)
	38:'UP', //=&(Konq)
	39:'RIGHT',
	40:'DOWN', //=((Konq)
	41:')', //Konq
	42:'*', //Konq
	43:'+',
	44:'SYSRQ',
	45:'INS', // or -
	46:'DEL', // or .
	47:'/',
	48:'0',
	49:'1',
	50:'2',
	51:'3',
	52:'4',
	53:'5',
	54:'6',
	55:'7',
	56:'8',
	57:'9',
	59:';',
	61:'=',

	64:'@',
	65:'A',
	66:'B',
	67:'C',
	68:'D',
	69:'E',
	70:'F',
	71:'G',
	72:'H',
	73:'I',
	74:'J',
	75:'K',
	76:'L',
	77:'M',
	78:'N',
	79:'O',
	80:'P',
	81:'Q',
	82:'R',
	83:'S',
	84:'T',
	85:'U',
	86:'V',
	87:'W',
	88:'X',
	89:'Y',
	90:'Z',
        95:'_',
	96:'NUM_0',
	97:'a',
	98:'b',
	99:'c',
	100:'d',
	101:'e',
	102:'f',
	103:'g',
	104:'h',
	105:'i',
	106:'j', //=^(Konq)
	107:'k',
	108:'l',
	109:'m',
	110:'n',
	111:'o', //help
	112:'p', 
	113:'q', // find again
	114:'r',
	115:'s', // reload
	116:'t', // location bar
	117:'u', 
	118:'v',
	119:'w',
	120:'x',
	121:'y',
	122:'z',
	126:'~',
	127:'DEL',
	144:'NUMLOCK',
	145:'SCRLOCK',
	186:';', // Mac
	187:'=', // Mac
	188:',',
	189:'_', // Mac
	190:'.',
	191:'/',
	192:'`',
	219:'[',
	221:']',
	220:'\\',
	222:'\'',
	225:'WIN', // safari 3.1
	228:'MENU', // safari 3.1
	63232: 'UP', //safari
	63233: 'DOWN', //safari
	63234: 'LEFT', //safari
	63235: 'RIGHT', //safari
	63273: 'HOME', //safari
	63275: 'END', //safari
	63276: 'PGUP', //safari
	63277: 'PGDN' //safari
};

