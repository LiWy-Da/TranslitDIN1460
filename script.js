
// =========================
// TRANSLITERATIONSTABELLEN
// =========================
const tables = {
  DIN: {
    ru: {"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
         "Д":"D","д":"d","Е":"E","е":"e","Ё":"Ë","ё":"ë","Ж":"Ž","ж":"ž",
         "З":"Z","з":"z","И":"I","и":"i","Й":"J","й":"j","К":"K","к":"k",
         "Л":"L","л":"l","М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o",
         "П":"P","п":"p","Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t",
         "У":"U","у":"u","Ф":"F","ф":"f","Х":"Ch","х":"ch","Ц":"C","ц":"c",
         "Ч":"Č","ч":"č","Ш":"Š","ш":"š","Щ":"Šč","щ":"šč",
         "Ы":"Y","ы":"y","Э":"Ė","э":"ė","Ю":"Ju","ю":"ju","Я":"Ja","я":"ja","Ь":"ʹ","ь":"ʹ","Ъ":"ʺ","ъ":"ʺ"},
    uk: {"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"H","г":"h",
         "Ґ":"G","ґ":"g","Д":"D","д":"d","Е":"E","е":"e","Є":"Je","є":"je",
         "Ж":"Ž","ж":"ž","З":"Z","з":"z","И":"Y","и":"y","І":"I","і":"i",
         "Ї":"Ï","ї":"ï","Й":"J","й":"j","К":"K","к":"k","Л":"L","л":"l",
         "М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o","П":"P","п":"p",
         "Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t","У":"U","у":"u",
         "Ф":"F","ф":"f","Х":"Ch","х":"ch","Ц":"C","ц":"c","Ч":"Č","ч":"č",
         "Ш":"Š","ш":"š","Щ":"Šč","щ":"šč","Ю":"Ju","ю":"ju","Я":"Ja","я":"ja","'":"ʼ","Ь":"ʹ"},
    be: {"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"H","г":"h",
         "Д":"D","д":"d","Е":"E","е":"e","Ё":"Ë","ё":"ë","Ж":"Ž","ж":"ž",
         "З":"Z","з":"z","І":"I","і":"i","Й":"J","й":"j","К":"K","к":"k",
         "Л":"L","л":"l","М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o",
         "П":"P","п":"p","Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t",
         "У":"U","у":"u","Ў":"Ŭ","ў":"ŭ","Ф":"F","ф":"f","Х":"Ch","х":"ch",
         "Ц":"C","ц":"c","Ч":"Č","ч":"č","Ш":"Š","ш":"š","Ы":"Y","ы":"y",
         "Э":"Ė","э":"ė","Ю":"Ju","ю":"ju","Я":"Ja","я":"ja"},
    sr: {"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
         "Д":"D","д":"d","Ђ":"Đ","ђ":"đ","Е":"E","е":"e","Ж":"Ž","ж":"ž",
         "З":"Z","з":"z","И":"I","и":"i","Ј":"J","ј":"j","К":"K","к":"k",
         "Л":"L","л":"l","Љ":"Lj","љ":"lj","М":"M","м":"m","Н":"N","н":"n",
         "Њ":"Nj","њ":"nj","О":"O","о":"o","П":"P","п":"p","Р":"R","р":"r",
         "С":"S","с":"s","Т":"T","т":"t","Ћ":"Ć","ћ":"ć","У":"U","у":"u",
         "Ф":"F","ф":"f","Х":"H","х":"h","Ц":"C","ц":"c","Ч":"Č","ч":"č",
         "Џ":"Dž","џ":"dž","Ш":"Š","ш":"š"},
    bg: {"А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
         "Д":"D","д":"d","Е":"E","е":"e","Ж":"Ž","ж":"ž","З":"Z","з":"z",
         "И":"I","и":"i","Й":"J","й":"j","К":"K","к":"k","Л":"L","л":"l",
         "М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o","П":"P","п":"p","Р":"R","р":"r",
         "С":"S","с":"s","Т":"T","т":"t","У":"U","у":"u","Ф":"F","ф":"f","Х":"Ch","х":"ch",
         "Ц":"C","ц":"c","Ч":"Č","ч":"č","Ш":"Š","ш":"š","Щ":"Št","щ":"št","Ъ":"Ă","ъ":"ă",
         "Ю":"Ju","ю":"ju","Я":"Ja","я":"ja"}
  },
 

  ALA: {
    ru: {
      "А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
      "Д":"D","д":"d","Е":"E","е":"e","Ё":"Ë","ё":"ë","Ж":"Zh","ж":"zh",
      "З":"Z","з":"z","И":"I","и":"i","Й":"Ĭ","й":"ĭ","К":"K","к":"k",
      "Л":"L","л":"l","М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o",
      "П":"P","п":"p","Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t",
      "У":"U","у":"u","Ф":"F","ф":"f","Х":"Kh","х":"kh","Ц":"T͡S","ц":"t͡s",
      "Ч":"Ch","ч":"ch","Ш":"Sh","ш":"sh","Щ":"Shch","щ":"shch",
      "Ы":"Y","ы":"y","Э":"E","э":"e","Ю":"I͡U","ю":"i͡u","Я":"I͡A","я":"i͡a","Ъ":"ʺ","ъ":"ʺ","Ь":"ʹ","ь":"ʹ"
    },

    uk: {
      "А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"H","г":"h",
      "Ґ":"G","ґ":"g","Д":"D","д":"d","Е":"E","е":"e","Є":"I͡E","є":"i͡e",
      "Ж":"ZH","ж":"z͡h","З":"Z","з":"z","И":"Y","и":"y","І":"I","і":"i",
      "Ї":"Ï","ї":"ї","Й":"Ĭ","й":"ĭ","К":"K","к":"k","Л":"L","л":"l",
      "М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o","П":"P","п":"p",
      "Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t","У":"U","у":"u",
      "Ф":"F","ф":"f","Х":"Kh","х":"kh","Ц":"T͡S","ц":"t͡s",
      "Ч":"Ch","ч":"ch","Ш":"Sh","ш":"sh","Щ":"Shch","Ю":"I͡U","ю":"i͡u","Я":"I͡A","я":"i͡a","'":"'","Ь":"ʹ"
    },

    be: {
      "А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"H","г":"h",
      "Д":"D","д":"d","Е":"E","е":"e","Ё":"Ë","ё":"ë","Ж":"Zh","ж":"zh",
      "З":"Z","з":"z","І":"I","і":"i","Й":"Ĭ","й":"ĭ","К":"K","к":"k",
      "Л":"L","л":"l","М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o",
      "П":"P","п":"p","Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t",
      "У":"U","у":"u","Ў":"Ŭ","ў":"ŭ","Ф":"F","ф":"f","Х":"Kh","х":"kh",
      "Ц":"T͡S","ц":"t͡s","Ч":"Ch","ч":"ch","Ш":"Sh","ш":"sh",
      "Ы":"Y","ы":"y","Э":"E","э":"e","Ю":"I͡U","ю":"i͡u","Я":"I͡A","я":"i͡a"
    },

    sr: {
      "А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
      "Д":"D","д":"d","Ђ":"Đ","ђ":"đ","Е":"E","е":"e","Ж":"Ž","ж":"ž",
      "З":"Z","з":"z","И":"I","и":"i","Ј":"J","ј":"j","К":"K","к":"k",
      "Л":"L","л":"l","Љ":"Lj","љ":"lj","М":"M","м":"m","Н":"N","н":"n",
      "Њ":"Nj","њ":"nj","О":"O","о":"o","П":"P","п":"p","Р":"R","р":"r",
      "С":"S","с":"s","Т":"T","т":"t","Ћ":"Ć","ћ":"ć","У":"U","у":"u",
      "Ф":"F","ф":"f","Х":"H","х":"h","Ц":"C","ц":"c","Ч":"Č","ч":"č",
      "Џ":"Dž","џ":"dž","Ш":"Š","ш":"š"
    },

    bg: {
      "А":"A","а":"a","Б":"B","б":"b","В":"V","в":"v","Г":"G","г":"g",
      "Д":"D","д":"d","Е":"E","е":"e","Ж":"Zh","ж":"zh","З":"Z","з":"z",
      "И":"I","и":"i","Й":"Ĭ","й":"ĭ","К":"K","к":"k","Л":"L","л":"l",
      "М":"M","м":"m","Н":"N","н":"n","О":"O","о":"o","П":"P","п":"p",
      "Р":"R","р":"r","С":"S","с":"s","Т":"T","т":"t","У":"U","у":"u",
      "Ф":"F","ф":"f","Х":"Kh","х":"kh","Ц":"T͡S","ц":"t͡s",
      "Ч":"Ch","ч":"ch","Ш":"Sh","ш":"sh","Щ":"Sht","щ":"sht",
      "Ъ":"Ă","ъ":"ă","Ю":"I͡U","ю":"i͡u","Я":"I͡A","я":"i͡a"
    }
  }

  
};


// =========================
// REVERSE PREFERRED VARIANTS
// =========================
const reversePreferred = {
  ALA: {
    ru: {
      "E": "Е",
      "e": "е",
      "Ë": "Ё",
      "Zh": "Ж",
      "zh": "ж",
      "Ĭ": "Й",
      "ĭ": "й",
      "Kh": "Х",
      "kh": "х",
      "T͡S": "Ц",
      "t͡s": "ц",
      "Ch": "Ч",
      "ch": "ч",
      "Sh": "Ш",
      "sh": "ш",
      "Shch": "Щ",
      "shch": "щ",
      "Y": "Ы",
      "y": "ы",
      "I͡U": "Ю",
      "i͡u": "ю",
      "I͡A": "Я",
      "i͡a": "я",
      "ʹ": "Ь",
      "ʺ": "Ъ"
    }
  }
};




// =========================
// FUNKTIONEN
// =========================
function transliterieren() {
  const text = document.getElementById("input").value;
  const lang = document.getElementById("lang").value;
  const system = document.getElementById("system").value;

  const map = tables[system][lang];
  if(!map){
    alert("Keine Tabelle für diese Kombination von Sprache und System!");
    return;
  }

  let result = text;
  for (let key in map) {
    result = result.split(key).join(map[key]);
  }

  document.getElementById("output").value = result;
}


function ruecktransliterieren() {
  let text = document.getElementById("input").value;
  const lang = document.getElementById("lang").value;
  const system = document.getElementById("system").value;

  // -------------------------
  // Vor der Rücktransliteration normalisieren
  // -------------------------
  if (system === "ALA") {
    text = denormalizeALA(text);
  }

  const map = tables[system]?.[lang];
  if (!map) {
    alert("Keine Tabelle für diese Kombination von Sprache und System!");
    return;
  }

  const preferred = reversePreferred[system]?.[lang] || {};

  let reverse = {};
  for (let key in map) {
    if (!(map[key] in preferred)) { 
      reverse[map[key]] = key;
    }
  }

  reverse = { ...reverse, ...preferred };

  const keys = Object.keys(reverse).sort((a, b) => b.length - a.length);

  // -------------------------
  // Rücktransliteration
  // -------------------------
  let result = text;
  for (let k of keys) {
    result = result.split(k).join(reverse[k]);
  }

  document.getElementById("output").value = result;
}
function umtransliterieren() {
  let input = document.getElementById("input").value;
  const lang = document.getElementById("lang").value;

  const sourceSystem = document.getElementById("system").value;
  const targetSystem = document.getElementById("targetSystem").value;

  if (sourceSystem === targetSystem) {
    alert("Quell- und Zielsystem sind identisch.");
    return;
  }

  const sourceMap = tables[sourceSystem]?.[lang];
  const targetMap = tables[targetSystem]?.[lang];

  if (!sourceMap || !targetMap) {
    alert("Keine Tabelle für diese Kombination vorhanden.");
    return;
  }

  // -------------------------
  // 0) Normalisierung für ALA-Kombinationen
  // -------------------------
  if (sourceSystem === "ALA") {
    input = denormalizeALA(input);
  }

  // -------------------------
  // 1) Rücktransliteration → Kyrillisch
  // -------------------------
  const preferred = reversePreferred[sourceSystem]?.[lang] || {};
  let reverse = {};
  for (let key in sourceMap) {
    if (!(sourceMap[key] in preferred)) {
      reverse[sourceMap[key]] = key;
    }
  }
  reverse = { ...reverse, ...preferred };
  const reverseKeys = Object.keys(reverse).sort((a, b) => b.length - a.length);

  let cyrillic = input;
  for (let k of reverseKeys) {
    cyrillic = cyrillic.split(k).join(reverse[k]);
  }

  // -------------------------
  // 2) Vorwärtstransliteration → Zielsystem
  // -------------------------
  let result = cyrillic;
  for (let key in targetMap) {
    result = result.split(key).join(targetMap[key]);
  }

  document.getElementById("output").value = result;
}

// =========================
// Hilfsfunktion: Normalisierung ALA
// =========================
function denormalizeALA(text) {
  const denormMap = {
    "TS": "T͡S",
    "ts": "t͡s",
    "IA": "I͡A",
    "ia": "i͡a",
    "IU": "I͡U",
    "iu": "i͡u",
    "IE": "I͡E",
    "ie": "i͡e"
  };

  const keys = Object.keys(denormMap).sort((a, b) => b.length - a.length);

  let result = text;
  for (let k of keys) {
    const re = new RegExp(k, "g");
    result = result.replace(re, denormMap[k]);
  }
  return result;
}


function copyOutput() {
  const output = document.getElementById("output");

  if (!output.value) {
    alert("Kein Text zum Kopieren vorhanden!");
    return;
  }

  output.select();
  output.setSelectionRange(0, 99999); // für mobile Geräte

  navigator.clipboard.writeText(output.value)
    .then(() => {
      document.getElementById("copyStatus").textContent = "✓ Kopiert";
      setTimeout(() => {
        document.getElementById("copyStatus").textContent = "";
      }, 1500);
    })
    .catch(() => {
      alert("Kopieren fehlgeschlagen.");
    });
}
// =========================
// SESSION-SPEICHER FÜR DROPDOWN-WERTE
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = ["system", "lang", "targetSystem"];

  dropdowns.forEach(id => {
    const el = document.getElementById(id);

    // 1) Wert beim Laden wiederherstellen
    const saved = sessionStorage.getItem(id);
    if (saved) el.value = saved;

    // 2) Wert speichern, wenn sich der Dropdown ändert
    el.addEventListener("change", () => {
      sessionStorage.setItem(id, el.value);
    });
  });
});

