const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = [
  './DC99YI-p.js',
  './BVjRQOmL.js'
])) => i.map(i => d[i]);
import {
  P as Ka,
  aT as Lu,
  aU as rh,
  h as Ee,
  g as Wa,
  i as qa,
  aV as Ko,
  H as Nu,
  l as gr,
  k as Da,
  m as Zt,
  B as Pu,
  a3 as xs,
  aW as ws,
  aX as yn,
  aY as ih,
  aZ as ah,
  a_ as oh,
  a$ as ch,
  S as uh,
  b0 as Mu,
  aF as Fi,
  b1 as Bu,
  F as lh,
  v as p,
  ad as dh,
  j as hh,
  D as Js,
  aB as fh,
  b2 as mh,
  b3 as Pn,
  b4 as Ot,
  b5 as Os,
  b6 as ph,
  aj as gh,
  b7 as Dh,
  b8 as _h,
  b9 as vh,
  ba as Uu,
  bb as Hu,
  bc as Si,
  aC as bh,
  bd as wh,
  be as Eh,
  bf as wr,
  bg as Ya,
  a1 as ni,
  O as Se,
  a2 as si,
  bh as yh,
  bi as Ah,
  bj as ju,
  bk as Ch,
  bl as $u,
  C as Qa,
  bm as Th,
  aJ as Ih,
  bn as Fh,
  bo as Sh,
  n as ri,
  aO as zu,
  bp as xh,
  bq as Oh,
  br as Rh,
  bs as kh,
  bt as Lh,
  bu as Nh,
  bv as Ja,
  $ as Ph,
  bw as Mh,
  p as st,
  av as Xa,
  t as nt,
  b as X,
  c as rt,
  u as W,
  bx as Er,
  q as x,
  by as Yt,
  bz as Vu,
  y as ke,
  al as Ve,
  a as Me,
  f as ue,
  w as k,
  d as me,
  r as he,
  ay as Gu,
  K as je,
  aP as ve,
  o as We,
  ak as Xs,
  Y as Bh,
  a0 as Uh,
  s as gn,
  az as Hh,
  x as Qn,
  e as Za,
  aH as mt,
  aI as Wo,
  ar as qo
} from './BVjRQOmL.js';
import './DsnmJJEf.js';
import { i as ye } from './Dqyxy4Q0.js';
import {
  p as Qe,
  r as ii,
  b as Jn,
  _ as jh,
  s as Ku
} from './CPmNPi_r.js';
import {
  s as Lt,
  o as $h,
  a as eo,
  g as zh
} from './C9j5sMHK.js';
import {
  t as Vh,
  c as Wu,
  s as Nt,
  a as to
} from './CK_ppRgH.js';
const Gh = [];
function yr(n, e = false, t = false) {
  return Dr(n, new Map(), '', Gh, null, t);
}
function Dr(n, e, t, s, r = null, i = false) {
  if (typeof n == 'object' && n !== null) {
    var a = e.get(n);
    if (a !== void 0)
      return a;
    if (n instanceof Map)
      return new Map(n);
    if (n instanceof Set)
      return new Set(n);
    if (Ka(n)) {
      var o = Array(n.length);
      e.set(n, o), r !== null && e.set(r, o);
      for (var l = 0; l < n.length; l += 1) {
        var d = n[l];
        l in n && (o[l] = Dr(d, e, t, s, null, i));
      }
      return o;
    }
    if (Lu(n) === rh) {
      o = {}, e.set(n, o), r !== null && e.set(r, o);
      for (var c in n)
        o[c] = Dr(n[c], e, t, s, null, i);
      return o;
    }
    if (n instanceof Date)
      return structuredClone(n);
    if (typeof n.toJSON == 'function' && !i)
      return Dr(n.toJSON(), e, t, s, n);
  }
  if (n instanceof EventTarget)
    return n;
  try {
    return structuredClone(n);
  } catch {
    return n;
  }
}
const Yo = 0;
const xi = 1;
function pT(n, e, t, s, r) {
  Ee && Wa();
  var i = Mu, a = yn(Mu), o = yn(Mu), l = new Pu(n);
  qa(() => {
    var d = e(), c = false;
    let u = Ee && Ko(d) === (n.data === Nu);
    if (u && (gr(Da()), Zt(false)), Ko(d)) {
      var h = ih(), f = false;
      const m = g => {
        if (!c) {
          f = true, h(false), ah.ensure(), Ee && Zt(false);
          try {
            g();
          } finally {
            oh(), ch || uh();
          }
        }
      };
      d.then(g => {
        m(() => {
          ws(a, g), l.ensure(xi, s && (D => s(D, a)));
        });
      }, g => {
        m(() => {
          ws(o, g);
          l.ensure(xi, r && (D => r(D, o)));
          if (!r)
            throw o.v;
        });
      }), Ee ? l.ensure(Yo, t) : xs(() => {
        f || m(() => {
          l.ensure(Yo, t);
        });
      });
    } else
      ws(a, d), l.ensure(xi, s && (m => s(m, a)));
    u && Zt(true);
    return () => {
      c = true;
    };
  });
}
function Kh(n, e, t) {
  Ee && Wa();
  var s = new Pu(n);
  qa(() => {
    var r = e();
    s.ensure(r, t);
  });
}
function Wh(n, e) {
  return e;
}
function qh(n, e, t) {
  for (var s = [], r = e.length, i, a = e.length, o = 0; o < r; o++) {
    let u = e[o];
    Hu(u, () => {
      if (i) {
        i.pending.delete(u);
        i.done.add(u);
        if (i.pending.size === 0) {
          var h = n.outrogroups;
          _a(Ya(i.done)), h.delete(i), h.size === 0 && (n.outrogroups = null);
        }
      } else
        a -= 1;
    }, false);
  }
  if (a === 0) {
    var l = s.length === 0 && t !== null;
    if (l) {
      var d = t, c = t.parentNode;
      Eh(c), c.append(t), n.items.clear();
    }
    _a(e, !l);
  } else
    i = {
      pending: new Set(e),
      done: new Set()
    }, (n.outrogroups ??= new Set()).add(i);
}
function _a(n, e = true) {
  for (var t = 0; t < n.length; t++)
    wr(n[t], e);
}
var Qo;
function qu(n, e, t, s, r, i = null) {
  var a = n, o = new Map(), l = (e & Bu) !== 0;
  if (l) {
    var d = n;
    a = Ee ? gr(lh(n)) : n.appendChild(Fi());
  }
  Ee && Wa();
  var c = null, u = dh(() => {
      var _ = t();
      return Ka(_) ? _ : _ == null ? [] : Ya(_);
    }), h, f = true;
  function m() {
    D.fallback = c, Yh(D, h, a, e, s), c !== null && (h.length === 0 ? (c.f & Ot) === 0 ? Uu(c) : (c.f ^= Ot, bs(c, null, a)) : Hu(c, () => {
      c = null;
    }));
  }
  var g = qa(() => {
      h = p(u);
      var _ = h.length;
      let S = false;
      if (Ee) {
        var N = hh(a) === Nu;
        N !== (_ === 0) && (a = Da(), gr(a), Zt(false), S = true);
      }
      for (var L = new Set(), U = Pn, C = ph(), R = 0; R < _; R += 1) {
        Ee && Js.nodeType === fh && Js.data === mh && (a = Js, S = true, Zt(false));
        var b = h[R], y = s(b, R), I = f ? null : o.get(y);
        I ? (I.v && ws(I.v, b), I.i && ws(I.i, R), C && Pn.skipped_effects.delete(I.e)) : (I = Qh(o, f ? a : Qo ??= Fi(), b, y, R, r, e, t), f || (I.e.f |= Ot), o.set(y, I)), L.add(y);
      }
      _ === 0 && i && !c && (f ? c = Os(() => i(a)) : (c = Os(() => i(Qo ??= Fi())), c.f |= Ot));
      Ee && _ > 0 && gr(Da());
      if (!f)
        if (C) {
          for (const [O, F] of o)
            L.has(O) || Pn.skipped_effects.add(F.e);
          Pn.oncommit(m), Pn.ondiscard(() => {
          });
        } else
          m();
      S && Zt(true), p(u);
    }), D = {
      effect: g,
      items: o,
      outrogroups: null,
      fallback: c
    };
  f = false, Ee && (a = Js);
}
function Yh(n, e, t, s, r) {
  var i = (s & wh) !== 0, a = e.length, o = n.items, l = n.effect.first, d, c = null, u, h = [], f = [], m, g, D, _;
  if (i)
    for (_ = 0; _ < a; _ += 1)
      m = e[_], g = r(m, _), D = o.get(g).e, (D.f & Ot) === 0 && (D.nodes?.a?.measure(), (u ??= new Set()).add(D));
  for (_ = 0; _ < a; _ += 1) {
    m = e[_];
    g = r(m, _);
    D = o.get(g).e;
    if (n.outrogroups !== null)
      for (const I of n.outrogroups)
        I.pending.delete(D), I.done.delete(D);
    if ((D.f & Ot) !== 0) {
      D.f ^= Ot;
      if (D === l)
        bs(D, null, t);
      else {
        var S = c ? c.next : l;
        D === n.effect.last && (n.effect.last = D.prev), D.prev && (D.prev.next = D.next), D.next && (D.next.prev = D.prev), Wt(n, c, D), Wt(n, D, S), bs(D, S, t), c = D, h = [], f = [], l = c.next;
        continue;
      }
    }
    if ((D.f & Si) !== 0 && (Uu(D), i && (D.nodes?.a?.unfix(), (u ??= new Set()).delete(D))), D !== l) {
      if (d !== void 0 && d.has(D)) {
        if (h.length < f.length) {
          var N = f[0], L;
          c = N.prev;
          var U = h[0], C = h[h.length - 1];
          for (L = 0; L < h.length; L += 1)
            bs(h[L], N, t);
          for (L = 0; L < f.length; L += 1)
            d.delete(f[L]);
          Wt(n, U.prev, C.next), Wt(n, c, U), Wt(n, C, N), l = N, c = C, _ -= 1, h = [], f = [];
        } else
          d.delete(D), bs(D, l, t), Wt(n, D.prev, D.next), Wt(n, D, c === null ? n.effect.first : c.next), Wt(n, c, D), c = D;
        continue;
      }
      for (h = [], f = []; l !== null && l !== D;)
        (d ??= new Set()).add(l), f.push(l), l = l.next;
      if (l === null)
        continue;
    }
    (D.f & Ot) === 0 && h.push(D), c = D, l = D.next;
  }
  if (n.outrogroups !== null) {
    for (const I of n.outrogroups)
      I.pending.size === 0 && (_a(Ya(I.done)), n.outrogroups?.delete(I));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || d !== void 0) {
    var R = [];
    if (d !== void 0)
      for (D of d)
        (D.f & Si) === 0 && R.push(D);
    for (; l !== null;)
      (l.f & Si) === 0 && l !== n.fallback && R.push(l), l = l.next;
    var b = R.length;
    if (b > 0) {
      var y = (s & Bu) !== 0 && a === 0 ? t : null;
      if (i) {
        for (_ = 0; _ < b; _ += 1)
          R[_].nodes?.a?.measure();
        for (_ = 0; _ < b; _ += 1)
          R[_].nodes?.a?.fix();
      }
      qh(n, R, y);
    }
  }
  i && xs(() => {
    if (u !== void 0)
      for (D of u)
        D.nodes?.a?.apply();
  });
}
function Qh(n, e, t, s, r, i, a, o) {
  var l = (a & Dh) !== 0 ? (a & _h) === 0 ? gh(t, false, false) : yn(t) : null, d = (a & vh) !== 0 ? yn(r) : null;
  return {
    v: l,
    i: d,
    e: Os(() => (i(e, l ?? t, d ?? r, o), () => {
      n.delete(s);
    }))
  };
}
function bs(n, e, t) {
  if (n.nodes)
    for (var s = n.nodes.start, r = n.nodes.end, i = e && (e.f & Ot) === 0 ? e.nodes.start : t; s !== null;) {
      var a = bh(s);
      i.before(s);
      if (s === r)
        return;
      s = a;
    }
}
function Wt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function Yu(n, e, t) {
  ni(() => {
    var s = Se(() => e(n, t?.()) || {});
    if (t && s?.update) {
      var r = false, i = {};
      si(() => {
        var a = t();
        yh(a), r && Ah(i, a) && (i = a, s.update(a));
      }), r = true;
    }
    if (s?.destroy)
      return () => s.destroy();
  });
}
function Jh(n, e) {
  var t = void 0, s;
  ju(() => {
    t !== (t = e()) && (s && (wr(s), s = null), t && (s = Os(() => {
      ni(() => t(n));
    })));
  });
}
function Pt(n, e, t, s, r, i) {
  var a = n.__className;
  if (Ee || a !== t || a === void 0) {
    var o = Vh(t, s, i);
    (!Ee || o !== n.getAttribute('class')) && (o == null ? n.removeAttribute('class') : e ? n.className = o : n.setAttribute('class', o)), n.__className = t;
  } else if (i && r !== i)
    for (var l in i) {
      var d = !!i[l];
      (r == null || d !== !!r[l]) && n.classList.toggle(l, d);
    }
  return i;
}
function va(n, e, t = false) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ka(e))
      return Ch();
    for (var s of n.options)
      s.selected = e.includes(Jo(s));
    return;
  }
  for (s of n.options) {
    var r = Jo(s);
    if ($u(r, e)) {
      s.selected = true;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Xh(n) {
  var e = new MutationObserver(() => {
    va(n, n.__value);
  });
  e.observe(n, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['value']
  }), Qa(() => {
    e.disconnect();
  });
}
function Jo(n) {
  return '__value' in n ? n.__value : n.value;
}
const hs = Symbol('class'), fs = Symbol('style'), Qu = Symbol('is custom element'), Ju = Symbol('is html');
function Xu(n) {
  if (Ee) {
    var e = false, t = () => {
        if (!e) {
          e = true;
          if (n.hasAttribute('value')) {
            var s = n.value;
            wt(n, 'value', null), n.value = s;
          }
          if (n.hasAttribute('checked')) {
            var r = n.checked;
            wt(n, 'checked', null), n.checked = r;
          }
        }
      };
    n.__on_r = t, xs(t), Oh();
  }
}
function Zh(n, e) {
  e ? n.hasAttribute('selected') || n.setAttribute('selected', '') : n.removeAttribute('selected');
}
function wt(n, e, t, s) {
  var r = Zu(n);
  Ee && (r[e] = n.getAttribute(e), e === 'src' || e === 'srcset' || e === 'href' && n.nodeName === 'LINK') || r[e] !== (r[e] = t) && (e === 'loading' && (n[kh] = t), t == null ? n.removeAttribute(e) : typeof t != 'string' && el(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function ef(n, e, t, s, r = false, i = false) {
  if (Ee && r && n.tagName === 'INPUT') {
    var a = n, o = n.type === 'checkbox' ? 'defaultChecked' : 'defaultValue';
    o in t || Xu(n);
  }
  var l = Zu(n), d = l[Qu], c = !l[Ju];
  let u = Ee && d;
  u && Zt(false);
  var h = e || {}, f = n.tagName === 'OPTION';
  for (var m in e)
    m in t || (t[m] = null);
  t.class ? t.class = Wu(t.class) : (s || t[hs]) && (t.class = null), t[fs] && (t.style ??= null);
  var g = el(n);
  for (const C in t) {
    let R = t[C];
    if (f && C === 'value' && R == null) {
      n.value = n.__value = '', h[C] = R;
      continue;
    }
    if (C === 'class') {
      var D = n.namespaceURI === 'http://www.w3.org/1999/xhtml';
      Pt(n, D, R, s, e?.[hs], t[hs]), h[C] = R, h[hs] = t[hs];
      continue;
    }
    if (C === 'style') {
      Nt(n, R, e?.[fs], t[fs]), h[C] = R, h[fs] = t[fs];
      continue;
    }
    var _ = h[C];
    if (!(R === _ && !(R === void 0 && n.hasAttribute(C)))) {
      h[C] = R;
      var S = C[0] + C[1];
      if (S !== '$$')
        if (S === 'on') {
          const b = {}, y = '$$' + C;
          let I = C.slice(2);
          var N = Lh(I);
          Fh(I) && (I = I.slice(0, -7), b.capture = true);
          if (!N && _) {
            if (R != null)
              continue;
            n.removeEventListener(I, h[y], b), h[y] = null;
          }
          if (R != null)
            if (N)
              n[`__${ I }`] = R, ri([I]);
            else {
              let O = function (F) {
                h[C].call(this, F);
              };
              h[y] = Sh(I, n, O, b);
            }
          else
            N && (n[`__${ I }`] = void 0);
        } else if (C === 'style')
          wt(n, C, R);
        else if (C === 'autofocus')
          zu(n, !!R);
        else if (!d && (C === '__value' || C === 'value' && R != null))
          n.value = n.__value = R;
        else if (C === 'selected' && f)
          Zh(n, R);
        else {
          var L = C;
          c || (L = xh(L));
          var U = L === 'defaultValue' || L === 'defaultChecked';
          if (R == null && !d && !U) {
            l[C] = null;
            if (L === 'value' || L === 'checked') {
              let b = n;
              const y = e === void 0;
              if (L === 'value') {
                let I = b.defaultValue;
                b.removeAttribute(L), b.defaultValue = I, b.value = b.__value = y ? I : null;
              } else {
                let I = b.defaultChecked;
                b.removeAttribute(L), b.defaultChecked = I, b.checked = y ? I : false;
              }
            } else
              n.removeAttribute(C);
          } else
            U || g.includes(L) && (d || typeof R != 'string') ? (n[L] = R, L in l && (l[L] = Mu)) : typeof R != 'function' && wt(n, L, R);
        }
    }
  }
  u && Zt(true);
  return h;
}
function Ar(n, e, t = [], s = [], r = [], i, a = false, o = false) {
  Th(r, t, s, l => {
    var d = void 0, c = {}, u = n.nodeName === 'SELECT', h = false;
    ju(() => {
      var m = e(...l.map(p)), g = ef(n, d, m, i, a, o);
      h && u && 'value' in m && va(n, m.value);
      for (let _ of Object.getOwnPropertySymbols(c))
        m[_] || wr(c[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var D = m[_];
        _.description === Ih && (!d || D !== d[_]) && (c[_] && wr(c[_]), c[_] = Os(() => Jh(n, () => D))), g[_] = D;
      }
      d = g;
    });
    if (u) {
      var f = n;
      ni(() => {
        va(n, d.value, true), Xh(n);
      });
    }
    h = true;
  });
}
function Zu(n) {
  return n.__attributes ??= {
    [Qu]: n.nodeName.includes('-'),
    [Ju]: n.namespaceURI === Rh
  };
}
var Xo = new Map();
function el(n) {
  var e = n.getAttribute('is') || n.nodeName, t = Xo.get(e);
  if (t)
    return t;
  Xo.set(e, t = []);
  for (var s, r = n, i = Element.prototype; i !== r;) {
    s = Nh(r);
    for (var a in s)
      s[a].set && t.push(a);
    r = Lu(r);
  }
  return t;
}
function tf(n, e, t = e) {
  var s = new WeakSet();
  Ja(n, 'input', async r => {
    var i = r ? n.defaultValue : n.value;
    i = Ri(n) ? ki(i) : i;
    t(i);
    Pn !== null && s.add(Pn);
    await Ph();
    if (i !== (i = e())) {
      var a = n.selectionStart, o = n.selectionEnd, l = n.value.length;
      if (n.value = i ?? '', o !== null) {
        var d = n.value.length;
        a === o && o === l && d > l ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = a, n.selectionEnd = Math.min(o, d));
      }
    }
  }), (Ee && n.defaultValue !== n.value || Se(e) == null && n.value) && (t(Ri(n) ? ki(n.value) : n.value), Pn !== null && s.add(Pn)), si(() => {
    var r = e();
    if (n === document.activeElement) {
      var i = Mh ?? Pn;
      if (s.has(i))
        return;
    }
    Ri(n) && r === ki(n.value) || n.type === 'date' && !r && !n.value || r !== n.value && (n.value = r ?? '');
  });
}
const Oi = new Set();
function gT(n, e, t, s, r = s) {
  var i = t.getAttribute('type') === 'checkbox', a = n;
  let o = false;
  if (e !== null)
    for (var l of e)
      a = a[l] ??= [];
  a.push(t), Ja(t, 'change', () => {
    var d = t.__value;
    i && (d = Zo(a, d, t.checked)), r(d);
  }, () => r(i ? [] : null)), si(() => {
    var d = s();
    if (Ee && t.defaultChecked !== t.checked) {
      o = true;
      return;
    }
    i ? (d = d || [], t.checked = d.includes(t.__value)) : t.checked = $u(t.__value, d);
  }), Qa(() => {
    var d = a.indexOf(t);
    d !== -1 && a.splice(d, 1);
  }), Oi.has(a) || (Oi.add(a), xs(() => {
    a.sort((d, c) => d.compareDocumentPosition(c) === 4 ? -1 : 1), Oi.delete(a);
  })), xs(() => {
    if (o) {
      var d;
      if (i)
        d = Zo(a, d, t.checked);
      else {
        var c = a.find(u => u.checked);
        d = c?.__value;
      }
      r(d);
    }
  });
}
function DT(n, e, t = e) {
  Ja(n, 'change', s => {
    var r = s ? n.defaultChecked : n.checked;
    t(r);
  }), (Ee && n.defaultChecked !== n.checked || Se(e) == null) && t(n.checked), si(() => {
    var s = e();
    n.checked = !!s;
  });
}
function Zo(n, e, t) {
  for (var s = new Set(), r = 0; r < n.length; r += 1)
    n[r].checked && s.add(n[r].__value);
  t || s.delete(e);
  return Array.from(s);
}
function Ri(n) {
  var e = n.type;
  return e === 'number' || e === 'range';
}
function ki(n) {
  return n === '' ? null : +n;
}
class ai {
  #e = new WeakMap();
  #t;
  #n;
  static entries = new WeakMap();
  constructor(e) {
    this.#n = e;
  }
  observe(e, t) {
    var s = this.#e.get(e) || new Set();
    s.add(t);
    this.#e.set(e, s);
    this.#s().observe(e, this.#n);
    return () => {
      var r = this.#e.get(e);
      r.delete(t), r.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
    };
  }
  #s() {
    return this.#t ?? (this.#t = new ResizeObserver(e => {
      for (var t of e) {
        ai.entries.set(t.target, t);
        for (var s of this.#e.get(t.target) || [])
          s(t);
      }
    }));
  }
}
var nf = new ai({ box: 'content-box' }), sf = new ai({ box: 'border-box' });
function _T(n, e, t) {
  var s = nf, r = nf.observe(n, i => t(i[e]));
  Qa(r);
}
function rf(n, e, t) {
  var s = sf.observe(n, () => t(n[e]));
  ni(() => (Se(() => t(n[e])), s));
}
const vT = 'wss://ws-api.oneme.ru/websocket', bT = '0', af = 'D9QQOhewNKDgudTuGUOjQpuapcJI6ZwXf8IavpN8uVM1', wT = '5111555847a36f2f2a0f7bc6a4bbbda4d2885368f7255e906d220c02429c6534', of = '10933', ET = 'CNHIJPLGDIHBABABA', cf = '25.12.14';
let Gn;
function uf() {
  Gn || (Gn = { instance: {} });
  return Gn;
}
function rs() {
  if (Gn = { instance: {} }, typeof window > 'u')
    return Gn;
  const n = 'TracerSDK2';
  window[n] || (window[n] = Gn);
  return window[n];
}
function oi(n) {
  const e = { instance: {} };
  let t = e.instance[n];
  t || (t = {
    plugins: [],
    inner: {},
    modules: {},
    version: '2.6.3'
  }, e.instance[n] = t);
  return t;
}
function no(n) {
  return oi(n).inner;
}
function et(n, e, t) {
  const s = no(n);
  s[e] || (s[e] = t(n));
  return s[e];
}
class lf {
  constructor() {
    this.log = [], this.logBytes = [], this.logIndex = 0, this.logTotalBytes = 0, this.logMaxBytes = 64000;
  }
  destroy() {
    this.clear();
  }
  add(e) {
    const t = `#${ this.logIndex } ${ Date.now() } | ${ e }
`, s = new Blob([t]).size;
    this.logTotalBytes += s;
    this.log.push(t);
    this.logBytes.push(s);
    this.logIndex++;
    if (this.logTotalBytes > this.logMaxBytes) {
      const r = this.logTotalBytes - this.logMaxBytes;
      let i = 0;
      const a = this.logBytes.length - 1;
      for (let o = 0; o < a; o++) {
        i += this.logBytes[o];
        if (i >= r || o == a - 1) {
          this.logBytes = this.logBytes.slice(o + 1), this.log = this.log.slice(o + 1), this.logTotalBytes -= i;
          break;
        }
      }
    }
  }
  getData() {
    return this.log;
  }
  clear() {
    this.log = [], this.logBytes = [], this.logTotalBytes = 0;
  }
}
function tl(n) {
  return oi(n).modules;
}
function is(n, e, t) {
  const s = tl(n);
  if (!s[e])
    s[e] = t(n);
  else
    throw new Error(`Tracer module "${ e }" was already initialized`);
  return s[e];
}
function $e(n, e) {
  return no(n)[e];
}
class df {
  constructor(e) {
    this.sdkKey = e;
  }
  getSdkData() {
    return $e(this.sdkKey, 'LOGS');
  }
  log(e) {
    const t = this.getSdkData();
    t && t.add(e);
  }
  clearLog() {
    const e = this.getSdkData();
    e && e.clear();
  }
}
function hf(n) {
  et(n, 'LOGS', function () {
    return new lf();
  });
  return is(n, 'log', function () {
    return new df(n);
  });
}
const pt = 'tracerMain';
function ff() {
  return hf(pt);
}
function mf(n) {
  return n === 'fatal';
}
const Cr = [
  'fatal',
  'error',
  'warning',
  'notice',
  'debug'
];
function pf(n) {
  return n ? Cr.indexOf(n) : -1;
}
function gf(...n) {
  let e = null;
  for (let t = 0; t < n.length; t++) {
    const s = pf(n[t]);
    s !== -1 && (e === null || s < e) && (e = s);
  }
  return e === null ? void 0 : Cr[e];
}
function nl() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (n) {
    const e = Math.random() * 16 | 0;
    return (n == 'x' ? e : e & 3 | 8).toString(16);
  });
}
function sl(n) {
  const e = { instance: {} };
  if (n === void 0) {
    const s = e.session;
    s && (n = s.sampled);
  }
  const t = {
    uuid: nl(),
    sampled: n
  };
  e.session = t;
  return t;
}
function zs() {
  const n = { instance: {} };
  return n.session ? n.session : sl();
}
class Df {
  constructor(e, t) {
    this.errors = [], this.keys = {}, this.sdkKey = e, this.config = t;
  }
  getConfig() {
    return this.config;
  }
  destroy() {
    this.errors = [], this.keys = {}, this.userId = void 0, this.module = void 0;
  }
  add(e) {
    const t = zs();
    t.maxSeverity = gf(t.maxSeverity, e.severity);
    if (mf(e.severity) || e.type === 'CRASH') {
      const r = t.crashesCount;
      t.crashesCount = r ? r + 1 : 1, this.errors.push(e);
      const i = $e(this.sdkKey, 'SESSION_UPLOADER'), a = $e(this.sdkKey, 'ERRORS_UPLOADER');
      i && i.setCrashed(), a && r === 1 && a.forceUpload();
    } else
      this.errors.push(e);
  }
  getData() {
    return this.errors;
  }
  dequeue(e = 1) {
    return this.errors.splice(0, e);
  }
  setKey(e, t) {
    this.keys[e] = t;
  }
  setKeys(e) {
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (this.keys[t] = e[t]);
  }
  removeKey(e) {
    delete this.keys[e];
  }
  removeKeys(e) {
    for (let t = 0, s = e.length; t < s; t++)
      this.removeKey(e[t]);
  }
  getKeys() {
    return this.keys;
  }
}
function _f(n, e, t) {
  if (!t)
    return '';
  const s = n + ': ' + e;
  return t.indexOf(s) === 0 ? t.slice(s.length + 1) : t;
}
function Tr(n, e, t, s = {}) {
  t = _f(n, e, t);
  const r = t.lastIndexOf(`
`);
  r === t.length - 1 && (t = t.slice(0, r));
  const i = s.removeFirstLines, a = s.removeLastLines;
  if (i || a) {
    let o = t.split(`
`);
    if (i || a && o.length) {
      const l = i || 0, d = a ? o.length - a : o.length;
      o = o.slice(l, d);
    }
    t = o.join(`
`);
  }
  if (s.detectByNames) {
    const o = t.split(`
`), l = [];
    for (let d = 0, c = o.length; d < c; d++) {
      const u = o[d];
      u.indexOf('APPTRACER_') === -1 && l.push(u);
    }
    t = l.join(`
`);
  }
  return t;
}
const rl = 'tracerCurrentStack';
let Li;
function vf() {
  Li || (Li = new Error(rl));
  return Li;
}
const Rs = 'ResizeObserver';
function ec(n) {
  so(il(n, 20));
}
function so(n) {
  ({ instance: {} }.currentAsyncScope = n);
}
function il(n, e) {
  if (n) {
    e === 0 && (n.parent = void 0);
    il(n.parent, e - 1);
    return n;
  }
}
let en, Ir;
try {
  en = new Map();
} catch {
}
function al() {
  clearTimeout(Ir), Ir = setTimeout(ol, 0);
}
function ol() {
  en && (en.clear(), clearTimeout(Ir), Ir = setTimeout(ol, 10000));
}
function ba(n) {
  const e = ci();
  e && (en && (e.name === Rs && !n && (n = Rs), en.set(n, e)), e.sameScopeCount--, so(cl(e)));
}
function cl(n) {
  if (n)
    return n.sameScopeCount ? n : cl(n.parent);
}
function bf() {
  so(void 0);
}
function ci() {
  return { instance: {} }.currentAsyncScope;
}
function ul(n) {
  if (en)
    return typeof n == 'string' && n.indexOf(Rs) === 0 ? en.get(Rs) : en.get(n);
}
function ll(n, e = [], t) {
  let s = '(' + n.name + ')';
  if (n.sameScopeCount > 1 && (s += ' x' + n.sameScopeCount), e.push(s), t) {
    const r = vf();
    e.push(Tr('Error', 'tracerCurrentStack', n.stack, { detectByNames: true }));
  } else
    e.push(n.stack);
  n.parent && ll(n.parent, e, t);
  return e.join(`
`);
}
function wf(n) {
  const e = $e(n, 'ERRORS_ASYNC');
  return e ? e.disableStackCleanup : false;
}
function dl(n, e, t) {
  t = e.tracerScope || t;
  if (t) {
    const s = wf(n);
    return ll(t, [Tr(e.name, e.message, e.stack, { detectByNames: !s })], !s);
  }
  return Tr(e.name, e.message, e.stack);
}
const Kn = {};
class Ni {
  constructor() {
    this.data = {};
  }
  getItem(e) {
    return this.data[e] || null;
  }
  removeItem(e) {
    this.data[e] = void 0;
  }
  setItem(e, t) {
    this.data[e] = t;
  }
}
let Rn;
function ui() {
  if (!Rn) {
    const n = { instance: {} };
    Rn = n.ls, Rn || (Rn = Ef(), n.ls = Rn);
  }
  return Rn;
}
function Ef() {
  let n;
  try {
    if (typeof window > 'u')
      return new Ni();
    n = window.localStorage;
    const e = '__ls_tracer_test';
    n.setItem(e, e);
    return n.getItem(e) !== e ? new Ni() : (n.removeItem(e), n);
  } catch {
    return new Ni();
  }
}
function ro(n) {
  return 'tracer-mute-' + n;
}
function hl(n) {
  const e = ui().getItem(ro(n));
  return e ? parseInt(e) : null;
}
function yf(n) {
  Kn[n] = null, ui().removeItem(ro(n));
}
function Vs(n) {
  return n !== 'all' && tc('all') ? true : tc(n);
}
function tc(n) {
  let e = Kn[n];
  e === void 0 && (Kn[n] = e = hl(n));
  return e ? Date.now() < e ? true : (yf(n), false) : false;
}
function Af() {
  try {
    return String(document.visibilityState);
  } catch {
    return 'unknown';
  }
}
function Cf(n, e = 0) {
  let t = 3735928559 ^ e, s = 1103547991 ^ e;
  for (let r = 0, i; r < n.length; r++)
    i = n.charCodeAt(r), t = Math.imul(t ^ i, 2654435761), s = Math.imul(s ^ i, 1597334677);
  t = Math.imul(t ^ t >>> 16, 2246822507);
  t ^= Math.imul(s ^ s >>> 13, 3266489909);
  s = Math.imul(s ^ s >>> 16, 2246822507);
  s ^= Math.imul(t ^ t >>> 13, 3266489909);
  return 4294967296 * (2097151 & s) + (t >>> 0);
}
const nc = {}, sc = {}, Tf = 10000, If = 10;
function Ff(n) {
  const e = Cf(n), t = Date.now(), s = nc[e] || t, r = sc[e] || 0, i = t - s, a = Math.floor(i / Tf), o = Math.max(0, r - a);
  return o >= If ? true : (nc[e] = t, sc[e] = o + 1, false);
}
function Sf(n, e, t) {
  const s = e.name, r = e.message, i = s + ': ' + r + `
` + dl(n, e);
  return t + `

Caused by: ` + i;
}
function Gs(n) {
  return n instanceof Error;
}
function xf(n) {
  return Cr.indexOf(n) === -1 ? (console.warn('Wrong Tracer severity, value will be ignored. Valid values: fatal, error, warning, notice, debug'), false) : true;
}
function fl(n) {
  return typeof n == 'object';
}
function Of(n) {
  return typeof n == 'function';
}
function ml(n, e = false) {
  const t = Object.prototype.toString;
  let s;
  if (fl(n)) {
    s = t.call(n);
    try {
      e && (s = JSON.stringify(n));
    } catch {
    }
  } else
    Of(n) ? s = t.call(n) : s = String(n);
  return s;
}
function rc(n, e, t) {
  for (let s = 0, r = n.length; s < r; s++) {
    const i = n[s];
    if (Rf(i, e) && t(i) === false)
      return;
  }
}
function Rf(n, e) {
  return n[e] !== void 0;
}
function pl(n) {
  return oi(n).plugins;
}
const kf = typeof window < 'u';
function ct() {
  return kf;
}
function Lf() {
  if (ct()) {
    const n = window.screen, e = {
        screenWidth: n.width,
        screenHeight: n.height,
        host: window.location.host
      };
    n.orientation && n.orientation.angle !== void 0 && (e.screenOrientationAngle = n.orientation.angle);
    return e;
  }
  return {};
}
function wa(n, e) {
  if (Vs('crashUpload'))
    return;
  const t = $e(n, 'ERRORS_DATA'), s = $e(n, 'LOGS');
  if (!t)
    return;
  let r = dl(n, e.error, e.asyncScope);
  const i = e.error.cause;
  let a;
  if (i !== void 0)
    try {
      Gs(i) ? r = Sf(n, i, r) : a = ml(i, t.getConfig().stringifyErrorDataObject);
    } catch {
    }
  const o = Object.assign(Object.assign({}, e), {
    timestamp: Date.now(),
    log: s ? s.getData().join('') : void 0,
    errorStack: r,
    causeSimpleValue: a ? a.slice(0, 100) : void 0,
    documentVisibilityState: 'unknown',
    properties: {}
  });
  o.keys = Object.assign(Object.assign({}, t.getKeys()), o.keys), o.userId || (o.userId = t.userId), $e(n, 'ERRORS_ASYNC') && (o.properties.asyncModuleEnabled = true, (e.asyncScope || e.error.tracerScope) && (o.properties.asyncModuleDataAdded = true));
  const l = t.getConfig().filterError, d = {
      error: e.error,
      errorStack: r,
      causeSimpleValue: a,
      component: o.component,
      versionName: o.versionName,
      versionCode: o.versionCode,
      severity: o.severity,
      keys: JSON.parse(JSON.stringify(o.keys)),
      issueKey: o.issueKey,
      crashIdSource: o.crashIdSource,
      userId: o.userId,
      documentVisibilityState: o.documentVisibilityState,
      errorEventType: o.errorEventType,
      timestamp: o.timestamp,
      log: o.log,
      properties: JSON.parse(JSON.stringify(o.properties))
    }, c = pl(n);
  if (Ff(o.component + (e.crashIdSource || r || e.error.name || e.error.message))) {
    rc(c, 'errorOnThrottle', function (h) {
      h.errorOnThrottle(d);
    });
    return;
  }
  if (l && l(e.error, d) === false)
    return;
  let u = false;
  rc(c, 'errorBeforeAdd', function (h) {
    const f = h.errorBeforeAdd(d);
    if (f === false) {
      u = true;
      return false;
    }
    if (f && typeof f == 'object') {
      ic(o, f), ic(d, f);
      let m = o.properties.modifiedByPlugins, g;
      m ? g = m.split(', ') : g = [], g.indexOf(h.name) === -1 && g.push(h.name), m = g.join(', '), o.properties.modifiedByPlugins = m, d.properties.modifiedByPlugins = m;
    }
  }), !u && (o.severity && !xf(o.severity) && (o.severity = void 0), t.add(o));
}
function ic(n, e) {
  let t;
  for (t in e)
    t === 'keys' && e[t] ? ac(n, t, Object.assign(Object.assign({}, n[t]), e[t])) : ac(n, t, e[t]);
}
function ac(n, e, t) {
  Nf[e] && (n[e] = t);
}
const Nf = {
  severity: true,
  keys: true,
  issueKey: true,
  crashIdSource: true,
  userId: true,
  component: true,
  versionName: true,
  versionCode: true
};
function gl(n, e) {
  const t = ml(e);
  return t ? n + ': ' + t : n;
}
let Pi = false;
function Pf(n, e = false, t = false) {
  if (typeof window > 'u' || Pi)
    return {
      destroy: function () {
      }
    };
  window.addEventListener('error', s), window.addEventListener('unhandledrejection', r), Pi = true;
  function s(i) {
    e && i.stopImmediatePropagation();
    let a;
    if (!i.error && i.message) {
      a = new Error(i.message);
      const o = cc(i);
      o && (a.stack = o, a.tracerScope = ul(a));
    } else {
      a = i.error;
      if (Gs(a)) {
        const o = a.stack, l = a.name, d = a.message;
        if (!o || o === l + ': ' + d) {
          const c = cc(i);
          c && (a.stack = c);
        }
      }
    }
    oc(n, a, i.type, t);
  }
  function r(i) {
    e && i.stopImmediatePropagation(), oc(n, i.reason, i.type, t), al();
  }
  return {
    destroy: function () {
      Pi && (window.removeEventListener('error', s), window.removeEventListener('unhandledrejection', r));
    }
  };
}
function oc(n, e, t, s) {
  if (Gs(e))
    wa(n, {
      error: e,
      type: 'CRASH',
      errorEventType: t
    });
  else if (s) {
    const r = new Error(gl('Unhandled data error', e));
    r.tracerScope = ul(e), r.cause = e, wa(n, {
      error: r,
      type: 'CRASH',
      errorEventType: t
    });
  }
}
function cc(n) {
  let e = n.filename;
  if (e) {
    const t = n.lineno, s = n.colno;
    t && (e += ':' + t, s && (e += ':' + s));
    return '    at ' + e;
  }
}
class Mf {
  constructor(e) {
    this.sdkKey = e;
  }
  getErrorsData() {
    return $e(this.sdkKey, 'ERRORS_DATA');
  }
  error(e, t) {
    let s;
    Gs(e) ? s = e : (s = new Error(gl('Unknown data error', e)), s.cause = e, s.stack = Tr(s.name, s.message, s.stack, { removeFirstLines: 1 })), wa(this.sdkKey, Object.assign(Object.assign({}, t), {
      type: 'NON_FATAL',
      error: s,
      errorEventType: 'manual',
      asyncScope: s.tracerScope ? void 0 : ci()
    }));
  }
  setErrorKey(e, t) {
    const s = this.getErrorsData();
    s && s.setKey(e, t);
  }
  setErrorKeys(e) {
    const t = this.getErrorsData();
    t && t.setKeys(e);
  }
  removeErrorKey(e) {
    const t = this.getErrorsData();
    t && t.removeKey(e);
  }
  removeErrorKeys(e) {
    const t = this.getErrorsData();
    t && t.removeKeys(e);
  }
  setUserId(e) {
    const t = this.getErrorsData();
    t && (t.userId = e);
  }
  removeUserId() {
    const e = this.getErrorsData();
    e && (e.userId = void 0);
  }
}
function Bf(n, e) {
  Error.stackTraceLimit = e.stackTraceLimit || 50;
  et(n, 'ERRORS_DATA', function () {
    return new Df(n, e);
  });
  e.disableUnhandledErrorsListeners || et(n, 'ERRORS_HANDLER', function () {
    return Pf(n, e.restrictOtherErrorListeners, e.handleOtherErrorDataType);
  });
  return is(n, 'error', function () {
    return new Mf(n);
  });
}
function Uf(n = {}) {
  return Bf(pt, {
    stackTraceLimit: n.stackTraceLimit,
    disableUnhandledErrorsListeners: n.disableUnhandledErrorsListeners,
    restrictOtherErrorListeners: n.restrictOtherErrorListeners,
    filterError: n.filterError,
    handleOtherErrorDataType: n.handleOtherErrorDataType,
    stringifyErrorDataObject: n.stringifyErrorDataObject
  });
}
const uc = 'tracer-device-id';
function io() {
  const n = ui();
  let e = n.getItem(uc);
  e || (e = nl(), n.setItem(uc, e));
  return e;
}
function Hf(n) {
  return n.getFullYear() + '-' + mn(n.getMonth() + 1) + '-' + mn(n.getDate()) + 'T' + mn(n.getHours()) + ':' + mn(n.getMinutes()) + ':' + mn(n.getSeconds()) + jf(n.getTimezoneOffset());
}
function mn(n) {
  return n < 10 ? '0' + n : n;
}
function jf(n) {
  if (n === 0)
    return 'Z';
  const e = n > 0 ? '-' : '+';
  n = Math.abs(n);
  return e + mn(Math.floor(n / 60)) + ':' + mn(n % 60);
}
function $f() {
  return ct() ? !!window.CompressionStream : false;
}
function zf(n, e, t) {
  const s = new Blob([n]);
  if (true) {
    t(s);
    return;
  }
  try {
    const r = s.stream().pipeThrough(new CompressionStream('gzip')).getReader();
    Dl(r).then(e, function () {
      t(s);
    });
  } catch {
    t(s);
  }
}
function Dl(n, e = []) {
  return n.read().then(function (t) {
    t.value && e.push(t.value);
    return t.done ? new Blob(e) : Dl(n, e);
  });
}
function ao() {
  return zs().uuid;
}
function Vf(n) {
  if (n.dataType === 'form') {
    const e = new FormData();
    for (const t in n.data)
      if (Object.prototype.hasOwnProperty.call(n.data, t)) {
        let s = n.data[t];
        typeof s == 'object' && !(s instanceof Blob) && (s = JSON.stringify(s)), e.append(t, s);
      }
    return e;
  } else
    return n.dataType === 'blob' ? n.data : JSON.stringify(n.data);
}
function Gf(n) {
  const e = n.queryParams || {}, t = [];
  n.sdkVersion && (e.sdkVersion = n.sdkVersion);
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && e[s] && t.push(s + '=' + e[s]);
  return t.length ? '?' + t.join('&') : '';
}
function Kf(n) {
  return 'https://' + (n.apiHost || 'sdk-api.apptracer.ru') + n.apiUrl + Gf(n);
}
function li(n, e) {
  if (Kn[n])
    return;
  const t = ro(n), s = hl(n);
  if (s)
    Kn[n] = s;
  else {
    const r = Kn[n] = Date.now() + e;
    ui().setItem(t, String(r));
  }
}
function Wf(n) {
  let e;
  const t = Kf(n), s = Vf(n), r = n.onRequestEnd, i = 300000, a = {};
  let o = 10000, l = n.retryCount || Infinity;
  const d = 'Content-Type';
  n.dataType === 'json' ? a[d] = 'application/json' : n.dataType === 'blob' && (a[d] = 'application/octet-stream'), n.beforeUnload ? f() : (ct() && window.addEventListener('beforeunload', f), e = c());
  function c() {
    const m = new XMLHttpRequest();
    m.open('POST', t);
    for (const g in a)
      Object.prototype.hasOwnProperty.call(a, g) && a[g] && m.setRequestHeader(g, a[g]);
    m.responseType = 'json';
    m.onload = h;
    m.onerror = h;
    m.onabort = h;
    m.ontimeout = h;
    m.send(s);
    return m;
  }
  function u() {
    o = Math.min(o * 2, i), l--, e = c();
  }
  function h(m) {
    if (!e)
      return;
    if ((m.type === 'timeout' || m.type === 'error' && e.readyState === XMLHttpRequest.DONE && e.status === 0) && l > 0) {
      setTimeout(u, o);
      return;
    }
    typeof window < 'u' && window.removeEventListener('beforeunload', f);
    try {
      const D = e.response;
      if (D.commands) {
        const _ = D.commands.globalShutdownMs;
        _ && li('all', _);
        const S = D.commands.featureShutdownMs;
        S && n.onMute(S);
      }
    } catch {
    }
    r && r();
  }
  function f() {
    if (navigator.sendBeacon) {
      e && e.abort();
      if (typeof s == 'string' || s instanceof Blob) {
        let m = a[d];
        m = n.dataType === 'blob' ? void 0 : m, navigator.sendBeacon(t, new Blob([s], m ? { type: m } : void 0));
      } else
        navigator.sendBeacon(t, s);
    } else
      e || (e = c());
  }
}
function oo(n) {
  ct() && Wf(n);
}
function qf(n, e) {
  const t = new FileReader();
  t.onloadend = function () {
    const s = String(t.result);
    e(s.slice(s.indexOf('base64,') + 7));
  }, t.readAsDataURL(new Blob([n]));
}
function Fr(n) {
  return oi(n).version;
}
function _l(n) {
  if (n)
    return n.toUpperCase();
}
let Zs;
function Yf(n) {
  var e, t, s;
  Zs || (n ? Zs = {
    userAgent: n.ua,
    browserName: n.name,
    browserVersion: n.version,
    osFamily: (e = n.os) === null || e === void 0 ? void 0 : e.family,
    osVersion: (t = n.os) === null || t === void 0 ? void 0 : t.version,
    osArchitecture: (s = n.os) === null || s === void 0 ? void 0 : s.architecture
  } : Zs = {});
  return Zs;
}
let er;
function vl(n) {
  var e;
  if (!er)
    if (n) {
      const t = 'unknown';
      er = {
        osVersion: ((e = n.os) === null || e === void 0 ? void 0 : e.version) || t,
        vendor: n.name || t,
        device: n.version || t
      };
    } else
      er = {};
  return er;
}
function co() {
  return zs().sampled;
}
class Qf {
  constructor(e, t) {
    this.CRASH_BATCH_SIZE = 100, this.UPLOAD_BATCH_TIMEOUT_MS = 15000, this.beforeUnload = false, this.sdkKey = e, this.environment = t.environment, this.appToken = t.appToken, this.versionName = t.versionName, this.versionCode = t.versionCode, this.apiHost = t.apiHost, this.userAgentData = t.userAgentData, this.uploadBatch = this.uploadBatch.bind(this), this.onUploadBatchEnd = this.onUploadBatchEnd.bind(this), this.onBatchDataEncoded = this.onBatchDataEncoded.bind(this), this.onBeforeUnload = this.onBeforeUnload.bind(this), ct() && window.addEventListener('beforeunload', this.onBeforeUnload), this.setUploadTask(1000);
  }
  onBeforeUnload() {
    this.beforeUnload = true, this.uploadBatch();
  }
  destroy() {
    clearTimeout(this.uploadBatchTimeout), ct() && window.removeEventListener('beforeunload', this.onBeforeUnload);
  }
  setUploadTask(e = this.UPLOAD_BATCH_TIMEOUT_MS) {
    clearTimeout(this.uploadBatchTimeout), !this.beforeUnload && (this.uploadBatchTimeout = setTimeout(this.uploadBatch, e));
  }
  forceUpload() {
    clearTimeout(this.uploadBatchTimeout), this.uploadBatch();
  }
  uploadBatch() {
    const e = $e(this.sdkKey, 'ERRORS_DATA');
    if (!e || Vs('crashUpload')) {
      this.setUploadTask();
      return;
    }
    const t = e.dequeue(this.CRASH_BATCH_SIZE), s = this.getFilteredRawBatchData(t);
    if (!s.length) {
      this.setUploadTask();
      return;
    }
    this.encodeBatchDataItems(s, this.onBatchDataEncoded);
  }
  onBatchDataEncoded(e) {
    zf(JSON.stringify(e), this.runUpload.bind(this, 'GZIP'), this.runUpload.bind(this, 'NONE'));
  }
  runUpload(e, t) {
    oo({
      beforeUnload: this.beforeUnload,
      sdkVersion: '2.6.3',
      apiHost: this.apiHost,
      apiUrl: '/api/crash/uploadBatch',
      data: t,
      queryParams: {
        crashToken: this.appToken,
        compressType: e
      },
      dataType: 'blob',
      onRequestEnd: this.onUploadBatchEnd,
      onMute: li.bind(null, 'crashUpload')
    });
  }
  onUploadBatchEnd() {
    this.setUploadTask(0);
  }
  encodeBatchDataItems(e, t) {
    const s = e.length;
    let r = 0;
    for (let i = 0; i < s; i++)
      this.encodeBatchDataItem(e[i], function () {
        r++, r === s && t(e);
      });
  }
  encodeBatchDataItem(e, t) {
    if (e.logsFile)
      return qf(e.logsFile, function (s) {
        e.logsFile = s, t(e);
      });
    t(e);
  }
  getFilteredRawBatchData(e) {
    if (!e.length)
      return [];
    const t = [];
    for (let s = 0; s < e.length; s++) {
      const r = e[s], a = r.error.name + ': ' + r.error.message + `
` + r.errorStack, o = {
          type: r.type,
          format: 'JS_STACKTRACE',
          severity: _l(r.severity) || r.type,
          uploadBean: this.getUploadBeanForError(r),
          stackTrace: a
        };
      r.log && (o.logsFile = r.log), t.push(o);
    }
    return t;
  }
  getUploadBeanForError(e) {
    const t = [], s = e.keys;
    if (s)
      for (const o in s)
        o && Object.prototype.hasOwnProperty.call(s, o) && t.push(`${ o }=${ s[o] }`);
    const r = this.sdkKey, i = Object.assign(Object.assign(Object.assign({}, e.properties), {
        tracerSdkVersion: Fr(r),
        timestamp: e.timestamp,
        date: Hf(new Date(e.timestamp)),
        userId: e.userId ? String(e.userId) : void 0,
        issueKey: e.issueKey,
        errorEventType: e.errorEventType,
        documentVisibilityState: e.documentVisibilityState,
        errorCause: e.causeSimpleValue
      }), {}), a = Object.assign({
        crashIdSource: e.crashIdSource,
        environment: this.environment,
        component: e.component || (r !== pt ? r : void 0),
        deviceId: io(),
        sessionUuid: ao(),
        sampled: co(),
        versionName: e.versionName || this.versionName,
        versionCode: e.versionCode || this.versionCode,
        tags: t.length ? t : void 0,
        properties: i
      }, {});
    e.crashIdSource && (a.crashIdSourceField = 'crashIdSource', i.crashIdSource = e.crashIdSource);
    return a;
  }
}
function Jf(n, e) {
  et(n, 'ERRORS_UPLOADER', function () {
    return new Qf(n, {
      appToken: e.appToken,
      apiHost: e.apiHost,
      versionName: e.versionName,
      versionCode: e.versionCode,
      environment: e.environment,
      userAgentData: e.userAgentData
    });
  });
}
function Xf(n) {
  return Jf(pt, n);
}
let Mi;
function bl() {
  try {
    Mi || (Mi = new Function('return (async function() { }).constructor;')());
    return Mi;
  } catch {
    return null;
  }
}
function Zf(n) {
  const e = bl();
  return typeof n == 'function' && e !== null && n instanceof e;
}
function lc(n, e, t) {
  t && t.stack === e ? (t.sameScopeCount++, ec(t)) : ec({
    name: n,
    stack: e,
    parent: t,
    sameScopeCount: 1
  });
}
function dc(n) {
  Gs(n) && !n.tracerScope && (n.tracerScope = ci()), ba(n);
}
const bt = {
  APPTRACER_HANDLER_WRAPPER: function (n, e) {
    if (!e || typeof e != 'function' || e.tracerWrapper)
      return e;
    const t = ci(), s = new Error(rl).stack || '';
    let r;
    Zf(e) ? r = { APPTRACER_WRAPPED_HANDLER: em()(n, e, s, t, lc, ba, dc) } : r = {
      APPTRACER_WRAPPED_HANDLER: function (...i) {
        lc(n, s, t);
        try {
          const a = e.call(this, ...i);
          ba(a);
          return a;
        } catch (a) {
          throw dc(a), a;
        }
      }
    };
    r.APPTRACER_WRAPPED_HANDLER.tracerWrapper = true;
    return r.APPTRACER_WRAPPED_HANDLER;
  }
};
let tr;
function em() {
  return tr || (tr = new Function('name', 'handler', 'stack', 'scope', 'initScope', 'endScope', 'catchEndScope', `return async function APPTRACER_WRAPPED_HANDLER(...args) {
            initScope(name, stack, scope);

            try {
                const result = await handler.call(this, ...args);
                endScope(result);
                return result;
            } catch (e) {
                catchEndScope(e);
                throw e;
            }
        };`), tr);
}
const uo = {
  APPTRACER_PATCHED_TASK: class extends Promise {
    constructor(n) {
      super(bt.APPTRACER_HANDLER_WRAPPER('Promise.constructor', n)), Object.setPrototypeOf(this, uo.APPTRACER_PATCHED_TASK.prototype);
    }
  }
};
if (bl()) {
  const n = Promise;
  Object.defineProperty(uo.APPTRACER_PATCHED_TASK, Symbol.hasInstance, {
    value: function (e) {
      return e instanceof Promise;
    }
  });
}
function as() {
  return ct() ? window : typeof self < 'u' && typeof self == 'object' && self.self === self ? self : null;
}
let hc, fc, mc;
function tm() {
  const n = as();
  if (!n)
    return {
      destroy: function () {
      }
    };
  const e = n.Promise, t = e.prototype.then, s = e.prototype.catch, r = e.prototype.finally;
  hc = {
    APPTRACER_PATCHED_TASK: function (i, a) {
      return this.tracerNoWrap ? t.call(this, i, a) : (a = a || function (o) {
        throw o;
      }, t.call(this, bt.APPTRACER_HANDLER_WRAPPER('Promise.then onFulfilled', i), bt.APPTRACER_HANDLER_WRAPPER('Promise.then onRejected', a)));
    }
  };
  e.prototype.then = hc.APPTRACER_PATCHED_TASK;
  fc = {
    APPTRACER_PATCHED_TASK: function (i) {
      this.tracerNoWrap = true;
      const a = s.call(this, bt.APPTRACER_HANDLER_WRAPPER('Promise.catch', i));
      this.tracerNoWrap = false;
      return a;
    }
  };
  e.prototype.catch = fc.APPTRACER_PATCHED_TASK;
  mc = {
    APPTRACER_PATCHED_TASK: function (i) {
      this.tracerNoWrap = true;
      const a = r.call(this, bt.APPTRACER_HANDLER_WRAPPER('Promise.finally', i));
      this.tracerNoWrap = false;
      return a;
    }
  };
  e.prototype.finally = mc.APPTRACER_PATCHED_TASK;
  n.Promise = uo.APPTRACER_PATCHED_TASK;
  return {
    destroy: function () {
      n.Promise = e, e.prototype.then = t, e.prototype.catch = s, e.prototype.finally = r;
    }
  };
}
let pc;
function nm() {
  const n = as();
  if (!n)
    return {
      destroy: function () {
      }
    };
  const e = n.setTimeout;
  pc = {
    APPTRACER_PATCHED_TASK: function (t, s, ...r) {
      return e(bt.APPTRACER_HANDLER_WRAPPER('setTimeout', t), s, ...r);
    }
  };
  n.setTimeout = pc.APPTRACER_PATCHED_TASK;
  return {
    destroy: function () {
      n.setTimeout = e;
    }
  };
}
let gc;
function sm() {
  const n = as();
  if (!n)
    return {
      destroy: function () {
      }
    };
  const e = n.setInterval;
  gc = {
    APPTRACER_PATCHED_TASK: function (t, s, ...r) {
      return e(bt.APPTRACER_HANDLER_WRAPPER('setInterval', t), s, ...r);
    }
  };
  n.setInterval = gc.APPTRACER_PATCHED_TASK;
  return {
    destroy: function () {
      n.setInterval = e;
    }
  };
}
function rm(n, e) {
  const t = no(n), s = t[e];
  s && (s.destroy(), t[e] = void 0);
}
let Dc;
function im() {
  const n = as();
  if (!n || !n.queueMicrotask)
    return {
      destroy: function () {
      }
    };
  const e = n.queueMicrotask;
  Dc = {
    APPTRACER_PATCHED_TASK: function (t) {
      return e.call(this, bt.APPTRACER_HANDLER_WRAPPER('queueMicrotask', t));
    }
  };
  n.queueMicrotask = Dc.APPTRACER_PATCHED_TASK;
  return {
    destroy: function () {
      n.queueMicrotask = e;
    }
  };
}
let nr;
function am() {
  if (nr === void 0)
    try {
      new Proxy({}, {}), nr = true;
    } catch {
      nr = false;
    }
  return nr;
}
let _c;
function om() {
  const n = as();
  if (!n || false || !n.ResizeObserver)
    return {
      destroy: function () {
      }
    };
  const e = n.ResizeObserver;
  _c = {
    APPTRACER_PATCHED_TASK: function (t, s) {
      return new t(bt.APPTRACER_HANDLER_WRAPPER(Rs, s[0]));
    }
  };
  window.ResizeObserver = new Proxy(e, { construct: _c.APPTRACER_PATCHED_TASK });
  return {
    destroy: function () {
      n.ResizeObserver = e;
    }
  };
}
let vc, bc;
function cm() {
  const n = as();
  if (!n)
    return {
      destroy: function () {
      }
    };
  const e = n.EventTarget, t = e.prototype.addEventListener, s = e.prototype.removeEventListener;
  try {
    const r = new Map();
    vc = {
      APPTRACER_PATCHED_TASK: function (i, a, o) {
        const l = r.get(a) || bt.APPTRACER_HANDLER_WRAPPER('addEventListener', a);
        r.set(a, l);
        return t.call(this, i, l, o);
      }
    }, e.prototype.addEventListener = vc.APPTRACER_PATCHED_TASK, bc = {
      APPTRACER_PATCHED_TASK: function (i, a, o) {
        const l = r.get(a);
        return s.call(this, i, l || a, o);
      }
    }, e.prototype.removeEventListener = bc.APPTRACER_PATCHED_TASK;
  } catch {
  }
  return {
    destroy: function () {
      e.prototype.addEventListener = t, e.prototype.removeEventListener = s;
    }
  };
}
function um(n, e) {
  const t = tl(n);
  t[e] && (t[e] = void 0);
}
function lm(n, e = {}) {
  et(n, 'ERRORS_ASYNC', function () {
    let s = [
      e.disablePatchPromise ? void 0 : tm(),
      e.disablePatchQueueMicrotask ? void 0 : im(),
      e.disablePatchSetTimeout ? void 0 : nm(),
      e.disablePatchSetInterval ? void 0 : sm(),
      e.disablePatchEventTarget ? void 0 : cm(),
      e.patchResizeObserver ? om() : void 0
    ];
    al();
    return {
      disableStackCleanup: !!e.disableStackCleanup,
      destroy: function () {
        for (let r = 0, i = s.length; r < i; r++) {
          const a = s[r];
          a && a.destroy();
        }
        s = [], bf();
      }
    };
  });
  const t = 'async';
  return is(n, t, function () {
    return {
      disableAsyncStack() {
        rm(n, 'ERRORS_ASYNC'), um(n, t);
      }
    };
  });
}
function dm(n = {}) {
  return lm(pt, n);
}
const di = {
    NANOSECOND: 'ns',
    MILLISECOND: 'ms'
  }, Bi = { BYTES: 'By' }, wl = { FLOAT: '10*-n' }, lo = typeof performance < 'u';
function Sr() {
  return lo ? performance.now() : Date.now();
}
function ks(n) {
  return Math.round(n * 1000000);
}
function El() {
  let n;
  !lo || !performance.now ? n = Date.now() : performance.timeOrigin ? n = performance.timeOrigin + performance.now() : performance.timing && performance.timing.navigationStart ? n = performance.timing.navigationStart + performance.now() : n = Date.now() + performance.now();
  return n;
}
function Ui(n) {
  return typeof n == 'string' ? n : n.join('-');
}
function Hi(n) {
  return typeof n == 'string' ? n : n[0];
}
class ho {
  constructor(e) {
    this.globalPerformanceAttributes = {}, this.samples = [], this.timeLabel = {}, this.sdkKey = e;
  }
  destroy() {
    this.samples = [], this.timeLabel = {};
  }
  setDynamicPerformanceAttributes(e) {
    this.dynamicPerformanceAttributes || (this.dynamicPerformanceAttributes = e);
  }
  time(e, t) {
    const s = Ui(e);
    if (this.timeLabel[s]) {
      console.warn(`Timer '${ Hi(e) }' already exists`);
      return;
    }
    this.timeLabel[s] = {
      from: Sr(),
      attributes: Object.assign({}, t)
    };
  }
  timeEnd(e, t) {
    const s = Ui(e), r = this.timeLabel[s];
    if (r !== null) {
      if (!r) {
        console.warn(`Timer '${ Hi(e) }' does not exist`);
        return;
      }
      this.timeLabel[s] = void 0, this.add({
        name: Hi(e),
        value: ks(Sr() - r.from),
        unit: 'ns',
        attributes: Object.assign(Object.assign({}, r.attributes), t)
      });
    }
  }
  timeAbort(e) {
    this.timeLabel[Ui(e)] = null;
  }
  add(e) {
    if (Vs('perfUpload'))
      return;
    if (e.value < 0)
      throw new Error('Tracer performance do not support negative values');
    let t;
    const s = ks(El()), r = this.dynamicPerformanceAttributes ? this.dynamicPerformanceAttributes() : {}, i = this.globalPerformanceAttributes, a = Object.assign(Object.assign(Object.assign({}, i), r), e.attributes);
    for (const o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (a[o] === void 0 ? delete a[o] : a[o] = String(a[o]));
    e.unit === '10*-n' ? t = {
      name: e.name,
      timeUnixNano: s,
      value: Math.round(e.value * Math.pow(10, e.precision)),
      unit: '10*-' + e.precision,
      attributes: a
    } : t = {
      name: e.name,
      timeUnixNano: s,
      value: e.value,
      unit: e.unit,
      attributes: a
    }, this.samples.push(t);
  }
  getData() {
    return this.samples;
  }
  clear() {
    this.samples = [];
  }
  dequeue(e = 1) {
    return this.samples.splice(0, e);
  }
  setPerformanceAttribute(e, t) {
    this.globalPerformanceAttributes[e] = t;
  }
  setPerformanceAttributes(e) {
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (this.globalPerformanceAttributes[t] = e[t]);
  }
  removePerformanceAttribute(e) {
    e = typeof e == 'string' ? [e] : e;
    for (let t = 0, s = e.length; t < s; t++)
      this.globalPerformanceAttributes[e[t]] = void 0;
  }
}
function hm(n, e, t, s, r) {
  const i = $e(n, 'PERFORMANCE_DATA');
  i && i.add({
    name: e,
    value: ks(Sr() - t),
    unit: 'ns',
    attributes: Object.assign(Object.assign({}, s), r)
  });
}
function ji() {
}
class fm {
  constructor(e) {
    this.sdkKey = e;
  }
  getPerformanceData() {
    return $e(this.sdkKey, 'PERFORMANCE_DATA');
  }
  addSample(e) {
    const t = this.getPerformanceData();
    t && t.add(e);
  }
  addSampleTime(e, t, s, r = 'ms') {
    const i = this.getPerformanceData();
    i && i.add({
      name: e,
      value: t,
      attributes: s,
      unit: r
    });
  }
  startTimer(e, t) {
    const s = this.sdkKey, r = Sr(), i = {
        endTimer: function () {
          hm(s, e, r, t), i.endTimer = ji;
        },
        abortTimer: function () {
          i.endTimer = ji, i.abortTimer = ji;
        }
      };
    return i;
  }
  time(e, t) {
    const s = this.getPerformanceData();
    s && s.time(e, t);
  }
  timeEnd(e, t) {
    const s = this.getPerformanceData();
    s && s.timeEnd(e, t);
  }
  timeAbort(e) {
    const t = this.getPerformanceData();
    t && t.timeAbort(e);
  }
  setPerformanceAttribute(e, t) {
    const s = this.getPerformanceData();
    s && s.setPerformanceAttribute(e, t);
  }
  setPerformanceAttributes(e) {
    const t = this.getPerformanceData();
    t && t.setPerformanceAttributes(e);
  }
  removePerformanceAttribute(e) {
    const t = this.getPerformanceData();
    t && t.removePerformanceAttribute(e);
  }
}
function mm(n, e = {}) {
  et(n, 'PERFORMANCE_DATA', function () {
    return new ho(n);
  }).setDynamicPerformanceAttributes(e.performanceAttributes);
  return is(n, 'performance', function () {
    return new fm(n);
  });
}
function pm(n = {}) {
  return mm(pt, n);
}
class gm {
  constructor(e, t) {
    this.PERFORMANCE_SAMPLE_DATA_SIZE = 500, this.PERFORMANCE_UPLOAD_TIMEOUT = 15000, this.beforeUnload = false, this.sdkKey = e, this.appToken = t.appToken, this.versionName = t.versionName, this.versionCode = t.versionCode, this.apiHost = t.apiHost, this.userAgentData = t.userAgentData, this.upload = this.upload.bind(this), this.onBeforeUnload = this.onBeforeUnload.bind(this), ct() && window.addEventListener('beforeunload', this.onBeforeUnload), this.setUploadTask(1000);
  }
  onBeforeUnload() {
    this.beforeUnload = true, this.upload();
  }
  destroy() {
    clearInterval(this.uploadTimeout), ct() && window.removeEventListener('beforeunload', this.onBeforeUnload);
  }
  setUploadTask(e = this.PERFORMANCE_UPLOAD_TIMEOUT) {
    clearTimeout(this.uploadTimeout), !this.beforeUnload && (this.uploadTimeout = setTimeout(this.upload, e));
  }
  upload() {
    const e = $e(this.sdkKey, 'PERFORMANCE_DATA');
    if (!e || Vs('perfUpload')) {
      this.setUploadTask();
      return;
    }
    const t = e.dequeue(this.PERFORMANCE_SAMPLE_DATA_SIZE);
    if (!t.length) {
      this.setUploadTask();
      return;
    }
    const s = Object.assign(Object.assign({}, {}), {
        samples: t,
        versionName: this.versionName,
        versionCode: String(this.versionCode),
        sessionUuid: ao(),
        sampled: co(),
        deviceId: io(),
        clientTimeUnixNano: String(ks(El()))
      }), r = this.onUploadEnd.bind(this);
    oo({
      beforeUnload: this.beforeUnload,
      sdkVersion: '2.6.3',
      apiHost: this.apiHost,
      apiUrl: '/api/perf/upload',
      queryParams: { crashToken: this.appToken },
      data: s,
      dataType: 'json',
      onRequestEnd: r,
      onMute: li.bind(null, 'perfUpload')
    });
  }
  onUploadEnd() {
    this.setUploadTask(0);
  }
}
function Dm(n, e) {
  et(n, 'PERFORMANCE_UPLOADER', function () {
    return new gm(n, {
      apiHost: e.apiHost,
      appToken: e.appToken,
      userAgentData: e.userAgentData,
      versionCode: e.versionCode,
      versionName: e.versionName
    });
  });
}
function _m(n) {
  return Dm(pt, n);
}
var Ea, yl = -1, os = function (n) {
    addEventListener('pageshow', function (e) {
      e.persisted && (yl = e.timeStamp, n(e));
    }, true);
  }, fo = function () {
    var n = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (n && n.responseStart > 0 && n.responseStart < performance.now())
      return n;
  }, hi = function () {
    var n = fo();
    return n && n.activationStart || 0;
  }, Ct = function (n, e) {
    var t = fo(), s = 'navigate';
    yl >= 0 ? s = 'back-forward-cache' : t && (document.prerendering || hi() > 0 ? s = 'prerender' : document.wasDiscarded ? s = 'restore' : t.type && (s = t.type.replace(/_/g, '-')));
    return {
      name: n,
      value: e === void 0 ? -1 : e,
      rating: 'good',
      delta: 0,
      entries: [],
      id: 'v4-'.concat(Date.now(), '-').concat(Math.floor(8999999999999 * Math.random()) + 1000000000000),
      navigationType: s
    };
  }, Ks = function (n, e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(n)) {
        var s = new PerformanceObserver(function (r) {
          Promise.resolve().then(function () {
            e(r.getEntries());
          });
        });
        s.observe(Object.assign({
          type: n,
          buffered: true
        }, t || {}));
        return s;
      }
    } catch {
    }
  }, Tt = function (n, e, t, s) {
    var r, i;
    return function (a) {
      e.value >= 0 && (a || s) && ((i = e.value - (r || 0)) || r === void 0) && (r = e.value, e.delta = i, e.rating = function (o, l) {
        return o > l[1] ? 'poor' : o > l[0] ? 'needs-improvement' : 'good';
      }(e.value, t), n(e));
    };
  }, mo = function (n) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return n();
      });
    });
  }, fi = function (n) {
    document.addEventListener('visibilitychange', function () {
      document.visibilityState === 'hidden' && n();
    });
  }, po = function (n) {
    var e = false;
    return function () {
      e || (n(), e = true);
    };
  }, Mn = -1, wc = function () {
    return document.visibilityState !== 'hidden' || document.prerendering ? Infinity : 0;
  }, xr = function (n) {
    document.visibilityState === 'hidden' && Mn > -1 && (Mn = n.type === 'visibilitychange' ? n.timeStamp : 0, vm());
  }, Ec = function () {
    addEventListener('visibilitychange', xr, true), addEventListener('prerenderingchange', xr, true);
  }, vm = function () {
    removeEventListener('visibilitychange', xr, true), removeEventListener('prerenderingchange', xr, true);
  }, Al = function () {
    Mn < 0 && (Mn = wc(), Ec(), os(function () {
      setTimeout(function () {
        Mn = wc(), Ec();
      }, 0);
    }));
    return {
      get firstHiddenTime() {
        return Mn;
      }
    };
  }, mi = function (n) {
    document.prerendering ? addEventListener('prerenderingchange', function () {
      return n();
    }, true) : n();
  }, yc = [
    1800,
    3000
  ], Cl = function (n, e) {
    e = e || {}, mi(function () {
      var t, s = Al(), r = Ct('FCP'), i = Ks('paint', function (a) {
          a.forEach(function (o) {
            o.name === 'first-contentful-paint' && (i.disconnect(), o.startTime < s.firstHiddenTime && (r.value = Math.max(o.startTime - hi(), 0), r.entries.push(o), t(true)));
          });
        });
      i && (t = Tt(n, r, yc, e.reportAllChanges), os(function (a) {
        r = Ct('FCP'), t = Tt(n, r, yc, e.reportAllChanges), mo(function () {
          r.value = performance.now() - a.timeStamp, t(true);
        });
      }));
    });
  }, Ac = [
    0.1,
    0.25
  ], bm = function (n, e) {
    e = e || {}, Cl(po(function () {
      var t, s = Ct('CLS', 0), r = 0, i = [], a = function (l) {
          l.forEach(function (d) {
            if (!d.hadRecentInput) {
              var c = i[0], u = i[i.length - 1];
              r && d.startTime - u.startTime < 1000 && d.startTime - c.startTime < 5000 ? (r += d.value, i.push(d)) : (r = d.value, i = [d]);
            }
          }), r > s.value && (s.value = r, s.entries = i, t());
        }, o = Ks('layout-shift', a);
      o && (t = Tt(n, s, Ac, e.reportAllChanges), fi(function () {
        a(o.takeRecords()), t(true);
      }), os(function () {
        r = 0, s = Ct('CLS', 0), t = Tt(n, s, Ac, e.reportAllChanges), mo(function () {
          return t();
        });
      }), setTimeout(t, 0));
    }));
  }, Tl = 0, $i = Infinity, sr = 0, wm = function (n) {
    n.forEach(function (e) {
      e.interactionId && ($i = Math.min($i, e.interactionId), sr = Math.max(sr, e.interactionId), Tl = sr ? (sr - $i) / 7 + 1 : 0);
    });
  }, Il = function () {
    return Ea ? Tl : performance.interactionCount || 0;
  }, Em = function () {
    'interactionCount' in performance || Ea || (Ea = Ks('event', wm, {
      type: 'event',
      buffered: true,
      durationThreshold: 0
    }));
  }, _t = [], _r = new Map(), Fl = 0, ym = function () {
    var n = Math.min(_t.length - 1, Math.floor((Il() - Fl) / 50));
    return _t[n];
  }, Am = [], Cm = function (n) {
    Am.forEach(function (r) {
      return r(n);
    });
    if (n.interactionId || n.entryType === 'first-input') {
      var e = _t[_t.length - 1], t = _r.get(n.interactionId);
      if (t || _t.length < 10 || n.duration > e.latency) {
        if (t)
          n.duration > t.latency ? (t.entries = [n], t.latency = n.duration) : n.duration === t.latency && n.startTime === t.entries[0].startTime && t.entries.push(n);
        else {
          var s = {
            id: n.interactionId,
            latency: n.duration,
            entries: [n]
          };
          _r.set(s.id, s), _t.push(s);
        }
        _t.sort(function (r, i) {
          return i.latency - r.latency;
        }), _t.length > 10 && _t.splice(10).forEach(function (r) {
          return _r.delete(r.id);
        });
      }
    }
  }, Sl = function (n) {
    var e = self.requestIdleCallback || self.setTimeout, t = -1;
    n = po(n);
    document.visibilityState === 'hidden' ? n() : (t = e(n), fi(n));
    return t;
  }, Cc = [
    200,
    500
  ], Tm = function (n, e) {
    'PerformanceEventTiming' in self && 'interactionId' in PerformanceEventTiming.prototype && (e = e || {}, mi(function () {
      var t;
      Em();
      var s, r = Ct('INP'), i = function (o) {
          Sl(function () {
            o.forEach(Cm);
            var l = ym();
            l && l.latency !== r.value && (r.value = l.latency, r.entries = l.entries, s());
          });
        }, a = Ks('event', i, { durationThreshold: (t = e.durationThreshold) !== null && t !== void 0 ? t : 40 });
      s = Tt(n, r, Cc, e.reportAllChanges), a && (a.observe({
        type: 'first-input',
        buffered: true
      }), fi(function () {
        i(a.takeRecords()), s(true);
      }), os(function () {
        Fl = Il(), _t.length = 0, _r.clear(), r = Ct('INP'), s = Tt(n, r, Cc, e.reportAllChanges);
      }));
    }));
  }, Tc = [
    2500,
    4000
  ], zi = {}, Ic = function (n, e) {
    e = e || {}, mi(function () {
      var t, s = Al(), r = Ct('LCP'), i = function (l) {
          e.reportAllChanges || (l = l.slice(-1)), l.forEach(function (d) {
            d.startTime < s.firstHiddenTime && (r.value = Math.max(d.startTime - hi(), 0), r.entries = [d], t());
          });
        }, a = Ks('largest-contentful-paint', i);
      if (a) {
        t = Tt(n, r, Tc, e.reportAllChanges);
        var o = po(function () {
          zi[r.id] || (i(a.takeRecords()), a.disconnect(), zi[r.id] = true, t(true));
        });
        [
          'keydown',
          'click'
        ].forEach(function (l) {
          addEventListener(l, function () {
            return Sl(o);
          }, {
            once: true,
            capture: true
          });
        }), fi(o), os(function (l) {
          r = Ct('LCP'), t = Tt(n, r, Tc, e.reportAllChanges), mo(function () {
            r.value = performance.now() - l.timeStamp, zi[r.id] = true, t(true);
          });
        });
      }
    });
  }, Fc = [
    800,
    1800
  ], Im = function n(e) {
    document.prerendering ? mi(function () {
      return n(e);
    }) : document.readyState !== 'complete' ? addEventListener('load', function () {
      return n(e);
    }, true) : setTimeout(e, 0);
  }, Fm = function (n, e) {
    e = e || {};
    var t = Ct('TTFB'), s = Tt(n, t, Fc, e.reportAllChanges);
    Im(function () {
      var r = fo();
      r && (t.value = Math.max(r.responseStart - hi(), 0), t.entries = [r], s(true), os(function () {
        t = Ct('TTFB', 0), (s = Tt(n, t, Fc, e.reportAllChanges))(true);
      }));
    });
  };
function xl(n) {
  const e = n.nodeName.toLowerCase(), t = Sc(n);
  if (!t || !t.length) {
    const s = n.parentNode;
    if (s)
      return xl(s) + ' > ' + e;
  }
  return [e].concat(Sc(n) || []).join('.');
}
function Sc(n) {
  let e;
  n instanceof Element && (n instanceof SVGElement ? e = n.getAttribute('class') : e = n.className);
  return e ? e.split(' ') : void 0;
}
class Bn {
  constructor(e, t) {
    this.disabled = false;
    this.sdkKey = e;
    if (Bn.instance)
      return Bn.instance.disabled = false, Bn.instance;
    this.webVitalsMetricAttributes = t.webVitalsMetricAttributes || t.addMetricAttributes;
    const s = { reportAllChanges: true };
    bm(this.onMetric.bind(this, {}), s), Cl(this.onMetric.bind(this, {}), s), Ic(this.onMetric.bind(this, { subname: 'delta' }), s), Ic(this.onMetric.bind(this, { value: true })), Tm(this.onMetric.bind(this, {}), s), Fm(this.onMetric.bind(this, {}), s), Bn.instance = this;
  }
  getPerformanceData() {
    return $e(this.sdkKey, 'PERFORMANCE_DATA');
  }
  collectNodePaths(e, t) {
    if (!e)
      return {};
    const s = [];
    e.map(function (r) {
      let i;
      'node' in r ? i = r.node : 'element' in r ? i = r.element : 'target' in r && (i = r.target), i && s.push(xl(i));
    });
    return s.length ? { [t]: s.join(', ') } : {};
  }
  getAttributesCLS(e) {
    const t = e.entries[e.entries.length - 1];
    return t ? this.collectNodePaths(t.sources, 'entrySourceNodes') : {};
  }
  getAttributesLCP(e) {
    return this.collectNodePaths(e.entries, 'entryElements');
  }
  getAttributesINP(e) {
    return this.collectNodePaths(e.entries, 'entryTargets');
  }
  onMetric(e, t) {
    if (this.disabled)
      return;
    const s = e.value ? 'value' : 'delta';
    if (t[s] <= 0)
      return;
    const r = this.getPerformanceData();
    if (!r)
      return;
    let i;
    this.webVitalsMetricAttributes ? i = this.webVitalsMetricAttributes(t) : i = {};
    let a = 'Web Vitals - ' + t.name;
    e.subname && (a += ' (' + e.subname + ')');
    let o = {};
    switch (t.name) {
    case 'CLS':
      o = this.getAttributesCLS(t);
      break;
    case 'LCP':
      o = this.getAttributesLCP(t);
      break;
    case 'INP':
      o = this.getAttributesINP(t);
      break;
    }
    switch (i = Object.assign(Object.assign({}, i), o), i.rating = t.rating, i.navigationType = t.navigationType, t.name) {
    case 'CLS':
      r.add({
        name: a,
        unit: '10*-n',
        precision: 6,
        value: t[s],
        attributes: i
      });
      break;
    default:
      r.add({
        name: a,
        unit: 'ns',
        value: ks(t[s]),
        attributes: i
      });
    }
  }
  destroy() {
    this.disabled = true;
  }
}
function Sm(n, e = {}) {
  et(n, 'PERFORMANCE_DATA', function () {
    return new ho(n);
  }), et(n, 'WEB_VITALS_DATA', function () {
    return new Bn(n, e);
  });
}
function xm(n = {}) {
  return Sm(pt, n);
}
function Ol(n, e = '', t = {}) {
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s)) {
      const r = e ? e + '.' + s : s, i = n[s];
      i != null && (Array.isArray(i) ? t[r] = i.join(', ') : fl(i) ? Ol(i, r, t) : t[r] = String(i));
    }
  return t;
}
const Om = Date.now();
function Rm() {
  return !lo || !performance.now ? Date.now() - Om : performance.now();
}
const Or = 60000, Vi = Or * 60, km = [
    {
      name: 'initial',
      time: 0
    },
    {
      name: '5 min',
      time: Or * 5
    },
    {
      name: '15 min',
      time: Or * 15
    },
    {
      name: '60 min',
      time: Vi
    },
    {
      name: '3 hr',
      time: Vi * 3
    },
    {
      name: '12 hr',
      time: Vi * 12
    }
  ], xc = 'Memory - ';
class Lm {
  constructor(e, t) {
    this.measurePoints = [], this.sdkKey = e, this.config = t;
    const s = t.memoryUsageTimePoints || km;
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      this.measurePoints.push({
        from: i.time,
        to: i.time + Or,
        name: i.name
      });
    }
    this.runMeasureTask = this.runMeasureTask.bind(this), this.runMeasureTask();
  }
  setMeasureTask(e = 10000) {
    clearTimeout(this.measureTimeout), this.measureTimeout = setTimeout(this.runMeasureTask, e);
  }
  runMeasureTask() {
    if (!this.measurePoints.length)
      return;
    const e = this.getMeasurePointName();
    e && this.measureMemory(e), this.setMeasureTask();
  }
  getMeasurePointName() {
    const e = Rm();
    for (let t = this.measurePoints.length - 1; t >= 0; t--) {
      const s = this.measurePoints[t];
      if (e > s.to) {
        this.measurePoints.splice(t, 1);
        continue;
      }
      if (e >= s.from && e <= s.to) {
        this.measurePoints.splice(t, 1);
        return s.name;
      }
    }
  }
  measureMemory(e, t) {
    try {
      this.doMeasureUnsafe(e, t);
    } catch {
    }
  }
  doMeasureUnsafe(e, t) {
    if (!ct())
      return;
    const s = window.performance;
    if (!s)
      return;
    const r = $e(this.sdkKey, 'PERFORMANCE_DATA');
    if (!r)
      return;
    const i = this.config.memoryUsageAttributes, a = i ? i(e) : {};
    this.config.enableMeasureUserAgentSpecificMemory && window.crossOriginIsolated && s.measureUserAgentSpecificMemory && s.measureUserAgentSpecificMemory().then(function (o) {
      const l = xc + 'userAgentSpecificMemory';
      r.add({
        name: l,
        value: o.bytes,
        unit: 'By',
        attributes: Object.assign(Object.assign(Object.assign({}, a), t), { pointName: e })
      });
      const d = o.breakdown;
      if (d)
        for (let c = 0, u = d.length; c < u; c++) {
          const h = d[c];
          if (h.bytes) {
            const f = h.types, m = h.attribution;
            let g = 'unknown';
            f && f.length && (g = f.join(', '));
            const D = m ? Ol(m) : {};
            r.add({
              name: l + ' - breakdown',
              value: h.bytes,
              unit: 'By',
              attributes: Object.assign(Object.assign(Object.assign(Object.assign({}, a), t), D), {
                breakdownType: g,
                pointName: e
              })
            });
          }
        }
    }, function () {
    });
    if (s.memory && s.memory.usedJSHeapSize) {
      const o = s.memory.usedJSHeapSize, l = xc + 'usedJSHeapSize';
      o && r.add({
        name: l,
        value: o,
        unit: 'By',
        attributes: Object.assign(Object.assign(Object.assign({}, a), t), { pointName: e })
      });
    }
  }
  destroy() {
    clearTimeout(this.measureTimeout);
  }
}
class Nm {
  constructor(e) {
    this.sdkKey = e;
  }
  measureMemory(e, t) {
    const s = $e(this.sdkKey, 'PERFORMANCE_MEMORY_DATA');
    s && s.measureMemory(e, t);
  }
}
function Pm(n, e = {}) {
  et(n, 'PERFORMANCE_DATA', function () {
    return new ho(n);
  });
  et(n, 'PERFORMANCE_MEMORY_DATA', function () {
    return new Lm(n, e);
  });
  return is(n, 'memory', function () {
    return new Nm(n);
  });
}
function Mm(n = {}) {
  return Pm(pt, n);
}
function Bm() {
  return zs().maxSeverity;
}
class Um {
  constructor(e, t) {
    this.beforeUnload = false, this.sdkKey = e, this.environment = t.environment, this.appToken = t.appToken, this.versionName = t.versionName, this.versionCode = t.versionCode, this.apiHost = t.apiHost, this.onBeforeUnload = this.onBeforeUnload.bind(this), zs().crashesCount ? this.setCrashed() : this.setRunning(), ct() && window.addEventListener('beforeunload', this.onBeforeUnload);
  }
  onBeforeUnload() {
    this.beforeUnload = true, this.upload('BLANK');
  }
  restartSession() {
    sl(), this.lastStatus = void 0, this.setRunning();
  }
  setCrashed() {
    this.upload('CRASH');
  }
  setRunning() {
    this.upload('RUNNING');
  }
  destroy() {
    typeof window < 'u' && window.removeEventListener('beforeunload', this.onBeforeUnload);
  }
  upload(e) {
    if (Vs('trackSession') || this.lastStatus === 'CRASH' && !this.beforeUnload)
      return;
    this.lastStatus = e;
    const t = {
      sessionUuid: ao(),
      sampled: co(),
      versionName: this.versionName,
      versionCode: String(this.versionCode),
      status: e,
      maxSeverity: _l(Bm()),
      environment: this.environment
    };
    this.uploadSessionInfo(t);
  }
  uploadSessionInfo(e) {
    const t = {};
    t.versionName = this.versionName, t.versionCode = String(this.versionCode), t.deviceId = io(), t.sessions = [e], oo({
      beforeUnload: this.beforeUnload,
      sdkVersion: '2.6.3',
      apiHost: this.apiHost,
      apiUrl: '/api/crash/trackSession',
      queryParams: { crashToken: this.appToken },
      data: t,
      dataType: 'json',
      onMute: li.bind(null, 'trackSession')
    });
  }
}
function Hm(n, e) {
  et(n, 'SESSION_UPLOADER', function () {
    return new Um(n, {
      apiHost: e.apiHost,
      appToken: e.appToken,
      environment: e.environment,
      versionCode: e.versionCode,
      versionName: e.versionName
    });
  });
}
function jm(n) {
  return Hm(pt, n);
}
function Rl(n, e) {
  const t = Object.assign({}, e), s = pl(n);
  s.push(t);
  return function () {
    const r = s.indexOf(t);
    r !== -1 && s.splice(r, 1);
  };
}
function $m(n, e) {
  const t = [];
  for (let s = 0, r = e.length; s < r; s++)
    t.push(Rl(n, e[s]));
  return function () {
    for (let s = 0, r = t.length; s < r; s++)
      t[s]();
  };
}
function zm(n, e) {
  et(n, 'PLUGINS', function (t) {
    return { destroy: $m(t, e.plugins) };
  });
  return is(n, 'plugins', function () {
    return {
      addPlugin: function (t) {
        return Rl(n, t);
      }
    };
  });
}
function Vm(n) {
  return zm(pt, n);
}
function Gm(n, ...e) {
  const t = {};
  for (let s = 0, r = e.length; s < r; s++) {
    const i = e[s](n);
    if (i) {
      const a = Object.getPrototypeOf(i), o = Object.getOwnPropertyNames(a);
      for (let l = 0, d = o.length; l < d; l++) {
        const c = o[l];
        typeof a[c] == 'function' && c !== 'constructor' && (t[c] = a[c].bind(i));
      }
    }
  }
  return t;
}
const kl = {
    ё: 'е',
    a: 'а',
    b: 'б',
    v: 'в',
    w: 'в',
    g: 'г',
    d: 'д',
    e: 'е',
    yo: 'ё',
    zh: 'ж',
    z: 'з',
    i: 'и',
    y: 'й',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    p: 'п',
    r: 'р',
    s: 'с',
    t: 'т',
    u: 'у',
    f: 'ф',
    kh: 'х',
    h: 'х',
    ts: 'ц',
    c: 'ц',
    ch: 'ч',
    sh: 'ш',
    shch: 'щ',
    "'": 'ь',
    yu: 'ю',
    ya: 'я',
    x: 'кс'
  }, Km = Object.keys(kl).sort((n, e) => e.length - n.length);
function Ll(n) {
  return Km.reduce((e, t) => e.replaceAll(t, kl[t] ?? t), n.toLocaleLowerCase());
}
class Xn extends Error {
  constructor() {
    super('Operation aborted'), Object.setPrototypeOf(this, Xn.prototype);
  }
}
class Qt extends Error {
  silent;
  constructor(e, t = {}) {
    super(e), this.silent = !!t.silent, Object.setPrototypeOf(this, Qt.prototype);
  }
}
class pi extends Error {
  constructor() {
    super('Handled error'), Object.setPrototypeOf(this, pi.prototype);
  }
}
let go = true;
window.addEventListener('online', () => go = true);
window.addEventListener('offline', () => go = false);
function Do(n) {
  return go ? Promise.resolve() : new Promise((e, t) => {
    const s = () => {
        n?.removeEventListener('abort', r), e();
      }, r = () => {
        window.removeEventListener('online', s), t(new Xn());
      };
    window.addEventListener('online', s, { once: true }), n?.addEventListener('abort', r, { once: true });
  });
}
const ya = 'https://max.ru/', Wm = 'https://web.max.ru/';
function Nl(n, e = '') {
  const t = n instanceof URL ? n.href : n;
  return t.startsWith(`${ ya }${ e }`) || t.startsWith(`${ Wm }${ e }`) || t.startsWith(`${ location.origin }/${ e }`);
}
function qm(n) {
  if (n instanceof URL)
    return n.href.replace(n.origin + '/', ya);
  const e = n.startsWith('/') ? n.slice(1) : n;
  return ya + e;
}
function Zn(n, e) {
  return e?.aborted ? Promise.reject(new Xn()) : new Promise((t, s) => {
    const r = () => {
        clearTimeout(i), s(new Xn());
      }, i = setTimeout(() => {
        e?.removeEventListener('abort', r), t();
      }, n);
    e?.addEventListener('abort', r, { once: true });
  });
}
const Ym = () => {
  const n = navigator.userAgent.toLowerCase();
  return !/chrome/i.test(n) && /webkit|safari|khtml/i.test(n);
};
function Qm({
  node: n = document.body,
  href: e,
  download: t = '',
  target: s = '_self'
}) {
  const r = document.createElement('a');
  r.href = e, r.download = t, r.target = s, n.appendChild(r), r.click(), n.removeChild(r);
}
const Oc = 0, Gi = 1, Jm = 5, ms = 6, yT = 16, Xm = 17, Rc = 18, rr = 19, Ki = 20, AT = 22, ps = 23, CT = 25, kc = 26, ir = 27, gi = 28, Zm = 29, ep = 32, TT = 34, tp = 35, IT = 36, FT = 41, ST = 43, xT = 46, np = 48, OT = 49, RT = 50, kT = 51, LT = 52, sp = 53, NT = 54, PT = 55, MT = 56, BT = 57, UT = 58, HT = 59, jT = 60, $T = 61, zT = 86, VT = 88, GT = 64, KT = 65, WT = 66, qT = 67, YT = 68, QT = 102, JT = 69, rp = 70, ip = 71, XT = 72, ZT = 73, ap = 74, eI = 75, tI = 76, nI = 77, sI = 78, op = 79, rI = 80, iI = 82, aI = 83, oI = 84, cI = 85, uI = 87, lI = 89, dI = 96, hI = 97, Lc = 101, fI = 104, mI = 105, pI = 107, gI = 108, cp = 109, up = 110, DI = 111, _I = 112, vI = 113, Nc = 115, lp = 116, dp = 288, hp = 289, Pc = 291, bI = 118, wI = 119, fp = 145, EI = 158, yI = 160, AI = 161, CI = 162, TI = 176, II = 177, FI = 178, SI = 179, mp = 180, pp = 181, xI = 198, OI = 199, RI = 200, kI = 257, gp = 258, Dp = 259, _p = 261, vp = 272, bp = 273, LI = 274, NI = 275, PI = 276, Mc = 128, MI = 129, BI = 130, UI = 131, HI = 132, jI = 134, $I = 135, zI = 136, VI = 137, GI = 150, KI = 152, WI = 153, qI = 155, YI = 156, QI = 159, JI = 277, XI = 292, ZI = {
    set_password: 0,
    update_password: 1,
    restore_password: 2,
    hint: 3,
    email: 4,
    remove_2fa: 5
  }, kn = '__oneme_auth', Bc = '__oneme_device_id', wp = '__oneme_calls_auth_token', Ep = 11, yp = 500, Ap = 10000, Pl = 30000, Cp = Pl + 5000, Tp = 1000, Ip = 32767;
class Fp {
  url;
  appVersion;
  locale = 'ru';
  interactive = true;
  key = 0;
  isDisposed = false;
  version = Ep;
  auth;
  deviceId;
  sessionId = Date.now();
  ws;
  nextOutSeq = 0;
  lastInSeq = 0;
  loginSeq = Infinity;
  outQueue = new Map();
  stream;
  dispose;
  constructor(e, t) {
    this.url = e, this.appVersion = t, this.deviceId = localStorage.getItem(Bc) || crypto.randomUUID(), localStorage.setItem(Bc, this.deviceId);
    const s = localStorage.getItem(kn);
    this.auth = s ? JSON.parse(s) : void 0, this.ws = null;
    let r = () => {
    };
    this.dispose = () => {
      r?.();
    }, this.stream = new ReadableStream({
      start: i => (r = () => {
        if (!this.isDisposed) {
          this.isDisposed = true;
          try {
            this.ws.close();
          } catch {
          }
          try {
            i.close();
          } catch {
          }
        }
      }, this.reconnect(i)),
      cancel: () => {
        this.dispose();
      }
    }, new CountQueuingStrategy({ highWaterMark: Tp }));
  }
  async reconnect(e, t = 0) {
    console.log(`[${ this.key }] connection attempt #${ t }`);
    if (t > 0) {
      const c = Math.min(2 ** t * yp, Ap), u = Math.floor(c / 2 + Math.random() * (c / 2));
      console.log(`[${ this.key }] waiting backoff ${ u }ms...`), await Zn(u);
    }
    console.log(`[${ this.key }] awaiting network...`), await Do(), e.enqueue({
      opcode: Oc,
      state: 'online'
    }), console.log(`[${ this.key }] network online, connecting...`);
    const s = Mt?.startTimer('Network - Connect');
    this.ws = new WebSocket(this.url);
    const r = () => {
      try {
        this.ws.close(), d();
      } catch {
      }
    };
    let i = 0;
    const a = () => {
        clearTimeout(i), i = window.setTimeout(() => {
          console.log(`[${ this.key }] connection timed out, closing (${ this.ws.readyState })...`), r();
        }, Cp);
      }, o = () => {
        console.log(`[${ this.key }] network offline, closing (${ this.ws.readyState })...`), r();
      };
    window.addEventListener('offline', o, { once: true });
    let l = 0;
    const d = () => {
      s?.abortTimer();
      if (!this.ws.onclose)
        return;
      console.log(`[${ this.key }] connection closed, socket disposed: ${ this.isDisposed }`), clearTimeout(i), clearInterval(l), window.removeEventListener('offline', o), this.ws.onclose = null, this.ws.onopen = null, this.ws.onerror = null, this.ws.onmessage = null, this.key++, this.lastInSeq = 0, this.nextOutSeq = 0, this.loginSeq = Infinity;
      const c = this.outQueue;
      this.outQueue = new Map();
      for (const u of c.values()) {
        if (this.isDisposed || !u.retryWhenReconnected) {
          u.reject(new An(u.opcode));
          continue;
        }
        this.outQueue.set(this.nextOutSeq++, u);
      }
      this.isDisposed ? this.outQueue.clear() : (e.enqueue({
        opcode: Oc,
        state: 'offline'
      }), this.reconnect(e, t + 1));
    };
    this.ws.onclose = d, this.ws.onopen = () => {
      console.log(`[${ this.key }] connection opened`), s?.endTimer(), this.send({
        cmd: 0,
        opcode: ms,
        payload: {
          userAgent: {
            deviceType: 'WEB',
            locale: this.locale,
            deviceLocale: navigator.language.slice(0, 2),
            osVersion: Sp(),
            deviceName: xp(),
            headerUserAgent: navigator.userAgent,
            appVersion: this.appVersion,
            screen: `${ window.screen.height }x${ window.screen.width } ${ window.devicePixelRatio.toFixed(1) }x`,
            timezone: {
              locale: 'ru-RU',
              calendar: 'gregory',
              numberingSystem: 'latn',
              timeZone: 'Europe/Moscow',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }.timeZone
          },
          deviceId: this.deviceId
        }
      }), l = window.setInterval(() => {
        this.send({
          cmd: 0,
          opcode: Gi,
          payload: { interactive: this.interactive }
        });
      }, Pl);
    }, this.ws.onerror = c => {
      console.error(`[${ this.key }] connection errored`, c);
    }, this.ws.onmessage = c => {
      if (this.isDisposed)
        return;
      if ((e.desiredSize || Infinity) <= 0)
        return this.dispose();
      a();
      const u = JSON.parse(c.data);
      switch (u.cmd) {
      case 0: {
          if (u.seq <= this.lastInSeq)
            return;
          this.lastInSeq = u.seq;
          if (u.opcode === Gi)
            return this.send({
              cmd: 1,
              seq: u.seq,
              opcode: Gi,
              payload: void 0
            });
          u.opcode === Mc && this.send({
            cmd: 1,
            seq: u.seq,
            opcode: Mc,
            payload: {
              chatId: u.payload.chatId,
              messageId: u.payload.message.id
            }
          });
          const m = {
            opcode: u.opcode,
            payload: u.payload
          };
          e.enqueue(m);
          return;
        }
      case 1: {
          const m = this.outQueue.get(u.seq);
          switch (m && m.resolve(u.payload), u.opcode) {
          case ms: {
              t = 0, console.log(`[${ this.key }] session inited`), e.enqueue({
                opcode: ms,
                savedAuth: this.auth,
                payload: u.payload
              }), this.auth && e.enqueue({
                opcode: ps,
                savedAuth: this.auth
              });
              break;
            }
          case Rc:
          case Pc:
          case Nc:
          case Lc: {
              if (!u.payload.tokenAttrs.LOGIN || !u.payload.profile)
                break;
              this.auth = {
                viewerId: u.payload.profile.contact.id,
                token: u.payload.tokenAttrs.LOGIN.token
              }, localStorage.setItem(kn, JSON.stringify(this.auth)), e.enqueue({
                opcode: ps,
                savedAuth: this.auth
              });
              break;
            }
          case ps: {
              this.auth = {
                token: u.payload.token,
                viewerId: u.payload.profile.contact.id
              }, localStorage.setItem(kn, JSON.stringify(this.auth)), e.enqueue({
                opcode: ps,
                savedAuth: this.auth
              });
              break;
            }
          case rr: {
              u.payload.token && (this.auth = {
                token: u.payload.token,
                viewerId: u.payload.profile.contact.id
              }, localStorage.setItem(kn, JSON.stringify(this.auth))), console.log(`[${ this.key }] user logged in`), this.loginSeq = this.nextOutSeq;
              for (const [g, D] of this.outQueue)
                g < this.loginSeq && this.send({
                  cmd: 2,
                  seq: g,
                  opcode: D.opcode,
                  payload: D.payload
                });
              break;
            }
          case Ki: {
              this.auth = void 0, localStorage.removeItem(kn), e.enqueue({ opcode: Ki });
              break;
            }
          }
          return;
        }
      case 2:
        return;
      case 3:
        const h = new ot(u.seq, u.opcode, u.payload.error, u.payload.message, u.payload.localizedMessage);
        console.error(`[${ this.key }] cmd errored`, h.toString());
        const f = this.outQueue.get(u.seq);
        switch (f && f.reject(h), u.opcode) {
        case ms:
          return r();
        case rr:
          return [
            'login.token',
            'login.blocked',
            'login.flood',
            'user.not.found'
          ].includes(u.payload.error) ? (console.error(`[${ this.key }] ${ u.payload.localizedMessage }`), localStorage.removeItem(kn), localStorage.removeItem(wp), e.enqueue({ opcode: Ki }), this.dispose()) : r();
        default:
          return;
        }
      }
    };
  }
  messages(e = { preventCancel: false }) {
    const t = this.stream.getReader();
    return {
      [Symbol.asyncIterator]() {
        return {
          async next() {
            try {
              const s = await t.read();
              return s.done ? (t.releaseLock(), {
                done: true,
                value: void 0
              }) : {
                value: s.value,
                done: false
              };
            } catch (s) {
              throw t.releaseLock(), s;
            }
          },
          async return(s) {
            if (e.preventCancel)
              t.releaseLock();
            else {
              const r = t.cancel(s);
              t.releaseLock(), await r;
            }
            return {
              done: true,
              value: s
            };
          }
        };
      }
    };
  }
  send(e, t = {}) {
    e.seq === void 0 && (e.seq = this.nextOutSeq++);
    const s = {
      ver: this.version,
      cmd: e.cmd,
      seq: e.seq,
      opcode: e.opcode
    };
    if (e.payload !== void 0 && (s.payload = {
        ...e.opcode === rr ? { interactive: this.interactive } : {},
        ...e.payload
      }), [
        Jm,
        ms,
        Xm,
        Rc,
        rr,
        dp,
        hp,
        Pc,
        ps,
        Lc,
        cp,
        up,
        Nc,
        lp
      ].includes(e.opcode)) {
      if (this.ws.readyState !== WebSocket.OPEN)
        throw new An(e.opcode);
      this.ws.send(JSON.stringify(s));
      return e.seq;
    }
    this.ws.readyState === WebSocket.OPEN && (!t.waitForLogin || e.seq >= this.loginSeq) && this.ws.send(JSON.stringify(s));
    e.seq === Ip && this.ws.close();
    return e.seq;
  }
  cmd = async (e, t, s = {}) => {
    if (s.signal?.aborted)
      return Zn(0).then(() => {
        throw new Ls(-1, e);
      });
    const r = this.ws.readyState === WebSocket.OPEN ? Mt?.startTimer('Network - Roundtrip', { opcode: `0x${ e.toString(16).toUpperCase() }` }) : void 0;
    try {
      const i = this.send({
          cmd: 0,
          opcode: e,
          payload: t
        }, { waitForLogin: true }), a = () => {
          this.outQueue.get(i)?.reject(new Ls(i, e));
        };
      s.signal?.addEventListener('abort', a, { once: true });
      return new Promise((o, l) => {
        const d = () => {
          this.outQueue.delete(i), s.signal?.removeEventListener('abort', a);
        };
        this.outQueue.set(i, {
          resolve: (...c) => {
            r?.endTimer(), d(), o(...c);
          },
          reject: (...c) => {
            r?.abortTimer(), d(), l(...c);
          },
          opcode: e,
          payload: t,
          retryWhenReconnected: s.retryWhenReconnected || false
        });
      });
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
class ot extends Error {
  seq;
  opcode;
  code;
  localizedMessage;
  constructor(e, t, s = 'unknown', r = 'Unknown error', i = 'Неизвестная ошибка') {
    super(r), this.seq = e, this.opcode = t, this.code = s, this.localizedMessage = i, Object.setPrototypeOf(this, ot.prototype);
  }
  toString() {
    return `[0x${ this.opcode.toString(16).toUpperCase() } ${ this.code }] ${ this.message }`;
  }
}
class Ls extends Error {
  seq;
  opcode;
  constructor(e, t) {
    super('Socket request aborted'), this.seq = e, this.opcode = t, Object.setPrototypeOf(this, Ls.prototype);
  }
  toString() {
    return `[0x${ this.opcode.toString(16).toUpperCase() }] ${ this.message }`;
  }
}
class An extends Error {
  opcode;
  constructor(e) {
    super('Socket disconnected'), this.opcode = e, Object.setPrototypeOf(this, An.prototype);
  }
  toString() {
    return `[0x${ this.opcode.toString(16).toUpperCase() }] ${ this.message }`;
  }
}
function Sp() {
  const n = window.navigator.userAgent, e = window.navigator.platform, t = [
      'Macintosh',
      'MacIntel',
      'MacPPC',
      'Mac68K'
    ], s = [
      'Win32',
      'Win64',
      'Windows',
      'WinCE'
    ], r = [
      'iPhone',
      'iPad',
      'iPod'
    ];
  return t.indexOf(e) !== -1 ? 'macOS' : r.indexOf(e) !== -1 ? 'iOS' : s.indexOf(e) !== -1 ? 'Windows' : /Android/.test(n) ? 'Android' : /Linux/.test(e) ? 'Linux' : 'Unknown';
}
function xp() {
  const n = navigator.userAgent;
  if (n.indexOf('Opera') !== -1 || n.indexOf('OPR') !== -1)
    return 'Opera';
  if (n.indexOf('YaBrowser') !== -1)
    return 'Yandex Browser';
  if (n.indexOf('Atom') !== -1)
    return 'Atom';
  if (n.indexOf('MSIE') !== -1)
    return 'Internet Explorer';
  if (n.indexOf('Edge') !== -1 || n.indexOf('Edg') !== -1)
    return 'Edge';
  if (n.indexOf('Firefox') !== -1)
    return 'Firefox';
  if (n.indexOf('Chrome') !== -1)
    return 'Chrome';
  if (n.indexOf('Safari') !== -1)
    return 'Safari';
  const e = n.lastIndexOf(' ') + 1, t = n.lastIndexOf('/');
  return e < t ? n.substring(e, t) : navigator.appName;
}
const Mt = Gm({
  versionName: cf,
  versionCode: Number(of),
  appToken: af,
  handleOtherErrorDataType: true,
  stringifyErrorDataObject: false,
  plugins: [{
      name: 'main',
      errorBeforeAdd({error: n}) {
        switch (true) {
        case n instanceof pi:
        case n instanceof Xn:
        case n instanceof Qt:
        case n instanceof An:
        case n instanceof Ls:
          return false;
        case n instanceof ot:
          return [
            'login.token',
            'login.flood',
            'login.blocked',
            'service.unavailable'
          ].includes(n.code) ? false : {
            issueKey: `0x${ n.opcode.toString(16).toUpperCase() } ${ n.code }`,
            severity: 'warning'
          };
        default:
          return !Rp(n);
        }
      }
    }]
}, ff, Uf, Xf, jm, pm, _m, xm, Mm, Vm);
Mt?.setUserId('unauthed');
let gs;
function Op(n) {
  if (!Mt)
    return;
  switch (n === 0 ? false : Math.random() <= n) {
  case true:
    if (gs)
      return;
    gs = dm().disableAsyncStack;
    return;
  case false:
    if (!gs)
      return;
    gs(), gs = void 0;
    return;
  }
}
function Rp(n) {
  if (!n.stack)
    return false;
  if ([
      'ResizeObserver loop limit exceeded',
      'ResizeObserver loop completed with undelivered notifications'
    ].some(t => n.message?.includes(t)))
    return true;
  const e = n.stack.split(`
`);
  for (const t of e)
    if (t.includes('://'))
      return /(?:moz|chrome|safari)-extension:\/\//.test(t);
  return false;
}
var eF = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function kp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
const Lp = 'icon_cross_fill_16';
to(`<symbol id="icon_cross_fill_16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
  <g clip-path="url(#clip0_8_25)">
    <path fill="currentColor" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M5.53 4.47a.75.75 0 0 0-1.06 1.06L6.94 8l-2.47 2.47a.75.75 0 0 0 1.06 1.06L8 9.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L9.06 8l2.47-2.47a.75.75 0 0 0-1.06-1.06L8 6.94z" clip-rule="evenodd"/>
  </g>
  <defs>
    <clipPath id="clip0_8_25">
      <path fill="currentColor" d="M0 0h16v16H0z"/>
    </clipPath>
  </defs>
</symbol>`, Lp);
var Np = Xa('<svg width="16" height="16" aria-hidden="true"><use href="#icon_cross_fill_16"></use></svg>');
function Uc(n, e) {
  st(e, true);
  var t = Np();
  nt(() => Nt(t, e.color ? `color: var(--icon-${ e.color }, currentColor)` : '')), X(n, t), rt();
}
const Pp = 'icon_hide_24';
to(`<symbol id="icon_hide_24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M4.682 3.27a1 1 0 0 0-1.39 1.437l1.709 1.708C3.078 7.86 1.802 9.6 1.163 10.598l-.044.068C.914 10.983.64 11.406.64 12s.274 1.017.48 1.334l.043.068C2.393 15.322 5.985 20 12 20c2.033 0 3.789-.534 5.27-1.316l2.023 2.023a1 1 0 0 0 1.438-1.39zm-1.835 8.407c.635-.991 1.833-2.584 3.585-3.83l2.122 2.121a4 4 0 0 0 5.478 5.478l1.741 1.741A9.1 9.1 0 0 1 12 18c-4.915 0-7.986-3.855-9.153-5.677l-.145-.23L2.65 12q.015-.03.053-.093c.037-.061.082-.132.145-.23M10 12q.001-.27.068-.518l2.45 2.45A2.002 2.002 0 0 1 10 12" clip-rule="evenodd"/>
  <path fill="currentColor" d="M19.475 15.94c.38.38.992.393 1.362.006a17 17 0 0 0 2-2.544l.044-.068c.205-.317.479-.74.479-1.334s-.274-1.017-.48-1.334l-.043-.068C21.607 8.678 18.015 4 12 4c-.772 0-1.504.077-2.197.215-.761.153-.974 1.08-.425 1.628a1.14 1.14 0 0 0 1.01.3A9 9 0 0 1 12 6c4.915 0 7.986 3.855 9.153 5.677.063.098.108.169.145.23l.053.093-.053.093-.145.23a15 15 0 0 1-1.673 2.149c-.389.414-.406 1.067-.005 1.469"/>
  <path fill="currentColor" d="M15.976 12.441a4 4 0 0 0-4.417-4.417z"/>
</symbol>`, Pp);
var Mp = Xa('<svg width="24" height="24" aria-hidden="true"><use href="#icon_hide_24"></use></svg>');
function Bp(n, e) {
  st(e, true);
  var t = Mp();
  nt(() => Nt(t, e.color ? `color: var(--icon-${ e.color }, currentColor)` : '')), X(n, t), rt();
}
const Up = 'icon_show_24';
to(`<symbol id="icon_show_24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clip-rule="evenodd"/>
  <path fill="currentColor" fill-rule="evenodd" d="M.64 12c0 .594.274 1.017.48 1.334l.043.068C2.393 15.322 5.985 20 12 20s9.607-4.677 10.837-6.598l.044-.068c.205-.317.479-.74.479-1.334s-.274-1.017-.48-1.334l-.043-.068C21.607 8.678 18.015 4 12 4S2.393 8.678 1.163 10.598l-.044.068C.914 10.983.64 11.406.64 12m2.207.323-.145-.23L2.65 12q.015-.03.053-.093c.037-.061.082-.132.145-.23C4.014 9.855 7.085 6 12 6s7.986 3.855 9.153 5.677c.063.098.108.169.145.23l.053.093-.053.093-.145.23C19.986 14.145 16.915 18 12 18s-7.986-3.855-9.153-5.677" clip-rule="evenodd"/>
</symbol>`, Up);
var Hp = Xa('<svg width="24" height="24" aria-hidden="true"><use href="#icon_show_24"></use></svg>');
function jp(n, e) {
  st(e, true);
  var t = Hp();
  nt(() => Nt(t, e.color ? `color: var(--icon-${ e.color }, currentColor)` : '')), X(n, t), rt();
}
var $p = [
    'forEach',
    'isDisjointFrom',
    'isSubsetOf',
    'isSupersetOf'
  ], zp = [
    'difference',
    'intersection',
    'symmetricDifference',
    'union'
  ], Hc = false;
class Te extends Set {
  #e = new Map();
  #t = W(0);
  #n = W(0);
  #s = Er || -1;
  constructor(e) {
    super();
    if (e) {
      for (var t of e)
        super.add(t);
      this.#n.v = super.size;
    }
    Hc || this.#i();
  }
  #r(e) {
    return Er === this.#s ? W(e) : yn(e);
  }
  #i() {
    Hc = true;
    var e = Te.prototype, t = Set.prototype;
    for (const s of $p)
      e[s] = function (...r) {
        p(this.#t);
        return t[s].apply(this, r);
      };
    for (const s of zp)
      e[s] = function (...r) {
        p(this.#t);
        var i = t[s].apply(this, r);
        return new Te(i);
      };
  }
  has(e) {
    var t = super.has(e), s = this.#e, r = s.get(e);
    if (r === void 0) {
      if (!t) {
        p(this.#t);
        return false;
      }
      r = this.#r(true), s.set(e, r);
    }
    p(r);
    return t;
  }
  add(e) {
    super.has(e) || (super.add(e), x(this.#n, super.size), Yt(this.#t));
    return this;
  }
  delete(e) {
    var t = super.delete(e), s = this.#e, r = s.get(e);
    r !== void 0 && (s.delete(e), x(r, false));
    t && (x(this.#n, super.size), Yt(this.#t));
    return t;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      for (var t of e.values())
        x(t, false);
      e.clear(), x(this.#n, 0), Yt(this.#t);
    }
  }
  keys() {
    return this.values();
  }
  values() {
    p(this.#t);
    return super.values();
  }
  entries() {
    p(this.#t);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.keys();
  }
  get size() {
    return p(this.#n);
  }
}
class pe extends Map {
  #e = new Map();
  #t = W(0);
  #n = W(0);
  #s = Er || -1;
  constructor(e) {
    super();
    if (e) {
      for (var [t, s] of e)
        super.set(t, s);
      this.#n.v = super.size;
    }
  }
  #r(e) {
    return Er === this.#s ? W(e) : yn(e);
  }
  has(e) {
    var t = this.#e, s = t.get(e);
    if (s === void 0) {
      var r = super.get(e);
      if (r !== void 0)
        s = this.#r(0), t.set(e, s);
      else {
        p(this.#t);
        return false;
      }
    }
    p(s);
    return true;
  }
  forEach(e, t) {
    this.#i(), super.forEach(e, t);
  }
  get(e) {
    var t = this.#e, s = t.get(e);
    if (s === void 0) {
      var r = super.get(e);
      if (r !== void 0)
        s = this.#r(0), t.set(e, s);
      else {
        p(this.#t);
        return;
      }
    }
    p(s);
    return super.get(e);
  }
  set(e, t) {
    var s = this.#e, r = s.get(e), i = super.get(e), a = super.set(e, t), o = this.#t;
    if (r === void 0)
      r = this.#r(0), s.set(e, r), x(this.#n, super.size), Yt(o);
    else if (i !== t) {
      Yt(r);
      var l = o.reactions === null ? null : new Set(o.reactions), d = l === null || !r.reactions?.every(c => l.has(c));
      d && Yt(o);
    }
    return a;
  }
  delete(e) {
    var t = this.#e, s = t.get(e), r = super.delete(e);
    s !== void 0 && (t.delete(e), x(this.#n, super.size), x(s, -1), Yt(this.#t));
    return r;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var e = this.#e;
      x(this.#n, 0);
      for (var t of e.values())
        x(t, -1);
      Yt(this.#t), e.clear();
    }
  }
  #i() {
    p(this.#t);
    var e = this.#e;
    if (this.#n.v !== e.size) {
      for (var t of super.keys())
        if (!e.has(t)) {
          var s = this.#r(0);
          e.set(t, s);
        }
    }
    for ([, s] of this.#e)
      p(s);
  }
  keys() {
    p(this.#t);
    return super.keys();
  }
  values() {
    this.#i();
    return super.values();
  }
  entries() {
    this.#i();
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    p(this.#n);
    return super.size;
  }
}
class Vp {
  #e;
  #t;
  constructor(e, t) {
    this.#e = e, this.#t = Vu(t);
  }
  get current() {
    this.#t();
    return this.#e();
  }
}
const Gp = /\(.+\)/, Kp = new Set([
    'all',
    'print',
    'screen',
    'and',
    'or',
    'not',
    'only'
  ]);
class Ml extends Vp {
  constructor(e, t) {
    let s = Gp.test(e) || e.split(/[\s,]+/).some(i => Kp.has(i.trim())) ? e : `(${ e })`;
    const r = window.matchMedia(s);
    super(() => r.matches, i => ke(r, 'change', i));
  }
}
class Wp {
  #e = W(true);
  get idle() {
    return p(this.#e);
  }
  set idle(e) {
    x(this.#e, e, true);
  }
  timeoutId;
  lastMouseXY = [
    0,
    0
  ];
  subscribers = new Set();
  constructor() {
    ke(document, 'visibilitychange', () => {
      this.update(this.inBackground);
    }), ke(window, 'focus', () => this.update(false)), ke(window, 'blur', () => this.update(true)), ke(document, 'keydown', () => this.update(false)), ke(document, 'mousedown', () => this.update(false)), ke(document, 'mousemove', e => {
      this.lastMouseXY[0] === e.clientX && this.lastMouseXY[1] === e.clientY || (this.lastMouseXY = [
        e.clientX,
        e.clientY
      ], this.update(false));
    }), ke(document, 'wheel', () => this.update(false)), this.update(this.inBackground);
  }
  get current() {
    return this.idle;
  }
  get false() {
    if (!this.idle)
      return Promise.resolve();
    const {
      promise: e,
      resolve: t
    } = Promise.withResolvers();
    this.subscribers.add(t);
    return e;
  }
  get inBackground() {
    return document.visibilityState === 'hidden' && !document.hasFocus();
  }
  update(e) {
    this.idle = e;
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
    if (!this.idle) {
      this.timeoutId = window.setTimeout(() => this.update(true), 60000);
      for (const t of this.subscribers)
        t();
      this.subscribers.clear();
    }
  }
}
const Bl = new Wp();
class qp {
  subscribe = () => {
  };
  constructor() {
    this.subscribe = Vu(e => {
      const t = setInterval(e, 1000);
      return () => {
        clearInterval(t);
      };
    });
  }
  get now() {
    this.subscribe();
    return Date.now();
  }
}
const tn = new qp();
class Yp {
  query;
  constructor() {
    this.query = new Ml('(prefers-color-scheme: dark)');
  }
  get current() {
    return this.query.current ? 'dark' : 'light';
  }
}
const Qp = new Yp();
class Jp {
  query;
  constructor() {
    this.query = new Ml('(max-width: 925px)');
  }
  get mobile() {
    return this.query.current;
  }
  get desktop() {
    return !this.query.current;
  }
}
const tF = new Jp();
var Xp = ue('<span class="button-inner svelte-fqf2x3"><!></span> <span class="loading svelte-fqf2x3"><span class="loader svelte-fqf2x3"></span></span>', 1), Zp = ue('<a><!></a>'), eg = ue('<button><!></button>');
function Wi(n, e) {
  const t = u => {
    var h = Xp(), f = Me(h), m = me(f);
    Lt(m, () => e.children), he(f), Gu(2), X(u, h);
  };
  let s = Qe(e, 'type', 3, 'button'), r = Qe(e, 'class', 3, ''), i = ii(e, [
      '$$slots',
      '$$events',
      '$$legacy',
      'href',
      'download',
      'target',
      'type',
      'size',
      'mode',
      'appearance',
      'disabled',
      'loading',
      'stretched',
      'children',
      'onClick',
      'form',
      'class'
    ]);
  const a = k(() => [
    `${ r() } button button--${ e.size } button--${ e.appearance }-${ e.mode }`,
    {
      'button--loading': e.loading,
      'button--stretched': e.stretched,
      'button--link': e.mode === 'link'
    }
  ]);
  var o = Ve(), l = Me(o);
  var d = u => {
      var h = Zp();
      Ar(h, () => ({
        href: e.href,
        download: e.download,
        target: e.target,
        class: p(a),
        onclick: e.onClick,
        ...i
      }), void 0, void 0, void 0, 'svelte-fqf2x3');
      var f = me(h);
      t(f), he(h), X(u, h);
    }, c = u => {
      var h = eg();
      Ar(h, () => ({
        type: s(),
        form: e.form,
        disabled: e.disabled,
        class: p(a),
        onclick: e.onClick,
        ...i
      }), void 0, void 0, void 0, 'svelte-fqf2x3');
      var f = me(h);
      t(f), he(h), X(u, h);
    };
  ye(l, u => {
    e.href ? u(d) : u(c, false);
  });
  X(n, o);
}
var Ul = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])'
  ], Rr = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])', Hl = typeof Element > 'u', Cn = Hl ? function () {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, kr = !Hl && Element.prototype.getRootNode ? function (n) {
    var e;
    return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
  } : function (n) {
    return n?.ownerDocument;
  }, Ns = function (e, t) {
    var s;
    t === void 0 && (t = true);
    var r = e == null || (s = e.getAttribute) === null || s === void 0 ? void 0 : s.call(e, 'inert'), i = r === '' || r === 'true', a = i || t && e && Ns(e.parentNode);
    return a;
  }, tg = function (e) {
    var t, s = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, 'contenteditable');
    return s === '' || s === 'true';
  }, jl = function (e, t, s) {
    if (Ns(e))
      return [];
    var r = Array.prototype.slice.apply(e.querySelectorAll(Rr));
    t && Cn.call(e, Rr) && r.unshift(e);
    r = r.filter(s);
    return r;
  }, Lr = function (e, t, s) {
    for (var r = [], i = Array.from(e); i.length;) {
      var a = i.shift();
      if (!Ns(a, false))
        if (a.tagName === 'SLOT') {
          var o = a.assignedElements(), l = o.length ? o : a.children, d = Lr(l, true, s);
          s.flatten ? r.push.apply(r, d) : r.push({
            scopeParent: a,
            candidates: d
          });
        } else {
          var c = Cn.call(a, Rr);
          c && s.filter(a) && (t || !e.includes(a)) && r.push(a);
          var u = a.shadowRoot || typeof s.getShadowRoot == 'function' && s.getShadowRoot(a), h = !Ns(u, false) && (!s.shadowRootFilter || s.shadowRootFilter(a));
          if (u && h) {
            var f = Lr(u === true ? a.children : u.children, true, s);
            s.flatten ? r.push.apply(r, f) : r.push({
              scopeParent: a,
              candidates: f
            });
          } else
            i.unshift.apply(i, a.children);
        }
    }
    return r;
  }, $l = function (e) {
    return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
  }, pn = function (e) {
    if (!e)
      throw new Error('No node provided');
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || tg(e)) && !$l(e) ? 0 : e.tabIndex;
  }, ng = function (e, t) {
    var s = pn(e);
    return s < 0 && t && !$l(e) ? 0 : s;
  }, sg = function (e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
  }, zl = function (e) {
    return e.tagName === 'INPUT';
  }, rg = function (e) {
    return zl(e) && e.type === 'hidden';
  }, ig = function (e) {
    var t = e.tagName === 'DETAILS' && Array.prototype.slice.apply(e.children).some(function (s) {
      return s.tagName === 'SUMMARY';
    });
    return t;
  }, ag = function (e, t) {
    for (var s = 0; s < e.length; s++)
      if (e[s].checked && e[s].form === t)
        return e[s];
  }, og = function (e) {
    if (!e.name)
      return true;
    var t = e.form || kr(e), s = function (o) {
        return t.querySelectorAll('input[type="radio"][name="' + o + '"]');
      }, r;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function')
      r = s(window.CSS.escape(e.name));
    else
      try {
        r = s(e.name);
      } catch (a) {
        console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', a.message);
        return false;
      }
    var i = ag(r, e.form);
    return !i || i === e;
  }, cg = function (e) {
    return zl(e) && e.type === 'radio';
  }, ug = function (e) {
    return cg(e) && !og(e);
  }, lg = function (e) {
    var t, s = e && kr(e), r = (t = s) === null || t === void 0 ? void 0 : t.host, i = false;
    if (s && s !== e) {
      var a, o, l;
      for (i = !!((a = r) !== null && a !== void 0 && (o = a.ownerDocument) !== null && o !== void 0 && o.contains(r) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && r;) {
        var d, c, u;
        s = kr(r), r = (d = s) === null || d === void 0 ? void 0 : d.host, i = !!((c = r) !== null && c !== void 0 && (u = c.ownerDocument) !== null && u !== void 0 && u.contains(r));
      }
    }
    return i;
  }, jc = function (e) {
    var t = e.getBoundingClientRect(), s = t.width, r = t.height;
    return s === 0 && r === 0;
  }, dg = function (e, t) {
    var s = t.displayCheck, r = t.getShadowRoot;
    if (s === 'full-native' && 'checkVisibility' in e) {
      var i = e.checkVisibility({
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        checkVisibilityCSS: true
      });
      return !i;
    }
    if (getComputedStyle(e).visibility === 'hidden')
      return true;
    var a = Cn.call(e, 'details>summary:first-of-type'), o = a ? e.parentElement : e;
    if (Cn.call(o, 'details:not([open]) *'))
      return true;
    if (!s || s === 'full' || s === 'full-native' || s === 'legacy-full') {
      if (typeof r == 'function') {
        for (var l = e; e;) {
          var d = e.parentElement, c = kr(e);
          if (d && !d.shadowRoot && r(d) === true)
            return jc(e);
          e.assignedSlot ? e = e.assignedSlot : !d && c !== e.ownerDocument ? e = c.host : e = d;
        }
        e = e;
      }
      if (lg(e))
        return !e.getClientRects().length;
      if (s !== 'legacy-full')
        return true;
    } else if (s === 'non-zero-area')
      return jc(e);
    return false;
  }, hg = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var t = e.parentElement; t;) {
        if (t.tagName === 'FIELDSET' && t.disabled) {
          for (var s = 0; s < t.children.length; s++) {
            var r = t.children.item(s);
            if (r.tagName === 'LEGEND')
              return Cn.call(t, 'fieldset[disabled] *') ? true : !r.contains(e);
          }
          return true;
        }
        t = t.parentElement;
      }
    return false;
  }, Nr = function (e, t) {
    return !(t.disabled || Ns(t) || rg(t) || dg(t, e) || ig(t) || hg(t));
  }, Aa = function (e, t) {
    return !(ug(t) || pn(t) < 0 || !Nr(e, t));
  }, fg = function (e) {
    var t = parseInt(e.getAttribute('tabindex'), 10);
    return !!(isNaN(t) || t >= 0);
  }, Vl = function (e) {
    var t = [], s = [];
    e.forEach(function (r, i) {
      var a = !!r.scopeParent, o = a ? r.scopeParent : r, l = ng(o, a), d = a ? Vl(r.candidates) : o;
      l === 0 ? a ? t.push.apply(t, d) : t.push(o) : s.push({
        documentOrder: i,
        tabIndex: l,
        item: r,
        isScope: a,
        content: d
      });
    });
    return s.sort(sg).reduce(function (r, i) {
      i.isScope ? r.push.apply(r, i.content) : r.push(i.content);
      return r;
    }, []).concat(t);
  }, mg = function (e, t) {
    t = t || {};
    var s;
    t.getShadowRoot ? s = Lr([e], t.includeContainer, {
      filter: Aa.bind(null, t),
      flatten: false,
      getShadowRoot: t.getShadowRoot,
      shadowRootFilter: fg
    }) : s = jl(e, t.includeContainer, Aa.bind(null, t));
    return Vl(s);
  }, pg = function (e, t) {
    t = t || {};
    var s;
    t.getShadowRoot ? s = Lr([e], t.includeContainer, {
      filter: Nr.bind(null, t),
      flatten: true,
      getShadowRoot: t.getShadowRoot
    }) : s = jl(e, t.includeContainer, Nr.bind(null, t));
    return s;
  }, Ln = function (e, t) {
    t = t || {};
    if (!e)
      throw new Error('No node provided');
    return Cn.call(e, Rr) === false ? false : Aa(t, e);
  }, gg = 'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert]),iframe', qi = function (e, t) {
    t = t || {};
    if (!e)
      throw new Error('No node provided');
    return Cn.call(e, gg) === false ? false : Nr(t, e);
  };
function Ca(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, s = Array(e); t < e; t++)
    s[t] = n[t];
  return s;
}
function Dg(n) {
  if (Array.isArray(n))
    return Ca(n);
}
function _g(n, e, t) {
  (e = yg(e)) in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : n[e] = t;
  return n;
}
function vg(n) {
  if (typeof Symbol < 'u' && n[Symbol.iterator] != null || n['@@iterator'] != null)
    return Array.from(n);
}
function bg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $c(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    e && (s = s.filter(function (r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function zc(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $c(Object(t), true).forEach(function (s) {
      _g(n, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : $c(Object(t)).forEach(function (s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return n;
}
function wg(n) {
  return Dg(n) || vg(n) || Ag(n) || bg();
}
function Eg(n, e) {
  if (typeof n != 'object' || !n)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(n, e);
    if (typeof s != 'object')
      return s;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (e === 'string' ? String : Number)(n);
}
function yg(n) {
  var e = Eg(n, 'string');
  return typeof e == 'symbol' ? e : e + '';
}
function Ag(n, e) {
  if (n) {
    if (typeof n == 'string')
      return Ca(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    t === 'Object' && n.constructor && (t = n.constructor.name);
    return t === 'Map' || t === 'Set' ? Array.from(n) : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ca(n, e) : void 0;
  }
}
var Vc = {
    activateTrap: function (e, t) {
      if (e.length > 0) {
        var s = e[e.length - 1];
        s !== t && s._setPausedState(true);
      }
      var r = e.indexOf(t);
      r === -1 || e.splice(r, 1), e.push(t);
    },
    deactivateTrap: function (e, t) {
      var s = e.indexOf(t);
      s !== -1 && e.splice(s, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(false);
    }
  }, Cg = function (e) {
    return e.tagName && e.tagName.toLowerCase() === 'input' && typeof e.select == 'function';
  }, Tg = function (e) {
    return e?.key === 'Escape' || e?.key === 'Esc' || e?.keyCode === 27;
  }, Es = function (e) {
    return e?.key === 'Tab' || e?.keyCode === 9;
  }, Ig = function (e) {
    return Es(e) && !e.shiftKey;
  }, Fg = function (e) {
    return Es(e) && e.shiftKey;
  }, Gc = function (e) {
    return setTimeout(e, 0);
  }, Ds = function (e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      s[r - 1] = arguments[r];
    return typeof e == 'function' ? e.apply(void 0, s) : e;
  }, ar = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == 'function' ? e.composedPath()[0] : e.target;
  }, Sg = [], xg = function (e, t) {
    var s = t?.document || document, r = t?.trapStack || Sg, i = zc({
        returnFocusOnDeactivate: true,
        escapeDeactivates: true,
        delayInitialFocus: true,
        isKeyForward: Ig,
        isKeyBackward: Fg
      }, t), a = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: false,
        paused: false,
        manuallyPaused: false,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
      }, o, l = function (A, w, T) {
        return A && A[w] !== void 0 ? A[w] : i[T || w];
      }, d = function (A, w) {
        var T = typeof w?.composedPath == 'function' ? w.composedPath() : void 0;
        return a.containerGroups.findIndex(function (E) {
          var v = E.container, H = E.tabbableNodes;
          return v.contains(A) || T?.includes(v) || H.find(function (P) {
            return P === A;
          });
        });
      }, c = function (A) {
        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = w.hasFallback, E = T === void 0 ? false : T, v = w.params, H = v === void 0 ? [] : v, P = i[A];
        typeof P == 'function' && (P = P.apply(void 0, wg(H)));
        P === true && (P = void 0);
        if (!P) {
          if (P === void 0 || P === false)
            return P;
          throw new Error('`'.concat(A, '` was specified but was not a node, or did not return a node'));
        }
        var j = P;
        if (typeof P == 'string') {
          try {
            j = s.querySelector(P);
          } catch (G) {
            throw new Error('`'.concat(A, '` appears to be an invalid selector; error="').concat(G.message, '"'));
          }
          if (!j && !E)
            throw new Error('`'.concat(A, '` as selector refers to no known node'));
        }
        return j;
      }, u = function () {
        var A = c('initialFocus', { hasFallback: true });
        if (A === false)
          return false;
        if (A === void 0 || A && !qi(A, i.tabbableOptions))
          if (d(s.activeElement) >= 0)
            A = s.activeElement;
          else {
            var w = a.tabbableGroups[0], T = w && w.firstTabbableNode;
            A = T || c('fallbackFocus');
          }
        else
          A === null && (A = c('fallbackFocus'));
        if (!A)
          throw new Error('Your focus-trap needs to have at least one focusable element');
        return A;
      }, h = function () {
        a.containerGroups = a.containers.map(function (A) {
          var w = mg(A, i.tabbableOptions), T = pg(A, i.tabbableOptions), E = w.length > 0 ? w[0] : void 0, v = w.length > 0 ? w[w.length - 1] : void 0, H = T.find(function (G) {
              return Ln(G);
            }), P = T.slice().reverse().find(function (G) {
              return Ln(G);
            }), j = !!w.find(function (G) {
              return pn(G) > 0;
            });
          return {
            container: A,
            tabbableNodes: w,
            focusableNodes: T,
            posTabIndexesFound: j,
            firstTabbableNode: E,
            lastTabbableNode: v,
            firstDomTabbableNode: H,
            lastDomTabbableNode: P,
            nextTabbableNode: function (V) {
              var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, z = w.indexOf(V);
              return z < 0 ? K ? T.slice(T.indexOf(V) + 1).find(function ($) {
                return Ln($);
              }) : T.slice(0, T.indexOf(V)).reverse().find(function ($) {
                return Ln($);
              }) : w[z + (K ? 1 : -1)];
            }
          };
        });
        a.tabbableGroups = a.containerGroups.filter(function (A) {
          return A.tabbableNodes.length > 0;
        });
        if (a.tabbableGroups.length <= 0 && !c('fallbackFocus'))
          throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
        if (a.containerGroups.find(function (A) {
            return A.posTabIndexesFound;
          }) && a.containerGroups.length > 1)
          throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
      }, f = function (A) {
        var w = A.activeElement;
        if (w)
          return w.shadowRoot && w.shadowRoot.activeElement !== null ? f(w.shadowRoot) : w;
      }, m = function (A) {
        if (A !== false && A !== f(document)) {
          if (!A || !A.focus) {
            m(u());
            return;
          }
          A.focus({ preventScroll: !!i.preventScroll }), a.mostRecentlyFocusedNode = A, Cg(A) && A.select();
        }
      }, g = function (A) {
        var w = c('setReturnFocus', { params: [A] });
        return w || (w === false ? false : A);
      }, D = function (A) {
        var w = A.target, T = A.event, E = A.isBackward, v = E === void 0 ? false : E;
        w = w || ar(T), h();
        var H = null;
        if (a.tabbableGroups.length > 0) {
          var P = d(w, T), j = P >= 0 ? a.containerGroups[P] : void 0;
          if (P < 0)
            v ? H = a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : H = a.tabbableGroups[0].firstTabbableNode;
          else if (v) {
            var G = a.tabbableGroups.findIndex(function (ie) {
              var Y = ie.firstTabbableNode;
              return w === Y;
            });
            G < 0 && (j.container === w || qi(w, i.tabbableOptions) && !Ln(w, i.tabbableOptions) && !j.nextTabbableNode(w, false)) && (G = P);
            if (G >= 0) {
              var V = G === 0 ? a.tabbableGroups.length - 1 : G - 1, K = a.tabbableGroups[V];
              H = pn(w) >= 0 ? K.lastTabbableNode : K.lastDomTabbableNode;
            } else
              Es(T) || (H = j.nextTabbableNode(w, false));
          } else {
            var z = a.tabbableGroups.findIndex(function (ie) {
              var Y = ie.lastTabbableNode;
              return w === Y;
            });
            z < 0 && (j.container === w || qi(w, i.tabbableOptions) && !Ln(w, i.tabbableOptions) && !j.nextTabbableNode(w)) && (z = P);
            if (z >= 0) {
              var $ = z === a.tabbableGroups.length - 1 ? 0 : z + 1, q = a.tabbableGroups[$];
              H = pn(w) >= 0 ? q.firstTabbableNode : q.firstDomTabbableNode;
            } else
              Es(T) || (H = j.nextTabbableNode(w));
          }
        } else
          H = c('fallbackFocus');
        return H;
      }, _ = function (A) {
        var w = ar(A);
        if (!(d(w, A) >= 0)) {
          if (Ds(i.clickOutsideDeactivates, A)) {
            o.deactivate({ returnFocus: i.returnFocusOnDeactivate });
            return;
          }
          Ds(i.allowOutsideClick, A) || A.preventDefault();
        }
      }, S = function (A) {
        var w = ar(A), T = d(w, A) >= 0;
        if (T || w instanceof Document)
          T && (a.mostRecentlyFocusedNode = w);
        else {
          A.stopImmediatePropagation();
          var E, v = true;
          if (a.mostRecentlyFocusedNode)
            if (pn(a.mostRecentlyFocusedNode) > 0) {
              var H = d(a.mostRecentlyFocusedNode), P = a.containerGroups[H].tabbableNodes;
              if (P.length > 0) {
                var j = P.findIndex(function (G) {
                  return G === a.mostRecentlyFocusedNode;
                });
                j >= 0 && (i.isKeyForward(a.recentNavEvent) ? j + 1 < P.length && (E = P[j + 1], v = false) : j - 1 >= 0 && (E = P[j - 1], v = false));
              }
            } else
              a.containerGroups.some(function (G) {
                return G.tabbableNodes.some(function (V) {
                  return pn(V) > 0;
                });
              }) || (v = false);
          else
            v = false;
          v && (E = D({
            target: a.mostRecentlyFocusedNode,
            isBackward: i.isKeyBackward(a.recentNavEvent)
          })), m(E || a.mostRecentlyFocusedNode || u());
        }
        a.recentNavEvent = void 0;
      }, N = function (A) {
        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        a.recentNavEvent = A;
        var T = D({
          event: A,
          isBackward: w
        });
        T && (Es(A) && A.preventDefault(), m(T));
      }, L = function (A) {
        (i.isKeyForward(A) || i.isKeyBackward(A)) && N(A, i.isKeyBackward(A));
      }, U = function (A) {
        Tg(A) && Ds(i.escapeDeactivates, A) !== false && (A.preventDefault(), o.deactivate());
      }, C = function (A) {
        var w = ar(A);
        d(w, A) >= 0 || Ds(i.clickOutsideDeactivates, A) || Ds(i.allowOutsideClick, A) || (A.preventDefault(), A.stopImmediatePropagation());
      }, R = function () {
        if (a.active) {
          Vc.activateTrap(r, o);
          a.delayInitialFocusTimer = i.delayInitialFocus ? Gc(function () {
            m(u());
          }) : m(u());
          s.addEventListener('focusin', S, true);
          s.addEventListener('mousedown', _, {
            capture: true,
            passive: false
          });
          s.addEventListener('touchstart', _, {
            capture: true,
            passive: false
          });
          s.addEventListener('click', C, {
            capture: true,
            passive: false
          });
          s.addEventListener('keydown', L, {
            capture: true,
            passive: false
          });
          s.addEventListener('keydown', U);
          return o;
        }
      }, b = function () {
        if (a.active) {
          s.removeEventListener('focusin', S, true);
          s.removeEventListener('mousedown', _, true);
          s.removeEventListener('touchstart', _, true);
          s.removeEventListener('click', C, true);
          s.removeEventListener('keydown', L, true);
          s.removeEventListener('keydown', U);
          return o;
        }
      }, y = function (A) {
        var w = A.some(function (T) {
          var E = Array.from(T.removedNodes);
          return E.some(function (v) {
            return v === a.mostRecentlyFocusedNode;
          });
        });
        w && m(u());
      }, I = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(y) : void 0, O = function () {
        I && (I.disconnect(), a.active && !a.paused && a.containers.map(function (A) {
          I.observe(A, {
            subtree: true,
            childList: true
          });
        }));
      };
    o = {
      get active() {
        return a.active;
      },
      get paused() {
        return a.paused;
      },
      activate: function (A) {
        if (a.active)
          return this;
        var w = l(A, 'onActivate'), T = l(A, 'onPostActivate'), E = l(A, 'checkCanFocusTrap');
        E || h(), a.active = true, a.paused = false, a.nodeFocusedBeforeActivation = f(s), w?.();
        var v = function () {
          E && h(), R(), O(), T?.();
        };
        return E ? (E(a.containers.concat()).then(v, v), this) : (v(), this);
      },
      deactivate: function (A) {
        if (!a.active)
          return this;
        var w = zc({
          onDeactivate: i.onDeactivate,
          onPostDeactivate: i.onPostDeactivate,
          checkCanReturnFocus: i.checkCanReturnFocus
        }, A);
        clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, b(), a.active = false, a.paused = false, O(), Vc.deactivateTrap(r, o);
        var T = l(w, 'onDeactivate'), E = l(w, 'onPostDeactivate'), v = l(w, 'checkCanReturnFocus'), H = l(w, 'returnFocus', 'returnFocusOnDeactivate');
        T?.();
        var P = function () {
          Gc(function () {
            H && m(g(a.nodeFocusedBeforeActivation)), E?.();
          });
        };
        return H && v ? (v(g(a.nodeFocusedBeforeActivation)).then(P, P), this) : (P(), this);
      },
      pause: function (A) {
        return a.active ? (a.manuallyPaused = true, this._setPausedState(true, A)) : this;
      },
      unpause: function (A) {
        return a.active ? (a.manuallyPaused = false, r[r.length - 1] !== this ? this : this._setPausedState(false, A)) : this;
      },
      updateContainerElements: function (A) {
        var w = [].concat(A).filter(Boolean);
        a.containers = w.map(function (T) {
          return typeof T == 'string' ? s.querySelector(T) : T;
        });
        a.active && h();
        O();
        return this;
      }
    };
    Object.defineProperties(o, {
      _isManuallyPaused: {
        value: function () {
          return a.manuallyPaused;
        }
      },
      _setPausedState: {
        value: function (A, w) {
          if (a.paused === A)
            return this;
          a.paused = A;
          if (A) {
            var T = l(w, 'onPause'), E = l(w, 'onPostPause');
            T?.(), b(), O(), E?.();
          } else {
            var v = l(w, 'onUnpause'), H = l(w, 'onPostUnpause');
            v?.(), h(), R(), O(), H?.();
          }
          return this;
        }
      }
    });
    o.updateContainerElements(e);
    return o;
  };
const Og = [
    'top',
    'right',
    'bottom',
    'left'
  ], Kc = [
    'start',
    'end'
  ], Wc = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ], Bt = Math.min, Et = Math.max, Pr = Math.round, or = Math.floor, yt = n => ({
    x: n,
    y: n
  }), Rg = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  }, kg = {
    start: 'end',
    end: 'start'
  };
function Ta(n, e, t) {
  return Et(n, Bt(e, t));
}
function Fn(n, e) {
  return typeof n == 'function' ? n(e) : n;
}
function ut(n) {
  return n.split('-')[0];
}
function At(n) {
  return n.split('-')[1];
}
function Gl(n) {
  return n === 'x' ? 'y' : 'x';
}
function _o(n) {
  return n === 'y' ? 'height' : 'width';
}
const Lg = new Set([
  'top',
  'bottom'
]);
function Rt(n) {
  return Lg.has(ut(n)) ? 'y' : 'x';
}
function vo(n) {
  return Gl(Rt(n));
}
function Kl(n, e, t) {
  t === void 0 && (t = false);
  const s = At(n), r = vo(n), i = _o(r);
  let a = r === 'x' ? s === (t ? 'end' : 'start') ? 'right' : 'left' : s === 'start' ? 'bottom' : 'top';
  e.reference[i] > e.floating[i] && (a = Br(a));
  return [
    a,
    Br(a)
  ];
}
function Ng(n) {
  const e = Br(n);
  return [
    Mr(n),
    e,
    Mr(e)
  ];
}
function Mr(n) {
  return n.replace(/start|end/g, e => kg[e]);
}
const qc = [
    'left',
    'right'
  ], Yc = [
    'right',
    'left'
  ], Pg = [
    'top',
    'bottom'
  ], Mg = [
    'bottom',
    'top'
  ];
function Bg(n, e, t) {
  switch (n) {
  case 'top':
  case 'bottom':
    return t ? e ? Yc : qc : e ? qc : Yc;
  case 'left':
  case 'right':
    return e ? Pg : Mg;
  default:
    return [];
  }
}
function Ug(n, e, t, s) {
  const r = At(n);
  let i = Bg(ut(n), t === 'start', s);
  r && (i = i.map(a => a + '-' + r), e && (i = i.concat(i.map(Mr))));
  return i;
}
function Br(n) {
  return n.replace(/left|right|bottom|top/g, e => Rg[e]);
}
function Hg(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function bo(n) {
  return typeof n != 'number' ? Hg(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function es(n) {
  return {
    width: s,
    height: r,
    top: t,
    left: e,
    right: e + s,
    bottom: t + r,
    x: e,
    y: t
  };
}
function Qc(n, e, t) {
  const i = Rt(e), a = vo(e), o = _o(a), l = ut(e), d = i === 'y', c = s.x + s.width / 2 - r.width / 2, u = s.y + s.height / 2 - r.height / 2, h = s[o] / 2 - r[o] / 2;
  let f;
  switch (l) {
  case 'top':
    f = {
      x: c,
      y: s.y - r.height
    };
    break;
  case 'bottom':
    f = {
      x: c,
      y: s.y + s.height
    };
    break;
  case 'right':
    f = {
      x: s.x + s.width,
      y: u
    };
    break;
  case 'left':
    f = {
      x: s.x - r.width,
      y: u
    };
    break;
  default:
    f = {
      x: s.x,
      y: s.y
    };
  }
  switch (At(e)) {
  case 'start':
    f[a] -= h * (t && d ? -1 : 1);
    break;
  case 'end':
    f[a] += h * (t && d ? -1 : 1);
    break;
  }
  return f;
}
const jg = async (n, e, t) => {
  const o = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let d = await a.getElementRects({
      reference: n,
      floating: e,
      strategy: r
    }), {
      x: c,
      y: u
    } = Qc(d, s, l), h = s, f = {}, m = 0;
  for (let g = 0; g < o.length; g++) {
    const {
        name: D,
        fn: _
      } = o[g], {
        x: S,
        y: N,
        data: L,
        reset: U
      } = await _({
        x: c,
        y: u,
        initialPlacement: s,
        placement: h,
        strategy: r,
        middlewareData: f,
        rects: d,
        platform: a,
        elements: {
          reference: n,
          floating: e
        }
      });
    c = S ?? c, u = N ?? u, f = {
      ...f,
      [D]: {
        ...f[D],
        ...L
      }
    }, U && m <= 50 && (m++, typeof U == 'object' && (U.placement && (h = U.placement), U.rects && (d = U.rects === true ? await a.getElementRects({
      reference: n,
      floating: e,
      strategy: r
    }) : U.rects), {
      x: c,
      y: u
    } = Qc(d, h, l)), g = -1);
  }
  return {
    x: c,
    y: u,
    placement: h,
    strategy: r,
    middlewareData: f
  };
};
async function wo(n, e) {
  var t;
  e === void 0 && (e = {});
  const {
      boundary: d = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: u = 'floating',
      altBoundary: h = false,
      padding: f = 0
    } = Fn(e, n), m = bo(f), D = o[h ? u === 'floating' ? 'reference' : 'floating' : u], _ = es(await i.getClippingRect({
      element: (t = await (i.isElement == null ? void 0 : i.isElement(D))) == null || t ? D : D.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
      boundary: d,
      rootBoundary: c,
      strategy: l
    })), S = u === 'floating' ? {
      x: s,
      y: r,
      width: a.floating.width,
      height: a.floating.height
    } : a.reference, N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), L = await (i.isElement == null ? void 0 : i.isElement(N)) ? await (i.getScale == null ? void 0 : i.getScale(N)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, U = es(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: o,
      rect: S,
      offsetParent: N,
      strategy: l
    }) : S);
  return {
    top: (_.top - U.top + m.top) / L.y,
    bottom: (U.bottom - _.bottom + m.bottom) / L.y,
    left: (_.left - U.left + m.left) / L.x,
    right: (U.right - _.right + m.right) / L.x
  };
}
const $g = n => ({
  name: 'arrow',
  options: n,
  async fn(e) {
    const {
      element: d,
      padding: c = 0
    } = Fn(n, e) || {};
    if (d == null)
      return {};
    const u = bo(c), h = {
        x: t,
        y: s
      }, f = vo(r), m = _o(f), g = await a.getDimensions(d), D = f === 'y', _ = D ? 'top' : 'left', S = D ? 'bottom' : 'right', N = D ? 'clientHeight' : 'clientWidth', L = i.reference[m] + i.reference[f] - h[f] - i.floating[m], U = h[f] - i.reference[f], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = C ? C[N] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(C))) && (R = o.floating[N] || i.floating[m]);
    const b = L / 2 - U / 2, y = R / 2 - g[m] / 2 - 1, I = Bt(u[_], y), O = Bt(u[S], y), F = I, A = R - g[m] - O, w = R / 2 - g[m] / 2 + b, T = Ta(I, w, A), E = !l.arrow && At(r) != null && w !== T && i.reference[m] / 2 - (w < I ? I : O) - g[m] / 2 < 0, v = E ? w < I ? w - I : w - A : 0;
    return {
      [f]: h[f] + v,
      data: {
        [f]: T,
        centerOffset: w - T - v,
        ...E && { alignmentOffset: v }
      },
      reset: E
    };
  }
});
function zg(n, e, t) {
  return (n ? [
    ...t.filter(r => At(r) === n),
    ...t.filter(r => At(r) !== n)
  ] : t.filter(r => ut(r) === r)).filter(r => n ? At(r) === n || (e ? Mr(r) !== r : false) : true);
}
const Vg = function (n) {
    n === void 0 && (n = {});
    return {
      name: 'autoPlacement',
      options: n,
      async fn(e) {
        var t, s, r;
        const {
            crossAxis: c = false,
            alignment: u,
            allowedPlacements: h = Wc,
            autoAlignment: f = true,
            ...m
          } = Fn(n, e), g = u !== void 0 || h === Wc ? zg(u || null, f, h) : h, D = await wo(e, m), _ = ((t = a.autoPlacement) == null ? void 0 : t.index) || 0, S = g[_];
        if (S == null)
          return {};
        const N = Kl(S, i, await (l.isRTL == null ? void 0 : l.isRTL(d.floating)));
        if (o !== S)
          return { reset: { placement: g[0] } };
        const L = [
            D[ut(S)],
            D[N[0]],
            D[N[1]]
          ], U = [
            ...((s = a.autoPlacement) == null ? void 0 : s.overflows) || [],
            {
              placement: S,
              overflows: L
            }
          ], C = g[_ + 1];
        if (C)
          return {
            data: {
              index: _ + 1,
              overflows: U
            },
            reset: { placement: C }
          };
        const R = U.map(I => {
            const O = At(I.placement);
            return [
              I.placement,
              O && c ? I.overflows.slice(0, 2).reduce((F, A) => F + A, 0) : I.overflows[0],
              I.overflows
            ];
          }).sort((I, O) => I[1] - O[1]), y = ((r = R.filter(I => I[2].slice(0, At(I[0]) ? 2 : 3).every(O => O <= 0))[0]) == null ? void 0 : r[0]) || R[0][0];
        return y !== o ? {
          data: {
            index: _ + 1,
            overflows: U
          },
          reset: { placement: y }
        } : {};
      }
    };
  }, Gg = function (n) {
    n === void 0 && (n = {});
    return {
      name: 'flip',
      options: n,
      async fn(e) {
        var t, s;
        const {
          mainAxis: c = true,
          crossAxis: u = true,
          fallbackPlacements: h,
          fallbackStrategy: f = 'bestFit',
          fallbackAxisSideDirection: m = 'none',
          flipAlignment: g = true,
          ...D
        } = Fn(n, e);
        if ((t = i.arrow) != null && t.alignmentOffset)
          return {};
        const _ = ut(r), S = Rt(o), N = ut(o) === o, L = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), U = h || (N || !g ? [Br(o)] : Ng(o)), C = m !== 'none';
        !h && C && U.push(...Ug(o, g, m, L));
        const R = [
            o,
            ...U
          ], b = await wo(e, D), y = [];
        let I = ((s = i.flip) == null ? void 0 : s.overflows) || [];
        c && y.push(b[_]);
        if (u) {
          const w = Kl(r, a, L);
          y.push(b[w[0]], b[w[1]]);
        }
        if (I = [
            ...I,
            {
              placement: r,
              overflows: y
            }
          ], !y.every(w => w <= 0)) {
          var O, F;
          const w = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, T = R[w];
          if (T && (!(u === 'alignment' ? S !== Rt(T) : false) || I.every(H => Rt(H.placement) === S ? H.overflows[0] > 0 : true)))
            return {
              data: {
                index: w,
                overflows: I
              },
              reset: { placement: T }
            };
          let E = (F = I.filter(v => v.overflows[0] <= 0).sort((v, H) => v.overflows[1] - H.overflows[1])[0]) == null ? void 0 : F.placement;
          if (!E)
            switch (f) {
            case 'bestFit': {
                var A;
                const v = (A = I.filter(H => {
                  if (C) {
                    const P = Rt(H.placement);
                    return P === S || P === 'y';
                  }
                  return true;
                }).map(H => [
                  H.placement,
                  H.overflows.filter(P => P > 0).reduce((P, j) => P + j, 0)
                ]).sort((H, P) => H[1] - P[1])[0]) == null ? void 0 : A[0];
                v && (E = v);
                break;
              }
            case 'initialPlacement':
              E = o;
              break;
            }
          if (r !== E)
            return { reset: { placement: E } };
        }
        return {};
      }
    };
  };
function Wl(n) {
  const e = Bt(...n.map(i => i.left)), t = Bt(...n.map(i => i.top)), s = Et(...n.map(i => i.right)), r = Et(...n.map(i => i.bottom));
  return {
    x: e,
    y: t,
    width: s - e,
    height: r - t
  };
}
function Kg(n) {
  const e = n.slice().sort((r, i) => r.y - i.y), t = [];
  let s = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    !s || i.y - s.y > s.height / 2 ? t.push([i]) : t[t.length - 1].push(i), s = i;
  }
  return t.map(r => es(Wl(r)));
}
const Wg = function (n) {
    n === void 0 && (n = {});
    return {
      name: 'inline',
      options: n,
      async fn(e) {
        const {
            padding: o = 2,
            x: l,
            y: d
          } = Fn(n, e), c = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(s.reference)) || []), u = Kg(c), h = es(Wl(c)), f = bo(o);
        function m() {
          if (u.length === 2 && u[0].left > u[1].right && l != null && d != null)
            return u.find(D => l > D.left - f.left && l < D.right + f.right && d > D.top - f.top && d < D.bottom + f.bottom) || h;
          if (u.length >= 2) {
            if (Rt(t) === 'y') {
              const I = u[0], O = u[u.length - 1], F = ut(t) === 'top', A = I.top, w = O.bottom, T = F ? I.left : O.left, E = F ? I.right : O.right, v = E - T, H = w - A;
              return {
                top: A,
                bottom: w,
                left: T,
                right: E,
                width: v,
                height: H,
                x: T,
                y: A
              };
            }
            const D = ut(t) === 'left', _ = Et(...u.map(I => I.right)), S = Bt(...u.map(I => I.left)), N = u.filter(I => D ? I.left === S : I.right === _), L = N[0].top, U = N[N.length - 1].bottom, C = S, R = _, b = _ - S, y = U - L;
            return {
              top: L,
              bottom: U,
              left: S,
              right: _,
              width: b,
              height: y,
              x: S,
              y: L
            };
          }
          return h;
        }
        const g = await i.getElementRects({
          reference: { getBoundingClientRect: m },
          floating: s.floating,
          strategy: a
        });
        return r.reference.x !== g.reference.x || r.reference.y !== g.reference.y || r.reference.width !== g.reference.width || r.reference.height !== g.reference.height ? { reset: { rects: g } } : {};
      }
    };
  }, qg = new Set([
    'left',
    'top'
  ]);
async function Yg(n, e) {
  const i = await (s.isRTL == null ? void 0 : s.isRTL(r.floating)), a = ut(t), o = At(t), l = Rt(t) === 'y', d = qg.has(a) ? -1 : 1, c = i && l ? -1 : 1, u = Fn(e, n);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: m
  } = typeof u == 'number' ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  o && typeof m == 'number' && (f = o === 'end' ? m * -1 : m);
  return l ? {
    x: f * c,
    y: h * d
  } : {
    x: h * d,
    y: f * c
  };
}
const Qg = function (n) {
    n === void 0 && (n = 0);
    return {
      name: 'offset',
      options: n,
      async fn(e) {
        var t, s;
        const l = await Yg(e, n);
        return a === ((t = o.offset) == null ? void 0 : t.placement) && (s = o.arrow) != null && s.alignmentOffset ? {} : {
          x: r + l.x,
          y: i + l.y,
          data: {
            ...l,
            placement: a
          }
        };
      }
    };
  }, Jg = function (n) {
    n === void 0 && (n = {});
    return {
      name: 'shift',
      options: n,
      async fn(e) {
        const {
            mainAxis: i = true,
            crossAxis: a = false,
            limiter: o = {
              fn: D => {
                return {
                  x: _,
                  y: S
                };
              }
            },
            ...l
          } = Fn(n, e), d = {
            x: t,
            y: s
          }, c = await wo(e, l), u = Rt(ut(r)), h = Gl(u);
        let f = d[h], m = d[u];
        if (i) {
          const D = h === 'y' ? 'top' : 'left', _ = h === 'y' ? 'bottom' : 'right', S = f + c[D], N = f - c[_];
          f = Ta(S, f, N);
        }
        if (a) {
          const D = u === 'y' ? 'top' : 'left', _ = u === 'y' ? 'bottom' : 'right', S = m + c[D], N = m - c[_];
          m = Ta(S, m, N);
        }
        const g = o.fn({
          ...e,
          [h]: f,
          [u]: m
        });
        return {
          ...g,
          data: {
            x: g.x - t,
            y: g.y - s,
            enabled: {
              [h]: i,
              [u]: a
            }
          }
        };
      }
    };
  };
function Di() {
  return typeof window < 'u';
}
function cs(n) {
  return ql(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Ze(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function It(n) {
  var e;
  return (e = (ql(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function ql(n) {
  return false;
}
function Ae(n) {
  return false;
}
function lt(n) {
  return false;
}
function Ur(n) {
  return true || typeof ShadowRoot > 'u' ? false : n instanceof ShadowRoot || n instanceof Ze(n).ShadowRoot;
}
const Xg = new Set([
  'inline',
  'contents'
]);
function Ws(n) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: s,
    display: r
  } = dt(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + t) && !Xg.has(r);
}
const Zg = new Set([
  'table',
  'td',
  'th'
]);
function eD(n) {
  return Zg.has(cs(n));
}
const tD = [
  ':popover-open',
  ':modal'
];
function _i(n) {
  return false;
}
const nD = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
  ], sD = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
  ], rD = [
    'paint',
    'layout',
    'strict',
    'content'
  ];
function Eo(n) {
  const e = false, t = Ae(n) ? dt(n) : n;
  return nD.some(s => t[s] ? t[s] !== 'none' : false) || (t.containerType ? t.containerType !== 'normal' : false) || !e && (t.backdropFilter ? t.backdropFilter !== 'none' : false) || !e && (t.filter ? t.filter !== 'none' : false) || sD.some(s => (t.willChange || '').includes(s)) || rD.some(s => (t.contain || '').includes(s));
}
function iD(n) {
  let e = Ut(n);
  for (; lt(e) && !rn(e);) {
    if (Eo(e))
      return e;
    if (_i(e))
      return null;
    e = Ut(e);
  }
  return null;
}
function yo() {
  return typeof CSS > 'u' || !CSS.supports ? false : CSS.supports('-webkit-backdrop-filter', 'none');
}
const aD = new Set([
  'html',
  'body',
  '#document'
]);
function rn(n) {
  return aD.has(cs(n));
}
function dt(n) {
  return Ze(n).getComputedStyle(n);
}
function vi(n) {
  return Ae(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Ut(n) {
  if (cs(n) === 'html')
    return n;
  const e = n.assignedSlot || n.parentNode || Ur(n) && n.host || It(n);
  return Ur(e) ? e.host : e;
}
function Yl(n) {
  const e = Ut(n);
  return rn(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : lt(e) && Ws(e) ? e : Yl(e);
}
function nn(n, e, t) {
  var s;
  e === void 0 && (e = []), t === void 0 && (t = true);
  const r = Yl(n), i = r === ((s = n.ownerDocument) == null ? void 0 : s.body), a = Ze(r);
  if (i) {
    const o = Ia(a);
    return e.concat(a, a.visualViewport || [], Ws(r) ? r : [], o && t ? nn(o) : []);
  }
  return e.concat(r, nn(r, [], t));
}
function Ia(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Ql(n) {
  const e = dt(n);
  let t = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const r = lt(n), i = r ? n.offsetWidth : t, a = r ? n.offsetHeight : s, o = Pr(t) !== i || Pr(s) !== a;
  o && (t = i, s = a);
  return {
    width: t,
    height: s,
    $: o
  };
}
function Ao(n) {
  return Ae(n) ? n : n.contextElement;
}
function Wn(n) {
  const e = Ao(n);
  if (!lt(e))
    return {
      x: 1,
      y: 1
    };
  const t = e.getBoundingClientRect(), {
      width: s,
      height: r,
      $: i
    } = Ql(e);
  let a = (i ? Pr(t.width) : t.width) / s, o = (i ? Pr(t.height) : t.height) / r;
  (!a || !Number.isFinite(a)) && (a = 1);
  (!o || !Number.isFinite(o)) && (o = 1);
  return {
    x: a,
    y: o
  };
}
const oD = {
  x: 0,
  y: 0
};
function Jl(n) {
  const e = Ze(n);
  return true || !e.visualViewport ? oD : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function cD(n, e, t) {
  e === void 0 && (e = false);
  return !t || e && t !== Ze(n) ? false : e;
}
function Tn(n, e, t, s) {
  e === void 0 && (e = false), t === void 0 && (t = false);
  const r = n.getBoundingClientRect(), i = Ao(n);
  let a = {
    x: 1,
    y: 1
  };
  e && (s ? Ae(s) && (a = Wn(s)) : a = Wn(n));
  const o = cD(i, t, s) ? Jl(i) : {
    x: 0,
    y: 0
  };
  let l = (r.left + o.x) / a.x, d = (r.top + o.y) / a.y, c = r.width / a.x, u = r.height / a.y;
  if (i) {
    const h = Ze(i), f = s && Ae(s) ? Ze(s) : s;
    let m = h, g = Ia(m);
    for (; g && s && f !== m;) {
      const D = Wn(g), _ = g.getBoundingClientRect(), S = dt(g), N = _.left + (g.clientLeft + parseFloat(S.paddingLeft)) * D.x, L = _.top + (g.clientTop + parseFloat(S.paddingTop)) * D.y;
      l *= D.x, d *= D.y, c *= D.x, u *= D.y, l += N, d += L, m = Ze(g), g = Ia(m);
    }
  }
  return es({
    width: c,
    height: u,
    x: l,
    y: d
  });
}
function bi(n, e) {
  const t = vi(n).scrollLeft;
  return e ? e.left + t : Tn(It(n)).left + t;
}
function Xl(n, e) {
  const t = n.getBoundingClientRect(), s = t.left + e.scrollLeft - bi(n, t), r = t.top + e.scrollTop;
  return {
    x: s,
    y: r
  };
}
function uD(n) {
  const i = r === 'fixed', a = It(s), o = e ? _i(e.floating) : false;
  if (s === a || o && i)
    return t;
  let l = {
      scrollLeft: 0,
      scrollTop: 0
    }, d = {
      x: 1,
      y: 1
    };
  const c = {
      x: 0,
      y: 0
    }, u = lt(s);
  if ((u || !u && !i) && ((cs(s) !== 'body' || Ws(a)) && (l = vi(s)), lt(s))) {
    const f = Tn(s);
    d = Wn(s), c.x = f.x + s.clientLeft, c.y = f.y + s.clientTop;
  }
  const h = a && !u && !i ? Xl(a, l) : {
    x: 0,
    y: 0
  };
  return {
    width: t.width * d.x,
    height: t.height * d.y,
    x: t.x * d.x - l.scrollLeft * d.x + c.x + h.x,
    y: t.y * d.y - l.scrollTop * d.y + c.y + h.y
  };
}
function lD(n) {
  return Array.from(n.getClientRects());
}
function dD(n) {
  const e = It(n), t = vi(n), s = n.ownerDocument.body, r = Et(e.scrollWidth, e.clientWidth, s.scrollWidth, s.clientWidth), i = Et(e.scrollHeight, e.clientHeight, s.scrollHeight, s.clientHeight);
  let a = -t.scrollLeft + bi(n);
  const o = -t.scrollTop;
  dt(s).direction === 'rtl' && (a += Et(e.clientWidth, s.clientWidth) - r);
  return {
    width: r,
    height: i,
    x: a,
    y: o
  };
}
const Jc = 25;
function hD(n, e) {
  const t = Ze(n), s = It(n), r = t.visualViewport;
  let i = s.clientWidth, a = s.clientHeight, o = 0, l = 0;
  if (r) {
    i = r.width, a = r.height;
    const c = false;
    (!c || c && e === 'fixed') && (o = r.offsetLeft, l = r.offsetTop);
  }
  const d = bi(s);
  if (d <= 0) {
    const c = s.ownerDocument, u = c.body, h = getComputedStyle(u), f = c.compatMode === 'CSS1Compat' && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, m = Math.abs(s.clientWidth - u.clientWidth - f);
    m <= Jc && (i -= m);
  } else
    d <= Jc && (i += d);
  return {
    width: i,
    height: a,
    x: o,
    y: l
  };
}
const fD = new Set([
  'absolute',
  'fixed'
]);
function mD(n, e) {
  const t = Tn(n, true, e === 'fixed'), s = t.top + n.clientTop, r = t.left + n.clientLeft, i = lt(n) ? Wn(n) : {
      x: 1,
      y: 1
    }, a = n.clientWidth * i.x, o = n.clientHeight * i.y, l = r * i.x, d = s * i.y;
  return {
    width: a,
    height: o,
    x: l,
    y: d
  };
}
function Xc(n, e, t) {
  let s;
  if (e === 'viewport')
    s = hD(n, t);
  else if (e === 'document')
    s = dD(It(n));
  else if (Ae(e))
    s = mD(e, t);
  else {
    const r = Jl(n);
    s = {
      x: e.x - r.x,
      y: e.y - r.y,
      width: e.width,
      height: e.height
    };
  }
  return es(s);
}
function Zl(n, e) {
  const t = Ut(n);
  return t === e || !Ae(t) || rn(t) ? false : dt(t).position === 'fixed' || Zl(t, e);
}
function pD(n, e) {
  const t = e.get(n);
  if (t)
    return t;
  let s = nn(n, [], false).filter(o => Ae(o) && cs(o) !== 'body'), r = null;
  const i = dt(n).position === 'fixed';
  let a = i ? Ut(n) : n;
  for (; Ae(a) && !rn(a);) {
    const o = dt(a), l = Eo(a);
    !l && o.position === 'fixed' && (r = null), (i ? !l && !r : !l && o.position === 'static' && !!r && fD.has(r.position) || Ws(a) && !l && Zl(n, a)) ? s = s.filter(c => c !== a) : r = o, a = Ut(a);
  }
  e.set(n, s);
  return s;
}
function gD(n) {
  const a = [
      ...t === 'clippingAncestors' ? _i(e) ? [] : pD(e, this._c) : [].concat(t),
      s
    ], o = a[0], l = a.reduce((d, c) => {
      const u = Xc(e, c, r);
      d.top = Et(u.top, d.top);
      d.right = Bt(u.right, d.right);
      d.bottom = Bt(u.bottom, d.bottom);
      d.left = Et(u.left, d.left);
      return d;
    }, Xc(e, o, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function DD(n) {
  const {
    width: e,
    height: t
  } = Ql(n);
  return {
    width: e,
    height: t
  };
}
function _D(n, e, t) {
  const s = lt(e), r = It(e), i = t === 'fixed', a = Tn(n, true, i, e);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = {
    x: 0,
    y: 0
  };
  function d() {
    l.x = bi(r);
  }
  if (s || !s && !i) {
    (cs(e) !== 'body' || Ws(r)) && (o = vi(e));
    if (s) {
      const f = Tn(e, true, i, e);
      l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop;
    } else
      r && d();
  }
  i && !s && r && d();
  const c = r && !s && !i ? Xl(r, o) : {
      x: 0,
      y: 0
    }, u = a.left + o.scrollLeft - l.x - c.x, h = a.top + o.scrollTop - l.y - c.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Yi(n) {
  return dt(n).position === 'static';
}
function Zc(n, e) {
  if (!lt(n) || dt(n).position === 'fixed')
    return null;
  if (e)
    return e(n);
  let t = n.offsetParent;
  It(n) === t && (t = t.ownerDocument.body);
  return t;
}
function ed(n, e) {
  const t = Ze(n);
  if (_i(n))
    return t;
  if (!lt(n)) {
    let r = Ut(n);
    for (; r && !rn(r);) {
      if (Ae(r) && !Yi(r))
        return r;
      r = Ut(r);
    }
    return t;
  }
  let s = Zc(n, e);
  for (; s && eD(s) && Yi(s);)
    s = Zc(s, e);
  return s && rn(s) && Yi(s) && !Eo(s) ? t : s || iD(n) || t;
}
const vD = async function (n) {
  const e = this.getOffsetParent || ed, t = this.getDimensions, s = await t(n.floating);
  return {
    reference: _D(n.reference, await e(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function bD(n) {
  return dt(n).direction === 'rtl';
}
const wD = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uD,
  getDocumentElement: It,
  getClippingRect: gD,
  getOffsetParent: ed,
  getElementRects: vD,
  getClientRects: lD,
  getDimensions: DD,
  getScale: Wn,
  isElement: Ae,
  isRTL: bD
};
function td(n, e) {
  return n.x === e.x && n.y === e.y && n.width === e.width && n.height === e.height;
}
function ED(n, e) {
  let t = null, s;
  const r = It(n);
  function i() {
    var o;
    clearTimeout(s), (o = t) == null || o.disconnect(), t = null;
  }
  function a(o, l) {
    o === void 0 && (o = false), l === void 0 && (l = 1), i();
    const d = n.getBoundingClientRect();
    o || e();
    if (!h || !f)
      return;
    const m = or(u), g = or(r.clientWidth - (c + h)), D = or(r.clientHeight - (u + f)), _ = or(c), N = {
        rootMargin: -m + 'px ' + -g + 'px ' + -D + 'px ' + -_ + 'px',
        threshold: Et(0, Bt(1, l)) || 1
      };
    let L = true;
    function U(C) {
      const R = C[0].intersectionRatio;
      if (R !== l) {
        if (!L)
          return a();
        R ? a(false, R) : s = setTimeout(() => {
          a(false, 1e-7);
        }, 1000);
      }
      R === 1 && !td(d, n.getBoundingClientRect()) && a(), L = false;
    }
    try {
      t = new IntersectionObserver(U, {
        ...N,
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(U, N);
    }
    t.observe(n);
  }
  a(true);
  return i;
}
function yD(n, e, t, s) {
  s === void 0 && (s = {});
  const d = Ao(n), c = r || i ? [
      ...d ? nn(d) : [],
      ...nn(e)
    ] : [];
  c.forEach(_ => {
    r && _.addEventListener('scroll', t, { passive: true }), i && _.addEventListener('resize', t);
  });
  const u = d && o ? ED(d, t) : null;
  let h = -1, f = null;
  a && (f = new ResizeObserver(_ => {
    S && S.target === d && f && (f.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var N;
      (N = f) == null || N.observe(e);
    })), t();
  }), d && !l && f.observe(d), f.observe(e));
  let m, g = l ? Tn(n) : null;
  l && D();
  function D() {
    const _ = Tn(n);
    g && !td(g, _) && t(), g = _, m = requestAnimationFrame(D);
  }
  t();
  return () => {
    var _;
    c.forEach(S => {
      r && S.removeEventListener('scroll', t), i && S.removeEventListener('resize', t);
    }), u?.(), (_ = f) == null || _.disconnect(), f = null, l && cancelAnimationFrame(m);
  };
}
const AD = Qg, CD = Vg, TD = Jg, ID = Gg, nF = $g, FD = Wg, SD = (n, e, t) => {
    const s = new Map(), r = {
        platform: wD,
        ...t
      }, i = {
        ...r.platform,
        _c: s
      };
    return jg(n, e, {
      ...r,
      platform: i
    });
  };
let xD = 0;
function nd() {
  return Math.random().toString(36).substring(2, 9) + xD++;
}
function Qi(n) {
  return Object.entries(n).map(([e, t]) => `${ e }: ${ t };`).join(' ');
}
function Un(n) {
  return n?.ownerDocument ?? document;
}
function sd(n) {
  return `data-floating-ui-${ n }`;
}
function Fa(n, e) {
  if (!n || !e)
    return false;
  const t = e.getRootNode?.();
  if (n.contains(e))
    return true;
  if (t && Ur(t)) {
    let s = e;
    for (; s;) {
      if (n === s)
        return true;
      s = s.parentNode || s.host;
    }
  }
  return false;
}
function _s(n) {
  return 'composedPath' in n ? n.composedPath()[0] : n.target;
}
function eu(n, e) {
  if (e == null)
    return false;
  if ('composedPath' in n)
    return n.composedPath().includes(e);
  const t = n;
  return n.target != null && e.contains(n.target);
}
function OD(n) {
  return n.matches('html,body');
}
function Sa(n, e) {
  const t = [
    'mouse',
    'pen'
  ];
  t.push('', void 0);
  return t.includes(n);
}
const RD = {
    pointerdown: 'onpointerdown',
    mousedown: 'onmousedown',
    click: 'onclick'
  }, kD = {
    pointerdown: 'onpointerdowncapture',
    mousedown: 'onmousedowncapture',
    click: 'onclickcapture'
  }, tu = n => ({
    escapeKey: typeof n == 'boolean' ? n : n?.escapeKey ?? false,
    outsidePress: typeof n == 'boolean' ? n : n?.outsidePress ?? true
  });
function LD(n, e = {}) {
  const t = k(() => n.open), s = k(() => n.onOpenChange), r = k(() => n.elements.reference), i = k(() => n.elements.floating), a = k(() => n.data), o = k(() => ve(e.enabled, true)), l = k(() => ve(e.escapeKey, true)), d = k(() => ve(e.outsidePress, true)), c = k(() => ve(e.outsidePressEvent, 'pointerdown')), u = k(() => ve(e.referencePress, false)), h = k(() => ve(e.referencePressEvent, 'pointerdown')), f = k(() => ve(e.ancestorScroll, false)), m = k(() => e.bubbles), g = k(() => e.capture), D = k(() => typeof p(d) == 'function' ? p(d) : () => false), _ = k(() => typeof p(d) == 'function' ? p(D) : p(d));
  let S = false, N = false;
  const {
      escapeKey: L,
      outsidePress: U
    } = tu(p(m)), {
      escapeKey: C,
      outsidePress: R
    } = tu(p(g)), b = F => {
      !p(t) || !p(o) || !p(l) || F.key !== 'Escape' || (L || F.stopPropagation(), p(s)(false, F, 'escape-key'));
    }, y = F => {
      const A = () => {
        b(F), _s(F)?.removeEventListener('keydown', A);
      };
      _s(F)?.addEventListener('keydown', A);
    }, I = F => {
      const A = S;
      S = false;
      const w = N;
      N = false;
      if (p(c) === 'click' && N || S || typeof p(_) == 'function' && !p(_)(F))
        return;
      const T = _s(F), E = `[${ 'data-floating-ui-inert' }]`, v = Un(p(i)).querySelectorAll(E);
      let H = Ae(T) ? T : null;
      for (; H && !rn(H);) {
        const P = Ut(H);
        if (rn(P) || !Ae(P))
          break;
        H = P;
      }
      if (!(v.length && Ae(T) && !OD(T) && !Fa(T, p(i)) && Array.from(v).every(P => !Fa(H, P)))) {
        if (lt(T) && p(i)) {
          const P = T.clientWidth > 0 && T.scrollWidth > T.clientWidth, j = T.clientHeight > 0 && T.scrollHeight > T.clientHeight;
          let G = j && F.offsetX > T.clientWidth;
          j && getComputedStyle(T).direction === 'rtl' && (G = F.offsetX <= T.offsetWidth - T.clientWidth);
          if (G || P && F.offsetY > T.clientHeight)
            return;
        }
        eu(F, p(i)) || eu(F, p(r)) || p(s)(false, F, 'outside-press');
      }
    }, O = F => {
      const A = () => {
        I(F), _s(F)?.removeEventListener(p(c), A);
      };
      _s(F)?.addEventListener(p(c), A);
    };
  je(() => {
    if (!p(t) || !p(o))
      return;
    p(a).__escapeKeyBubbles = L, p(a).__outsidePressBubbles = U;
    function F(T) {
      p(s)(false, T, 'ancestor-scroll');
    }
    const A = Un(p(i));
    p(l) && A.addEventListener('keydown', C ? y : b, C), p(_) && A.addEventListener(p(c), R ? O : I, R);
    let w = [];
    p(f) && (Ae(p(r)) && (w = nn(p(r))), Ae(p(i)) && (w = w.concat(nn(p(i)))), !Ae(p(r)) && p(r) && p(r).contextElement && (w = w.concat(nn(p(r).contextElement)))), w = w.filter(T => T !== A.defaultView?.visualViewport);
    for (const T of w)
      T.addEventListener('scroll', F, { passive: true });
    return () => {
      p(l) && A.removeEventListener('keydown', C ? y : b, C), p(_) && A.removeEventListener(p(c), R ? O : I, R);
      for (const T of w)
        T.removeEventListener('scroll', F);
    };
  });
  je(() => {
    p(_), p(c), S = false;
  });
  return {
    get reference() {
      return p(o) ? {
        onKeyDown: b,
        [RD[p(h)]]: F => {
          p(u) && p(s)(false, F, 'reference-press');
        }
      } : {};
    },
    get floating() {
      return p(o) ? {
        onKeyDown: b,
        onMouseDown() {
          N = true;
        },
        onMouseUp() {
          N = true;
        },
        [kD[p(c)]]: () => {
          S = true;
        }
      } : {};
    }
  };
}
function ND() {
  const n = new Map();
  return {
    emit(e, t) {
      const s = n.get(e);
      if (s)
        for (const r of s)
          r(t);
    },
    on(e, t) {
      n.set(e, [
        ...n.get(e) || [],
        t
      ]);
    },
    off(e, t) {
      n.set(e, n.get(e)?.filter(s => s !== t) || []);
    }
  };
}
function rd(n) {
  return typeof window > 'u' ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nu(n, e) {
  const t = rd(n);
  return Math.round(e * t) / t;
}
function id() {
}
function PD(n = {}) {
  const e = We(n.elements ?? {}), t = k(() => ve(n.placement, 'bottom')), s = k(() => ve(n.strategy, 'absolute')), r = k(() => ve(n.middleware, () => [], true)), i = k(() => ve(n.transform, true)), a = k(() => ve(n.open, true)), o = k(() => ve(n.onOpenChange, id)), l = k(() => n.whileElementsMounted), d = k(() => n.nodeId), c = k(() => {
      const _ = {
        position: p(s),
        left: '0px',
        top: '0px'
      };
      if (!e.floating)
        return Qi(_);
      const S = nu(e.floating, m.x), N = nu(e.floating, m.y);
      return p(i) ? Qi({
        ..._,
        transform: `translate(${ S }px, ${ N }px)`,
        ...rd(e.floating) >= 1.5 && { willChange: 'transform' }
      }) : Qi({
        position: p(s),
        left: `${ S }px`,
        top: `${ N }px`
      });
    }), u = ND(), h = We({}), f = (_, S, N) => {
      h.openEvent = _ ? S : void 0, u.emit('openchange', {
        open: _,
        event: S,
        reason: N
      }), p(o)(_, S, N);
    }, m = We({
      x: 0,
      y: 0,
      strategy: p(s),
      placement: p(t),
      middlewareData: {},
      isPositioned: false
    }), g = We({
      data: h,
      events: u,
      elements: e,
      onOpenChange: f,
      floatingId: nd(),
      get nodeId() {
        return p(d);
      },
      get x() {
        return m.x;
      },
      get y() {
        return m.y;
      },
      get placement() {
        return m.placement;
      },
      get strategy() {
        return m.strategy;
      },
      get middlewareData() {
        return m.middlewareData;
      },
      get isPositioned() {
        return m.isPositioned;
      },
      get open() {
        return p(a);
      }
    }), D = async () => {
      if (!e.floating || !e.reference)
        return;
      const _ = {
          placement: p(t),
          strategy: p(s),
          middleware: p(r)
        }, S = await SD(e.reference, e.floating, _);
      m.x = S.x, m.y = S.y, m.placement = S.placement, m.strategy = S.strategy, m.middlewareData = S.middlewareData, m.isPositioned = true;
    };
  Xs(() => {
    !n.elements || !n.elements.reference || (e.reference = n.elements.reference);
  });
  Xs(() => {
    !n.elements || !n.elements.floating || (e.floating = n.elements.floating);
  });
  Xs(() => {
    p(a) || !m.isPositioned || (m.isPositioned = false);
  });
  Xs(() => {
    if (!(!e.floating || !e.reference)) {
      if (!p(l)) {
        D();
        return;
      }
      return p(l)(e.reference, e.floating, D);
    }
  });
  return {
    update: D,
    context: g,
    elements: e,
    get x() {
      return m.x;
    },
    get y() {
      return m.y;
    },
    get placement() {
      return m.placement;
    },
    get strategy() {
      return m.strategy;
    },
    get middlewareData() {
      return m.middlewareData;
    },
    get isPositioned() {
      return m.isPositioned;
    },
    get open() {
      return p(a);
    },
    get floatingStyles() {
      return p(c);
    }
  };
}
const su = 'data-floating-ui-safe-polygon';
function Ji(n, e, t) {
  return t && !Sa(t) ? 0 : typeof n == 'number' ? n : n?.[e];
}
function MD(n, e = {}) {
  const t = k(() => n.open), s = k(() => n.onOpenChange), r = k(() => n.data), i = k(() => n.events), a = k(() => n.elements.reference), o = k(() => n.elements.floating), l = k(() => ve(e.enabled, true)), d = k(() => ve(e.mouseOnly, false)), c = k(() => ve(e.delay, 0)), u = k(() => ve(e.restMs, 0)), h = k(() => ve(e.move, true)), f = k(() => ve(e.handleClose, null));
  let m, g = -1, D, _ = -1, S = true, N = false, L = id;
  const U = k(() => {
      const I = p(r).openEvent?.type;
      return I?.includes('mouse') && I !== 'mousedown';
    }), C = k(() => p(r).openEvent ? [
      'click',
      'mousedown'
    ].includes(p(r).openEvent.type) : false);
  je(() => {
    if (!p(l))
      return;
    const I = ({open: O}) => {
      O || (clearTimeout(g), clearTimeout(_), S = true);
    };
    p(i).on('openchange', I);
    return () => {
      p(i).off('openchange', I);
    };
  }), je(() => {
    if (p(l) || !p(f) || !p(t))
      return;
    const I = F => {
        p(U) && p(s)(false, F, 'hover');
      }, O = Un(p(o));
    O.addEventListener('mouseleave', I);
    return () => {
      O.removeEventListener('mouseleave', I);
    };
  });
  const R = (I, O = true, F = 'hover') => {
      const A = Ji(p(c), 'close', m);
      A && !D ? (clearTimeout(g), g = window.setTimeout(() => p(s)(false, I, F), A)) : O && (clearTimeout(g), p(s)(false, I, F));
    }, b = () => {
      L(), D = void 0;
    }, y = () => {
      if (!N)
        return;
      const I = Un(p(o)).body;
      I.style.pointerEvents = '', I.removeAttribute(su), N = false;
    };
  je(() => {
    if (p(l) && p(t) && p(f)?.__options.blockPointerEvents && p(U)) {
      const I = Un(p(o)).body;
      I.setAttribute(su, '');
      I.style.pointerEvents = 'none';
      N = true;
      if (Ae(p(a)) && p(o)) {
        const O = p(a);
        return O.style.pointerEvents = 'auto', p(o).style.pointerEvents = 'auto', () => {
          O.style.pointerEvents = '', p(o).style.pointerEvents = '';
        };
      }
    }
  });
  je(() => {
    p(t) || (m = void 0, b(), y());
  });
  je(() => () => {
    b(), clearTimeout(g), clearTimeout(_), y();
  });
  return {
    get reference() {
      if (!p(l))
        return {};
      const I = O => {
        clearTimeout(g);
        S = false;
        if (p(d) && !Sa(m) || p(u) > 0 && !Ji(p(c), 'open'))
          return;
        const F = Ji(p(c), 'open', m);
        F ? g = window.setTimeout(() => {
          p(s)(true, O, 'hover');
        }, F) : p(s)(true, O, 'hover');
      };
      return {
        onpointerdown: O => {
          m = O.pointerType;
        },
        onpointerenter: O => {
          m = O.pointerType;
        },
        onmouseenter: I,
        onmousemove: O => {
          p(h) && I(O);
          function F() {
            S || p(s)(true, O, 'hover');
          }
          p(d) && !Sa(m) || p(t) || p(u) === 0 || (clearTimeout(_), m === 'touch' ? F() : _ = window.setTimeout(F, p(u)));
        },
        onmouseleave: O => {
          if (!p(C)) {
            L();
            const F = Un(p(o));
            clearTimeout(_);
            if (p(f)) {
              p(t) || clearTimeout(g), D = p(f)({
                ...n,
                x: O.clientX,
                y: O.clientY,
                onClose() {
                  y(), b(), R(O, true, 'safe-polygon');
                }
              });
              const w = D;
              F.addEventListener('mousemove', D), L = () => {
                F.removeEventListener('mousemove', D);
              };
              return;
            }
            (m === 'touch' ? !Fa(p(o), O.relatedTarget) : true) && R(O);
          }
          p(t) && !p(C) && p(f)?.({
            ...n,
            x: O.clientX,
            y: O.clientY,
            onClose() {
              y(), b(), R(O);
            }
          })(O);
        }
      };
    },
    get floating() {
      return p(l) ? {
        onmouseenter() {
          clearTimeout(g);
        },
        onmouseleave(I) {
          p(C) || p(f)?.({
            ...n,
            x: I.clientX,
            y: I.clientY,
            onClose() {
              y(), b(), R(I);
            }
          })(I), R(I, false);
        }
      } : {};
    }
  };
}
const ru = 'active', iu = 'selected';
function Xi(n, e, t) {
  const s = new Map(), r = t === 'item';
  let i = n;
  if (r && n) {
    i = l;
  }
  return {
    ...t === 'floating' && { tabIndex: -1 },
    ...i,
    ...e.map(a => {
      const o = a ? a[t] : null;
      return typeof o == 'function' ? n ? o(n) : null : o;
    }).concat(n).reduce((a, o) => {
      if (!o)
        return a;
      for (const [l, d] of Object.entries(o))
        r && [
          ru,
          iu
        ].includes(l) || (l.indexOf('on') === 0 ? (s.has(l) || s.set(l, []), typeof d == 'function' && (s.get(l)?.push(d), a[l] = (...c) => s.get(l)?.map(u => u(...c)).find(u => u !== void 0))) : a[l] = d);
      return a;
    }, {})
  };
}
function BD(n = []) {
  const e = k(() => r => Xi(r, n, 'reference')), t = k(() => r => Xi(r, n, 'floating')), s = k(() => r => Xi(r, n, 'item'));
  return {
    getReferenceProps: p(e),
    getFloatingProps: p(t),
    getItemProps: p(s)
  };
}
const UD = new Map([
  [
    'select',
    'listbox'
  ],
  [
    'combobox',
    'listbox'
  ],
  [
    'label',
    false
  ]
]);
function HD(n, e = {}) {
  const t = k(() => n.open), s = k(() => n.floatingId), r = k(() => ve(e.enabled, true)), i = k(() => ve(e.role, 'dialog')), a = k(() => UD.get(p(i)) ?? p(i)), o = nd(), d = false, c = k(() => ({
      id: p(s),
      ...p(a) && { role: p(a) }
    }));
  return {
    get reference() {
      return p(r) ? p(a) === 'tooltip' || p(i) === 'label' ? { [`aria-${ p(i) === 'label' ? 'labelledby' : 'describedby' }`]: p(t) ? p(s) : void 0 } : {
        'aria-expanded': p(t) ? 'true' : 'false',
        'aria-haspopup': p(a) === 'alertdialog' ? 'dialog' : p(a),
        'aria-controls': p(t) ? p(s) : void 0,
        ...p(a) === 'listbox' && { role: 'combobox' },
        ...p(a) === 'menu' && { id: o },
        ...p(a) === 'menu' && d,
        ...p(i) === 'select' && { 'aria-autocomplete': 'none' },
        ...p(i) === 'combobox' && { 'aria-autocomplete': 'list' }
      } : {};
    },
    get floating() {
      return p(r) ? p(a) === 'tooltip' || p(i) === 'label' ? p(c) : {
        ...p(c),
        ...p(a) === 'menu' && { 'aria-labelledby': o }
      } : {};
    },
    get item() {
      return p(r) ? ({
        active: u,
        selected: h
      }) => {
        const f = {
          role: 'option',
          ...u && { id: `${ n.floatingId }-option` }
        };
        switch (p(i)) {
        case 'select':
          return {
            ...f,
            'aria-selected': u && h
          };
        case 'combobox':
          return {
            ...f,
            ...u && { 'aria-selected': true }
          };
        }
        return {};
      } : {};
    }
  };
}
function jD(n, e) {
  let t = n.filter(r => r.parentId === e && r.context?.open), s = t;
  for (; s.length;)
    s = n.filter(r => s?.some(i => r.parentId === i.id && r.context?.open)), t = t.concat(s);
  return t;
}
function $D(n) {
  return 'composedPath' in n ? n.composedPath()[0] : n.target;
}
function Zi(n, e) {
  if (!n || !e)
    return false;
  const t = e.getRootNode?.();
  if (n.contains(e))
    return true;
  if (t && Ur(t)) {
    let s = e;
    for (; s;) {
      if (n === s)
        return true;
      s = s.parentNode || s.host;
    }
  }
  return false;
}
function au(n, e) {
  let r = false;
  const i = e.length;
  for (let a = 0, o = i - 1; a < i; o = a++) {
    const [l, d] = e[a] || [
        0,
        0
      ], [c, u] = e[o] || [
        0,
        0
      ];
    d >= s != u >= s && t <= (c - l) * (s - d) / (u - d) + l && (r = !r);
  }
  return r;
}
function zD(n, e) {
  return n[0] >= e.x && n[0] <= e.x + e.width && n[1] >= e.y && n[1] <= e.y + e.height;
}
function VD(n = {}) {
  let r, i = false, a = null, o = null, l = performance.now(), d;
  const c = 200;
  function u(f, m) {
    const g = performance.now(), D = g - l;
    if (a === null || o === null || D === 0) {
      a = f;
      o = m;
      l = g;
      return null;
    }
    const _ = f - a, S = m - o, L = Math.sqrt(_ * _ + S * S) / D;
    a = f;
    o = m;
    l = g;
    return L;
  }
  const h = ({
    x: f,
    y: m,
    placement: g,
    elements: D,
    onClose: _,
    nodeId: S,
    tree: N
  }) => function (U) {
    function C() {
      i = false, clearTimeout(r), clearTimeout(d), _();
    }
    clearTimeout(r);
    if (!D.reference || !D.floating || g == null || f == null || m == null)
      return;
    const y = [
        R,
        b
      ], I = $D(U), O = U.type === 'mouseleave', F = Zi(D.floating, I), A = Zi(D.reference, I), w = D.reference.getBoundingClientRect(), T = D.floating.getBoundingClientRect(), E = g.split('-')[0], v = f > T.right - T.width / 2, H = m > T.bottom - T.height / 2, P = zD(y, w), j = T.width > w.width, G = T.height > w.height, V = (j ? w : T).left, K = (j ? w : T).right, z = (G ? w : T).top, $ = (G ? w : T).bottom;
    if (F || A || P) {
      clearTimeout(d);
      return;
    }
    if (F && (i = true, !O))
      return;
    if (A && (i = false), A && !O) {
      i = true;
      return;
    }
    if (O && Ae(U.relatedTarget) && Zi(D.floating, U.relatedTarget) || N && jD(N.nodesRef.current, S).some(({context: Y}) => Y?.open))
      return;
    if (E === 'top' && m >= w.bottom - 1 || E === 'bottom' && m <= w.top + 1 || E === 'left' && f >= w.right - 1 || E === 'right' && f <= w.left + 1) {
      clearTimeout(d), d = window.setTimeout(() => C(), c);
      return;
    }
    let q = [];
    switch (E) {
    case 'top':
      q = [
        [
          V,
          w.top + 1
        ],
        [
          V,
          T.bottom - 1
        ],
        [
          K,
          T.bottom - 1
        ],
        [
          K,
          w.top + 1
        ]
      ];
      break;
    case 'bottom':
      q = [
        [
          V,
          T.top + 1
        ],
        [
          V,
          w.bottom - 1
        ],
        [
          K,
          w.bottom - 1
        ],
        [
          K,
          T.top + 1
        ]
      ];
      break;
    case 'left':
      q = [
        [
          T.right - 1,
          $
        ],
        [
          T.right - 1,
          z
        ],
        [
          w.left + 1,
          z
        ],
        [
          w.left + 1,
          $
        ]
      ];
      break;
    case 'right':
      q = [
        [
          w.right - 1,
          $
        ],
        [
          w.right - 1,
          z
        ],
        [
          T.left + 1,
          z
        ],
        [
          T.left + 1,
          $
        ]
      ];
      break;
    }
    function ie([Y, Q]) {
      switch (E) {
      case 'top': {
          const se = [
              j ? Y + e / 2 : v ? Y + e * 4 : Y - e * 4,
              Q + e + 1
            ], ne = [
              j ? Y - e / 2 : v ? Y + e * 4 : Y - e * 4,
              Q + e + 1
            ], oe = [
              [
                T.left,
                v || j ? T.bottom - e : T.top
              ],
              [
                T.right,
                v ? j ? T.bottom - e : T.top : T.bottom - e
              ]
            ];
          return [
            se,
            ne,
            ...oe
          ];
        }
      case 'bottom': {
          const se = [
              j ? Y + e / 2 : v ? Y + e * 4 : Y - e * 4,
              Q - e
            ], ne = [
              j ? Y - e / 2 : v ? Y + e * 4 : Y - e * 4,
              Q - e
            ], oe = [
              [
                T.left,
                v || j ? T.top + e : T.bottom
              ],
              [
                T.right,
                v ? j ? T.top + e : T.bottom : T.top + e
              ]
            ];
          return [
            se,
            ne,
            ...oe
          ];
        }
      case 'left': {
          const se = [
              Y + e + 1,
              G ? Q + e / 2 : H ? Q + e * 4 : Q - e * 4
            ], ne = [
              Y + e + 1,
              G ? Q - e / 2 : H ? Q + e * 4 : Q - e * 4
            ];
          return [
            ...[
              [
                H || G ? T.right - e : T.left,
                T.top
              ],
              [
                H ? G ? T.right - e : T.left : T.right - e,
                T.bottom
              ]
            ],
            se,
            ne
          ];
        }
      case 'right': {
          const se = [
              Y - e,
              G ? Q + e / 2 : H ? Q + e * 4 : Q - e * 4
            ], ne = [
              Y - e,
              G ? Q - e / 2 : H ? Q + e * 4 : Q - e * 4
            ], oe = [
              [
                H || G ? T.left + e : T.right,
                T.top
              ],
              [
                H ? G ? T.left + e : T.right : T.left + e,
                T.bottom
              ]
            ];
          return [
            se,
            ne,
            ...oe
          ];
        }
      }
    }
    if (!au([
        R,
        b
      ], q)) {
      if (i && !P) {
        clearTimeout(d), d = window.setTimeout(() => C(), c);
        return;
      }
      if (!O && s) {
        const Y = u(U.clientX, U.clientY);
        if (Y !== null && Y < 0.1) {
          clearTimeout(d), d = window.setTimeout(() => C(), c);
          return;
        }
      }
      if (au([
          R,
          b
        ], ie([
          f,
          m
        ])))
        !i && s && (r = window.setTimeout(C, 40));
      else {
        clearTimeout(d), d = window.setTimeout(() => C(), c);
        return;
      }
    }
  };
  h.__options = { blockPointerEvents: t };
  return h;
}
var GD = ue('<div><!></div>');
function KD(n, e) {
  st(e, true);
  let t;
  function s(c) {
    i.elements.floating = t, ta() && t.togglePopover(true), e.openPopover(c);
  }
  function r(c) {
    ta() && t?.isConnected && t.togglePopover(false), e.closePopover(c);
  }
  const i = PD({
      get placement() {
        return e.popover.floatingSettings.placement;
      },
      strategy: 'fixed',
      whileElementsMounted: yD,
      onOpenChange: c => {
        Se(() => {
          !c && e.popover.floatingSettings.hover && r('floating');
        });
      },
      get middleware() {
        return [
          Qg(e.popover.floatingSettings.gap),
          Wg(),
          Jg(),
          e.popover.floatingSettings.placement ? Gg({ padding: 16 }) : Vg({ padding: 16 })
        ];
      },
      elements: { reference: e.popover.referenceElement }
    }), a = [
      HD(i.context),
      LD(i.context)
    ];
  e.popover.floatingSettings.hover && a.push(MD(i.context, {
    delay: ad,
    handleClose: VD()
  }));
  const o = BD(a);
  $h(() => {
    s(o.getReferenceProps());
  }), eo(() => {
    e.popover.floatingSettings.hover || r('lifecycle');
  });
  var l = GD();
  Ar(l, (c, u) => ({
    tabindex: '-1',
    class: c,
    popover: 'manual',
    ...u,
    style: i?.floatingStyles
  }), [
    () => [
      'popover',
      !ta() && 'popover--noPopoverAPI'
    ],
    () => o?.getFloatingProps()
  ], void 0, void 0, 'svelte-v1hp9h');
  var d = me(l);
  Lt(d, () => e.popover.popoverContent, () => () => r('userAction')), he(l), Jn(l, c => t = c, () => t), X(n, l), rt();
}
function WD(n, e) {
  var t = Ve(), s = Me(t);
  Lt(s, () => e.children), X(n, t);
}
const ad = 200, qD = {
    'aria-controls': '',
    'aria-expanded': 'false',
    'aria-haspopup': 'dialog'
  };
let He = new pe(), ys = W(void 0), Jt, vr, ea;
function ou(n) {
  const e = {
    width: 0,
    height: 0,
    x: n.x,
    y: n.y,
    top: n.y,
    left: n.x,
    right: n.x,
    bottom: n.y
  };
  return {
    getBoundingClientRect: () => e,
    getClientRects: () => [e]
  };
}
function ta() {
  return Object.prototype.hasOwnProperty.call(HTMLElement.prototype, 'popover');
}
function Hr(n, e = qD) {
  n.setAttribute('aria-controls', e['aria-controls']), n.setAttribute('aria-haspopup', e['aria-haspopup']), n.setAttribute('aria-expanded', e['aria-expanded']), e.onmouseenter ? n.onmouseenter = e.onmouseenter : n.onmouseenter = void 0, e.onmouseleave ? n.onmouseleave = e.onmouseleave : n.onmouseleave = void 0;
}
function na(n, e, t, s) {
  He.set(n, {
    anchorElement: n,
    referenceElement: s || n,
    popoverContent: e,
    floatingSettings: {
      placement: t?.placement || void 0,
      gap: t?.gap || void 0,
      onToggle: t?.onToggle || void 0,
      hover: t?.hover,
      virtualPosition: t.virtualPosition,
      disableSelectionReset: t.disableSelectionReset,
      forceFocusTrap: t.forceFocusTrap
    }
  });
}
function As(n, e) {
  He.has(e) && (n.floatingSettings.onToggle?.(false), Hr(e), He.delete(e));
}
function vs() {
  He.forEach(As), He.size && He.clear();
}
function sF(n, e, t) {
  return s => {
    switch (Hr(s), n) {
    case 'click': {
        const i = ke(s, 'click', a => {
          a.preventDefault(), a.stopPropagation(), na(s, e, t);
        });
        return () => {
          i();
          const a = He.get(s);
          a && As(a, s);
        };
      }
    case 'contextmenu': {
        const i = ke(s, 'mousedown', o => {
            o instanceof MouseEvent && o.button === 2 && (document.activeElement instanceof HTMLElement || document.activeElement instanceof SVGElement) && (vr = document.activeElement);
          }), a = ke(s, 'contextmenu', o => {
            if (Jt === s) {
              Jt = void 0;
              return;
            }
            Jt = s, o.preventDefault(), t.disableSelectionReset || document.getSelection()?.removeAllRanges();
            const l = t.virtualPosition ? ou({
              x: t.virtualPosition.x,
              y: t.virtualPosition.y
            }) : o instanceof MouseEvent ? ou({
              x: o.clientX,
              y: o.clientY
            }) : void 0;
            na(s, e, t, l);
          });
        return () => {
          i(), a();
          const o = He.get(s);
          o && As(o, s);
        };
      }
    case 'hover': {
        const i = ke(s, 'mouseenter', () => {
            ea = setTimeout(() => {
              if (He.has(s))
                return;
              const o = Array.from(He.entries()).pop();
              o?.[1].floatingSettings.hover && (Hr(o[0]), o[1].floatingSettings.onToggle?.(false), He.delete(o[0])), na(s, e, {
                ...t,
                hover: true
              });
            }, ad);
          }), a = ke(s, 'mouseleave', () => {
            ea && clearTimeout(ea);
          });
        return () => {
          i(), a();
          const o = He.get(s);
          o && As(o, s);
        };
      }
    default:
      return n;
    }
  };
}
const rF = n => (x(ys, n, true), () => {
  x(ys, void 0);
});
var YD = ue('<div class="backdrop svelte-5s2eip"></div> <div></div>', 1), QD = ue('<div class="popoverPortal" data-testid="popoverPortal"><!></div>');
function iF(n, e) {
  st(e, true);
  const t = l => {
    var d = QD(), c = me(d);
    var u = h => {
      var f = YD(), m = gn(Me(f), 2);
      qu(m, 23, () => He, ([g, D]) => g, (g, D, _, S) => {
        var N = k(() => Hh(p(D), 2));
        let L = () => p(N)[0], U = () => p(N)[1];
        KD(g, {
          get popover() {
            return U();
          },
          openPopover: C => {
            U().floatingSettings.onToggle?.(true), Hr(L(), C);
          },
          closePopover: C => {
            switch (C) {
            case 'lifecycle':
            case 'floating':
              As(U(), L());
              break;
            case 'userAction':
              vs(), Jt = void 0;
              break;
            default:
              return C;
            }
          }
        });
      }), he(m), Jn(m, g => x(s, g), () => p(s)), X(h, f);
    };
    ye(c, h => {
      He.size && h(u);
    });
    he(d), X(l, d);
  };
  let s = W(void 0);
  const r = k(() => He.values().next().value);
  je(() => {
    if (!p(ys))
      return;
    const l = Bh(WD, {
      target: p(ys),
      props: { children: t }
    });
    return () => {
      Uh(l);
    };
  }), je(() => {
    if (!p(r))
      return;
    let l;
    const d = document.activeElement instanceof HTMLDivElement && document.activeElement.isContentEditable;
    (p(r).floatingSettings.forceFocusTrap || !d) && p(s) && (l = xg(p(s), {
      clickOutsideDeactivates: f => (f instanceof MouseEvent && f.button === 2 || (Jt = void 0), true),
      allowOutsideClick: true,
      fallbackFocus: p(s),
      preventScroll: true,
      onDeactivate: () => {
        vs();
      },
      setReturnFocus: () => vr || false,
      onPostDeactivate: () => {
        vr = void 0;
      }
    }), l.activate());
    const c = ke(document, 'scroll', f => {
        f.target instanceof Node && f.target.contains(p(r).anchorElement) && (vs(), Jt = void 0);
      }, {
        capture: true,
        passive: true
      }), u = ke(window, 'blur', () => {
        vs(), Jt = void 0;
      }), h = ke(window, 'popstate', () => {
        vs(), Jt = void 0;
      });
    return () => {
      c(), u(), h(), l?.deactivate();
    };
  });
  var i = Ve(), a = Me(i);
  var o = l => {
    t(l);
  };
  ye(a, l => {
    p(ys) || l(o);
  });
  X(n, i), rt();
}
var JD = ue('<div class="icon icon--left svelte-1tw9bpp"><!></div>'), XD = ue('<div class="prefix svelte-1tw9bpp"><!></div>'), ZD = ue('<div class="counter svelte-1tw9bpp"> </div>'), e_ = ue('<div class="icon icon--right svelte-1tw9bpp"><!></div>'), t_ = ue('<span class="clear-icon svelte-1tw9bpp"><!></span>'), n_ = ue('<div class="clear svelte-1tw9bpp"><!></div>'), s_ = ue('<span class="clear-icon svelte-1tw9bpp"><!></span>'), r_ = ue('<div class="clear svelte-1tw9bpp"><!></div>'), i_ = ue('<div class="icon icon--right svelte-1tw9bpp"><!></div>'), a_ = ue('<div><!> <!>  <input/> <!> <!></div>');
function aF(n, e) {
  st(e, true);
  let t = Qe(e, 'placeholder', 3, ''), s = Qe(e, 'type', 3, 'text'), r = Qe(e, 'value', 15), i = Qe(e, 'autofocus', 3, false), a = Qe(e, 'mode', 3, 'primary'), o = Qe(e, 'appearance', 3, 'neutral'), l = Qe(e, 'dom', 15), d = k(() => s() === 'password');
  const c = k(() => {
    switch (s()) {
    case 'text':
    case 'search':
      return s();
    case 'password':
      return p(d) ? 'password' : 'text';
    default:
      return s();
    }
  });
  je(() => {
    i() && l()?.focus();
  });
  var u = a_();
  let h;
  var f = me(u);
  var m = R => {
    var b = JD(), y = me(b);
    Lt(y, () => e.leftIcon), he(b), X(R, b);
  };
  ye(f, R => {
    e.leftIcon && R(m);
  });
  var g = gn(f, 2);
  {
    var D = R => {
      var b = XD(), y = me(b);
      Lt(y, () => e.prefix), he(b), X(R, b);
    };
    ye(g, R => {
      e.prefix && R(D);
    });
  }
  var _ = gn(g, 2);
  Xu(_), _.__keydown = function (...R) {
    e.onKeyDown?.apply(this, R);
  }, zu(_, i()), _.__click = function (...R) {
    e.onClick?.apply(this, R);
  }, Jn(_, R => l(R), () => l());
  var S = gn(_, 2);
  {
    var N = R => {
      var b = ZD(), y = me(b, true);
      he(b), nt(() => Za(y, e.maxlength - r().length)), X(R, b);
    };
    ye(S, R => {
      typeof e.maxlength < 'u' && !e.hideLengthLimit && R(N);
    });
  }
  var L = gn(S, 2);
  {
    var U = R => {
        var b = Ve(), y = Me(b);
        var I = F => {
            var A = e_(), w = me(A);
            Lt(w, () => e.rightIcon), he(A), X(F, A);
          }, O = F => {
            var A = Ve(), w = Me(A);
            var T = E => {
              var v = Ve(), H = Me(v);
              var P = j => {
                var G = n_(), V = me(G);
                Wi(V, {
                  tabindex: -1,
                  'aria-label': 'Очистить',
                  size: 'small',
                  mode: 'link',
                  appearance: 'neutral',
                  onClick: () => {
                    r(''), l()?.focus();
                  },
                  children: (K, z) => {
                    var $ = t_(), q = me($);
                    Uc(q, {}), he($), X(K, $);
                  },
                  $$slots: { default: true }
                }), he(G), X(j, G);
              };
              ye(H, j => {
                r() && j(P);
              });
              X(E, v);
            };
            ye(w, E => {
              e.clearable && E(T);
            }, true);
            X(F, A);
          };
        ye(y, F => {
          e.rightIcon ? F(I) : F(O, false);
        });
        X(R, b);
      }, C = R => {
        var b = Ve(), y = Me(b);
        var I = F => {
            var A = Ve(), w = Me(A);
            var T = E => {
              var v = r_(), H = me(v);
              Wi(H, {
                tabindex: -1,
                'aria-label': 'Очистить',
                size: 'small',
                mode: 'link',
                appearance: 'neutral',
                onClick: () => {
                  r(''), l()?.focus();
                },
                children: (P, j) => {
                  var G = s_(), V = me(G);
                  Uc(V, {}), he(G), X(P, G);
                },
                $$slots: { default: true }
              }), he(v), X(E, v);
            };
            ye(w, E => {
              r() && E(T);
            });
            X(F, A);
          }, O = F => {
            var A = Ve(), w = Me(A);
            var T = v => {
                var H = Ve(), P = Me(H);
                var j = G => {
                  var V = i_(), K = me(V);
                  let z = k(() => p(d) ? 'Показать' : 'Скрыть');
                  Wi(K, {
                    size: 'medium',
                    appearance: 'neutral',
                    mode: 'link',
                    get 'aria-label'() {
                      return p(z);
                    },
                    onClick: () => x(d, !p(d)),
                    children: ($, q) => {
                      var ie = Ve(), Y = Me(ie);
                      var Q = ne => {
                          jp(ne, {});
                        }, se = ne => {
                          Bp(ne, {});
                        };
                      ye(Y, ne => {
                        p(d) ? ne(Q) : ne(se, false);
                      });
                      X($, ie);
                    },
                    $$slots: { default: true }
                  });
                  he(V), X(G, V);
                };
                ye(P, G => {
                  r() && G(j);
                });
                X(v, H);
              }, E = v => {
              };
            ye(w, v => {
              s() === 'password' ? v(T) : v(E, false);
            }, true);
            X(F, A);
          };
        ye(y, F => {
          s() === 'search' ? F(I) : F(O, false);
        }, true);
        X(R, b);
      };
    ye(L, R => {
      s() === 'text' ? R(U) : R(C, false);
    });
  }
  he(u), nt(() => {
    h = Pt(u, 1, `input input--${ a() ?? '' } input--${ o() ?? '' }`, 'svelte-1tw9bpp', h, { 'input--compact': e.compact }), Pt(_, 1, Wu([
      'field',
      { 'input--clickable': e.onClick }
    ]), 'svelte-1tw9bpp'), wt(_, 'type', p(c)), wt(_, 'placeholder', t()), _.disabled = e.disabled, _.readOnly = e.readonly, wt(_, 'maxlength', e.maxlength);
  }), Qn('focus', _, function (...R) {
    e.onFocus?.apply(this, R);
  }), Qn('blur', _, function (...R) {
    e.onBlur?.apply(this, R);
  }), tf(_, r), X(n, u), rt();
}
ri([
  'keydown',
  'click'
]);
var o_ = 'Invariant failed';
function Z(n, e) {
  if (!n)
    throw new Error(o_);
}
function c_(n, e) {
  e.forEach(function (t) {
    t && typeof t != 'string' && !Array.isArray(t) && Object.keys(t).forEach(function (s) {
      if (s !== 'default' && !(s in n)) {
        var r = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(n, s, r.get ? r : {
          enumerable: true,
          get: function () {
            return t[s];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
function od(n, e) {
  return new Promise(function (t, s) {
    let r;
    return u_(n).then(function (i) {
      try {
        r = i;
        return t(new Blob([
          e.slice(0, 2),
          r,
          e.slice(2)
        ], { type: 'image/jpeg' }));
      } catch (a) {
        return s(a);
      }
    }, s);
  });
}
const u_ = n => new Promise((e, t) => {
  const s = new FileReader();
  s.addEventListener('load', ({
    target: {result: r}
  }) => {
    const i = new DataView(r);
    let a = 0;
    if (i.getUint16(a) !== 65496)
      return t('not a valid JPEG');
    for (a += 2;;) {
      const o = i.getUint16(a);
      if (o === 65498)
        break;
      const l = i.getUint16(a + 2);
      if (o === 65505 && i.getUint32(a + 4) === 1165519206) {
        const d = a + 10;
        let c;
        switch (i.getUint16(d)) {
        case 18761:
          c = true;
          break;
        case 19789:
          c = false;
          break;
        default:
          return t('TIFF header contains invalid endian');
        }
        if (i.getUint16(d + 2, c) !== 42)
          return t('TIFF header contains invalid version');
        const u = i.getUint32(d + 4, c), h = d + u + 2 + 12 * i.getUint16(d + u, c);
        for (let f = d + u + 2; f < h; f += 12)
          if (i.getUint16(f, c) == 274) {
            if (i.getUint16(f + 2, c) !== 3)
              return t('Orientation data type is invalid');
            if (i.getUint32(f + 4, c) !== 1)
              return t('Orientation data count is invalid');
            i.setUint16(f + 8, 1, c);
            break;
          }
        return e(r.slice(a, a + 2 + l));
      }
      a += 2 + l;
    }
    return e(new Blob());
  }), s.readAsArrayBuffer(n);
});
var jr = {}, l_ = {
    get exports() {
      return jr;
    },
    set exports(n) {
      jr = n;
    }
  };
(function (n) {
  var e, t, s = {};
  l_.exports = s, s.parse = function (r, i) {
    for (var a = s.bin.readUshort, o = s.bin.readUint, l = 0, d = {}, c = new Uint8Array(r), u = c.length - 4; o(c, u) != 101010256;)
      u--;
    l = u, l += 4;
    var h = a(c, l += 4);
    a(c, l += 2);
    var f = o(c, l += 2), m = o(c, l += 4);
    l += 4, l = m;
    for (var g = 0; g < h; g++) {
      o(c, l), l += 4, l += 4, l += 4, o(c, l += 4), f = o(c, l += 4);
      var D = o(c, l += 4), _ = a(c, l += 4), S = a(c, l + 2), N = a(c, l + 4);
      l += 6;
      var L = o(c, l += 8);
      l += 4, l += _ + S + N, s._readLocal(c, L, d, f, D, i);
    }
    return d;
  }, s._readLocal = function (r, i, a, o, l, d) {
    var c = s.bin.readUshort, u = s.bin.readUint;
    u(r, i), c(r, i += 4), c(r, i += 2);
    var h = c(r, i += 2);
    u(r, i += 2), u(r, i += 4), i += 4;
    var f = c(r, i += 8), m = c(r, i += 2);
    i += 2;
    var g = s.bin.readUTF8(r, i, f);
    i += f;
    i += m;
    if (d)
      a[g] = {
        size: l,
        csize: o
      };
    else {
      var D = new Uint8Array(r.buffer, i);
      if (h == 0)
        a[g] = new Uint8Array(D.buffer.slice(i, i + o));
      else {
        if (h != 8)
          throw 'unknown compression method: ' + h;
        var _ = new Uint8Array(l);
        s.inflateRaw(D, _), a[g] = _;
      }
    }
  }, s.inflateRaw = function (r, i) {
    return s.F.inflate(r, i);
  }, s.inflate = function (r, i) {
    r[0];
    r[1];
    return s.inflateRaw(new Uint8Array(r.buffer, r.byteOffset + 2, r.length - 6), i);
  }, s.deflate = function (r, i) {
    i == null && (i = { level: 6 });
    var a = 0, o = new Uint8Array(50 + Math.floor(1.1 * r.length));
    o[a] = 120, o[a + 1] = 156, a += 2, a = s.F.deflateRaw(r, o, a, i.level);
    var l = s.adler(r, 0, r.length);
    o[a + 0] = l >>> 24 & 255;
    o[a + 1] = l >>> 16 & 255;
    o[a + 2] = l >>> 8 & 255;
    o[a + 3] = l >>> 0 & 255;
    return new Uint8Array(o.buffer, 0, a + 4);
  }, s.deflateRaw = function (r, i) {
    i == null && (i = { level: 6 });
    var a = new Uint8Array(50 + Math.floor(1.1 * r.length)), o = s.F.deflateRaw(r, a, o, i.level);
    return new Uint8Array(a.buffer, 0, o);
  }, s.encode = function (r, i) {
    i == null && (i = false);
    var a = 0, o = s.bin.writeUint, l = s.bin.writeUshort, d = {};
    for (var c in r) {
      var u = !s._noNeed(c) && !i, h = r[c], f = s.crc.crc(h, 0, h.length);
      d[c] = {
        cpr: u,
        usize: h.length,
        crc: f,
        file: u ? s.deflateRaw(h) : h
      };
    }
    for (var c in d)
      a += d[c].file.length + 30 + 46 + 2 * s.bin.sizeUTF8(c);
    a += 22;
    var m = new Uint8Array(a), g = 0, D = [];
    for (var c in d) {
      var _ = d[c];
      D.push(g), g = s._writeHeader(m, g, c, _, 0);
    }
    var S = 0, N = g;
    for (var c in d)
      _ = d[c], D.push(g), g = s._writeHeader(m, g, c, _, 1, D[S++]);
    var L = g - g;
    o(m, g, 101010256);
    g += 4;
    l(m, g += 4, S);
    l(m, g += 2, S);
    o(m, g += 2, L);
    o(m, g += 4, g);
    g += 4;
    g += 2;
    return m.buffer;
  }, s._noNeed = function (r) {
    var i = r.split('.').pop().toLowerCase();
    return 'png,jpg,jpeg,zip'.indexOf(i) != -1;
  }, s._writeHeader = function (r, i, a, o, l, d) {
    var c = s.bin.writeUint, u = s.bin.writeUshort, h = o.file;
    c(r, i, l == 0 ? 67324752 : 33639248);
    i += 4;
    l == 1 && (i += 2);
    u(r, i, 20);
    u(r, i += 2, 0);
    u(r, i += 2, o.cpr ? 8 : 0);
    c(r, i += 2, 0);
    c(r, i += 4, o.crc);
    c(r, i += 4, h.length);
    c(r, i += 4, o.usize);
    u(r, i += 4, s.bin.sizeUTF8(a));
    u(r, i += 2, 0);
    i += 2;
    l == 1 && (i += 2, i += 2, c(r, i += 6, d), i += 4);
    i += s.bin.writeUTF8(r, i, a);
    l == 0 && (r.set(h, i), i += h.length);
    return i;
  }, s.crc = {
    table: (function () {
      for (var r = new Uint32Array(256), i = 0; i < 256; i++) {
        for (var a = i, o = 0; o < 8; o++)
          1 & a ? a = 3988292384 ^ a >>> 1 : a >>>= 1;
        r[i] = a;
      }
      return r;
    }()),
    update: function (r, i, a, o) {
      for (var l = 0; l < o; l++)
        r = s.crc.table[255 & (r ^ i[a + l])] ^ r >>> 8;
      return r;
    },
    crc: function (r, i, a) {
      return 4294967295 ^ s.crc.update(4294967295, r, i, a);
    }
  }, s.adler = function (r, i, a) {
    for (var o = 1, l = 0, d = i, c = i + a; d < c;) {
      for (var u = Math.min(d + 5552, c); d < u;)
        l += o += r[d++];
      o %= 65521, l %= 65521;
    }
    return l << 16 | o;
  }, s.bin = {
    readUshort: function (r, i) {
      return r[i] | r[i + 1] << 8;
    },
    writeUshort: function (r, i, a) {
      r[i] = 255 & a, r[i + 1] = a >> 8 & 255;
    },
    readUint: function (r, i) {
      return 16777216 * r[i + 3] + (r[i + 2] << 16 | r[i + 1] << 8 | r[i]);
    },
    writeUint: function (r, i, a) {
      r[i] = 255 & a, r[i + 1] = a >> 8 & 255, r[i + 2] = a >> 16 & 255, r[i + 3] = a >> 24 & 255;
    },
    readASCII: function (r, i, a) {
      for (var o = '', l = 0; l < a; l++)
        o += String.fromCharCode(r[i + l]);
      return o;
    },
    writeASCII: function (r, i, a) {
      for (var o = 0; o < a.length; o++)
        r[i + o] = a.charCodeAt(o);
    },
    pad: function (r) {
      return r.length < 2 ? '0' + r : r;
    },
    readUTF8: function (r, i, a) {
      for (var o, l = '', d = 0; d < a; d++)
        l += '%' + s.bin.pad(r[i + d].toString(16));
      try {
        o = decodeURIComponent(l);
      } catch {
        return s.bin.readASCII(r, i, a);
      }
      return o;
    },
    writeUTF8: function (r, i, a) {
      for (var o = a.length, l = 0, d = 0; d < o; d++) {
        var c = a.charCodeAt(d);
        if ((4294967168 & c) == 0)
          r[i + l] = c, l++;
        else if ((4294965248 & c) == 0)
          r[i + l] = 192 | c >> 6, r[i + l + 1] = 128 | c >> 0 & 63, l += 2;
        else if ((4294901760 & c) == 0)
          r[i + l] = 224 | c >> 12, r[i + l + 1] = 128 | c >> 6 & 63, r[i + l + 2] = 128 | c >> 0 & 63, l += 3;
        else {
          if ((4292870144 & c) != 0)
            throw 'e';
          r[i + l] = 240 | c >> 18, r[i + l + 1] = 128 | c >> 12 & 63, r[i + l + 2] = 128 | c >> 6 & 63, r[i + l + 3] = 128 | c >> 0 & 63, l += 4;
        }
      }
      return l;
    },
    sizeUTF8: function (r) {
      for (var i = r.length, a = 0, o = 0; o < i; o++) {
        var l = r.charCodeAt(o);
        if ((4294967168 & l) == 0)
          a++;
        else if ((4294965248 & l) == 0)
          a += 2;
        else if ((4294901760 & l) == 0)
          a += 3;
        else {
          if ((4292870144 & l) != 0)
            throw 'e';
          a += 4;
        }
      }
      return a;
    }
  }, s.F = {}, s.F.deflateRaw = function (r, i, a, o) {
    var l = [
        [
          0,
          0,
          0,
          0,
          0
        ],
        [
          4,
          4,
          8,
          4,
          0
        ],
        [
          4,
          5,
          16,
          8,
          0
        ],
        [
          4,
          6,
          16,
          16,
          0
        ],
        [
          4,
          10,
          16,
          32,
          0
        ],
        [
          8,
          16,
          32,
          32,
          0
        ],
        [
          8,
          16,
          128,
          128,
          0
        ],
        [
          8,
          32,
          128,
          256,
          0
        ],
        [
          32,
          128,
          258,
          1024,
          1
        ],
        [
          32,
          258,
          258,
          4096,
          1
        ]
      ][o], d = s.F.U, c = s.F._goodIndex;
    s.F._hash;
    var u = s.F._putsE, h = 0, f = a << 3, m = 0, g = r.length;
    if (o == 0) {
      for (; h < g;)
        u(i, f, h + (O = Math.min(65535, g - h)) == g ? 1 : 0), f = s.F._copyExact(r, h, O, i, f + 8), h += O;
      return f >>> 3;
    }
    var D = d.lits, _ = d.strt, S = d.prev, N = 0, L = 0, U = 0, C = 0, R = 0, b = 0;
    for (g > 2 && (_[b = s.F._hash(r, 0)] = 0), h = 0; h < g; h++) {
      R = b;
      if (h + 1 < g - 2) {
        b = s.F._hash(r, h + 1);
        var y = h + 1 & 32767;
        S[y] = _[b], _[b] = y;
      }
      if (m <= h) {
        (N > 14000 || L > 26697) && g - h > 100 && (m < h && (D[N] = h - m, N += 2, m = h), f = s.F._writeBlock(h == g - 1 || m == g ? 1 : 0, D, N, C, r, U, h - U, i, f), N = L = C = 0, U = h);
        var I = 0;
        h < g - 2 && (I = s.F._bestMatch(r, h, S, R, Math.min(l[2], g - h), l[3]));
        var O = I >>> 16, F = 65535 & I;
        if (I != 0) {
          F = 65535 & I;
          var A = c(O = I >>> 16, d.of0);
          d.lhst[257 + A]++;
          var w = c(F, d.df0);
          d.dhst[w]++, C += d.exb[A] + d.dxb[w], D[N] = O << 23 | h - m, D[N + 1] = F << 16 | A << 8 | w, N += 2, m = h + O;
        } else
          d.lhst[r[h]]++;
        L++;
      }
    }
    for (U == h && r.length != 0 || (m < h && (D[N] = h - m, N += 2, m = h), f = s.F._writeBlock(1, D, N, C, r, U, h - U, i, f), N = 0, L = 0, N = L = C = 0, U = h); (7 & f) != 0;)
      f++;
    return f >>> 3;
  }, s.F._bestMatch = function (r, i, a, o, l, d) {
    var c = 32767 & i, u = a[c], h = c - u + 32768 & 32767;
    if (u == c || o != s.F._hash(r, i - h))
      return 0;
    for (var f = 0, m = 0, g = Math.min(32767, i); h <= g && --d != 0 && u != c;) {
      if (f == 0 || r[i + f] == r[i + f - h]) {
        var D = s.F._howLong(r, i, h);
        if (D > f) {
          m = h;
          if ((f = D) >= l)
            break;
          h + 2 < D && (D = h + 2);
          for (var _ = 0, S = 0; S < D - 2; S++) {
            var N = i - h + S + 32768 & 32767, L = N - a[N] + 32768 & 32767;
            L > _ && (_ = L, u = N);
          }
        }
      }
      h += (c = u) - (u = a[c]) + 32768 & 32767;
    }
    return f << 16 | m;
  }, s.F._howLong = function (r, i, a) {
    if (r[i] != r[i - a] || r[i + 1] != r[i + 1 - a] || r[i + 2] != r[i + 2 - a])
      return 0;
    var o = i, l = Math.min(r.length, i + 258);
    for (i += 3; i < l && r[i] == r[i - a];)
      i++;
    return i - i;
  }, s.F._hash = function (r, i) {
    return (r[i] << 8 | r[i + 1]) + (r[i + 2] << 4) & 65535;
  }, s.saved = 0, s.F._writeBlock = function (r, i, a, o, l, d, c, u, h) {
    var f, m, g, D, _, S, N, L, U, C = s.F.U, R = s.F._putsF, b = s.F._putsE;
    C.lhst[256]++, m = (f = s.F.getTrees())[0], g = f[1], D = f[2], _ = f[3], S = f[4], N = f[5], L = f[6], U = f[7];
    var y = 32 + ((h + 3 & 7) == 0 ? 0 : 8 - (h + 3 & 7)) + (c << 3), I = o + s.F.contSize(C.fltree, C.lhst) + s.F.contSize(C.fdtree, C.dhst), O = o + s.F.contSize(C.ltree, C.lhst) + s.F.contSize(C.dtree, C.dhst);
    O += 14 + 3 * N + s.F.contSize(C.itree, C.ihst) + (2 * C.ihst[16] + 3 * C.ihst[17] + 7 * C.ihst[18]);
    for (var F = 0; F < 286; F++)
      C.lhst[F] = 0;
    for (F = 0; F < 30; F++)
      C.dhst[F] = 0;
    for (F = 0; F < 19; F++)
      C.ihst[F] = 0;
    var A = y < I && y < O ? 0 : I < O ? 1 : 2;
    R(u, h, r);
    R(u, h + 1, A);
    h += 3;
    if (A == 0) {
      for (; (7 & h) != 0;)
        h++;
      h = s.F._copyExact(l, d, c, u, h);
    } else {
      var w, T;
      if (A == 1 && (w = C.fltree, T = C.fdtree), A == 2) {
        s.F.makeCodes(C.ltree, m), s.F.revCodes(C.ltree, m), s.F.makeCodes(C.dtree, g), s.F.revCodes(C.dtree, g), s.F.makeCodes(C.itree, D), s.F.revCodes(C.itree, D), w = C.ltree, T = C.dtree, b(u, h, _ - 257), b(u, h += 5, S - 1), b(u, h += 5, N - 4), h += 4;
        for (var E = 0; E < N; E++)
          b(u, h + 3 * E, C.itree[1 + (C.ordr[E] << 1)]);
        h += 3 * N, h = s.F._codeTiny(L, C.itree, u, h), h = s.F._codeTiny(U, C.itree, u, h);
      }
      for (var v = d, H = 0; H < a; H += 2) {
        for (var P = i[H], j = P >>> 23, G = v + (8388607 & P); v < G;)
          h = s.F._writeLit(l[v++], w, u, h);
        if (j != 0) {
          var V = i[H + 1], K = V >> 16, z = V >> 8 & 255, $ = 255 & V;
          b(u, h = s.F._writeLit(257 + z, w, u, h), j - C.of0[z]), h += C.exb[z], R(u, h = s.F._writeLit($, T, u, h), K - C.df0[$]), h += C.dxb[$], v += j;
        }
      }
      h = s.F._writeLit(256, w, u, h);
    }
    return h;
  }, s.F._copyExact = function (r, i, a, o, l) {
    var d = l >>> 3;
    o[d] = a;
    o[d + 1] = a >>> 8;
    o[d + 2] = 255 - o[d];
    o[d + 3] = 255 - o[d + 1];
    d += 4;
    o.set(new Uint8Array(r.buffer, i, a), d);
    return l + (a + 4 << 3);
  }, s.F.getTrees = function () {
    for (var r = s.F.U, i = s.F._hufTree(r.lhst, r.ltree, 15), a = s.F._hufTree(r.dhst, r.dtree, 15), o = [], l = s.F._lenCodes(r.ltree, o), d = [], c = s.F._lenCodes(r.dtree, d), u = 0; u < o.length; u += 2)
      r.ihst[o[u]]++;
    for (u = 0; u < d.length; u += 2)
      r.ihst[d[u]]++;
    for (var h = s.F._hufTree(r.ihst, r.itree, 7), f = 19; f > 4 && r.itree[1 + (r.ordr[f - 1] << 1)] == 0;)
      f--;
    return [
      i,
      a,
      h,
      l,
      c,
      f,
      o,
      d
    ];
  }, s.F.getSecond = function (r) {
    for (var i = [], a = 0; a < r.length; a += 2)
      i.push(r[a + 1]);
    return i;
  }, s.F.nonZero = function (r) {
    for (var i = '', a = 0; a < r.length; a += 2)
      r[a + 1] != 0 && (i += (a >> 1) + ',');
    return i;
  }, s.F.contSize = function (r, i) {
    for (var a = 0, o = 0; o < i.length; o++)
      a += i[o] * r[1 + (o << 1)];
    return a;
  }, s.F._codeTiny = function (r, i, a, o) {
    for (var l = 0; l < r.length; l += 2) {
      var d = r[l], c = r[l + 1];
      o = s.F._writeLit(d, i, a, o);
      var u = d == 16 ? 2 : d == 17 ? 3 : 7;
      d > 15 && (s.F._putsE(a, o, c, u), o += u);
    }
    return o;
  }, s.F._lenCodes = function (r, i) {
    for (var a = r.length; a != 2 && r[a - 1] == 0;)
      a -= 2;
    for (var o = 0; o < a; o += 2) {
      var l = r[o + 1], d = o + 3 < a ? r[o + 3] : -1, c = o + 5 < a ? r[o + 5] : -1, u = o == 0 ? -1 : r[o - 1];
      if (l == 0 && d == l && c == l) {
        for (var h = o + 5; h + 2 < a && r[h + 2] == l;)
          h += 2;
        (f = Math.min(h + 1 - o >>> 1, 138)) < 11 ? i.push(17, f - 3) : i.push(18, f - 11), o += 2 * f - 2;
      } else if (l == u && d == l && c == l) {
        for (h = o + 5; h + 2 < a && r[h + 2] == l;)
          h += 2;
        var f = Math.min(h + 1 - o >>> 1, 6);
        i.push(16, f - 3), o += 2 * f - 2;
      } else
        i.push(l, 0);
    }
    return a >>> 1;
  }, s.F._hufTree = function (r, i, a) {
    var o = [], l = r.length, d = i.length, c = 0;
    for (c = 0; c < d; c += 2)
      i[c] = 0, i[c + 1] = 0;
    for (c = 0; c < l; c++)
      r[c] != 0 && o.push({
        lit: c,
        f: r[c]
      });
    var u = o.length, h = o.slice(0);
    if (u == 0)
      return 0;
    if (u == 1) {
      var f = o[0].lit;
      h = f == 0 ? 1 : 0;
      i[1 + (f << 1)] = 1;
      i[1 + (h << 1)] = 1;
      return 1;
    }
    o.sort(function (L, U) {
      return L.f - U.f;
    });
    var m = o[0], g = o[1], D = 0, _ = 1, S = 2;
    for (o[0] = {
        lit: -1,
        f: m.f + g.f,
        l: m,
        r: g,
        d: 0
      }; _ != u - 1;)
      m = D != _ && (S == u || o[D].f < o[S].f) ? o[D++] : o[S++], g = D != _ && (S == u || o[D].f < o[S].f) ? o[D++] : o[S++], o[_++] = {
        lit: -1,
        f: m.f + g.f,
        l: m,
        r: g
      };
    var N = s.F.setDepth(o[_ - 1], 0);
    for (N > a && (s.F.restrictDepth(h, a, N), N = a), c = 0; c < u; c++)
      i[1 + (h[c].lit << 1)] = h[c].d;
    return N;
  }, s.F.setDepth = function (r, i) {
    return r.lit != -1 ? (r.d = i, i) : Math.max(s.F.setDepth(r.l, i + 1), s.F.setDepth(r.r, i + 1));
  }, s.F.restrictDepth = function (r, i, a) {
    var o = 0, l = 1 << a - i, d = 0;
    for (r.sort(function (u, h) {
        return h.d == u.d ? u.f - h.f : h.d - u.d;
      }), o = 0; o < r.length && r[o].d > i; o++) {
      var c = r[o].d;
      r[o].d = i, d += l - (1 << a - c);
    }
    for (d >>>= a - i; d > 0;)
      (c = r[o].d) < i ? (r[o].d++, d -= 1 << i - c - 1) : o++;
    for (; o >= 0; o--)
      r[o].d == i && d < 0 && (r[o].d--, d++);
    d != 0 && console.log('debt left');
  }, s.F._goodIndex = function (r, i) {
    var a = 0;
    i[16 | a] <= r && (a |= 16);
    i[8 | a] <= r && (a |= 8);
    i[4 | a] <= r && (a |= 4);
    i[2 | a] <= r && (a |= 2);
    i[1 | a] <= r && (a |= 1);
    return a;
  }, s.F._writeLit = function (r, i, a, o) {
    s.F._putsF(a, o, i[r << 1]);
    return o + i[1 + (r << 1)];
  }, s.F.inflate = function (r, i) {
    var a = Uint8Array;
    if (r[0] == 3 && r[1] == 0)
      return i || new Uint8Array(0);
    var o = s.F, l = o._bitsF, d = o._bitsE, c = o._decodeTiny, u = o.makeCodes, h = o.codes2map, f = o._get17, m = o.U, g = i == null;
    g && (i = new Uint8Array(r.length >>> 2 << 3));
    for (var D, _, S = 0, N = 0, L = 0, U = 0, C = 0, R = 0, b = 0, y = 0, I = 0; S == 0;) {
      S = l(r, I, 1);
      N = l(r, I + 1, 2);
      I += 3;
      if (N != 0) {
        if (g && (i = s.F._check(i, y + 131072)), N == 1 && (D = m.flmap, _ = m.fdmap, R = 511, b = 31), N == 2) {
          L = d(r, I, 5) + 257, U = d(r, I + 5, 5) + 1, C = d(r, I + 10, 4) + 4, I += 14;
          for (var O = 0; O < 38; O += 2)
            m.itree[O] = 0, m.itree[O + 1] = 0;
          var F = 1;
          for (O = 0; O < C; O++) {
            var A = d(r, I + 3 * O, 3);
            m.itree[1 + (m.ordr[O] << 1)] = A, A > F && (F = A);
          }
          I += 3 * C, u(m.itree, F), h(m.itree, F, m.imap), D = m.lmap, _ = m.dmap, I = c(m.imap, (1 << F) - 1, L + U, r, I, m.ttree);
          var w = o._copyOut(m.ttree, 0, L, m.ltree);
          R = (1 << w) - 1;
          var T = o._copyOut(m.ttree, L, U, m.dtree);
          b = (1 << T) - 1, u(m.ltree, w), h(m.ltree, w, D), u(m.dtree, T), h(m.dtree, T, _);
        }
        for (;;) {
          var E = D[f(r, I) & R];
          I += 15 & E;
          var v = E >>> 4;
          if (!(v >>> 8))
            i[y++] = v;
          else {
            if (v == 256)
              break;
            var H = y + v - 254;
            if (v > 264) {
              var P = m.ldef[v - 257];
              H = y + (P >>> 3) + d(r, I, 7 & P), I += 7 & P;
            }
            var j = _[f(r, I) & b];
            I += 15 & j;
            var G = j >>> 4, V = m.ddef[G], K = (V >>> 4) + l(r, I, 15 & V);
            for (I += 15 & V, g && (i = s.F._check(i, y + 131072)); y < H;)
              i[y] = i[y++ - K], i[y] = i[y++ - K], i[y] = i[y++ - K], i[y] = i[y++ - K];
            y = H;
          }
        }
      } else {
        (7 & I) != 0 && (I += 8 - (7 & I));
        var z = 4 + (I >>> 3), $ = r[z - 4] | r[z - 3] << 8;
        g && (i = s.F._check(i, y + $)), i.set(new Uint8Array(r.buffer, r.byteOffset + z, $), y), I = z + $ << 3, y += $;
      }
    }
    return i.length == y ? i : i.slice(0, y);
  }, s.F._check = function (r, i) {
    var a = r.length;
    if (i <= a)
      return r;
    var o = new Uint8Array(Math.max(a << 1, i));
    o.set(r, 0);
    return o;
  }, s.F._decodeTiny = function (r, i, a, o, l, d) {
    for (var c = s.F._bitsE, u = s.F._get17, h = 0; h < a;) {
      var f = r[u(o, l) & i];
      l += 15 & f;
      var m = f >>> 4;
      if (m <= 15)
        d[h] = m, h++;
      else {
        var g = 0, D = 0;
        m == 16 ? (D = 3 + c(o, l, 2), l += 2, g = d[h - 1]) : m == 17 ? (D = 3 + c(o, l, 3), l += 3) : m == 18 && (D = 11 + c(o, l, 7), l += 7);
        for (var _ = h + D; h < _;)
          d[h] = g, h++;
      }
    }
    return l;
  }, s.F._copyOut = function (r, i, a, o) {
    for (var l = 0, d = 0, c = o.length >>> 1; d < a;) {
      var u = r[d + i];
      o[d << 1] = 0, o[1 + (d << 1)] = u, u > l && (l = u), d++;
    }
    for (; d < c;)
      o[d << 1] = 0, o[1 + (d << 1)] = 0, d++;
    return l;
  }, s.F.makeCodes = function (r, i) {
    for (var a, o, l, d, c = s.F.U, u = r.length, h = c.bl_count, f = 0; f <= i; f++)
      h[f] = 0;
    for (f = 1; f < u; f += 2)
      h[r[f]]++;
    var m = c.next_code;
    for (a = 0, h[0] = 0, o = 1; o <= i; o++)
      a = a + h[o - 1] << 1, m[o] = a;
    for (l = 0; l < u; l += 2)
      (d = r[l + 1]) != 0 && (r[l] = m[d], m[d]++);
  }, s.F.codes2map = function (r, i, a) {
    for (var o = r.length, l = s.F.U.rev15, d = 0; d < o; d += 2)
      if (r[d + 1] != 0)
        for (var c = d >> 1, u = r[d + 1], h = c << 4 | u, f = i - u, m = r[d] << f, g = m + (1 << f); m != g;)
          a[l[m] >>> 15 - i] = h, m++;
  }, s.F.revCodes = function (r, i) {
    for (var a = s.F.U.rev15, o = 15 - i, l = 0; l < r.length; l += 2) {
      var d = r[l] << i - r[l + 1];
      r[l] = a[d] >>> o;
    }
  }, s.F._putsE = function (r, i, a) {
    a <<= 7 & i;
    var o = i >>> 3;
    r[o] |= a, r[o + 1] |= a >>> 8;
  }, s.F._putsF = function (r, i, a) {
    a <<= 7 & i;
    var o = i >>> 3;
    r[o] |= a, r[o + 1] |= a >>> 8, r[o + 2] |= a >>> 16;
  }, s.F._bitsE = function (r, i, a) {
    return (r[i >>> 3] | r[1 + (i >>> 3)] << 8) >>> (7 & i) & (1 << a) - 1;
  }, s.F._bitsF = function (r, i, a) {
    return (r[i >>> 3] | r[1 + (i >>> 3)] << 8 | r[2 + (i >>> 3)] << 16) >>> (7 & i) & (1 << a) - 1;
  }, s.F._get17 = function (r, i) {
    return (r[i >>> 3] | r[1 + (i >>> 3)] << 8 | r[2 + (i >>> 3)] << 16) >>> (7 & i);
  }, s.F._get25 = function (r, i) {
    return (r[i >>> 3] | r[1 + (i >>> 3)] << 8 | r[2 + (i >>> 3)] << 16 | r[3 + (i >>> 3)] << 24) >>> (7 & i);
  }, s.F.U = (e = Uint16Array, t = Uint32Array, {
    next_code: new e(16),
    bl_count: new e(16),
    ordr: [
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ],
    of0: [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      999,
      999,
      999
    ],
    exb: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
      0,
      0,
      0
    ],
    ldef: new e(32),
    df0: [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      65535,
      65535
    ],
    dxb: [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      0,
      0
    ],
    ddef: new t(32),
    flmap: new e(512),
    fltree: [],
    fdmap: new e(32),
    fdtree: [],
    lmap: new e(32768),
    ltree: [],
    ttree: [],
    dmap: new e(32768),
    dtree: [],
    imap: new e(512),
    itree: [],
    rev15: new e(32768),
    lhst: new t(286),
    dhst: new t(30),
    ihst: new t(19),
    lits: new t(15000),
    strt: new e(65536),
    prev: new e(32768)
  }), (function () {
    for (var r = s.F.U, i = 0; i < 32768; i++) {
      var a = i;
      a = (4278255360 & (a = (4042322160 & (a = (3435973836 & (a = (2863311530 & a) >>> 1 | (1431655765 & a) << 1)) >>> 2 | (858993459 & a) << 2)) >>> 4 | (252645135 & a) << 4)) >>> 8 | (16711935 & a) << 8, r.rev15[i] = (a >>> 16 | a << 16) >>> 17;
    }
    function o(l, d, c) {
      for (; d-- != 0;)
        l.push(0, c);
    }
    for (i = 0; i < 32; i++)
      r.ldef[i] = r.of0[i] << 3 | r.exb[i], r.ddef[i] = r.df0[i] << 4 | r.dxb[i];
    o(r.fltree, 144, 8), o(r.fltree, 112, 9), o(r.fltree, 24, 7), o(r.fltree, 8, 8), s.F.makeCodes(r.fltree, 9), s.F.codes2map(r.fltree, 9, r.flmap), s.F.revCodes(r.fltree, 9), o(r.fdtree, 32, 5), s.F.makeCodes(r.fdtree, 5), s.F.codes2map(r.fdtree, 5, r.fdmap), s.F.revCodes(r.fdtree, 5), o(r.itree, 19, 0), o(r.ltree, 286, 0), o(r.dtree, 30, 0), o(r.ttree, 320, 0);
  }());
}());
var d_ = c_({
  __proto__: null,
  default: jr
}, [jr]);
const at = (function () {
  var n = {
    nextZero(c, u) {
      for (; c[u] != 0;)
        u++;
      return u;
    },
    readUshort: (c, u) => c[u] << 8 | c[u + 1],
    writeUshort(c, u, h) {
      c[u] = h >> 8 & 255, c[u + 1] = 255 & h;
    },
    readUint: (c, u) => 16777216 * c[u] + (c[u + 1] << 16 | c[u + 2] << 8 | c[u + 3]),
    writeUint(c, u, h) {
      c[u] = h >> 24 & 255, c[u + 1] = h >> 16 & 255, c[u + 2] = h >> 8 & 255, c[u + 3] = 255 & h;
    },
    readASCII(c, u, h) {
      let f = '';
      for (let m = 0; m < h; m++)
        f += String.fromCharCode(c[u + m]);
      return f;
    },
    writeASCII(c, u, h) {
      for (let f = 0; f < h.length; f++)
        c[u + f] = h.charCodeAt(f);
    },
    readBytes(c, u, h) {
      const f = [];
      for (let m = 0; m < h; m++)
        f.push(c[u + m]);
      return f;
    },
    pad: c => c.length < 2 ? `0${ c }` : c,
    readUTF8(c, u, h) {
      let f, m = '';
      for (let g = 0; g < h; g++)
        m += `%${ n.pad(c[u + g].toString(16)) }`;
      try {
        f = decodeURIComponent(m);
      } catch {
        return n.readASCII(c, u, h);
      }
      return f;
    }
  };
  function e(c, u, h, f) {
    const m = u * h, g = i(f), D = Math.ceil(u * g / 8), _ = new Uint8Array(4 * m), S = new Uint32Array(_.buffer), U = n.readUshort;
    if (N == 6) {
      const P = m << 2;
      if (L == 8)
        for (var C = 0; C < P; C += 4)
          _[C] = c[C], _[C + 1] = c[C + 1], _[C + 2] = c[C + 2], _[C + 3] = c[C + 3];
      if (L == 16)
        for (C = 0; C < P; C++)
          _[C] = c[C << 1];
    } else if (N == 2) {
      const P = f.tabs.tRNS;
      if (P == null) {
        if (L == 8)
          for (C = 0; C < m; C++) {
            var R = 3 * C;
            S[C] = -16777216 | c[R + 2] << 16 | c[R + 1] << 8 | c[R];
          }
        if (L == 16)
          for (C = 0; C < m; C++)
            R = 6 * C, S[C] = -16777216 | c[R + 4] << 16 | c[R + 2] << 8 | c[R];
      } else {
        var b = P[0];
        const j = P[1], G = P[2];
        if (L == 8)
          for (C = 0; C < m; C++) {
            var y = C << 2;
            R = 3 * C, S[C] = -16777216 | c[R + 2] << 16 | c[R + 1] << 8 | c[R], c[R] == b && c[R + 1] == j && c[R + 2] == G && (_[y + 3] = 0);
          }
        if (L == 16)
          for (C = 0; C < m; C++)
            y = C << 2, R = 6 * C, S[C] = -16777216 | c[R + 4] << 16 | c[R + 2] << 8 | c[R], U(c, R) == b && U(c, R + 2) == j && U(c, R + 4) == G && (_[y + 3] = 0);
      }
    } else if (N == 3) {
      const P = f.tabs.PLTE, j = f.tabs.tRNS, G = j ? j.length : 0;
      if (L == 1)
        for (var I = 0; I < h; I++) {
          var O = I * D, F = I * u;
          for (C = 0; C < u; C++) {
            y = F + C << 2;
            var A = 3 * (w = c[O + (C >> 3)] >> 7 - ((7 & C) << 0) & 1);
            _[y] = P[A], _[y + 1] = P[A + 1], _[y + 2] = P[A + 2], _[y + 3] = w < G ? j[w] : 255;
          }
        }
      if (L == 2)
        for (I = 0; I < h; I++)
          for (O = I * D, F = I * u, C = 0; C < u; C++)
            y = F + C << 2, A = 3 * (w = c[O + (C >> 2)] >> 6 - ((3 & C) << 1) & 3), _[y] = P[A], _[y + 1] = P[A + 1], _[y + 2] = P[A + 2], _[y + 3] = w < G ? j[w] : 255;
      if (L == 4)
        for (I = 0; I < h; I++)
          for (O = I * D, F = I * u, C = 0; C < u; C++)
            y = F + C << 2, A = 3 * (w = c[O + (C >> 1)] >> 4 - ((1 & C) << 2) & 15), _[y] = P[A], _[y + 1] = P[A + 1], _[y + 2] = P[A + 2], _[y + 3] = w < G ? j[w] : 255;
      if (L == 8)
        for (C = 0; C < m; C++) {
          var w;
          y = C << 2, A = 3 * (w = c[C]), _[y] = P[A], _[y + 1] = P[A + 1], _[y + 2] = P[A + 2], _[y + 3] = w < G ? j[w] : 255;
        }
    } else if (N == 4) {
      if (L == 8)
        for (C = 0; C < m; C++) {
          y = C << 2;
          var T = c[E = C << 1];
          _[y] = T, _[y + 1] = T, _[y + 2] = T, _[y + 3] = c[E + 1];
        }
      if (L == 16)
        for (C = 0; C < m; C++) {
          var E;
          y = C << 2, T = c[E = C << 2], _[y] = T, _[y + 1] = T, _[y + 2] = T, _[y + 3] = c[E + 2];
        }
    } else if (N == 0)
      for (b = f.tabs.tRNS ? f.tabs.tRNS : -1, I = 0; I < h; I++) {
        const P = I * D, j = I * u;
        if (L == 1)
          for (var v = 0; v < u; v++) {
            var H = (T = 255 * (c[P + (v >>> 3)] >>> 7 - (7 & v) & 1)) == 255 * b ? 0 : 255;
            S[j + v] = H << 24 | T << 16 | T << 8 | T;
          }
        else if (L == 2)
          for (v = 0; v < u; v++)
            H = (T = 85 * (c[P + (v >>> 2)] >>> 6 - ((3 & v) << 1) & 3)) == 85 * b ? 0 : 255, S[j + v] = H << 24 | T << 16 | T << 8 | T;
        else if (L == 4)
          for (v = 0; v < u; v++)
            H = (T = 17 * (c[P + (v >>> 1)] >>> 4 - ((1 & v) << 2) & 15)) == 17 * b ? 0 : 255, S[j + v] = H << 24 | T << 16 | T << 8 | T;
        else if (L == 8)
          for (v = 0; v < u; v++)
            H = (T = c[P + v]) == b ? 0 : 255, S[j + v] = H << 24 | T << 16 | T << 8 | T;
        else if (L == 16)
          for (v = 0; v < u; v++)
            T = c[P + (v << 1)], H = U(c, P + (v << 1)) == b ? 0 : 255, S[j + v] = H << 24 | T << 16 | T << 8 | T;
      }
    return _;
  }
  function t(c, u, h, f) {
    const m = i(c), g = Math.ceil(h * m / 8), D = new Uint8Array((g + 1 + c.interlace) * f);
    u = c.tabs.CgBI ? r(u, D) : s(u, D);
    c.interlace == 0 ? u = a(u, c, 0, h, f) : c.interlace == 1 && (u = function (S, N) {
      const L = N.width, U = N.height, C = i(N), R = C >> 3, b = Math.ceil(L * C / 8), y = new Uint8Array(U * b);
      let I = 0;
      const O = [
          0,
          0,
          4,
          0,
          2,
          0,
          1
        ], F = [
          0,
          4,
          0,
          2,
          0,
          1,
          0
        ], A = [
          8,
          8,
          8,
          4,
          4,
          2,
          2
        ], w = [
          8,
          8,
          4,
          4,
          2,
          2,
          1
        ];
      let T = 0;
      for (; T < 7;) {
        const v = A[T], H = w[T];
        let P = 0, j = 0, G = O[T];
        for (; G < U;)
          G += v, j++;
        let V = F[T];
        for (; V < L;)
          V += H, P++;
        const K = Math.ceil(P * C / 8);
        a(S, N, I, P, j);
        let z = 0, $ = O[T];
        for (; $ < U;) {
          let q = F[T], ie = I + z * K << 3;
          for (; q < L;) {
            var E;
            C == 1 && (E = (E = S[ie >> 3]) >> 7 - (7 & ie) & 1, y[$ * b + (q >> 3)] |= E << 7 - ((7 & q) << 0));
            C == 2 && (E = (E = S[ie >> 3]) >> 6 - (7 & ie) & 3, y[$ * b + (q >> 2)] |= E << 6 - ((3 & q) << 1));
            C == 4 && (E = (E = S[ie >> 3]) >> 4 - (7 & ie) & 15, y[$ * b + (q >> 1)] |= E << 4 - ((1 & q) << 2));
            if (C >= 8) {
              const Y = $ * b + q * R;
              for (let Q = 0; Q < R; Q++)
                y[Y + Q] = S[(ie >> 3) + Q];
            }
            ie += C, q += H;
          }
          z++, $ += v;
        }
        P * j != 0 && (I += j * (1 + K)), T += 1;
      }
      return y;
    }(u, c));
    return u;
  }
  function s(c, u) {
    return r(new Uint8Array(c.buffer, 2, c.length - 6), u);
  }
  var r = (function () {
    const c = { H: {} };
    c.H.N = function (u, h) {
      const f = Uint8Array;
      let m, g, D = 0, _ = 0, S = 0, N = 0, L = 0, U = 0, C = 0, R = 0, b = 0;
      if (u[0] == 3 && u[1] == 0)
        return h || new Uint8Array(0);
      const y = c.H, I = y.b, O = y.e, F = y.R, A = y.n, w = y.A, T = y.Z, E = y.m, v = h == null;
      for (v && (h = new Uint8Array(u.length >>> 2 << 5)); D == 0;) {
        D = I(u, b, 1);
        _ = I(u, b + 1, 2);
        b += 3;
        if (_ != 0) {
          if (v && (h = c.H.W(h, R + 131072)), _ == 1 && (m = E.J, g = E.h, U = 511, C = 31), _ == 2) {
            S = O(u, b, 5) + 257, N = O(u, b + 5, 5) + 1, L = O(u, b + 10, 4) + 4, b += 14;
            let P = 1;
            for (var H = 0; H < 38; H += 2)
              E.Q[H] = 0, E.Q[H + 1] = 0;
            for (H = 0; H < L; H++) {
              const V = O(u, b + 3 * H, 3);
              E.Q[1 + (E.X[H] << 1)] = V, V > P && (P = V);
            }
            b += 3 * L, A(E.Q, P), w(E.Q, P, E.u), m = E.w, g = E.d, b = F(E.u, (1 << P) - 1, S + N, u, b, E.v);
            const j = y.V(E.v, 0, S, E.C);
            U = (1 << j) - 1;
            const G = y.V(E.v, S, N, E.D);
            C = (1 << G) - 1, A(E.C, j), w(E.C, j, m), A(E.D, G), w(E.D, G, g);
          }
          for (;;) {
            const P = m[T(u, b) & U];
            b += 15 & P;
            const j = P >>> 4;
            if (!(j >>> 8))
              h[R++] = j;
            else {
              if (j == 256)
                break;
              let G = R + j - 254;
              if (j > 264) {
                const q = E.q[j - 257];
                G = R + (q >>> 3) + O(u, b, 7 & q), b += 7 & q;
              }
              const V = g[T(u, b) & C];
              b += 15 & V;
              const K = V >>> 4, z = E.c[K], $ = (z >>> 4) + I(u, b, 15 & z);
              for (b += 15 & z; R < G;)
                h[R] = h[R++ - $], h[R] = h[R++ - $], h[R] = h[R++ - $], h[R] = h[R++ - $];
              R = G;
            }
          }
        } else {
          (7 & b) != 0 && (b += 8 - (7 & b));
          const P = 4 + (b >>> 3), j = u[P - 4] | u[P - 3] << 8;
          v && (h = c.H.W(h, R + j)), h.set(new Uint8Array(u.buffer, u.byteOffset + P, j), R), b = P + j << 3, R += j;
        }
      }
      return h.length == R ? h : h.slice(0, R);
    };
    c.H.W = function (u, h) {
      const f = u.length;
      if (h <= f)
        return u;
      const m = new Uint8Array(f << 1);
      m.set(u, 0);
      return m;
    };
    c.H.R = function (u, h, f, m, g, D) {
      const _ = c.H.e, S = c.H.Z;
      let N = 0;
      for (; N < f;) {
        const L = u[S(m, g) & h];
        g += 15 & L;
        const U = L >>> 4;
        if (U <= 15)
          D[N] = U, N++;
        else {
          let C = 0, R = 0;
          U == 16 ? (R = 3 + _(m, g, 2), g += 2, C = D[N - 1]) : U == 17 ? (R = 3 + _(m, g, 3), g += 3) : U == 18 && (R = 11 + _(m, g, 7), g += 7);
          const b = N + R;
          for (; N < b;)
            D[N] = C, N++;
        }
      }
      return g;
    };
    c.H.V = function (u, h, f, m) {
      let g = 0, D = 0;
      const _ = m.length >>> 1;
      for (; D < f;) {
        const S = u[D + h];
        m[D << 1] = 0, m[1 + (D << 1)] = S, S > g && (g = S), D++;
      }
      for (; D < _;)
        m[D << 1] = 0, m[1 + (D << 1)] = 0, D++;
      return g;
    };
    c.H.n = function (u, h) {
      const f = c.H.m, m = u.length;
      let g, D, _, S;
      const N = f.j;
      for (var L = 0; L <= h; L++)
        N[L] = 0;
      for (L = 1; L < m; L += 2)
        N[u[L]]++;
      const U = f.K;
      for (g = 0, N[0] = 0, D = 1; D <= h; D++)
        g = g + N[D - 1] << 1, U[D] = g;
      for (_ = 0; _ < m; _ += 2)
        S = u[_ + 1], S != 0 && (u[_] = U[S], U[S]++);
    };
    c.H.A = function (u, h, f) {
      const m = u.length, g = c.H.m.r;
      for (let D = 0; D < m; D += 2)
        if (u[D + 1] != 0) {
          const _ = D >> 1, S = u[D + 1], N = _ << 4 | S, L = h - S;
          let U = u[D] << L;
          const C = U + (1 << L);
          for (; U != C;)
            f[g[U] >>> 15 - h] = N, U++;
        }
    };
    c.H.l = function (u, h) {
      const f = c.H.m.r, m = 15 - h;
      for (let g = 0; g < u.length; g += 2) {
        const D = u[g] << h - u[g + 1];
        u[g] = f[D] >>> m;
      }
    };
    c.H.M = function (u, h, f) {
      f <<= 7 & h;
      const m = h >>> 3;
      u[m] |= f, u[m + 1] |= f >>> 8;
    };
    c.H.I = function (u, h, f) {
      f <<= 7 & h;
      const m = h >>> 3;
      u[m] |= f, u[m + 1] |= f >>> 8, u[m + 2] |= f >>> 16;
    };
    c.H.e = function (u, h, f) {
      return (u[h >>> 3] | u[1 + (h >>> 3)] << 8) >>> (7 & h) & (1 << f) - 1;
    };
    c.H.b = function (u, h, f) {
      return (u[h >>> 3] | u[1 + (h >>> 3)] << 8 | u[2 + (h >>> 3)] << 16) >>> (7 & h) & (1 << f) - 1;
    };
    c.H.Z = function (u, h) {
      return (u[h >>> 3] | u[1 + (h >>> 3)] << 8 | u[2 + (h >>> 3)] << 16) >>> (7 & h);
    };
    c.H.i = function (u, h) {
      return (u[h >>> 3] | u[1 + (h >>> 3)] << 8 | u[2 + (h >>> 3)] << 16 | u[3 + (h >>> 3)] << 24) >>> (7 & h);
    };
    c.H.m = (function () {
      const u = Uint16Array, h = Uint32Array;
      return {
        K: new Uint16Array(16),
        j: new Uint16Array(16),
        X: [
          16,
          17,
          18,
          0,
          8,
          7,
          9,
          6,
          10,
          5,
          11,
          4,
          12,
          3,
          13,
          2,
          14,
          1,
          15
        ],
        S: [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          999,
          999,
          999
        ],
        T: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          0,
          0,
          0,
          0
        ],
        q: new Uint16Array(32),
        p: [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577,
          65535,
          65535
        ],
        z: [
          0,
          0,
          0,
          0,
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          10,
          11,
          11,
          12,
          12,
          13,
          13,
          0,
          0
        ],
        c: new Uint32Array(32),
        J: new Uint16Array(512),
        _: [],
        h: new Uint16Array(32),
        $: [],
        w: new Uint16Array(32768),
        C: [],
        v: [],
        d: new Uint16Array(32768),
        D: [],
        u: new Uint16Array(512),
        Q: [],
        r: new Uint16Array(32768),
        s: new Uint32Array(286),
        Y: new Uint32Array(30),
        a: new Uint32Array(19),
        t: new Uint32Array(15000),
        k: new Uint16Array(65536),
        g: new Uint16Array(32768)
      };
    }());
    (function () {
      const u = c.H.m;
      for (var h = 0; h < 32768; h++) {
        let m = h;
        m = (2863311530 & m) >>> 1 | (1431655765 & m) << 1, m = (3435973836 & m) >>> 2 | (858993459 & m) << 2, m = (4042322160 & m) >>> 4 | (252645135 & m) << 4, m = (4278255360 & m) >>> 8 | (16711935 & m) << 8, u.r[h] = (m >>> 16 | m << 16) >>> 17;
      }
      function f(m, g, D) {
        for (; g-- != 0;)
          m.push(0, D);
      }
      for (h = 0; h < 32; h++)
        u.q[h] = u.S[h] << 3 | u.T[h], u.c[h] = u.p[h] << 4 | u.z[h];
      f(u._, 144, 8), f(u._, 112, 9), f(u._, 24, 7), f(u._, 8, 8), c.H.n(u._, 9), c.H.A(u._, 9, u.J), c.H.l(u._, 9), f(u.$, 32, 5), c.H.n(u.$, 5), c.H.A(u.$, 5, u.h), c.H.l(u.$, 5), f(u.Q, 19, 0), f(u.C, 286, 0), f(u.D, 30, 0), f(u.v, 320, 0);
    }());
    return c.H.N;
  }());
  function i(c) {
    return [
      1,
      null,
      3,
      1,
      2,
      null,
      4
    ][c.ctype] * c.depth;
  }
  function a(c, u, h, f, m) {
    let g = i(u);
    const D = Math.ceil(f * g / 8);
    let _, S;
    g = Math.ceil(g / 8);
    let N = c[h], L = 0;
    N > 1 && (c[h] = [
      0,
      0,
      1
    ][N - 2]);
    if (N == 3)
      for (L = g; L < D; L++)
        c[L + 1] = c[L + 1] + (c[L + 1 - g] >>> 1) & 255;
    for (let U = 0; U < m; U++) {
      _ = h + U * D;
      S = _ + U + 1;
      N = c[S - 1];
      L = 0;
      if (N == 0)
        for (; L < D; L++)
          c[_ + L] = c[S + L];
      else if (N == 1) {
        for (; L < g; L++)
          c[_ + L] = c[S + L];
        for (; L < D; L++)
          c[_ + L] = c[S + L] + c[_ + L - g];
      } else if (N == 2)
        for (; L < D; L++)
          c[_ + L] = c[S + L] + c[_ + L - D];
      else if (N == 3) {
        for (; L < g; L++)
          c[_ + L] = c[S + L] + (c[_ + L - D] >>> 1);
        for (; L < D; L++)
          c[_ + L] = c[S + L] + (c[_ + L - D] + c[_ + L - g] >>> 1);
      } else {
        for (; L < g; L++)
          c[_ + L] = c[S + L] + o(0, c[_ + L - D], 0);
        for (; L < D; L++)
          c[_ + L] = c[S + L] + o(c[_ + L - g], c[_ + L - D], c[_ + L - g - D]);
      }
    }
    return c;
  }
  function o(c, u, h) {
    const f = c + u - h, m = f - c, g = f - u, D = f - h;
    return m * m <= g * g && m * m <= D * D ? c : g * g <= D * D ? u : h;
  }
  function l(c, u, h) {
    h.width = n.readUint(c, u), u += 4, h.height = n.readUint(c, u), u += 4, h.depth = c[u], u++, h.ctype = c[u], u++, h.compress = c[u], u++, h.filter = c[u], u++, h.interlace = c[u], u++;
  }
  function d(c, u, h, f, m, g, D, _, S) {
    const N = Math.min(u, m), L = Math.min(h, g);
    let U = 0, C = 0;
    for (let T = 0; T < L; T++)
      for (let E = 0; E < N; E++) {
        D >= 0 && _ >= 0 ? (U = T * u + E << 2, C = (_ + T) * m + D + E << 2) : (U = (-_ + T) * u - D + E << 2, C = T * m + E << 2);
        if (S == 0)
          f[C] = c[U], f[C + 1] = c[U + 1], f[C + 2] = c[U + 2], f[C + 3] = c[U + 3];
        else if (S == 1) {
          var R = c[U + 3] * 0.00392156862745098, b = c[U] * R, y = c[U + 1] * R, I = c[U + 2] * R, O = f[C + 3] * 0.00392156862745098, F = f[C] * O, A = f[C + 1] * O, w = f[C + 2] * O;
          const v = 1 - R, H = R + O * v, P = H == 0 ? 0 : 1 / H;
          f[C + 3] = 255 * H, f[C + 0] = (b + F * v) * P, f[C + 1] = (y + A * v) * P, f[C + 2] = (I + w * v) * P;
        } else if (S == 2)
          R = c[U + 3], b = c[U], y = c[U + 1], I = c[U + 2], O = f[C + 3], F = f[C], A = f[C + 1], w = f[C + 2], R == O && b == F && y == A && I == w ? (f[C] = 0, f[C + 1] = 0, f[C + 2] = 0, f[C + 3] = 0) : (f[C] = b, f[C + 1] = y, f[C + 2] = I, f[C + 3] = R);
        else if (S == 3) {
          R = c[U + 3];
          b = c[U];
          y = c[U + 1];
          I = c[U + 2];
          O = f[C + 3];
          F = f[C];
          A = f[C + 1];
          w = f[C + 2];
          if (R == O && b == F && y == A && I == w)
            continue;
          if (R < 220 && O > 20)
            return false;
        }
      }
    return true;
  }
  return {
    decode: function (u) {
      const h = new Uint8Array(u);
      let f = 8;
      const m = n, g = n.readUshort, D = n.readUint, _ = {
          tabs: {},
          frames: []
        }, S = new Uint8Array(h.length);
      let N, L = 0, U = 0;
      const C = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
      ];
      for (var R = 0; R < 8; R++)
        if (h[R] != C[R])
          throw 'The input is not a PNG file!';
      for (; f < h.length;) {
        const T = n.readUint(h, f);
        f += 4;
        const E = n.readASCII(h, f, 4);
        f += 4;
        if (E == 'IHDR')
          l(h, f, _);
        else if (E == 'iCCP') {
          for (var b = f; h[b] != 0;)
            b++;
          n.readASCII(h, f, b - f), h[b + 1];
          const v = h.slice(b + 2, f + T);
          let H = null;
          try {
            H = s(v);
          } catch {
            H = r(v);
          }
          _.tabs[E] = H;
        } else if (E == 'CgBI')
          _.tabs[E] = h.slice(f, f + 4);
        else if (E == 'IDAT') {
          for (R = 0; R < T; R++)
            S[L + R] = h[f + R];
          L += T;
        } else if (E == 'acTL')
          _.tabs[E] = {
            num_frames: D(h, f),
            num_plays: D(h, f + 4)
          }, N = new Uint8Array(h.length);
        else if (E == 'fcTL') {
          U != 0 && ((w = _.frames[_.frames.length - 1]).data = t(_, N.slice(0, U), w.rect.width, w.rect.height), U = 0);
          const v = {
            x: D(h, f + 12),
            y: D(h, f + 16),
            width: D(h, f + 4),
            height: D(h, f + 8)
          };
          let H = g(h, f + 22);
          H = g(h, f + 20) / (H == 0 ? 100 : H);
          const P = {
            rect: v,
            delay: Math.round(1000 * H),
            dispose: h[f + 24],
            blend: h[f + 25]
          };
          _.frames.push(P);
        } else if (E == 'fdAT') {
          for (R = 0; R < T - 4; R++)
            N[U + R] = h[f + R + 4];
          U += T - 4;
        } else if (E == 'pHYs')
          _.tabs[E] = [
            n.readUint(h, f),
            n.readUint(h, f + 4),
            h[f + 8]
          ];
        else if (E == 'cHRM')
          for (_.tabs[E] = [], R = 0; R < 8; R++)
            _.tabs[E].push(n.readUint(h, f + 4 * R));
        else if (E == 'tEXt' || E == 'zTXt') {
          _.tabs[E] == null && (_.tabs[E] = {});
          var y = n.nextZero(h, f), I = n.readASCII(h, f, y - f), O = f + T - y - 1;
          if (E == 'tEXt')
            A = n.readASCII(h, y + 1, O);
          else {
            var F = s(h.slice(y + 2, y + 2 + O));
            A = n.readUTF8(F, 0, F.length);
          }
          _.tabs[E][I] = A;
        } else if (E == 'iTXt') {
          _.tabs[E] == null && (_.tabs[E] = {}), y = 0, b = f, y = n.nextZero(h, b), I = n.readASCII(h, b, y - b);
          const v = h[b = y + 1];
          var A;
          h[b + 1], b += 2, y = n.nextZero(h, b), n.readASCII(h, b, y - b), b = y + 1, y = n.nextZero(h, b), n.readUTF8(h, b, y - b), O = T - ((b = y + 1) - f), v == 0 ? A = n.readUTF8(h, b, O) : (F = s(h.slice(b, b + O)), A = n.readUTF8(F, 0, F.length)), _.tabs[E][I] = A;
        } else if (E == 'PLTE')
          _.tabs[E] = n.readBytes(h, f, T);
        else if (E == 'hIST') {
          const v = _.tabs.PLTE.length / 3;
          for (_.tabs[E] = [], R = 0; R < v; R++)
            _.tabs[E].push(g(h, f + 2 * R));
        } else if (E == 'tRNS')
          _.ctype == 3 ? _.tabs[E] = n.readBytes(h, f, T) : _.ctype == 0 ? _.tabs[E] = g(h, f) : _.ctype == 2 && (_.tabs[E] = [
            g(h, f),
            g(h, f + 2),
            g(h, f + 4)
          ]);
        else if (E == 'gAMA')
          _.tabs[E] = n.readUint(h, f) / 100000;
        else if (E == 'sRGB')
          _.tabs[E] = h[f];
        else if (E == 'bKGD')
          _.ctype == 0 || _.ctype == 4 ? _.tabs[E] = [g(h, f)] : _.ctype == 2 || _.ctype == 6 ? _.tabs[E] = [
            g(h, f),
            g(h, f + 2),
            g(h, f + 4)
          ] : _.ctype == 3 && (_.tabs[E] = h[f]);
        else if (E == 'IEND')
          break;
        f += T, n.readUint(h, f), f += 4;
      }
      var w;
      U != 0 && ((w = _.frames[_.frames.length - 1]).data = t(_, N.slice(0, U), w.rect.width, w.rect.height));
      _.data = t(_, S, _.width, _.height);
      delete _.compress;
      delete _.interlace;
      delete _.filter;
      return _;
    },
    toRGBA8: function (u) {
      const h = u.width, f = u.height;
      if (u.tabs.acTL == null)
        return [e(u.data, h, f, u).buffer];
      const m = [];
      u.frames[0].data == null && (u.frames[0].data = u.data);
      const g = h * f * 4, D = new Uint8Array(g), _ = new Uint8Array(g), S = new Uint8Array(g);
      for (let L = 0; L < u.frames.length; L++) {
        const U = u.frames[L], C = U.rect.x, R = U.rect.y, b = U.rect.width, y = U.rect.height, I = e(U.data, b, y, u);
        if (L != 0)
          for (var N = 0; N < g; N++)
            S[N] = D[N];
        U.blend == 0 ? d(I, b, y, D, h, f, C, R, 0) : U.blend == 1 && d(I, b, y, D, h, f, C, R, 1);
        m.push(D.buffer.slice(0));
        if (U.dispose != 0) {
          if (U.dispose == 1)
            d(_, b, y, D, h, f, C, R, 0);
          else if (U.dispose == 2)
            for (N = 0; N < g; N++)
              D[N] = S[N];
        }
      }
      return m;
    },
    _paeth: o,
    _copyTile: d,
    _bin: n
  };
}());
(function () {
  const t = at._paeth;
  var s = {
    table: (function () {
      const b = new Uint32Array(256);
      for (let y = 0; y < 256; y++) {
        let I = y;
        for (let O = 0; O < 8; O++)
          1 & I ? I = 3988292384 ^ I >>> 1 : I >>>= 1;
        b[y] = I;
      }
      return b;
    }()),
    update(b, y, I, O) {
      for (let F = 0; F < O; F++)
        b = s.table[255 & (b ^ y[I + F])] ^ b >>> 8;
      return b;
    },
    crc: (b, y, I) => 4294967295 ^ s.update(4294967295, b, y, I)
  };
  function r(b, y, I, O) {
    y[I] += b[0] * O >> 4, y[I + 1] += b[1] * O >> 4, y[I + 2] += b[2] * O >> 4, y[I + 3] += b[3] * O >> 4;
  }
  function i(b) {
    return Math.max(0, Math.min(255, b));
  }
  function a(b, y) {
    const I = b[0] - y[0], O = b[1] - y[1], F = b[2] - y[2], A = b[3] - y[3];
    return I * I + O * O + F * F + A * A;
  }
  function o(b, y, I, O, F, A, w) {
    w == null && (w = 1);
    const T = O.length, E = [];
    for (var v = 0; v < T; v++) {
      const $ = O[v];
      E.push([
        $ >>> 0 & 255,
        $ >>> 8 & 255,
        $ >>> 16 & 255,
        $ >>> 24 & 255
      ]);
    }
    for (v = 0; v < T; v++) {
      let $ = 4294967295;
      for (var H = 0, P = 0; P < T; P++) {
        var j = a(E[v], E[P]);
        P != v && j < $ && ($ = j, H = P);
      }
    }
    const G = new Uint32Array(F.buffer), V = new Int16Array(y * I * 4), K = [
        0,
        8,
        2,
        10,
        12,
        4,
        14,
        6,
        3,
        11,
        1,
        9,
        15,
        7,
        13,
        5
      ];
    for (v = 0; v < K.length; v++)
      K[v] = 255 * ((K[v] + 0.5) / 16 - 0.5);
    for (let $ = 0; $ < I; $++)
      for (let q = 0; q < y; q++) {
        var z;
        v = 4 * ($ * y + q), w != 2 ? z = [
          i(b[v] + V[v]),
          i(b[v + 1] + V[v + 1]),
          i(b[v + 2] + V[v + 2]),
          i(b[v + 3] + V[v + 3])
        ] : (j = K[4 * (3 & $) + (3 & q)], z = [
          i(b[v] + j),
          i(b[v + 1] + j),
          i(b[v + 2] + j),
          i(b[v + 3] + j)
        ]), H = 0;
        let ie = 16777215;
        for (P = 0; P < T; P++) {
          const se = a(z, E[P]);
          se < ie && (ie = se, H = P);
        }
        const Y = E[H], Q = [
            z[0] - Y[0],
            z[1] - Y[1],
            z[2] - Y[2],
            z[3] - Y[3]
          ];
        w == 1 && (q != y - 1 && r(Q, V, v + 4, 7), $ != I - 1 && (q != 0 && r(Q, V, v + 4 * y - 4, 3), r(Q, V, v + 4 * y, 5), q != y - 1 && r(Q, V, v + 4 * y + 4, 1))), A[v >> 2] = H, G[v >> 2] = O[H];
      }
  }
  function l(b, y, I, O, F) {
    F == null && (F = {});
    const w = e.writeUint, T = e.writeUshort, E = e.writeASCII;
    let v = 8;
    const H = b.frames.length > 1;
    let P, j = false, G = 33 + (H ? 20 : 0);
    if (F.sRGB != null && (G += 13), F.pHYs != null && (G += 21), F.iCCP != null && (P = pako.deflate(F.iCCP), G += 21 + P.length + 4), b.ctype == 3) {
      for (var V = b.plte.length, K = 0; K < V; K++)
        b.plte[K] >>> 24 != 255 && (j = true);
      G += 8 + 3 * V + 4 + (j ? 8 + 1 * V + 4 : 0);
    }
    for (var z = 0; z < b.frames.length; z++)
      H && (G += 38), G += (Y = b.frames[z]).cimg.length + 12, z != 0 && (G += 4);
    G += 12;
    const $ = new Uint8Array(G), q = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
      ];
    for (K = 0; K < 8; K++)
      $[K] = q[K];
    if (w($, v, 13), v += 4, E($, v, 'IHDR'), v += 4, w($, v, y), v += 4, w($, v, I), v += 4, $[v] = b.depth, v++, $[v] = b.ctype, v++, $[v] = 0, v++, $[v] = 0, v++, $[v] = 0, v++, w($, v, A($, v - 17, 17)), v += 4, F.sRGB != null && (w($, v, 1), v += 4, E($, v, 'sRGB'), v += 4, $[v] = F.sRGB, v++, w($, v, A($, v - 5, 5)), v += 4), F.iCCP != null) {
      const Q = 13 + P.length;
      w($, v, Q), v += 4, E($, v, 'iCCP'), v += 4, E($, v, 'ICC profile'), v += 11, v += 2, $.set(P, v), v += P.length, w($, v, A($, v - (Q + 4), Q + 4)), v += 4;
    }
    if (F.pHYs != null && (w($, v, 9), v += 4, E($, v, 'pHYs'), v += 4, w($, v, F.pHYs[0]), v += 4, w($, v, F.pHYs[1]), v += 4, $[v] = F.pHYs[2], v++, w($, v, A($, v - 13, 13)), v += 4), H && (w($, v, 8), v += 4, E($, v, 'acTL'), v += 4, w($, v, b.frames.length), v += 4, w($, v, F.loop != null ? F.loop : 0), v += 4, w($, v, A($, v - 12, 12)), v += 4), b.ctype == 3) {
      for (w($, v, 3 * (V = b.plte.length)), v += 4, E($, v, 'PLTE'), v += 4, K = 0; K < V; K++) {
        const Q = 3 * K, se = b.plte[K], ne = 255 & se, oe = se >>> 8 & 255, on = se >>> 16 & 255;
        $[v + Q + 0] = ne, $[v + Q + 1] = oe, $[v + Q + 2] = on;
      }
      v += 3 * V;
      w($, v, A($, v - 3 * V - 4, 3 * V + 4));
      v += 4;
      if (j) {
        for (w($, v, V), v += 4, E($, v, 'tRNS'), v += 4, K = 0; K < V; K++)
          $[v + K] = b.plte[K] >>> 24 & 255;
        v += V, w($, v, A($, v - V - 4, V + 4)), v += 4;
      }
    }
    let ie = 0;
    for (z = 0; z < b.frames.length; z++) {
      var Y = b.frames[z];
      H && (w($, v, 26), v += 4, E($, v, 'fcTL'), v += 4, w($, v, ie++), v += 4, w($, v, Y.rect.width), v += 4, w($, v, Y.rect.height), v += 4, w($, v, Y.rect.x), v += 4, w($, v, Y.rect.y), v += 4, T($, v, O[z]), v += 2, T($, v, 1000), v += 2, $[v] = Y.dispose, v++, $[v] = Y.blend, v++, w($, v, A($, v - 30, 30)), v += 4);
      const Q = Y.cimg;
      w($, v, (V = Q.length) + (z == 0 ? 0 : 4)), v += 4;
      const se = v;
      E($, v, z == 0 ? 'IDAT' : 'fdAT'), v += 4, z != 0 && (w($, v, ie++), v += 4), $.set(Q, v), v += V, w($, v, A($, v, v - v)), v += 4;
    }
    w($, v, 0);
    v += 4;
    E($, v, 'IEND');
    v += 4;
    w($, v, A($, v - 4, 4));
    v += 4;
    return $.buffer;
  }
  function d(b, y, I) {
    for (let O = 0; O < b.frames.length; O++) {
      const F = b.frames[O];
      F.rect.width;
      const A = F.rect.height, w = new Uint8Array(A * F.bpl + A);
      F.cimg = f(F.img, A, F.bpp, F.bpl, w, y, I);
    }
  }
  function c(b, y, I, O, F) {
    const A = F[0], w = F[1], T = F[2], E = F[3], v = F[4], H = F[5];
    let P = 6, j = 8, G = 255;
    for (var V = 0; V < b.length; V++) {
      const Le = new Uint8Array(b[V]);
      for (var K = Le.length, z = 0; z < K; z += 4)
        G &= Le[z + 3];
    }
    const $ = G != 255, q = function (fe, le, Oe, Be, be, qe) {
        const we = [];
        for (var de = 0; de < fe.length; de++) {
          const Ue = new Uint8Array(fe[de]), it = new Uint32Array(Ue.buffer);
          var Ye;
          let tt = 0, Ft = 0, Dt = le, un = Oe, Ti = Be ? 1 : 0;
          if (de != 0) {
            const nh = qe || Be || de == 1 || we[de - 2].dispose != 0 ? 1 : 2;
            let Ii = 0, Vo = 1000000000;
            for (let ls = 0; ls < nh; ls++) {
              var Vt = new Uint8Array(fe[de - 1 - ls]);
              const sh = new Uint32Array(fe[de - 1 - ls]);
              let Gt = le, Kt = Oe, On = -1, ds = -1;
              for (let ln = 0; ln < Oe; ln++)
                for (let dn = 0; dn < le; dn++)
                  it[Ne = ln * le + dn] != sh[Ne] && (dn < Gt && (Gt = dn), dn > On && (On = dn), ln < Kt && (Kt = ln), ln > ds && (ds = ln));
              On == -1 && (Gt = Kt = On = ds = 0), be && ((1 & Gt) == 1 && Gt--, (1 & Kt) == 1 && Kt--);
              const Go = (On - Gt + 1) * (ds - Kt + 1);
              Go < Vo && (Vo = Go, Ii = ls, tt = Gt, Ft = Kt, Dt = On - Gt + 1, un = ds - Kt + 1);
            }
            Vt = new Uint8Array(fe[de - 1 - Ii]), Ii == 1 && (we[de - 1].dispose = 2), Ye = new Uint8Array(Dt * un * 4), n(Vt, le, Oe, Ye, Dt, un, -tt, -Ft, 0), Ti = n(Ue, le, Oe, Ye, Dt, un, -tt, -Ft, 3) ? 1 : 0, Ti == 1 ? h(Ue, le, Oe, Ye, {
              x: tt,
              y: Ft,
              width: Dt,
              height: un
            }) : n(Ue, le, Oe, Ye, Dt, un, -tt, -Ft, 0);
          } else
            Ye = Ue.slice(0);
          we.push({
            rect: {
              x: tt,
              y: Ft,
              width: Dt,
              height: un
            },
            img: Ye,
            blend: Ti,
            dispose: 0
          });
        }
        if (Be)
          for (de = 0; de < we.length; de++) {
            if ((cn = we[de]).blend == 1)
              continue;
            const Ue = cn.rect, it = we[de - 1].rect, tt = Math.min(Ue.x, it.x), Ft = Math.min(Ue.y, it.y), Dt = {
                x: tt,
                y: Ft,
                width: Math.max(Ue.x + Ue.width, it.x + it.width) - tt,
                height: Math.max(Ue.y + Ue.height, it.y + it.height) - Ft
              };
            we[de - 1].dispose = 1, de - 1 != 0 && u(fe, le, Oe, we, de - 1, Dt, be), u(fe, le, Oe, we, de, Dt, be);
          }
        let Qs = 0;
        if (fe.length != 1)
          for (var Ne = 0; Ne < we.length; Ne++) {
            var cn;
            Qs += (cn = we[Ne]).rect.width * cn.rect.height;
          }
        return we;
      }(b, y, I, A, w, T), ie = {}, Y = [], Q = [];
    if (O != 0) {
      const Le = [];
      for (z = 0; z < q.length; z++)
        Le.push(q[z].img.buffer);
      const fe = function (be) {
          let qe = 0;
          for (var we = 0; we < be.length; we++)
            qe += be[we].byteLength;
          const de = new Uint8Array(qe);
          let Ye = 0;
          for (we = 0; we < be.length; we++) {
            const Vt = new Uint8Array(be[we]), Qs = Vt.length;
            for (let Ne = 0; Ne < Qs; Ne += 4) {
              let cn = Vt[Ne], Ue = Vt[Ne + 1], it = Vt[Ne + 2];
              const tt = Vt[Ne + 3];
              tt == 0 && (cn = Ue = it = 0), de[Ye + Ne] = cn, de[Ye + Ne + 1] = Ue, de[Ye + Ne + 2] = it, de[Ye + Ne + 3] = tt;
            }
            Ye += Qs;
          }
          return de.buffer;
        }(Le), le = g(fe, O);
      for (z = 0; z < le.plte.length; z++)
        Y.push(le.plte[z].est.rgba);
      let Oe = 0;
      for (z = 0; z < q.length; z++) {
        const Be = (ne = q[z]).img.length;
        var se = new Uint8Array(le.inds.buffer, Oe >> 2, Be >> 2);
        Q.push(se);
        const be = new Uint8Array(le.abuf, Oe, Be);
        H && o(ne.img, ne.rect.width, ne.rect.height, Y, be, se), ne.img.set(be), Oe += Be;
      }
    } else
      for (V = 0; V < q.length; V++) {
        var ne = q[V];
        const Le = new Uint32Array(ne.img.buffer);
        var oe = ne.rect.width;
        for (K = Le.length, se = new Uint8Array(K), Q.push(se), z = 0; z < K; z++) {
          const fe = Le[z];
          if (z != 0 && fe == Le[z - 1])
            se[z] = se[z - 1];
          else if (z > oe && fe == Le[z - oe])
            se[z] = se[z - oe];
          else {
            let le = ie[fe];
            if (le == null && (ie[fe] = le = Y.length, Y.push(fe), Y.length >= 300))
              break;
            se[z] = le;
          }
        }
      }
    const on = Y.length;
    for (on <= 256 && v == 0 && (j = on <= 2 ? 1 : on <= 4 ? 2 : on <= 16 ? 4 : 8, j = Math.max(j, E)), V = 0; V < q.length; V++) {
      (ne = q[V]).rect.x, ne.rect.y, oe = ne.rect.width;
      const Le = ne.rect.height;
      let fe = ne.img;
      new Uint32Array(fe.buffer);
      let le = 4 * oe, Oe = 4;
      if (on <= 256 && v == 0) {
        le = Math.ceil(j * oe / 8);
        var gt = new Uint8Array(le * Le);
        const Be = Q[V];
        for (let be = 0; be < Le; be++) {
          z = be * le;
          const qe = be * oe;
          if (j == 8)
            for (var ge = 0; ge < oe; ge++)
              gt[z + ge] = Be[qe + ge];
          else if (j == 4)
            for (ge = 0; ge < oe; ge++)
              gt[z + (ge >> 1)] |= Be[qe + ge] << 4 - 4 * (1 & ge);
          else if (j == 2)
            for (ge = 0; ge < oe; ge++)
              gt[z + (ge >> 2)] |= Be[qe + ge] << 6 - 2 * (3 & ge);
          else if (j == 1)
            for (ge = 0; ge < oe; ge++)
              gt[z + (ge >> 3)] |= Be[qe + ge] << 7 - 1 * (7 & ge);
        }
        fe = gt, P = 3, Oe = 1;
      } else if ($ == 0 && q.length == 1) {
        gt = new Uint8Array(oe * Le * 3);
        const Be = oe * Le;
        for (z = 0; z < Be; z++) {
          const be = 3 * z, qe = 4 * z;
          gt[be] = fe[qe], gt[be + 1] = fe[qe + 1], gt[be + 2] = fe[qe + 2];
        }
        fe = gt, P = 2, Oe = 3, le = 3 * oe;
      }
      ne.img = fe, ne.bpl = le, ne.bpp = Oe;
    }
    return {
      ctype: P,
      depth: j,
      plte: Y,
      frames: q
    };
  }
  function u(b, y, I, O, F, A, w) {
    const T = Uint8Array, E = Uint32Array, v = new Uint8Array(b[F - 1]), H = new Uint32Array(b[F - 1]), P = F + 1 < b.length ? new Uint8Array(b[F + 1]) : null, j = new Uint8Array(b[F]), G = new Uint32Array(j.buffer);
    let V = y, K = I, z = -1, $ = -1;
    for (let ie = 0; ie < A.height; ie++)
      for (let Y = 0; Y < A.width; Y++) {
        const Q = A.x + Y, se = A.y + ie, ne = se * y + Q, oe = G[ne];
        oe == 0 || O[F - 1].dispose == 0 && H[ne] == oe && (P == null || P[4 * ne + 3] != 0) || (Q < V && (V = Q), Q > z && (z = Q), se < K && (K = se), se > $ && ($ = se));
      }
    z == -1 && (V = K = z = $ = 0), w && ((1 & V) == 1 && V--, (1 & K) == 1 && K--), A = {
      x: V,
      y: K,
      width: z - V + 1,
      height: $ - K + 1
    };
    const q = O[F];
    q.rect = A, q.blend = 1, q.img = new Uint8Array(A.width * A.height * 4), O[F - 1].dispose == 0 ? (n(v, y, I, q.img, A.width, A.height, -A.x, -A.y, 0), h(j, y, I, q.img, A)) : n(j, y, I, q.img, A.width, A.height, -A.x, -A.y, 0);
  }
  function h(b, y, I, O, F) {
    n(b, y, I, O, F.width, F.height, -F.x, -F.y, 2);
  }
  function f(b, y, I, O, F, A, w) {
    const T = [];
    let E, v = [
        0,
        1,
        2,
        3,
        4
      ];
    A != -1 ? v = [A] : (y * O > 500000 || I == 1) && (v = [0]), w && (E = { level: 0 });
    const H = d_;
    for (var P = 0; P < v.length; P++) {
      for (let V = 0; V < y; V++)
        m(F, b, V, O, I, v[P]);
      T.push(d_.deflate(F, E));
    }
    let j, G = 1000000000;
    for (P = 0; P < T.length; P++)
      T[P].length < G && (j = P, G = T[P].length);
    return T[j];
  }
  function m(b, y, I, O, F, A) {
    const w = I * O;
    let T = w + I;
    b[T] = A;
    T++;
    if (A == 0)
      if (O < 500)
        for (var E = 0; E < O; E++)
          b[T + E] = y[w + E];
      else
        b.set(new Uint8Array(y.buffer, w, O), T);
    else if (A == 1) {
      for (E = 0; E < F; E++)
        b[T + E] = y[w + E];
      for (E = F; E < O; E++)
        b[T + E] = y[w + E] - y[w + E - F] + 256 & 255;
    } else if (I == 0) {
      for (E = 0; E < F; E++)
        b[T + E] = y[w + E];
      if (A == 2)
        for (E = F; E < O; E++)
          b[T + E] = y[w + E];
      if (A == 3)
        for (E = F; E < O; E++)
          b[T + E] = y[w + E] - (y[w + E - F] >> 1) + 256 & 255;
      if (A == 4)
        for (E = F; E < O; E++)
          b[T + E] = y[w + E] - t(y[w + E - F], 0, 0) + 256 & 255;
    } else {
      if (A == 2)
        for (E = 0; E < O; E++)
          b[T + E] = y[w + E] + 256 - y[w + E - O] & 255;
      if (A == 3) {
        for (E = 0; E < F; E++)
          b[T + E] = y[w + E] + 256 - (y[w + E - O] >> 1) & 255;
        for (E = F; E < O; E++)
          b[T + E] = y[w + E] + 256 - (y[w + E - O] + y[w + E - F] >> 1) & 255;
      }
      if (A == 4) {
        for (E = 0; E < F; E++)
          b[T + E] = y[w + E] + 256 - t(0, y[w + E - O], 0) & 255;
        for (E = F; E < O; E++)
          b[T + E] = y[w + E] + 256 - t(y[w + E - F], y[w + E - O], y[w + E - F - O]) & 255;
      }
    }
  }
  function g(b, y) {
    const I = new Uint8Array(b), O = I.slice(0), F = new Uint32Array(O.buffer), A = D(O, y), w = A[0], T = A[1], E = I.length, v = new Uint8Array(E >> 2);
    let H;
    if (I.length < 20000000)
      for (var P = 0; P < E; P += 4)
        H = _(w, j = I[P] * 0.00392156862745098, G = I[P + 1] * 0.00392156862745098, V = I[P + 2] * 0.00392156862745098, K = I[P + 3] * 0.00392156862745098), v[P >> 2] = H.ind, F[P >> 2] = H.est.rgba;
    else
      for (P = 0; P < E; P += 4) {
        var j = I[P] * 0.00392156862745098, G = I[P + 1] * 0.00392156862745098, V = I[P + 2] * 0.00392156862745098, K = I[P + 3] * 0.00392156862745098;
        for (H = w; H.left;)
          H = S(H.est, j, G, V, K) <= 0 ? H.left : H.right;
        v[P >> 2] = H.ind, F[P >> 2] = H.est.rgba;
      }
    return {
      abuf: O.buffer,
      inds: v,
      plte: T
    };
  }
  function D(b, y, I) {
    I == null && (I = 0.0001);
    const O = new Uint32Array(b.buffer), F = {
        i0: 0,
        i1: b.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
    F.bst = U(b, F.i0, F.i1), F.est = C(F.bst);
    const A = [F];
    for (; A.length < y;) {
      let T = 0, E = 0;
      for (var w = 0; w < A.length; w++)
        A[w].est.L > T && (T = A[w].est.L, E = w);
      if (T < I)
        break;
      const v = A[E], H = N(b, O, v.i0, v.i1, v.est.e, v.est.eMq255);
      if (v.i0 >= H || v.i1 <= H) {
        v.est.L = 0;
        continue;
      }
      const P = {
        i0: v.i0,
        i1: H,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      P.bst = U(b, P.i0, P.i1), P.est = C(P.bst);
      const j = {
        i0: H,
        i1: v.i1,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      for (j.bst = {
          R: [],
          m: [],
          N: v.bst.N - P.bst.N
        }, w = 0; w < 16; w++)
        j.bst.R[w] = v.bst.R[w] - P.bst.R[w];
      for (w = 0; w < 4; w++)
        j.bst.m[w] = v.bst.m[w] - P.bst.m[w];
      j.est = C(j.bst), v.left = P, v.right = j, A[E] = P, A.push(j);
    }
    for (A.sort((T, E) => E.bst.N - T.bst.N), w = 0; w < A.length; w++)
      A[w].ind = w;
    return [
      F,
      A
    ];
  }
  function _(b, y, I, O, F) {
    if (b.left == null) {
      b.tdst = function (P, j, G, V, K) {
        const z = j - P[0], $ = G - P[1], q = V - P[2], ie = K - P[3];
        return z * z + $ * $ + q * q + ie * ie;
      }(b.est.q, y, I, O, F);
      return b;
    }
    const A = S(b.est, y, I, O, F);
    let w = b.left, T = b.right;
    A > 0 && (w = b.right, T = b.left);
    const E = _(w, y, I, O, F);
    if (E.tdst <= A * A)
      return E;
    const v = _(T, y, I, O, F);
    return v.tdst < E.tdst ? v : E;
  }
  function S(b, y, I, O, F) {
    return A[0] * y + A[1] * I + A[2] * O + A[3] * F - b.eMq;
  }
  function N(b, y, I, O, F, A) {
    for (O -= 4; I < O;) {
      for (; L(b, I, F) <= A;)
        I += 4;
      for (; L(b, O, F) > A;)
        O -= 4;
      if (I >= O)
        break;
      const w = y[I >> 2];
      y[I >> 2] = y[O >> 2], y[O >> 2] = w, I += 4, O -= 4;
    }
    for (; L(b, I, F) > A;)
      I -= 4;
    return I + 4;
  }
  function L(b, y, I) {
    return b[y] * I[0] + b[y + 1] * I[1] + b[y + 2] * I[2] + b[y + 3] * I[3];
  }
  function U(b, y, I) {
    const O = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ], F = [
        0,
        0,
        0,
        0
      ], A = I - y >> 2;
    for (let w = y; w < I; w += 4) {
      const T = b[w] * 0.00392156862745098, E = b[w + 1] * 0.00392156862745098, v = b[w + 2] * 0.00392156862745098, H = b[w + 3] * 0.00392156862745098;
      F[0] += T, F[1] += E, F[2] += v, F[3] += H, O[0] += T * T, O[1] += T * E, O[2] += T * v, O[3] += T * H, O[5] += E * E, O[6] += E * v, O[7] += E * H, O[10] += v * v, O[11] += v * H, O[15] += H * H;
    }
    O[4] = O[1];
    O[8] = O[2];
    O[9] = O[6];
    O[12] = O[3];
    O[13] = O[7];
    O[14] = O[11];
    return {
      R: O,
      m: F,
      N: A
    };
  }
  function C(b) {
    const F = I[0], A = I[1], w = I[2], T = I[3], E = O == 0 ? 0 : 1 / O, v = [
        y[0] - F * F * E,
        y[1] - F * A * E,
        y[2] - F * w * E,
        y[3] - F * T * E,
        y[4] - A * F * E,
        y[5] - A * A * E,
        y[6] - A * w * E,
        y[7] - A * T * E,
        y[8] - w * F * E,
        y[9] - w * A * E,
        y[10] - w * w * E,
        y[11] - w * T * E,
        y[12] - T * F * E,
        y[13] - T * A * E,
        y[14] - T * w * E,
        y[15] - T * T * E
      ], H = v, P = R;
    let j = [
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
      ], G = 0, V = 0;
    if (O != 0)
      for (let z = 0; z < 16 && (j = R.multVec(v, j), V = Math.sqrt(R.dot(j, j)), j = R.sml(1 / V, j), !(z != 0 && Math.abs(V - G) < 1e-9)); z++)
        G = V;
    const K = [
      F * E,
      A * E,
      w * E,
      T * E
    ];
    return {
      Cov: v,
      q: K,
      e: j,
      L: G,
      eMq255: R.dot(R.sml(255, K), j),
      eMq: R.dot(j, K),
      rgba: (Math.round(255 * K[3]) << 24 | Math.round(255 * K[2]) << 16 | Math.round(255 * K[1]) << 8 | Math.round(255 * K[0]) << 0) >>> 0
    };
  }
  var R = {
    multVec: (b, y) => [
      b[0] * y[0] + b[1] * y[1] + b[2] * y[2] + b[3] * y[3],
      b[4] * y[0] + b[5] * y[1] + b[6] * y[2] + b[7] * y[3],
      b[8] * y[0] + b[9] * y[1] + b[10] * y[2] + b[11] * y[3],
      b[12] * y[0] + b[13] * y[1] + b[14] * y[2] + b[15] * y[3]
    ],
    dot: (b, y) => b[0] * y[0] + b[1] * y[1] + b[2] * y[2] + b[3] * y[3],
    sml: (b, y) => [
      b * y[0],
      b * y[1],
      b * y[2],
      b * y[3]
    ]
  };
  at.encode = function (y, I, O, F, A, w, T) {
    F == null && (F = 0), T == null && (T = false);
    const E = c(y, I, O, F, [
      false,
      false,
      false,
      0,
      T,
      false
    ]);
    d(E, -1);
    return l(E, I, O, A, w);
  }, at.encodeLL = function (y, I, O, F, A, w, T, E) {
    const v = {
        ctype: 0 + (F == 1 ? 0 : 2) + (A == 0 ? 0 : 4),
        depth: w,
        frames: []
      }, H = (F + A) * w, P = H * I;
    for (let j = 0; j < y.length; j++)
      v.frames.push({
        rect: {
          x: 0,
          y: 0,
          width: I,
          height: O
        },
        img: new Uint8Array(y[j]),
        blend: 0,
        dispose: 1,
        bpp: Math.ceil(H / 8),
        bpl: Math.ceil(P / 8)
      });
    d(v, 0, true);
    return l(v, I, O, T, E);
  }, at.encode.compress = c, at.encode.dither = o, at.quantize = g, at.quantize.getKDtree = D, at.quantize.getNearest = _;
}());
const cd = {
  toArrayBuffer(n, e) {
    const t = n.width, s = n.height, r = t << 2, i = n.getContext('2d').getImageData(0, 0, t, s), a = new Uint32Array(i.data.buffer), o = (32 * t + 31) / 32 << 2, l = o * s, d = 122 + l, c = new ArrayBuffer(d), u = new DataView(c), h = 1048576;
    let f, m, g, D, _ = h, S = 0, N = 0, L = 0;
    function U(b) {
      u.setUint16(N, b, true), N += 2;
    }
    function C(b) {
      u.setUint32(N, b, true), N += 4;
    }
    function R(b) {
      N += b;
    }
    U(19778), C(d), R(4), C(122), C(108), C(t), C(-s >>> 0), U(1), U(32), C(3), C(l), C(2835), C(2835), R(8), C(16711680), C(65280), C(255), C(4278190080), C(1466527264), function b() {
      for (; S < s && _ > 0;) {
        for (D = 122 + S * o, f = 0; f < r;)
          _--, m = a[L++], g = m >>> 24, u.setUint32(D + f, m << 8 | g), f += 4;
        S++;
      }
      L < a.length ? (_ = h, setTimeout(b, 9)) : e(c);
    }();
  },
  toBlob(n, e) {
    this.toArrayBuffer(n, t => {
      e(new Blob([t], { type: 'image/bmp' }));
    });
  },
  _dly: 9
};
var Ge = {
    CHROME: 'CHROME',
    FIREFOX: 'FIREFOX',
    DESKTOP_SAFARI: 'DESKTOP_SAFARI',
    IE: 'IE',
    IOS: 'IOS',
    ETC: 'ETC'
  }, h_ = {
    CHROME: 16384,
    FIREFOX: 11180,
    DESKTOP_SAFARI: 16384,
    IE: 8192,
    IOS: 4096,
    ETC: 8192
  };
const Co = typeof window < 'u', ud = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope, $r = Co && window.cordova && window.cordova.require && window.cordova.require('cordova/modulemapper'), f_ = (Co || ud) && ($r && $r.getOriginalSymbol(window, 'File') || typeof File < 'u' && File), ld = (Co || ud) && ($r && $r.getOriginalSymbol(window, 'FileReader') || typeof FileReader < 'u' && FileReader);
function To(n, e, t = Date.now()) {
  return new Promise(s => {
    const r = n.split(','), i = r[0].match(/:(.*?);/)[1], a = globalThis.atob(r[1]);
    let o = a.length;
    const l = new Uint8Array(o);
    for (; o--;)
      l[o] = a.charCodeAt(o);
    const d = new Blob([l], { type: i });
    d.name = e, d.lastModified = t, s(d);
  });
}
function dd(n) {
  return new Promise((e, t) => {
    const s = new ld();
    s.onload = () => e(s.result), s.onerror = r => t(r), s.readAsDataURL(n);
  });
}
function hd(n) {
  return new Promise((e, t) => {
    const s = new Image();
    s.onload = () => e(s), s.onerror = r => t(r), s.src = n;
  });
}
function Dn() {
  if (Dn.cachedResult !== void 0)
    return Dn.cachedResult;
  let n = 'ETC';
  /Chrom(e|ium)/i.test(e) ? n = 'CHROME' : /iP(ad|od|hone)/i.test(e) && /WebKit/i.test(e) ? n = 'IOS' : /Safari/i.test(e) ? n = 'DESKTOP_SAFARI' : /Firefox/i.test(e) ? n = 'FIREFOX' : (/MSIE/i.test(e) || document.documentMode) && (n = 'IE');
  Dn.cachedResult = n;
  return Dn.cachedResult;
}
function fd(n, e) {
  const t = Dn(), s = h_[t];
  let r = n, i = e, a = r * i;
  const o = r > i ? i / r : r / i;
  for (; a > s * s;) {
    const l = (s + r) / 2, d = (s + i) / 2;
    l < d ? (i = d, r = d * o) : (i = l * o, r = l), a = r * i;
  }
  return {
    width: r,
    height: i
  };
}
function wi(n, e) {
  let t, s;
  try {
    t = new OffscreenCanvas(n, e);
    s = t.getContext('2d');
    if (s === null)
      throw new Error('getContext of OffscreenCanvas returns null');
  } catch {
    t = document.createElement('canvas'), s = t.getContext('2d');
  }
  t.width = n;
  t.height = e;
  return [
    t,
    s
  ];
}
function md(n, e) {
  const {
      width: t,
      height: s
    } = fd(n.width, n.height), [r, i] = wi(t, s);
  e && /jpe?g/.test(e) && (i.fillStyle = 'white', i.fillRect(0, 0, r.width, r.height));
  i.drawImage(n, 0, 0, r.width, r.height);
  return r;
}
function br() {
  br.cachedResult !== void 0 || (br.cachedResult = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform) || navigator.userAgent.includes('Mac') && typeof document < 'u' && 'ontouchend' in document);
  return br.cachedResult;
}
function zr(n, e = {}) {
  return new Promise(function (t, s) {
    let r, i;
    var a = function () {
        try {
          i = md(r, e.fileType || n.type);
          return t([
            r,
            i
          ]);
        } catch (l) {
          return s(l);
        }
      }, o = function (l) {
        try {
          var d = function (c) {
            try {
              throw c;
            } catch (u) {
              return s(u);
            }
          };
          try {
            let c;
            return dd(n).then(function (u) {
              try {
                c = u;
                return hd(c).then(function (h) {
                  try {
                    r = h;
                    return (function () {
                      try {
                        return a();
                      } catch (f) {
                        return s(f);
                      }
                    }());
                  } catch (f) {
                    return d(f);
                  }
                }, d);
              } catch (h) {
                return d(h);
              }
            }, d);
          } catch (c) {
            d(c);
          }
        } catch (c) {
          return s(c);
        }
      };
    try {
      if (br() || [
          'DESKTOP_SAFARI',
          Ge.MOBILE_SAFARI
        ].includes(Dn()))
        throw new Error('Skip createImageBitmap on IOS and Safari');
      return createImageBitmap(n).then(function (l) {
        try {
          r = l;
          return a();
        } catch {
          return o();
        }
      }, o);
    } catch {
      o();
    }
  });
}
function Vr(n, e, t, s, r = 1) {
  return new Promise(function (i, a) {
    let o;
    if (e === 'image/png') {
      let d, c, u;
      d = n.getContext('2d');
      ({data: c} = d.getImageData(0, 0, n.width, n.height));
      u = at.encode([c.buffer], n.width, n.height, 4096 * r);
      o = new Blob([u], { type: e });
      o.name = t;
      o.lastModified = s;
      return l.call(this);
    }
    let d = function () {
      return l.call(this);
    };
    if (e === 'image/bmp')
      return new Promise(c => cd.toBlob(n, c)).then(function (c) {
        try {
          o = c;
          o.name = t;
          o.lastModified = s;
          return d.call(this);
        } catch (u) {
          return a(u);
        }
      }.bind(this), a);
    {
      let c = function () {
        return d.call(this);
      };
      if (typeof OffscreenCanvas == 'function' && n instanceof OffscreenCanvas)
        return n.convertToBlob({
          type: e,
          quality: r
        }).then(function (u) {
          try {
            o = u;
            o.name = t;
            o.lastModified = s;
            return c.call(this);
          } catch (h) {
            return a(h);
          }
        }.bind(this), a);
      {
        let u;
        u = n.toDataURL(e, r);
        return To(u, t, s).then(function (h) {
          try {
            o = h;
            return c.call(this);
          } catch (f) {
            return a(f);
          }
        }.bind(this), a);
      }
    }
    function l() {
      return NaN;
    }
  });
}
function vt(n) {
  n.width = 0, n.height = 0;
}
function Hn() {
  return new Promise(function (n, e) {
    let t, s, r, i;
    return Hn.cachedResult !== void 0 ? n(Hn.cachedResult) : To('data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==', 'test.jpg', Date.now()).then(function (a) {
      try {
        t = a;
        return zr(t).then(function (o) {
          try {
            s = o[1];
            return Vr(s, t.type, t.name, t.lastModified).then(function (l) {
              try {
                r = l;
                vt(s);
                return zr(r).then(function (d) {
                  try {
                    i = d[0];
                    Hn.cachedResult = i.width === 1 && i.height === 2;
                    return n(Hn.cachedResult);
                  } catch (c) {
                    return e(c);
                  }
                }, e);
              } catch (d) {
                return e(d);
              }
            }, e);
          } catch (l) {
            return e(l);
          }
        }, e);
      } catch (o) {
        return e(o);
      }
    }, e);
  });
}
function pd(n) {
  return new Promise((e, t) => {
    const s = new ld();
    s.onload = r => {
      const i = new DataView(r.target.result);
      if (i.getUint16(0, false) != 65496)
        return e(-2);
      const a = i.byteLength;
      let o = 2;
      for (; o < a;) {
        if (i.getUint16(o + 2, false) <= 8)
          return e(-1);
        const l = i.getUint16(o, false);
        o += 2;
        if (l == 65505) {
          if (i.getUint32(o += 2, false) != 1165519206)
            return e(-1);
          const d = i.getUint16(o += 6, false) == 18761;
          o += i.getUint32(o + 4, d);
          const c = i.getUint16(o, d);
          o += 2;
          for (let u = 0; u < c; u++)
            if (i.getUint16(o + 12 * u, d) == 274)
              return e(i.getUint16(o + 12 * u + 8, d));
        } else {
          if ((65280 & l) != 65280)
            break;
          o += i.getUint16(o, false);
        }
      }
      return e(-1);
    }, s.onerror = r => t(r), s.readAsArrayBuffer(n);
  });
}
function gd(n, e) {
  let i, a = n;
  isFinite(r) && (t > r || s > r) && ([a, i] = wi(t, s), t > s ? (a.width = r, a.height = s / t * r) : (a.width = t / s * r, a.height = r), i.drawImage(n, 0, 0, a.width, a.height), vt(n));
  return a;
}
function Dd(n, e) {
  const [r, i] = wi(t, s);
  switch (e > 4 && e < 9 ? (r.width = s, r.height = t) : (r.width = t, r.height = s), e) {
  case 2:
    i.transform(-1, 0, 0, 1, t, 0);
    break;
  case 3:
    i.transform(-1, 0, 0, -1, t, s);
    break;
  case 4:
    i.transform(1, 0, 0, -1, 0, s);
    break;
  case 5:
    i.transform(0, 1, 1, 0, 0, 0);
    break;
  case 6:
    i.transform(0, 1, -1, 0, s, 0);
    break;
  case 7:
    i.transform(0, -1, -1, 0, s, t);
    break;
  case 8:
    i.transform(0, -1, 1, 0, 0, t);
  }
  i.drawImage(n, 0, 0, t, s);
  vt(n);
  return r;
}
function cu(n, e, t = 0) {
  return new Promise(function (s, r) {
    let i, a, o, l, d, c, u, h, f, m, g, D, _, S, N, L, U, C, R, b;
    function y(O = 5) {
      if (e.signal && e.signal.aborted)
        throw e.signal.reason;
      i += O, e.onProgress(Math.min(i, 100));
    }
    function I(O) {
      if (e.signal && e.signal.aborted)
        throw e.signal.reason;
      i = Math.min(Math.max(O, i), 100), e.onProgress(i);
    }
    i = t;
    a = e.maxIteration || 10;
    o = 1024 * e.maxSizeMB * 1024;
    y();
    return zr(n, e).then(function (O) {
      try {
        [, l] = O;
        y();
        d = gd(l, e);
        y();
        return new Promise(function (F, A) {
          var w;
          if (!(w = e.exifOrientation))
            return pd(n).then(function (E) {
              try {
                w = E;
                return T.call(this);
              } catch (v) {
                return A(v);
              }
            }.bind(this), A);
          function T() {
            return F(w);
          }
          return T.call(this);
        }).then(function (F) {
          try {
            c = F;
            y();
            return Hn().then(function (A) {
              try {
                u = A ? d : Dd(d, c);
                y();
                h = e.initialQuality || 1;
                f = e.fileType || n.type;
                return Vr(u, f, n.name, n.lastModified, h).then(function (w) {
                  try {
                    let E = function () {
                        if (a-- && (N > o || N > _)) {
                          let H, P;
                          H = b ? 0.95 * R.width : R.width;
                          P = b ? 0.95 * R.height : R.height;
                          [U, C] = wi(H, P);
                          C.drawImage(R, 0, 0, H, P);
                          h *= f === 'image/png' ? 0.85 : 0.95;
                          return Vr(U, f, n.name, n.lastModified, h).then(function (j) {
                            try {
                              L = j;
                              vt(R);
                              R = U;
                              N = L.size;
                              I(Math.min(99, Math.floor((S - N) / (S - o) * 100)));
                              return E;
                            } catch (G) {
                              return r(G);
                            }
                          }, r);
                        }
                        return [1];
                      }, v = function () {
                        vt(R);
                        vt(U);
                        vt(d);
                        vt(u);
                        vt(l);
                        I(100);
                        return s(L);
                      };
                    if (m = w, y(), g = m.size > o, D = m.size > n.size, !g && !D) {
                      I(100);
                      return s(m);
                    }
                    var T;
                    _ = n.size;
                    S = m.size;
                    N = S;
                    R = u;
                    b = !e.alwaysKeepResolution && g;
                    return (T = function (H) {
                      for (; H;) {
                        if (H.then)
                          return void H.then(T, r);
                        try {
                          if (H.pop) {
                            if (H.length)
                              return H.pop() ? v.call(this) : H;
                            H = E;
                          } else
                            H = H.call(this);
                        } catch (P) {
                          return r(P);
                        }
                      }
                    }.bind(this))(E);
                  } catch (E) {
                    return r(E);
                  }
                }.bind(this), r);
              } catch (w) {
                return r(w);
              }
            }.bind(this), r);
          } catch (A) {
            return r(A);
          }
        }.bind(this), r);
      } catch (F) {
        return r(F);
      }
    }.bind(this), r);
  });
}
const m_ = `
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;
let sa;
function p_(n, e) {
  return new Promise((t, s) => {
    sa || (sa = function (a) {
      const o = [];
      o.push(a);
      return URL.createObjectURL(new Blob(o));
    }(m_));
    const r = new Worker(sa);
    r.addEventListener('message', function (a) {
      if (e.signal && e.signal.aborted)
        r.terminate();
      else if (a.data.progress === void 0) {
        if (a.data.error) {
          s(new Error(a.data.error));
          return void r.terminate();
        }
        t(a.data.file), r.terminate();
      } else
        e.onProgress(a.data.progress);
    }), r.addEventListener('error', s), e.signal && e.signal.addEventListener('abort', () => {
      s(e.signal.reason), r.terminate();
    }), r.postMessage({
      file: n,
      imageCompressionLibUrl: e.libURL,
      options: {
        ...e,
        onProgress: void 0,
        signal: void 0
      }
    });
  });
}
function Pe(n, e) {
  return new Promise(function (t, s) {
    let r, i, a, o, l, d;
    r = { ...e };
    a = 0;
    ({onProgress: o} = r);
    r.maxSizeMB = r.maxSizeMB || Number.POSITIVE_INFINITY;
    l = typeof r.useWebWorker != 'boolean' || r.useWebWorker;
    delete r.useWebWorker;
    r.onProgress = f => {
      a = f, typeof o == 'function' && o(a);
    };
    if (!(n instanceof Blob || n instanceof f_))
      return s(new Error('The file given is not an instance of Blob or File'));
    if (!/^image/.test(n.type))
      return s(new Error('The file given is not an image'));
    if (d = typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope, !l || typeof Worker != 'function' || d)
      return cu(n, r).then(function (f) {
        try {
          i = f;
          return h.call(this);
        } catch (m) {
          return s(m);
        }
      }.bind(this), s);
    var c = function () {
        try {
          return h.call(this);
        } catch (f) {
          return s(f);
        }
      }.bind(this), u = function (f) {
        try {
          return cu(n, r).then(function (m) {
            try {
              i = m;
              return c();
            } catch (g) {
              return s(g);
            }
          }, s);
        } catch (m) {
          return s(m);
        }
      };
    try {
      r.libURL = r.libURL || 'https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js';
      return p_(n, r).then(function (f) {
        try {
          i = f;
          return c();
        } catch {
          return u();
        }
      }, u);
    } catch {
      u();
    }
    function h() {
      try {
        i.name = n.name, i.lastModified = n.lastModified;
      } catch {
      }
      try {
        r.preserveExif && n.type === 'image/jpeg' && (!r.fileType || r.fileType && r.fileType === n.type) && (i = od(n, i));
      } catch {
      }
      return t(i);
    }
  });
}
Pe.getDataUrlFromFile = dd, Pe.getFilefromDataUrl = To, Pe.loadImage = hd, Pe.drawImageInCanvas = md, Pe.drawFileInCanvas = zr, Pe.canvasToFile = Vr, Pe.getExifOrientation = pd, Pe.handleMaxWidthOrHeight = gd, Pe.followExifOrientation = Dd, Pe.cleanupCanvasMemory = vt, Pe.isAutoOrientationInBrowser = Hn, Pe.approximateBelowMaximumCanvasSizeOfBrowser = fd, Pe.copyExifWithoutOrientation = od, Pe.getBrowserName = Dn, Pe.version = '2.0.2';
const g_ = '' + new URL('../assets/browser-image-compression.IJag5AvL.js', import.meta.url).href;
class D_ {
  capacity;
  window;
  resources;
  queue = [];
  constructor(e, t) {
    this.capacity = e, this.window = t, this.resources = this.capacity;
  }
  async lock() {
    return this.resources > 0 ? (this.resources--, Promise.resolve(() => this.release())) : new Promise(e => {
      this.queue.push(() => e(() => this.release()));
    });
  }
  release() {
    window.setTimeout(() => {
      const e = this.queue.shift();
      if (e)
        return e();
      this.resources++;
    }, this.window);
  }
}
const __ = 5, v_ = 3, b_ = 500, w_ = 500, E_ = 10000, y_ = 10000;
class A_ {
  semaphore = new D_(__, b_);
  unfinished = new Set();
  upload = async e => {
    let t, s = 0;
    for (; !t;) {
      const r = await this.semaphore.lock();
      try {
        t = await this.request(e, s);
      } catch (i) {
        switch (s++, true) {
        case s >= v_:
          throw i;
        case i instanceof jn:
          continue;
        default:
          throw i;
        }
      } finally {
        r();
      }
    }
    return t;
  };
  request = async (e, t = 0) => {
    if (t > 0) {
      const u = Math.min(2 ** t * w_, E_), h = Math.floor(u / 2 + Math.random() * (u / 2));
      await Zn(h);
    }
    if (await Do(), e.signal.aborted)
      throw new $n();
    const s = new XMLHttpRequest(), r = () => {
        s.abort();
      };
    e.signal.addEventListener('abort', r);
    let i = 0, a = false;
    const o = () => {
        clearTimeout(i), i = window.setTimeout(() => {
          a = true, s.abort();
        }, y_);
      }, l = new Promise((u, h) => {
        typeof s.overrideMimeType == 'function' && s.overrideMimeType('application/json'), s.onerror = f => {
          console.error(f), h(new jn());
        }, s.ontimeout = () => {
          h(new jn());
        }, s.onabort = () => {
          h(a ? new jn() : new $n());
        }, s.upload.onprogress = f => {
          this.unfinished.add(e.url.href), o(), e.onProgress?.(c + f.loaded, e.file.size);
        }, s.onload = () => {
          if (this.unfinished.delete(e.url.href), s.readyState === XMLHttpRequest.DONE && s.status !== 200 && s.status !== 201)
            return h(new Cs(s.status.toString(), s.getResponseHeader('X-Reason')));
          let f = null;
          try {
            d ? f = s.responseText ? JSON.parse(s.responseText) : null : f = {};
          } catch {
          }
          if (!f)
            return h(new Cs('unknown response'));
          if ('error_code' in f)
            return h(new Cs(f.error_code, f.error_data));
          const m = {};
          f.photos && (m.photos = Object.entries(f.photos).map(([g, D]) => ({
            id: g,
            token: D.token
          })));
          return u(m);
        };
      }).finally(() => {
        clearTimeout(i), e.signal.removeEventListener('abort', r);
      }), d = e.file.type.startsWith('image/') && !e.asFile;
    let c = 0;
    if (s.open('POST', e.url, true), o(), d) {
      let u = e.file;
      const h = e.file.type.startsWith('image/gif');
      if (!Ym() && e.compression && !h) {
        const m = g_;
        try {
          u = await Pe(e.file, {
            maxSizeMB: Math.min(e.compression.imageMaxSize, u.size) / 1000000,
            initialQuality: e.compression.imageQuality,
            maxWidthOrHeight: Math.min(e.compression.imageMaxWidth, e.compression.imageMaxHeight),
            useWebWorker: true,
            libURL: g_,
            preserveExif: false,
            alwaysKeepResolution: true,
            signal: e.signal,
            onProgress: g => {
              o(), e.onProgress?.(g, 100);
            }
          });
        } catch (g) {
          if (e.signal.aborted)
            throw clearTimeout(i), new $n();
          console.error(g);
        }
      }
      const f = new FormData();
      f.append('file', u, u.name);
      s.send(f);
      return l;
    }
    if (this.unfinished.has(e.url.href))
      try {
        const u = await fetch(e.url, { signal: e.signal });
        o();
        if (u.status === 200) {
          let h = u.headers.get('X-Last-Known-Byte');
          h || (h = (u.headers.get('Range') || '').match(/-(\d+)\//)?.[1] || null), c = h ? Number(h) + 1 : 0;
        }
      } catch {
        if (e.signal.aborted)
          throw clearTimeout(i), new $n();
      }
    s.setRequestHeader('Content-Type', e.file.type);
    s.setRequestHeader('Content-Disposition', `attachment; filename=${ encodeURIComponent(e.file.name) }`);
    s.setRequestHeader('Content-Range', `${ c }-${ e.file.size - 1 }/${ e.file.size }`);
    s.send(c > 0 ? e.file.slice(c) : e.file);
    return l;
  };
}
class Cs extends Error {
  code;
  constructor(e, t) {
    super(t || 'Unknown reason'), this.code = e, Object.setPrototypeOf(this, Cs.prototype);
  }
}
class jn extends Error {
  constructor() {
    super(), Object.setPrototypeOf(this, jn.prototype);
  }
}
class $n extends Error {
  constructor() {
    super(), Object.setPrototypeOf(this, $n.prototype);
  }
}
let ra = null;
class ee {
  static store = null;
  static params = null;
  static context = null;
  static uploader = new A_();
  static handleError(e) {
    try {
      return ee.context ? (ee.context.onError(e), new pi()) : e;
    } catch {
      return e;
    }
  }
  static get socket() {
    ra || (Z(this.params), ra = new Fp(this.params.wsUrl, this.params.appVersion));
    return ra;
  }
  static storeTask(e) {
    return (t, s) => {
      Z(this.store);
      let r = s?.signal;
      r || (r = new AbortController().signal);
      return e(t, {
        signal: r,
        store: this.store
      }).catch(i => {
        switch (true) {
        case i instanceof ot:
        case i instanceof Qt:
          throw ee.handleError(i);
        default:
          throw i;
        }
      });
    };
  }
  static logTask(e) {
    return t => {
      try {
        const s = this.context;
        Z(s);
        return e(t, { analyticsAndMetrics: s.analyticsAndMetrics });
      } catch (s) {
        switch (true) {
        case s instanceof ot:
        case s instanceof Qt:
          throw ee.handleError(s);
        default:
          throw s;
        }
      }
    };
  }
  static readerTask(e) {
    return (t, s = {}) => {
      const r = new AbortController(), i = [r.signal];
      s.signal && i.push(s.signal);
      try {
        i.push(zh());
      } catch {
        try {
          eo(() => r.abort());
        } catch {
        }
      }
      const a = AbortSignal.any(i), o = (l, d, c) => {
          const u = [a];
          c?.signal && u.push(a);
          return this.socket.cmd(l, d, {
            ...c,
            signal: c?.signal === null ? void 0 : AbortSignal.any(u)
          });
        };
      return this.isolate(() => e(t, {
        send: o,
        signal: a,
        locale: this.socket.locale
      }).catch(l => {
        switch (true) {
        case l instanceof ot:
        case l instanceof Qt:
          throw ee.handleError(l);
        default:
          throw l;
        }
      }));
    };
  }
  static writerTask(e, t) {
    return async s => {
      const r = C_(), i = (d, c) => r(() => this.socket.cmd(d, c)), a = this.isolate(() => e(s, {
          send: i,
          locale: this.socket.locale,
          upload: d => this.uploader.upload({
            ...d,
            compression: {
              imageQuality: 0.8,
              imageMaxWidth: 1920,
              imageMaxHeight: 1920,
              imageMaxSize: 40000000
            }
          }),
          store: this.store
        }, t));
      let o = 0, l = {
          value: async () => {
          },
          done: false
        };
      for (; !l.done;) {
        o++;
        if (o > 50) {
          const d = new Error('endless task loop');
          throw Mt?.error(d), d;
        }
        try {
          l = await a.next(await l.value());
        } catch (d) {
          l = await a.throw(d).catch(c => {
            switch (true) {
            case c instanceof ot:
            case c instanceof Qt:
              throw ee.handleError(c);
            default:
              throw c;
            }
          });
        }
      }
      return l.value;
    };
  }
  static notifTask(e) {
    return async t => {
      const s = this.context;
      Z(s);
      return this.isolate(() => e(t, {
        locale: this.socket.locale,
        ...s
      }).catch(r => {
        switch (true) {
        case r instanceof ot:
        case r instanceof Qt:
          throw ee.handleError(r);
        default:
          throw r;
        }
      }));
    };
  }
  static isolate(e) {
    return Se(() => e());
  }
}
function C_(n) {
  function* e(t) {
    return yield t;
  }
  return e;
}
var ia, uu;
function T_() {
  if (uu)
    return ia;
  uu = 1;
  var n = (function () {
      function f(g, D) {
        if (typeof g != 'function')
          throw new TypeError('DataLoader must be constructed with a function which accepts ' + ('Array<key> and returns Promise<Array<value>>, but got: ' + g + '.'));
        this._batchLoadFn = g, this._maxBatchSize = o(D), this._batchScheduleFn = l(D), this._cacheKeyFn = d(D), this._cacheMap = c(D), this._batch = null, this.name = u(D);
      }
      var m = f.prototype;
      m.load = function (D) {
        if (D == null)
          throw new TypeError('The loader.load() function must be called with a value, ' + ('but got: ' + String(D) + '.'));
        var _ = s(this), S = this._cacheMap, N;
        if (S) {
          N = this._cacheKeyFn(D);
          var L = S.get(N);
          if (L) {
            var U = _.cacheHits || (_.cacheHits = []);
            return new Promise(function (R) {
              U.push(function () {
                R(L);
              });
            });
          }
        }
        _.keys.push(D);
        var C = new Promise(function (R, b) {
          _.callbacks.push({
            resolve: R,
            reject: b
          });
        });
        S && S.set(N, C);
        return C;
      };
      m.loadMany = function (D) {
        if (!h(D))
          throw new TypeError('The loader.loadMany() function must be called with Array<key> ' + ('but got: ' + D + '.'));
        for (var _ = [], S = 0; S < D.length; S++)
          _.push(this.load(D[S]).catch(function (N) {
            return N;
          }));
        return Promise.all(_);
      };
      m.clear = function (D) {
        var _ = this._cacheMap;
        if (_) {
          var S = this._cacheKeyFn(D);
          _.delete(S);
        }
        return this;
      };
      m.clearAll = function () {
        var D = this._cacheMap;
        D && D.clear();
        return this;
      };
      m.prime = function (D, _) {
        var S = this._cacheMap;
        if (S) {
          var N = this._cacheKeyFn(D);
          if (S.get(N) === void 0) {
            var L;
            _ instanceof Error ? (L = Promise.reject(_), L.catch(function () {
            })) : L = Promise.resolve(_), S.set(N, L);
          }
        }
        return this;
      };
      return f;
    }()), e = typeof process == 'object' && typeof process.nextTick == 'function' ? function (f) {
      t || (t = Promise.resolve()), t.then(function () {
        process.nextTick(f);
      });
    } : typeof setImmediate == 'function' ? function (f) {
      setImmediate(f);
    } : function (f) {
      setTimeout(f);
    }, t;
  function s(f) {
    var m = f._batch;
    if (m !== null && !m.hasDispatched && m.keys.length < f._maxBatchSize)
      return m;
    var g = {
      hasDispatched: false,
      keys: [],
      callbacks: []
    };
    f._batch = g;
    f._batchScheduleFn(function () {
      r(f, g);
    });
    return g;
  }
  function r(f, m) {
    m.hasDispatched = true;
    if (m.keys.length === 0) {
      a(m);
      return;
    }
    var g;
    try {
      g = f._batchLoadFn(m.keys);
    } catch (D) {
      return i(f, m, new TypeError('DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function ' + ('errored synchronously: ' + String(D) + '.')));
    }
    if (!g || typeof g.then != 'function')
      return i(f, m, new TypeError('DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ' + ('not return a Promise: ' + String(g) + '.')));
    g.then(function (D) {
      if (!h(D))
        throw new TypeError('DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ' + ('not return a Promise of an Array: ' + String(D) + '.'));
      if (D.length !== m.keys.length)
        throw new TypeError('DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.' + (`

Keys:
` + String(m.keys)) + (`

Values:
` + String(D)));
      a(m);
      for (var _ = 0; _ < m.callbacks.length; _++) {
        var S = D[_];
        S instanceof Error ? m.callbacks[_].reject(S) : m.callbacks[_].resolve(S);
      }
    }).catch(function (D) {
      i(f, m, D);
    });
  }
  function i(f, m, g) {
    a(m);
    for (var D = 0; D < m.keys.length; D++)
      f.clear(m.keys[D]), m.callbacks[D].reject(g);
  }
  function a(f) {
    if (f.cacheHits)
      for (var m = 0; m < f.cacheHits.length; m++)
        f.cacheHits[m]();
  }
  function o(f) {
    var m = !f || f.batch !== false;
    if (!m)
      return 1;
    var g = f && f.maxBatchSize;
    if (g === void 0)
      return Infinity;
    if (typeof g != 'number' || g < 1)
      throw new TypeError('maxBatchSize must be a positive number: ' + g);
    return g;
  }
  function l(f) {
    var m = f && f.batchScheduleFn;
    if (m === void 0)
      return e;
    if (typeof m != 'function')
      throw new TypeError('batchScheduleFn must be a function: ' + m);
    return m;
  }
  function d(f) {
    var m = f && f.cacheKeyFn;
    if (m === void 0)
      return function (g) {
        return g;
      };
    if (typeof m != 'function')
      throw new TypeError('cacheKeyFn must be a function: ' + m);
    return m;
  }
  function c(f) {
    var m = !f || f.cache !== false;
    if (!m)
      return null;
    var g = f && f.cacheMap;
    if (g === void 0)
      return new Map();
    if (g !== null) {
      var D = [
          'get',
          'set',
          'delete',
          'clear'
        ], _ = D.filter(function (S) {
          return g && typeof g[S] != 'function';
        });
      if (_.length !== 0)
        throw new TypeError('Custom cacheMap missing methods: ' + _.join(', '));
    }
    return g;
  }
  function u(f) {
    return f && f.name ? f.name : null;
  }
  function h(f) {
    return typeof f == 'object' && f !== null && typeof f.length == 'number' && (f.length === 0 || f.length > 0 && Object.prototype.hasOwnProperty.call(f, f.length - 1));
  }
  ia = n;
  return ia;
}
var I_ = T_();
const _d = kp(I_);
var F_ = (function () {
    var n = function (e, t) {
      n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (s, r) {
        s.__proto__ = r;
      } || function (s, r) {
        for (var i in r)
          r.hasOwnProperty(i) && (s[i] = r[i]);
      };
      return n(e, t);
    };
    return function (e, t) {
      n(e, t);
      function s() {
        this.constructor = e;
      }
      e.prototype = t === null ? Object.create(t) : (s.prototype = t.prototype, new s());
    };
  }()), S_ = Object.prototype.hasOwnProperty;
function xa(n, e) {
  return S_.call(n, e);
}
function Oa(n) {
  if (Array.isArray(n)) {
    for (var e = new Array(n.length), t = 0; t < e.length; t++)
      e[t] = '' + t;
    return e;
  }
  if (Object.keys)
    return Object.keys(n);
  var s = [];
  for (var r in n)
    xa(n, r) && s.push(r);
  return s;
}
function Je(n) {
  switch (typeof n) {
  case 'object':
    return JSON.parse(JSON.stringify(n));
  case 'undefined':
    return null;
  default:
    return n;
  }
}
function Ra(n) {
  for (var e = 0, t = n.length, s; e < t;) {
    s = n.charCodeAt(e);
    if (s >= 48 && s <= 57) {
      e++;
      continue;
    }
    return false;
  }
  return true;
}
function hn(n) {
  return n.indexOf('/') === -1 && n.indexOf('~') === -1 ? n : n.replace(/~/g, '~0').replace(/\//g, '~1');
}
function vd(n) {
  return n.replace(/~1/g, '/').replace(/~0/g, '~');
}
function ka(n) {
  if (n === void 0)
    return true;
  if (n) {
    if (Array.isArray(n)) {
      for (var e = 0, t = n.length; e < t; e++)
        if (ka(n[e]))
          return true;
    } else if (typeof n == 'object') {
      for (var s = Oa(n), r = s.length, i = 0; i < r; i++)
        if (ka(n[s[i]]))
          return true;
    }
  }
  return false;
}
function lu(n, e) {
  var t = [n];
  for (var s in e) {
    var r = typeof e[s] == 'object' ? JSON.stringify(e[s], null, 2) : e[s];
    typeof r < 'u' && t.push(s + ': ' + r);
  }
  return t.join(`
`);
}
var bd = function (n) {
    F_(e, n);
    function e(t, s, r, i, a) {
      var o = this.constructor, l = n.call(this, lu(t, {
          name: s,
          index: r,
          operation: i,
          tree: a
        })) || this;
      l.name = s;
      l.index = r;
      l.operation = i;
      l.tree = a;
      Object.setPrototypeOf(l, o.prototype);
      l.message = lu(t, {
        name: s,
        index: r,
        operation: i,
        tree: a
      });
      return l;
    }
    return e;
  }(Error), De = bd, x_ = Je, zn = {
    add: function (n, e, t) {
      n[e] = this.value;
      return { newDocument: t };
    },
    remove: function (n, e, t) {
      var s = n[e];
      delete n[e];
      return {
        newDocument: t,
        removed: s
      };
    },
    replace: function (n, e, t) {
      var s = n[e];
      n[e] = this.value;
      return {
        newDocument: t,
        removed: s
      };
    },
    move: function (n, e, t) {
      var s = Gr(t, this.path);
      s && (s = Je(s));
      var r = vn(t, {
        op: 'remove',
        path: this.from
      }).removed;
      vn(t, {
        op: 'add',
        path: this.path,
        value: r
      });
      return {
        newDocument: t,
        removed: s
      };
    },
    copy: function (n, e, t) {
      var s = Gr(t, this.from);
      vn(t, {
        op: 'add',
        path: this.path,
        value: Je(s)
      });
      return { newDocument: t };
    },
    test: function (n, e, t) {
      return {
        newDocument: t,
        test: Ps(n[e], this.value)
      };
    },
    _get: function (n, e, t) {
      this.value = n[e];
      return { newDocument: t };
    }
  }, O_ = {
    add: function (n, e, t) {
      Ra(e) ? n.splice(e, 0, this.value) : n[e] = this.value;
      return {
        newDocument: t,
        index: e
      };
    },
    remove: function (n, e, t) {
      var s = n.splice(e, 1);
      return {
        newDocument: t,
        removed: s[0]
      };
    },
    replace: function (n, e, t) {
      var s = n[e];
      n[e] = this.value;
      return {
        newDocument: t,
        removed: s
      };
    },
    move: zn.move,
    copy: zn.copy,
    test: zn.test,
    _get: zn._get
  };
function Gr(n, e) {
  if (e == '')
    return n;
  var t = {
    op: '_get',
    path: e
  };
  vn(n, t);
  return t.value;
}
function vn(n, e, t, s, r, i) {
  t === void 0 && (t = false);
  s === void 0 && (s = true);
  r === void 0 && (r = true);
  i === void 0 && (i = 0);
  t && (typeof t == 'function' ? t(e, 0, n, e.path) : Kr(e, 0));
  if (e.path === '') {
    var a = { newDocument: n };
    if (e.op === 'add') {
      a.newDocument = e.value;
      return a;
    }
    if (e.op === 'replace') {
      a.newDocument = e.value;
      a.removed = n;
      return a;
    }
    if (e.op === 'move' || e.op === 'copy') {
      a.newDocument = Gr(n, e.from);
      e.op === 'move' && (a.removed = n);
      return a;
    }
    if (e.op === 'test') {
      if (a.test = Ps(n, e.value), a.test === false)
        throw new bd('Test operation failed', 'TEST_OPERATION_FAILED', i, e, n);
      a.newDocument = n;
      return a;
    } else {
      if (e.op === 'remove') {
        a.removed = n;
        a.newDocument = null;
        return a;
      }
      if (e.op === '_get') {
        e.value = n;
        return a;
      }
      if (t)
        throw new bd('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', i, e, n);
      return a;
    }
  } else {
    s || (n = Je(n));
    var o = e.path || '', l = o.split('/'), d = n, c = 1, u = l.length, h = void 0, f = void 0, m = void 0;
    for (typeof t == 'function' ? m = t : m = Kr;;) {
      f = l[c];
      f && f.indexOf('~') != -1 && (f = vd(f));
      if (r && (f == '__proto__' || f == 'prototype' && c > 0 && l[c - 1] == 'constructor'))
        throw new TypeError('JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README');
      if (t && h === void 0 && (d[f] === void 0 ? h = l.slice(0, c).join('/') : c == u - 1 && (h = e.path), h !== void 0 && m(e, 0, n, h)), c++, Array.isArray(d)) {
        if (f === '-')
          f = d.length;
        else {
          if (t && !Ra(f))
            throw new bd('Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index', 'OPERATION_PATH_ILLEGAL_ARRAY_INDEX', i, e, n);
          Ra(f) && (f = ~~f);
        }
        if (c >= u) {
          if (t && e.op === 'add' && f > d.length)
            throw new bd('The specified index MUST NOT be greater than the number of elements in the array', 'OPERATION_VALUE_OUT_OF_BOUNDS', i, e, n);
          var a = O_[e.op].call(e, d, f, n);
          if (a.test === false)
            throw new bd('Test operation failed', 'TEST_OPERATION_FAILED', i, e, n);
          return a;
        }
      } else if (c >= u) {
        var a = zn[e.op].call(e, d, f, n);
        if (a.test === false)
          throw new bd('Test operation failed', 'TEST_OPERATION_FAILED', i, e, n);
        return a;
      }
      if (d = d[f], t && c < u && (!d || typeof d != 'object'))
        throw new bd('Cannot perform operation at the desired path', 'OPERATION_PATH_UNRESOLVABLE', i, e, n);
    }
  }
}
function Ei(n, e, t, s, r) {
  if (s === void 0 && (s = true), r === void 0 && (r = true), t && !Array.isArray(e))
    throw new bd('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
  s || (n = Je(n));
  for (var i = new Array(e.length), a = 0, o = e.length; a < o; a++)
    i[a] = vn(n, e[a], t, true, r, a), n = i[a].newDocument;
  i.newDocument = n;
  return i;
}
function R_(n, e, t) {
  var s = vn(n, e);
  if (s.test === false)
    throw new bd('Test operation failed', 'TEST_OPERATION_FAILED', t, e, n);
  return s.newDocument;
}
function Kr(n, e, t, s) {
  if (typeof n != 'object' || n === null || Array.isArray(n))
    throw new bd('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', e, n, t);
  if (zn[n.op]) {
    if (typeof n.path != 'string')
      throw new bd('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', e, n, t);
    if (n.path.indexOf('/') !== 0 && n.path.length > 0)
      throw new bd('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', e, n, t);
    if ((n.op === 'move' || n.op === 'copy') && typeof n.from != 'string')
      throw new bd('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', e, n, t);
    if ((n.op === 'add' || n.op === 'replace' || n.op === 'test') && n.value === void 0)
      throw new bd('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', e, n, t);
    if ((n.op === 'add' || n.op === 'replace' || n.op === 'test') && ka(n.value))
      throw new bd('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', e, n, t);
    if (t) {
      if (n.op == 'add') {
        var r = n.path.split('/').length, i = s.split('/').length;
        if (r !== i + 1 && r !== i)
          throw new bd('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', e, n, t);
      } else if (n.op === 'replace' || n.op === 'remove' || n.op === '_get') {
        if (n.path !== s)
          throw new bd('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', e, n, t);
      } else if (n.op === 'move' || n.op === 'copy') {
        var a = {
            op: '_get',
            path: n.from,
            value: void 0
          }, o = wd([a], t);
        if (o && o.name === 'OPERATION_PATH_UNRESOLVABLE')
          throw new bd('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', e, n, t);
      }
    }
  } else
    throw new bd('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', e, n, t);
}
function wd(n, e, t) {
  try {
    if (!Array.isArray(n))
      throw new bd('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
    if (e)
      Ei(Je(e), Je(n), t || true);
    else {
      t = t || Kr;
      for (var s = 0; s < n.length; s++)
        t(n[s], s, e, void 0);
    }
  } catch (r) {
    if (r instanceof bd)
      return r;
    throw r;
  }
}
function Ps(n, e) {
  if (n === e)
    return true;
  if (n && e && typeof n == 'object' && typeof e == 'object') {
    var t = Array.isArray(n), s = Array.isArray(e), r, i, a;
    if (t && s) {
      i = n.length;
      if (i != e.length)
        return false;
      for (r = i; r-- !== 0;)
        if (!Ps(n[r], e[r]))
          return false;
      return true;
    }
    if (t != s)
      return false;
    var o = Object.keys(n);
    i = o.length;
    if (i !== Object.keys(e).length)
      return false;
    for (r = i; r-- !== 0;)
      if (!e.hasOwnProperty(o[r]))
        return false;
    for (r = i; r-- !== 0;) {
      a = o[r];
      if (!Ps(n[a], e[a]))
        return false;
    }
    return true;
  }
  return n !== n && e !== e;
}
const k_ = Object.freeze(Object.defineProperty({
  __proto__: null,
  JsonPatchError: bd,
  _areEquals: Ps,
  applyOperation: vn,
  applyPatch: Ei,
  applyReducer: R_,
  deepClone: Je,
  getValueByPointer: Gr,
  validate: wd,
  validator: Kr
}, Symbol.toStringTag, { value: 'Module' }));
var Io = new WeakMap(), L_ = (function () {
    function n(e) {
      this.observers = new Map(), this.obj = e;
    }
    return n;
  }()), N_ = (function () {
    function n(e, t) {
      this.callback = e, this.observer = t;
    }
    return n;
  }());
function P_(n) {
  return Io.get(n);
}
function M_(n, e) {
  return n.observers.get(e);
}
function B_(n, e) {
  n.observers.delete(e.callback);
}
function U_(n, e) {
  e.unobserve();
}
function H_(n, e) {
  var t = [], s, r = P_(n);
  if (!r)
    r = new L_(n), Io.set(n, r);
  else {
    var i = M_(r, e);
    s = i && i.observer;
  }
  if (s)
    return s;
  if (s = {}, r.value = Je(n), e) {
    s.callback = e, s.next = null;
    var a = function () {
        La(s);
      }, o = function () {
        clearTimeout(s.next), s.next = setTimeout(a);
      };
    typeof window < 'u' && (window.addEventListener('mouseup', o), window.addEventListener('keyup', o), window.addEventListener('mousedown', o), window.addEventListener('keydown', o), window.addEventListener('change', o));
  }
  s.patches = t;
  s.object = n;
  s.unobserve = function () {
    La(s), clearTimeout(s.next), B_(r, s), typeof window < 'u' && (window.removeEventListener('mouseup', o), window.removeEventListener('keyup', o), window.removeEventListener('mousedown', o), window.removeEventListener('keydown', o), window.removeEventListener('change', o));
  };
  r.observers.set(e, new N_(e, s));
  return s;
}
function La(n, e) {
  e === void 0 && (e = false);
  var t = Io.get(n.object);
  Fo(t.value, n.object, n.patches, '', e), n.patches.length && Ei(t.value, n.patches);
  var s = n.patches;
  s.length > 0 && (n.patches = [], n.callback && n.callback(s));
  return s;
}
function Fo(n, e, t, s, r) {
  if (e !== n) {
    typeof e.toJSON == 'function' && (e = e.toJSON());
    for (var i = Oa(e), a = Oa(n), o = false, l = a.length - 1; l >= 0; l--) {
      var d = a[l], c = n[d];
      if (xa(e, d) && !(e[d] === void 0 && c !== void 0 && Array.isArray(e) === false)) {
        var u = e[d];
        typeof c == 'object' && c != null && typeof u == 'object' && u != null && Array.isArray(c) === Array.isArray(u) ? Fo(c, u, t, s + '/' + hn(d), r) : c !== u && (r && t.push({
          op: 'test',
          path: s + '/' + hn(d),
          value: Je(c)
        }), t.push({
          op: 'replace',
          path: s + '/' + hn(d),
          value: Je(u)
        }));
      } else
        Array.isArray(n) === Array.isArray(e) ? (r && t.push({
          op: 'test',
          path: s + '/' + hn(d),
          value: Je(c)
        }), t.push({
          op: 'remove',
          path: s + '/' + hn(d)
        }), o = true) : (r && t.push({
          op: 'test',
          path: s,
          value: n
        }), t.push({
          op: 'replace',
          path: s,
          value: e
        }));
    }
    if (!(!o && i.length == a.length))
      for (var l = 0; l < i.length; l++) {
        var d = i[l];
        !xa(n, d) && e[d] !== void 0 && t.push({
          op: 'add',
          path: s + '/' + hn(d),
          value: Je(e[d])
        });
      }
  }
}
function Ed(n, e, t) {
  t === void 0 && (t = false);
  var s = [];
  Fo(n, e, s, '', t);
  return s;
}
const j_ = Object.freeze(Object.defineProperty({
  __proto__: null,
  compare: Ed,
  generate: La,
  observe: H_,
  unobserve: U_
}, Symbol.toStringTag, { value: 'Module' }));
Object.assign({}, k_, j_, {
  JsonPatchError: bd,
  deepClone: Je,
  escapePathComponent: hn,
  unescapePathComponent: vd
});
const yd = 100;
class fn {
  onMerge(e) {
  }
  onReplace(e) {
  }
}
class $_ {
  cache = new pe();
  dirty = new Te();
  loader;
  constructor(e) {
    this.loader = new _d(t => this.fetch(t).then(s => Promise.all(s.map(r => this.insert(r)))).then(s => {
      const r = new Map(s.map(i => [
        i.id,
        i
      ]));
      return Promise.all(t.map(i => {
        const a = r.get(i);
        if (a !== void 0)
          return a;
        const o = this.onNotFound(i);
        return o instanceof Error ? o : this.insert(o);
      }));
    }).catch(s => {
      for (const r of t)
        s instanceof An && this.dirty.add(r), !(this.cache.get(r) instanceof fn) && this.cache.set(r, s instanceof Error ? s : new Error(s.toString()));
      throw s;
    }).finally(() => {
      for (const s of t)
        this.loader.clear(s);
    }), { maxBatchSize: e || yd });
  }
  fetchGraph(e, t) {
    return Promise.resolve();
  }
  onMerge(e, t) {
  }
  onReplace(e, t) {
  }
  get syncTime() {
    let e = 0;
    for (const t of this.cache.values())
      t instanceof fn && (e = Math.max(e, t.syncTime));
    return e;
  }
  invalidate(e) {
    this.dirty.add(e);
  }
  invalidateAll(e = () => true) {
    for (const t of this.cache.values())
      t instanceof fn && e(t) && this.dirty.add(t.id);
  }
  async insert(e) {
    const t = this.convert(e), s = this.cache.get(t.id), r = s instanceof Promise || s instanceof Error || this.dirty.has(t.id) ? void 0 : s;
    this.dirty.delete(t.id);
    t.syncTime >= (r?.syncTime || 0) && await this.fetchGraph(e, t);
    return !r || t.syncTime > r.syncTime ? (t.onReplace(r), this.onReplace(t, r), this.cache.set(t.id, t), t) : (t.syncTime === r.syncTime && (r.onMerge(t), this.onMerge(t, r)), r);
  }
  get values() {
    return Array.from(this.cache.values()).filter(e => e instanceof fn);
  }
  get(e) {
    this.dirty.has(e) && this.loader.load(e).catch(() => {
    });
    const t = this.cache.get(e);
    Z(t !== void 0 && t instanceof fn);
    return t;
  }
  getLazy(e) {
    const t = this.cache.get(e);
    switch (true) {
    case t === void 0:
    case t instanceof Error: {
        if (t instanceof Error && !this.dirty.has(e))
          return Promise.reject(t);
        const s = Se(() => {
          const r = this.loader.load(e).then(i => {
            if (i instanceof Error)
              throw i;
            return this.get(e);
          });
          this.cache.set(e, r);
          return r;
        });
        this.cache.get(e);
        return s;
      }
    case t instanceof Promise:
      return t;
    case t instanceof fn: {
        this.dirty.has(e) && this.loader.load(e).catch(() => {
        });
        return t;
      }
    default:
      return t;
    }
  }
}
class te {
  #e;
  get server() {
    return p(this.#e);
  }
  set server(e) {
    x(this.#e, e, true);
  }
  #t = W(Number.MIN_SAFE_INTEGER);
  get rv() {
    return p(this.#t);
  }
  set rv(e) {
    x(this.#t, e);
  }
  constructor(e) {
    this.#e = W(We(e));
  }
  get $() {
    this.rv;
    return this.server;
  }
  snapshot() {
    return yr(this.server);
  }
  rollback() {
    this.rv += 1;
  }
  update(e) {
    const t = Ed(this.snapshot(), e.snapshot());
    Ei(this.server, t, false, true);
  }
}
class xe {
  cache = new pe();
  dirty = new Te();
  cleanups = new Map();
  teardowns = new Map();
  loader;
  allowReplaceInstance;
  constructor(e) {
    this.loader = new _d(t => this.fetch(t).then(s => Promise.all(s.map(r => this.upsert(r)))).then(s => {
      const r = new Map(s.map(i => [
        i.id,
        i
      ]));
      return Promise.all(t.map(i => {
        const a = r.get(i);
        if (a !== void 0)
          return a;
        const o = this.onNotFound(i);
        return o instanceof Error ? o : (this.invalidate(i), this.upsert(o));
      }));
    }).catch(s => {
      for (const r of t)
        s instanceof An && this.dirty.add(r), !(this.cache.get(r) instanceof te) && this.cache.set(r, s instanceof Error ? s : new Error(s.toString()));
      throw s;
    }).finally(() => {
      for (const s of t)
        this.loader.clear(s);
    }), {
      maxBatchSize: e?.batchSize ?? yd,
      batchScheduleFn: e?.batchScheduler
    }), this.allowReplaceInstance = e?.allowReplaceInstance ?? false;
  }
  fetchGraph(e, t) {
    return Promise.resolve();
  }
  onUpsert(e) {
  }
  onDelete(e) {
  }
  get syncTime() {
    let e = 0;
    for (const t of this.cache.values())
      t instanceof te && (e = Math.max(e, t.syncTime));
    return e;
  }
  invalidate(e) {
    this.dirty.add(e);
  }
  invalidateAll(e = () => true) {
    for (const t of this.cache.values())
      t instanceof te && e(t) && this.invalidate(t.id);
  }
  async upsert(e) {
    let t;
    const s = mt(() => {
      t = this.convert(e);
    });
    Z(t);
    let r = this.cache.get(t.id), i = r instanceof te ? r : void 0;
    if ((this.dirty.has(t.id) || t.syncTime >= (i?.syncTime || 0)) && await this.fetchGraph(e, t), r = this.cache.get(t.id), i = r instanceof te ? r : void 0, !i || this.allowReplaceInstance && t.constructor !== i.constructor && t.syncTime >= i.syncTime) {
      this.dirty.delete(t.id), this.teardowns.get(t.id)?.(), this.cleanups.get(t.id)?.(), this.cleanups.set(t.id, s), this.cache.set(t.id, t);
      const o = this.onUpsert(t) ?? (() => {
      });
      this.teardowns.set(t.id, o);
      return t;
    }
    const a = this.dirty.delete(t.id);
    if (a || t.syncTime >= i.syncTime) {
      this.teardowns.get(t.id)?.(), a && i.rollback(), i.update(t);
      const o = this.onUpsert(t) ?? (() => {
      });
      this.teardowns.set(t.id, o);
    }
    s();
    return i;
  }
  async riskyPartialUpdate(e, t) {
    const s = this.cache.get(e);
    if (!(s instanceof te))
      return;
    const r = s.snapshot();
    t(r);
    return this.upsert(r);
  }
  delete(e) {
    this.dirty.delete(e), this.teardowns.get(e)?.(), this.teardowns.delete(e);
    const t = this.cache.get(e);
    this.cache.delete(e);
    if (t instanceof te)
      try {
        this.onDelete(t);
      } catch {
      }
    this.cleanups.get(e)?.(), this.cleanups.delete(e);
  }
  get values() {
    return Array.from(this.cache.values()).filter(e => e instanceof te);
  }
  get(e) {
    this.dirty.has(e) && this.loader.load(e).catch(() => {
    });
    const t = this.cache.get(e);
    Z(t !== void 0 && t instanceof te);
    return t;
  }
  getLazy(e) {
    const t = this.cache.get(e);
    switch (true) {
    case t === void 0:
    case t instanceof Error: {
        if (t instanceof Error && !this.dirty.has(e))
          return Promise.reject(t);
        const s = Se(() => {
          const r = this.loader.load(e).then(i => {
            if (i instanceof Error)
              throw i;
            return this.get(e);
          });
          this.cache.set(e, r);
          return r;
        });
        this.cache.get(e);
        return s;
      }
    case t instanceof Promise:
      return t;
    case t instanceof te: {
        this.dirty.has(e) && this.loader.load(e).catch(() => {
        });
        return t;
      }
    default:
      return t;
    }
  }
}
const Ht = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABNJREFUCB1jZGBg+A/EDEwgAgQADigBA//q6GsAAAAASUVORK5CYII%3D', Wr = '0-9', z_ = 'A-Za-z', V_ = z_ + 'Ͱ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿', bn = Wr + V_, G_ = `	   ᠎           ​\u2028\u2029  　\uFEFF
\r`, Na = {
    Underscore: '_',
    Hyphen: '-',
    At: '@'
  }, Ad = `[${ bn }${ '_' }${ '-' }]`, Pa = `[${ G_ }]`, K_ = [
    '香港',
    '香格里拉',
    '餐厅',
    '食品',
    '飞利浦',
    '電訊盈科',
    '集团',
    '通販',
    '购物',
    '谷歌',
    '联通',
    '网络',
    '网站',
    '网店',
    '网址',
    '组织机构',
    '移动',
    '点看',
    '澳門',
    '游戏',
    '淡马锡',
    '机构',
    '書籍',
    '时尚',
    '新闻',
    '新加坡',
    '政府',
    '政务',
    '招聘',
    '手机',
    '我爱你',
    '慈善',
    '微博',
    '广东',
    '家電',
    '娱乐',
    '天主教',
    '大拿',
    '在线',
    '嘉里大酒店',
    '嘉里',
    '商标',
    '商店',
    '商城',
    '台灣',
    '台湾',
    '公益',
    '公司',
    '八卦',
    '健康',
    '信息',
    '佛山',
    '企业',
    '亚马逊',
    '中文网',
    '中國',
    '中国',
    '中信',
    '世界',
    'みんな',
    'ポイント',
    'ファッション',
    'セール',
    'ストア',
    'コム',
    'クラウド',
    'グーグル',
    'アマゾン',
    '한국',
    '삼성',
    '닷컴',
    '닷넷',
    'ລາວ',
    'ไทย',
    'คอม',
    'ලංකා',
    'ഭാരതം',
    'ಭಾರತ',
    'భారత్',
    'சிங்கப்பூர்',
    'இலங்கை',
    'இந்தியா',
    'ଭାରତ',
    'ભારત',
    'ਭਾਰਤ',
    'ভাৰত',
    'ভারত',
    'বাংলা',
    'संगठन',
    'भारोत',
    'भारतम्',
    'भारत',
    'नेट',
    'कॉम',
    'همراه',
    'موقع',
    'موريتانيا',
    'مليسيا',
    'مصر',
    'كوم',
    'كاثوليك',
    'قطر',
    'فلسطين',
    'عمان',
    'عرب',
    'عراق',
    'شبكة',
    'سورية',
    'سودان',
    'تونس',
    'ڀارت',
    'پاکستان',
    'بيتك',
    'بھارت',
    'بازار',
    'بارت',
    'ایران',
    'امارات',
    'المغرب',
    'العليان',
    'السعودية',
    'الجزائر',
    'البحرين',
    'الاردن',
    'ارامكو',
    'ابوظبي',
    'קום',
    'ישראל',
    'հայ',
    'გე',
    'укр',
    'срб',
    'сайт',
    'рф',
    'рус',
    'орг',
    'онлайн',
    'москва',
    'мон',
    'мкд',
    'қаз',
    'ком',
    'католик',
    'ею',
    'дети',
    'бел',
    'бг',
    'ευ',
    'ελ',
    'zw',
    'zuerich',
    'zone',
    'zm',
    'zip',
    'zero',
    'zara',
    'zappos',
    'za',
    'yun',
    'yt',
    'youtube',
    'you',
    'yokohama',
    'yoga',
    'yodobashi',
    'ye',
    'yandex',
    'yamaxun',
    'yahoo',
    'yachts',
    'xyz',
    'xxx',
    'xn--zfr164b',
    'xn--ygbi2ammx',
    'xn--yfro4i67o',
    'xn--y9a3aq',
    'xn--xkc2dl3a5ee0h',
    'xn--xkc2al3hye2a',
    'xn--xhq521b',
    'xn--wgbl6a',
    'xn--wgbh1c',
    'xn--w4rs40l',
    'xn--w4r85el8fhu5dnra',
    'xn--vuq861b',
    'xn--vhquv',
    'xn--vermgensberatung-pwb',
    'xn--vermgensberater-ctb',
    'xn--unup4y',
    'xn--tiq49xqyj',
    'xn--tckwe',
    'xn--t60b56a',
    'xn--ses554g',
    'xn--s9brj9c',
    'xn--rvc1e0am3e',
    'xn--rovu88b',
    'xn--rhqv96g',
    'xn--qxam',
    'xn--qxa6a',
    'xn--qcka1pmc',
    'xn--q9jyb4c',
    'xn--q7ce6a',
    'xn--pssy2u',
    'xn--pgbs0dh',
    'xn--p1ai',
    'xn--p1acf',
    'xn--otu796d',
    'xn--ogbpf8fl',
    'xn--o3cw4h',
    'xn--nyqy26a',
    'xn--nqv7fs00ema',
    'xn--nqv7f',
    'xn--node',
    'xn--ngbrx',
    'xn--ngbe9e0a',
    'xn--ngbc5azd',
    'xn--mxtq1m',
    'xn--mk1bu44c',
    'xn--mix891f',
    'xn--mgbx4cd0ab',
    'xn--mgbtx2b',
    'xn--mgbt3dhd',
    'xn--mgbpl2fh',
    'xn--mgbi4ecexp',
    'xn--mgbgu82a',
    'xn--mgberp4a5d4ar',
    'xn--mgbcpq6gpa1a',
    'xn--mgbca7dzdo',
    'xn--mgbc0a9azcg',
    'xn--mgbbh1a71e',
    'xn--mgbbh1a',
    'xn--mgbayh7gpa',
    'xn--mgbai9azgqp6j',
    'xn--mgbah1a3hjkrd',
    'xn--mgbab2bd',
    'xn--mgbaam7a8h',
    'xn--mgba7c0bbn0a',
    'xn--mgba3a4f16a',
    'xn--mgba3a3ejt',
    'xn--mgb9awbf',
    'xn--lgbbat1ad8j',
    'xn--l1acc',
    'xn--kput3i',
    'xn--kpry57d',
    'xn--kprw13d',
    'xn--kcrx77d1x4a',
    'xn--jvr189m',
    'xn--jlq480n2rg',
    'xn--j6w193g',
    'xn--j1amh',
    'xn--j1aef',
    'xn--io0a7i',
    'xn--imr513n',
    'xn--i1b6b1a6a2e',
    'xn--hxt814e',
    'xn--h2brj9c8c',
    'xn--h2brj9c',
    'xn--h2breg3eve',
    'xn--gk3at1e',
    'xn--gecrj9c',
    'xn--gckr3f0f',
    'xn--g2xx48c',
    'xn--fzys8d69uvgm',
    'xn--fzc2c9e2c',
    'xn--fpcrj9c3d',
    'xn--flw351e',
    'xn--fjq720a',
    'xn--fiqz9s',
    'xn--fiqs8s',
    'xn--fiq64b',
    'xn--fiq228c5hs',
    'xn--fhbei',
    'xn--fct429k',
    'xn--efvy88h',
    'xn--eckvdtc9d',
    'xn--e1a4c',
    'xn--d1alf',
    'xn--d1acj3b',
    'xn--czru2d',
    'xn--czrs0t',
    'xn--czr694b',
    'xn--clchc0ea0b2g2a9gcd',
    'xn--cg4bki',
    'xn--cckwcxetd',
    'xn--cck2b3b',
    'xn--c2br7g',
    'xn--c1avg',
    'xn--bck1b9a5dre4c',
    'xn--b4w605ferd',
    'xn--9krt00a',
    'xn--9et52u',
    'xn--9dbq2a',
    'xn--90ais',
    'xn--90ae',
    'xn--90a3ac',
    'xn--8y0a063a',
    'xn--80aswg',
    'xn--80asehdb',
    'xn--80aqecdr1a',
    'xn--80ao21a',
    'xn--80adxhks',
    'xn--6qq986b3xl',
    'xn--6frz82g',
    'xn--5tzm5g',
    'xn--5su34j936bgsg',
    'xn--55qx5d',
    'xn--55qw42g',
    'xn--54b7fta0cc',
    'xn--4gbrim',
    'xn--4dbrk0ce',
    'xn--45q11c',
    'xn--45brj9c',
    'xn--45br5cyl',
    'xn--42c2d9a',
    'xn--3pxu8k',
    'xn--3hcrj9c',
    'xn--3e0b707e',
    'xn--3ds443g',
    'xn--3bst00m',
    'xn--30rr7y',
    'xn--2scrj9c',
    'xn--1qqw23a',
    'xn--1ck2e1b',
    'xn--11b4c3d',
    'xin',
    'xihuan',
    'xerox',
    'xbox',
    'wtf',
    'wtc',
    'ws',
    'wow',
    'world',
    'works',
    'work',
    'woodside',
    'wolterskluwer',
    'wme',
    'winners',
    'wine',
    'windows',
    'win',
    'williamhill',
    'wiki',
    'wien',
    'whoswho',
    'wf',
    'weir',
    'weibo',
    'wedding',
    'wed',
    'website',
    'weber',
    'webcam',
    'weatherchannel',
    'weather',
    'watches',
    'watch',
    'wanggou',
    'wang',
    'walter',
    'walmart',
    'wales',
    'vu',
    'voyage',
    'voto',
    'voting',
    'vote',
    'volvo',
    'vodka',
    'vn',
    'vlaanderen',
    'vivo',
    'viva',
    'vision',
    'visa',
    'virgin',
    'vip',
    'vin',
    'villas',
    'viking',
    'vig',
    'video',
    'viajes',
    'vi',
    'vg',
    'vet',
    'versicherung',
    'vermögensberatung',
    'vermögensberater',
    'verisign',
    'ventures',
    'vegas',
    've',
    'vc',
    'vanguard',
    'vana',
    'vacations',
    'va',
    'uz',
    'uy',
    'us',
    'ups',
    'uol',
    'uno',
    'university',
    'unicom',
    'uk',
    'ug',
    'ubs',
    'ubank',
    'ua',
    'tz',
    'tw',
    'tvs',
    'tv',
    'tushu',
    'tunes',
    'tui',
    'tube',
    'tt',
    'trv',
    'trust',
    'travelersinsurance',
    'travelers',
    'travel',
    'training',
    'trading',
    'trade',
    'tr',
    'toys',
    'toyota',
    'town',
    'tours',
    'total',
    'toshiba',
    'toray',
    'top',
    'tools',
    'tokyo',
    'today',
    'to',
    'tn',
    'tmall',
    'tm',
    'tl',
    'tkmaxx',
    'tk',
    'tjx',
    'tjmaxx',
    'tj',
    'tirol',
    'tires',
    'tips',
    'tienda',
    'tickets',
    'tiaa',
    'theatre',
    'theater',
    'thd',
    'th',
    'tg',
    'tf',
    'teva',
    'tennis',
    'temasek',
    'tel',
    'technology',
    'tech',
    'team',
    'tdk',
    'td',
    'tci',
    'tc',
    'taxi',
    'tax',
    'tattoo',
    'tatar',
    'tatamotors',
    'target',
    'taobao',
    'talk',
    'taipei',
    'tab',
    'sz',
    'systems',
    'sydney',
    'sy',
    'sx',
    'swiss',
    'swatch',
    'sv',
    'suzuki',
    'surgery',
    'surf',
    'support',
    'supply',
    'supplies',
    'sucks',
    'su',
    'style',
    'study',
    'studio',
    'stream',
    'store',
    'storage',
    'stockholm',
    'stcgroup',
    'stc',
    'statefarm',
    'statebank',
    'star',
    'staples',
    'stada',
    'st',
    'ss',
    'srl',
    'sr',
    'spot',
    'sport',
    'space',
    'spa',
    'soy',
    'sony',
    'song',
    'solutions',
    'solar',
    'sohu',
    'software',
    'softbank',
    'social',
    'soccer',
    'so',
    'sncf',
    'sn',
    'smile',
    'smart',
    'sm',
    'sling',
    'sl',
    'skype',
    'sky',
    'skin',
    'ski',
    'sk',
    'sj',
    'site',
    'singles',
    'sina',
    'silk',
    'si',
    'show',
    'shouji',
    'shopping',
    'shop',
    'shoes',
    'shiksha',
    'shia',
    'shell',
    'sharp',
    'shangrila',
    'sh',
    'sg',
    'sfr',
    'sexy',
    'sex',
    'sew',
    'seven',
    'services',
    'sener',
    'select',
    'seek',
    'security',
    'secure',
    'seat',
    'search',
    'se',
    'sd',
    'scot',
    'science',
    'schwarz',
    'schule',
    'school',
    'scholarships',
    'schmidt',
    'schaeffler',
    'scb',
    'sc',
    'sbs',
    'sbi',
    'sb',
    'saxo',
    'save',
    'sas',
    'sarl',
    'sap',
    'sanofi',
    'sandvikcoromant',
    'sandvik',
    'samsung',
    'samsclub',
    'salon',
    'sale',
    'sakura',
    'safety',
    'safe',
    'saarland',
    'sa',
    'ryukyu',
    'rwe',
    'rw',
    'run',
    'ruhr',
    'rugby',
    'ru',
    'rsvp',
    'rs',
    'room',
    'rogers',
    'rodeo',
    'rocks',
    'ro',
    'rip',
    'rio',
    'ril',
    'ricoh',
    'richardli',
    'rich',
    'rexroth',
    'reviews',
    'review',
    'restaurant',
    'rest',
    'republican',
    'report',
    'repair',
    'rentals',
    'rent',
    'ren',
    'reliance',
    'reit',
    'reisen',
    'reise',
    'rehab',
    'redumbrella',
    'redstone',
    'red',
    'recipes',
    'realty',
    'realtor',
    'realestate',
    'read',
    're',
    'radio',
    'racing',
    'quest',
    'quebec',
    'qpon',
    'qa',
    'py',
    'pwc',
    'pw',
    'pub',
    'pt',
    'ps',
    'prudential',
    'pru',
    'protection',
    'property',
    'properties',
    'promo',
    'progressive',
    'prof',
    'productions',
    'prod',
    'pro',
    'prime',
    'press',
    'praxi',
    'pramerica',
    'pr',
    'post',
    'porn',
    'politie',
    'poker',
    'pohl',
    'pnc',
    'pn',
    'pm',
    'plus',
    'plumbing',
    'playstation',
    'play',
    'place',
    'pl',
    'pk',
    'pizza',
    'pioneer',
    'pink',
    'ping',
    'pin',
    'pid',
    'pictures',
    'pictet',
    'pics',
    'physio',
    'photos',
    'photography',
    'photo',
    'phone',
    'philips',
    'phd',
    'pharmacy',
    'ph',
    'pg',
    'pfizer',
    'pf',
    'pet',
    'pe',
    'pccw',
    'pay',
    'party',
    'parts',
    'partners',
    'pars',
    'paris',
    'panasonic',
    'page',
    'pa',
    'ovh',
    'ott',
    'otsuka',
    'osaka',
    'origins',
    'organic',
    'org',
    'orange',
    'oracle',
    'open',
    'ooo',
    'online',
    'onl',
    'ong',
    'one',
    'omega',
    'om',
    'ollo',
    'olayangroup',
    'olayan',
    'okinawa',
    'office',
    'observer',
    'obi',
    'nz',
    'nyc',
    'nu',
    'ntt',
    'nrw',
    'nra',
    'nr',
    'np',
    'nowtv',
    'nowruz',
    'now',
    'norton',
    'nokia',
    'no',
    'nl',
    'nissay',
    'nissan',
    'ninja',
    'nikon',
    'nike',
    'nico',
    'ni',
    'nhk',
    'ngo',
    'ng',
    'nfl',
    'nf',
    'nexus',
    'nextdirect',
    'next',
    'news',
    'new',
    'neustar',
    'network',
    'netflix',
    'netbank',
    'net',
    'nec',
    'ne',
    'nc',
    'nba',
    'navy',
    'name',
    'nagoya',
    'nab',
    'na',
    'mz',
    'my',
    'mx',
    'mw',
    'mv',
    'music',
    'museum',
    'mu',
    'mtr',
    'mtn',
    'mt',
    'msd',
    'ms',
    'mr',
    'mq',
    'mp',
    'movie',
    'mov',
    'motorcycles',
    'moto',
    'moscow',
    'mortgage',
    'mormon',
    'monster',
    'money',
    'monash',
    'mom',
    'moi',
    'moe',
    'moda',
    'mobile',
    'mobi',
    'mo',
    'mn',
    'mma',
    'mm',
    'mls',
    'mlb',
    'ml',
    'mk',
    'mitsubishi',
    'mit',
    'mint',
    'mini',
    'mil',
    'microsoft',
    'miami',
    'mh',
    'mg',
    'merckmsd',
    'menu',
    'men',
    'memorial',
    'meme',
    'melbourne',
    'meet',
    'media',
    'med',
    'me',
    'md',
    'mckinsey',
    'mc',
    'mba',
    'mattel',
    'marshalls',
    'marriott',
    'markets',
    'marketing',
    'market',
    'map',
    'mango',
    'management',
    'man',
    'makeup',
    'maison',
    'maif',
    'madrid',
    'ma',
    'ly',
    'lv',
    'luxury',
    'luxe',
    'lundbeck',
    'lu',
    'ltda',
    'ltd',
    'lt',
    'ls',
    'lr',
    'lplfinancial',
    'lpl',
    'love',
    'lotto',
    'lotte',
    'london',
    'lol',
    'locus',
    'locker',
    'loans',
    'loan',
    'llp',
    'llc',
    'lk',
    'living',
    'live',
    'lipsy',
    'link',
    'lincoln',
    'limo',
    'limited',
    'lilly',
    'like',
    'lighting',
    'lifestyle',
    'lifeinsurance',
    'life',
    'lidl',
    'li',
    'lgbt',
    'lexus',
    'lego',
    'legal',
    'lefrak',
    'leclerc',
    'lease',
    'lds',
    'lc',
    'lb',
    'lawyer',
    'law',
    'latrobe',
    'latino',
    'lat',
    'lasalle',
    'lanxess',
    'landrover',
    'land',
    'lancaster',
    'lamer',
    'lamborghini',
    'lacaixa',
    'la',
    'kz',
    'kyoto',
    'ky',
    'kw',
    'kuokgroup',
    'kred',
    'krd',
    'kr',
    'kpn',
    'kpmg',
    'kp',
    'kosher',
    'komatsu',
    'koeln',
    'kn',
    'km',
    'kiwi',
    'kitchen',
    'kindle',
    'kim',
    'kids',
    'kia',
    'ki',
    'kh',
    'kg',
    'kfh',
    'kerryproperties',
    'kerrylogistics',
    'kerryhotels',
    'ke',
    'kddi',
    'kaufen',
    'juniper',
    'juegos',
    'jprs',
    'jpmorgan',
    'jp',
    'joy',
    'jot',
    'joburg',
    'jobs',
    'jo',
    'jnj',
    'jmp',
    'jm',
    'jll',
    'jio',
    'jewelry',
    'jetzt',
    'jeep',
    'je',
    'jcb',
    'java',
    'jaguar',
    'itv',
    'itau',
    'it',
    'istanbul',
    'ist',
    'ismaili',
    'is',
    'irish',
    'ir',
    'iq',
    'ipiranga',
    'io',
    'investments',
    'intuit',
    'international',
    'int',
    'insure',
    'insurance',
    'institute',
    'ink',
    'ing',
    'info',
    'infiniti',
    'industries',
    'inc',
    'in',
    'immobilien',
    'immo',
    'imdb',
    'imamat',
    'im',
    'il',
    'ikano',
    'ifm',
    'ieee',
    'ie',
    'id',
    'icu',
    'ice',
    'icbc',
    'ibm',
    'hyundai',
    'hyatt',
    'hughes',
    'hu',
    'ht',
    'hsbc',
    'hr',
    'how',
    'house',
    'hotmail',
    'hotels',
    'hot',
    'hosting',
    'host',
    'hospital',
    'horse',
    'honda',
    'homesense',
    'homes',
    'homegoods',
    'homedepot',
    'holiday',
    'holdings',
    'hockey',
    'hn',
    'hm',
    'hkt',
    'hk',
    'hiv',
    'hitachi',
    'hisamitsu',
    'hiphop',
    'hermes',
    'here',
    'helsinki',
    'help',
    'healthcare',
    'health',
    'hdfcbank',
    'hdfc',
    'hbo',
    'haus',
    'hangout',
    'hamburg',
    'hair',
    'gy',
    'gw',
    'guru',
    'guitars',
    'guide',
    'guge',
    'gucci',
    'gu',
    'gt',
    'gs',
    'group',
    'grocery',
    'gripe',
    'green',
    'gratis',
    'graphics',
    'grainger',
    'gr',
    'gq',
    'gp',
    'gov',
    'got',
    'gop',
    'google',
    'goog',
    'goodyear',
    'goo',
    'golf',
    'goldpoint',
    'gold',
    'godaddy',
    'gn',
    'gmx',
    'gmo',
    'gmbh',
    'gmail',
    'gm',
    'globo',
    'global',
    'gle',
    'glass',
    'gl',
    'giving',
    'gives',
    'gifts',
    'gift',
    'gi',
    'gh',
    'ggee',
    'gg',
    'gf',
    'george',
    'genting',
    'gent',
    'gea',
    'ge',
    'gdn',
    'gd',
    'gbiz',
    'gb',
    'gay',
    'garden',
    'gap',
    'games',
    'game',
    'gallup',
    'gallo',
    'gallery',
    'gal',
    'ga',
    'fyi',
    'futbol',
    'furniture',
    'fund',
    'fun',
    'fujitsu',
    'ftr',
    'frontier',
    'frogans',
    'frl',
    'fresenius',
    'free',
    'fr',
    'fox',
    'foundation',
    'forum',
    'forsale',
    'forex',
    'ford',
    'football',
    'food',
    'foo',
    'fo',
    'fm',
    'fly',
    'flowers',
    'florist',
    'flir',
    'flights',
    'flickr',
    'fk',
    'fj',
    'fitness',
    'fit',
    'fishing',
    'fish',
    'firmdale',
    'firestone',
    'fire',
    'financial',
    'finance',
    'final',
    'film',
    'fido',
    'fidelity',
    'fi',
    'ferrero',
    'ferrari',
    'feedback',
    'fedex',
    'fast',
    'fashion',
    'farmers',
    'farm',
    'fans',
    'fan',
    'family',
    'faith',
    'fairwinds',
    'fail',
    'fage',
    'extraspace',
    'express',
    'exposed',
    'expert',
    'exchange',
    'events',
    'eus',
    'eurovision',
    'eu',
    'et',
    'estate',
    'esq',
    'es',
    'erni',
    'ericsson',
    'er',
    'equipment',
    'epson',
    'enterprises',
    'engineering',
    'engineer',
    'energy',
    'emerck',
    'email',
    'eg',
    'ee',
    'education',
    'edu',
    'edeka',
    'eco',
    'ec',
    'eat',
    'earth',
    'dz',
    'dvr',
    'dvag',
    'durban',
    'dupont',
    'dunlop',
    'dubai',
    'dtv',
    'drive',
    'download',
    'dot',
    'domains',
    'dog',
    'doctor',
    'docs',
    'do',
    'dnp',
    'dm',
    'dk',
    'dj',
    'diy',
    'dish',
    'discover',
    'discount',
    'directory',
    'direct',
    'digital',
    'diet',
    'diamonds',
    'dhl',
    'dev',
    'design',
    'desi',
    'dentist',
    'dental',
    'democrat',
    'delta',
    'deloitte',
    'dell',
    'delivery',
    'degree',
    'deals',
    'dealer',
    'deal',
    'de',
    'dds',
    'dclk',
    'day',
    'datsun',
    'dating',
    'date',
    'data',
    'dance',
    'dad',
    'cz',
    'cyou',
    'cymru',
    'cy',
    'cx',
    'cw',
    'cv',
    'cuisinella',
    'cu',
    'cruises',
    'cruise',
    'crs',
    'crown',
    'cricket',
    'creditunion',
    'creditcard',
    'credit',
    'cr',
    'cpa',
    'courses',
    'coupons',
    'coupon',
    'country',
    'corsica',
    'coop',
    'cool',
    'cooking',
    'contractors',
    'contact',
    'consulting',
    'construction',
    'condos',
    'comsec',
    'computer',
    'compare',
    'company',
    'community',
    'commbank',
    'com',
    'cologne',
    'college',
    'coffee',
    'codes',
    'coach',
    'co',
    'cn',
    'cm',
    'clubmed',
    'club',
    'cloud',
    'clothing',
    'clinique',
    'clinic',
    'click',
    'cleaning',
    'claims',
    'cl',
    'ck',
    'city',
    'citic',
    'citi',
    'citadel',
    'cisco',
    'circle',
    'cipriani',
    'ci',
    'church',
    'chrome',
    'christmas',
    'chintai',
    'cheap',
    'chat',
    'chase',
    'charity',
    'channel',
    'chanel',
    'ch',
    'cg',
    'cfd',
    'cfa',
    'cf',
    'cern',
    'ceo',
    'center',
    'cd',
    'cc',
    'cbre',
    'cbn',
    'cba',
    'catholic',
    'catering',
    'cat',
    'casino',
    'cash',
    'case',
    'casa',
    'cars',
    'careers',
    'career',
    'care',
    'cards',
    'caravan',
    'car',
    'capitalone',
    'capital',
    'capetown',
    'canon',
    'camp',
    'camera',
    'cam',
    'calvinklein',
    'call',
    'cal',
    'cafe',
    'cab',
    'ca',
    'bzh',
    'bz',
    'by',
    'bw',
    'bv',
    'buzz',
    'buy',
    'business',
    'builders',
    'build',
    'bt',
    'bs',
    'brussels',
    'brother',
    'broker',
    'broadway',
    'bridgestone',
    'bradesco',
    'br',
    'box',
    'boutique',
    'bot',
    'boston',
    'bostik',
    'bosch',
    'booking',
    'book',
    'boo',
    'bond',
    'bom',
    'bofa',
    'boehringer',
    'boats',
    'bo',
    'bnpparibas',
    'bn',
    'bmw',
    'bms',
    'bm',
    'blue',
    'bloomberg',
    'blog',
    'blockbuster',
    'blackfriday',
    'black',
    'bj',
    'biz',
    'bio',
    'bingo',
    'bing',
    'bike',
    'bid',
    'bible',
    'bi',
    'bharti',
    'bh',
    'bg',
    'bf',
    'bet',
    'bestbuy',
    'best',
    'berlin',
    'bentley',
    'beer',
    'beauty',
    'beats',
    'be',
    'bd',
    'bcn',
    'bcg',
    'bbva',
    'bbt',
    'bbc',
    'bb',
    'bayern',
    'bauhaus',
    'basketball',
    'baseball',
    'bargains',
    'barefoot',
    'barclays',
    'barclaycard',
    'barcelona',
    'bar',
    'bank',
    'band',
    'banamex',
    'baidu',
    'baby',
    'ba',
    'azure',
    'az',
    'axa',
    'ax',
    'aws',
    'aw',
    'autos',
    'auto',
    'author',
    'auspost',
    'audio',
    'audible',
    'audi',
    'auction',
    'au',
    'attorney',
    'athleta',
    'at',
    'associates',
    'asia',
    'asda',
    'as',
    'arte',
    'art',
    'arpa',
    'army',
    'archi',
    'aramco',
    'arab',
    'ar',
    'aquarelle',
    'aq',
    'apple',
    'app',
    'apartments',
    'aol',
    'ao',
    'anz',
    'anquan',
    'android',
    'analytics',
    'amsterdam',
    'amica',
    'amfam',
    'amex',
    'americanfamily',
    'americanexpress',
    'amazon',
    'am',
    'alstom',
    'alsace',
    'ally',
    'allstate',
    'allfinanz',
    'alipay',
    'alibaba',
    'al',
    'akdn',
    'airtel',
    'airforce',
    'airbus',
    'aig',
    'ai',
    'agency',
    'agakhan',
    'ag',
    'africa',
    'afl',
    'af',
    'aetna',
    'aero',
    'aeg',
    'ae',
    'adult',
    'ads',
    'ad',
    'actor',
    'aco',
    'accountants',
    'accountant',
    'accenture',
    'academy',
    'ac',
    'abudhabi',
    'abogado',
    'able',
    'abc',
    'abbvie',
    'abbott',
    'abb',
    'aarp',
    'aaa'
  ], W_ = `${ '香港|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|联通|网络|网站|网店|网址|组织机构|移动|点看|澳門|游戏|淡马锡|机构|書籍|时尚|新闻|新加坡|政府|政务|招聘|手机|我爱你|慈善|微博|广东|家電|娱乐|天主教|大拿|在线|嘉里大酒店|嘉里|商标|商店|商城|台灣|台湾|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中國|中国|中信|世界|みんな|ポイント|ファッション|セール|ストア|コム|クラウド|グーグル|アマゾン|한국|삼성|닷컴|닷넷|ລາວ|ไทย|คอม|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|संगठन|भारोत|भारतम्|भारत|नेट|कॉम|همراه|موقع|موريتانيا|مليسيا|مصر|كوم|كاثوليك|قطر|فلسطين|عمان|عرب|عراق|شبكة|سورية|سودان|تونس|ڀارت|پاکستان|بيتك|بھارت|بازار|بارت|ایران|امارات|المغرب|العليان|السعودية|الجزائر|البحرين|الاردن|ارامكو|ابوظبي|קום|ישראל|հայ|გე|укр|срб|сайт|рф|рус|орг|онлайн|москва|мон|мкд|қаз|ком|католик|ею|дети|бел|бг|ευ|ελ|zw|zuerich|zone|zm|zip|zero|zara|zappos|za|yun|yt|youtube|you|yokohama|yoga|yodobashi|ye|yandex|yamaxun|yahoo|yachts|xyz|xxx|xn--zfr164b|xn--ygbi2ammx|xn--yfro4i67o|xn--y9a3aq|xn--xkc2dl3a5ee0h|xn--xkc2al3hye2a|xn--xhq521b|xn--wgbl6a|xn--wgbh1c|xn--w4rs40l|xn--w4r85el8fhu5dnra|xn--vuq861b|xn--vhquv|xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--unup4y|xn--tiq49xqyj|xn--tckwe|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rvc1e0am3e|xn--rovu88b|xn--rhqv96g|xn--qxam|xn--qxa6a|xn--qcka1pmc|xn--q9jyb4c|xn--q7ce6a|xn--pssy2u|xn--pgbs0dh|xn--p1ai|xn--p1acf|xn--otu796d|xn--ogbpf8fl|xn--o3cw4h|xn--nyqy26a|xn--nqv7fs00ema|xn--nqv7f|xn--node|xn--ngbrx|xn--ngbe9e0a|xn--ngbc5azd|xn--mxtq1m|xn--mk1bu44c|xn--mix891f|xn--mgbx4cd0ab|xn--mgbtx2b|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbi4ecexp|xn--mgbgu82a|xn--mgberp4a5d4ar|xn--mgbcpq6gpa1a|xn--mgbca7dzdo|xn--mgbc0a9azcg|xn--mgbbh1a71e|xn--mgbbh1a|xn--mgbayh7gpa|xn--mgbai9azgqp6j|xn--mgbah1a3hjkrd|xn--mgbab2bd|xn--mgbaam7a8h|xn--mgba7c0bbn0a|xn--mgba3a4f16a|xn--mgba3a3ejt|xn--mgb9awbf|xn--lgbbat1ad8j|xn--l1acc|xn--kput3i|xn--kpry57d|xn--kprw13d|xn--kcrx77d1x4a|xn--jvr189m|xn--jlq480n2rg|xn--j6w193g|xn--j1amh|xn--j1aef|xn--io0a7i|xn--imr513n|xn--i1b6b1a6a2e|xn--hxt814e|xn--h2brj9c8c|xn--h2brj9c|xn--h2breg3eve|xn--gk3at1e|xn--gecrj9c|xn--gckr3f0f|xn--g2xx48c|xn--fzys8d69uvgm|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--flw351e|xn--fjq720a|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--fiq228c5hs|xn--fhbei|xn--fct429k|xn--efvy88h|xn--eckvdtc9d|xn--e1a4c|xn--d1alf|xn--d1acj3b|xn--czru2d|xn--czrs0t|xn--czr694b|xn--clchc0ea0b2g2a9gcd|xn--cg4bki|xn--cckwcxetd|xn--cck2b3b|xn--c2br7g|xn--c1avg|xn--bck1b9a5dre4c|xn--b4w605ferd|xn--9krt00a|xn--9et52u|xn--9dbq2a|xn--90ais|xn--90ae|xn--90a3ac|xn--8y0a063a|xn--80aswg|xn--80asehdb|xn--80aqecdr1a|xn--80ao21a|xn--80adxhks|xn--6qq986b3xl|xn--6frz82g|xn--5tzm5g|xn--5su34j936bgsg|xn--55qx5d|xn--55qw42g|xn--54b7fta0cc|xn--4gbrim|xn--4dbrk0ce|xn--45q11c|xn--45brj9c|xn--45br5cyl|xn--42c2d9a|xn--3pxu8k|xn--3hcrj9c|xn--3e0b707e|xn--3ds443g|xn--3bst00m|xn--30rr7y|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|xin|xihuan|xerox|xbox|wtf|wtc|ws|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|wf|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|wanggou|wang|walter|walmart|wales|vu|voyage|voto|voting|vote|volvo|vodka|vn|vlaanderen|vivo|viva|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vi|vg|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|ve|vc|vanguard|vana|vacations|va|uz|uy|us|ups|uol|uno|university|unicom|uk|ug|ubs|ubank|ua|tz|tw|tvs|tv|tushu|tunes|tui|tube|tt|trv|trust|travelersinsurance|travelers|travel|training|trading|trade|tr|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|to|tn|tmall|tm|tl|tkmaxx|tk|tjx|tjmaxx|tj|tirol|tires|tips|tienda|tickets|tiaa|theatre|theater|thd|th|tg|tf|teva|tennis|temasek|tel|technology|tech|team|tdk|td|tci|tc|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|sz|systems|sydney|sy|sx|swiss|swatch|sv|suzuki|surgery|surf|support|supply|supplies|sucks|su|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statefarm|statebank|star|staples|stada|st|ss|srl|sr|spot|sport|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|so|sncf|sn|smile|smart|sm|sling|sl|skype|sky|skin|ski|sk|sj|site|singles|sina|silk|si|show|shouji|shopping|shop|shoes|shiksha|shia|shell|sharp|shangrila|sh|sg|sfr|sexy|sex|sew|seven|services|sener|select|seek|security|secure|seat|search|se|sd|scot|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sc|sbs|sbi|sb|saxo|save|sas|sarl|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|sa|ryukyu|rwe|rw|run|ruhr|rugby|ru|rsvp|rs|room|rogers|rodeo|rocks|ro|rip|rio|ril|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|re|radio|racing|quest|quebec|qpon|qa|py|pwc|pw|pub|pt|ps|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|pr|post|porn|politie|poker|pohl|pnc|pn|pm|plus|plumbing|playstation|play|place|pl|pk|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|physio|photos|photography|photo|phone|philips|phd|pharmacy|ph|pg|pfizer|pf|pet|pe|pccw|pay|party|parts|partners|pars|paris|panasonic|page|pa|ovh|ott|otsuka|osaka|origins|organic|org|orange|oracle|open|ooo|online|onl|ong|one|omega|om|ollo|olayangroup|olayan|okinawa|office|observer|obi|nz|nyc|nu|ntt|nrw|nra|nr|np|nowtv|nowruz|now|norton|nokia|no|nl|nissay|nissan|ninja|nikon|nike|nico|ni|nhk|ngo|ng|nfl|nf|nexus|nextdirect|next|news|new|neustar|network|netflix|netbank|net|nec|ne|nc|nba|navy|name|nagoya|nab|na|mz|my|mx|mw|mv|music|museum|mu|mtr|mtn|mt|msd|ms|mr|mq|mp|movie|mov|motorcycles|moto|moscow|mortgage|mormon|monster|money|monash|mom|moi|moe|moda|mobile|mobi|mo|mn|mma|mm|mls|mlb|ml|mk|mitsubishi|mit|mint|mini|mil|microsoft|miami|mh|mg|merckmsd|menu|men|memorial|meme|melbourne|meet|media|med|me|md|mckinsey|mc|mba|mattel|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|ma|ly|lv|luxury|luxe|lundbeck|lu|ltda|ltd|lt|ls|lr|lplfinancial|lpl|love|lotto|lotte|london|lol|locus|locker|loans|loan|llp|llc|lk|living|live|lipsy|link|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|li|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lc|lb|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancaster|lamer|lamborghini|lacaixa|la|kz|kyoto|ky|kw|kuokgroup|kred|krd|kr|kpn|kpmg|kp|kosher|komatsu|koeln|kn|km|kiwi|kitchen|kindle|kim|kids|kia|ki|kh|kg|kfh|kerryproperties|kerrylogistics|kerryhotels|ke|kddi|kaufen|juniper|juegos|jprs|jpmorgan|jp|joy|jot|joburg|jobs|jo|jnj|jmp|jm|jll|jio|jewelry|jetzt|jeep|je|jcb|java|jaguar|itv|itau|it|istanbul|ist|ismaili|is|irish|ir|iq|ipiranga|io|investments|intuit|international|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|in|immobilien|immo|imdb|imamat|im|il|ikano|ifm|ieee|ie|id|icu|ice|icbc|ibm|hyundai|hyatt|hughes|hu|ht|hsbc|hr|how|house|hotmail|hotels|hot|hosting|host|hospital|horse|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hn|hm|hkt|hk|hiv|hitachi|hisamitsu|hiphop|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|gy|gw|guru|guitars|guide|guge|gucci|gu|gt|gs|group|grocery|gripe|green|gratis|graphics|grainger|gr|gq|gp|gov|got|gop|google|goog|goodyear|goo|golf|goldpoint|gold|godaddy|gn|gmx|gmo|gmbh|gmail|gm|globo|global|gle|glass|gl|giving|gives|gifts|gift|gi|gh|ggee|gg|gf|george|genting|gent|gea|ge|gdn|gd|gbiz|gb|gay|garden|gap|games|game|gallup|gallo|gallery|gal|ga|fyi|futbol|furniture|fund|fun|fujitsu|ftr|frontier|frogans|frl|fresenius|free|fr|fox|foundation|forum|forsale|forex|ford|football|food|foo|fo|fm|fly|flowers|florist|flir|flights|flickr|fk|fj|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fi|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|events|eus|eurovision|eu|et|estate|esq|es|erni|ericsson|er|equipment|epson|enterprises|engineering|engineer|energy|emerck|email|eg|ee|education|edu|edeka|eco|ec|eat|earth|dz|dvr|dvag|durban|dupont|dunlop|dubai|dtv|drive|download|dot|domains|dog|doctor|docs|do|dnp|dm|dk|dj|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|de|dds|dclk|day|datsun|dating|date|data|dance|dad|cz|cyou|cymru|cy|cx|cw|cv|cuisinella|cu|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cr|cpa|courses|coupons|coupon|country|corsica|coop|cool|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|com|cologne|college|coffee|codes|coach|co|cn|cm|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cl|ck|city|citic|citi|citadel|cisco|circle|cipriani|ci|church|chrome|christmas|chintai|cheap|chat|chase|charity|channel|chanel|ch|cg|cfd|cfa|cf|cern|ceo|center|cd|cc|cbre|cbn|cba|catholic|catering|cat|casino|cash|case|casa|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|camp|camera|cam|calvinklein|call|cal|cafe|cab|ca|bzh|bz|by|bw|bv|buzz|buy|business|builders|build|bt|bs|brussels|brother|broker|broadway|bridgestone|bradesco|br|box|boutique|bot|boston|bostik|bosch|booking|book|boo|bond|bom|bofa|boehringer|boats|bo|bnpparibas|bn|bmw|bms|bm|blue|bloomberg|blog|blockbuster|blackfriday|black|bj|biz|bio|bingo|bing|bike|bid|bible|bi|bharti|bh|bg|bf|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|be|bd|bcn|bcg|bbva|bbt|bbc|bb|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|banamex|baidu|baby|ba|azure|az|axa|ax|aws|aw|autos|auto|author|auspost|audio|audible|audi|auction|au|attorney|athleta|at|associates|asia|asda|as|arte|art|arpa|army|archi|aramco|arab|ar|aquarelle|aq|apple|app|apartments|aol|ao|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|am|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|al|akdn|airtel|airforce|airbus|aig|ai|agency|agakhan|ag|africa|afl|af|aetna|aero|aeg|ae|adult|ads|ad|actor|aco|accountants|accountant|accenture|academy|ac|abudhabi|abogado|able|abc|abbvie|abbott|abb|aarp|aaa' }`, q_ = '(25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d\\.){3}(25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)', Y_ = `[${ bn }](?:[${ bn }_\\-]{0,61}[${ bn }])?`, Cd = `(${ Y_ }\\.)+(?:${ W_ })`, Q_ = `(${ Cd }|${ q_ })`, J_ = '(?:https?|ftp|rtsp)://', X_ = `(?:[${ bn }\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)\\,\\;\\&\\=]|(?:\\%[a-fA-F${ Wr }]{2})){1,64}(?:\\:(?:[${ bn }\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)\\,\\;\\&\\=]|(?:\\%[a-fA-F${ Wr }]{2})){1,25})?\\@`, Z_ = `[${ Wr }]{1,5}`, e0 = '[/\\?](?:\\S{0,255})*', So = '[\\s,;!?()\\[\\]{}"\'`<>]', xo = `(?:^|(?<=${ So }))`, Oo = `(?:(?=${ So })|$)`, aa = bn + "\\+\\-_%'", t0 = `[${ aa }](?:[${ aa }\\.]{0,62}[${ aa }])?`, n0 = `(?=.{1,255}(?:\\s|$|^))${ Cd }`, s0 = xo + `(?:(?<protocol>${ J_ })(?<userInfo>${ X_ })?)?(?<domain>${ Q_ })(?:\\:(?<port>${ Z_ }))?(?:${ e0 })?` + Oo, r0 = xo + '(' + t0 + '@' + n0 + ')' + Oo, Td = '@', i0 = `(^|${ Pa })${ Td }(${ Ad }*)$`, Id = `${ Td }(${ Ad }+)`, a0 = `(^|${ Pa })${ Id }($|${ Pa })`, Ms = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, oF = n => new RegExp(So, n), cF = n => new RegExp(xo, n), uF = n => new RegExp(Oo, n), o0 = n => new RegExp(r0, n), Fd = n => new RegExp(s0, n), lF = n => {
    const e = /(?:^|(?<=[\s,;!?()\[\]{}"'`<>]))(?:(?<protocol>(?:https?|ftp|rtsp):\/\/)(?<userInfo>(?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\$\-\_\.\+\!\*\'\(\)\,\;\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\$\-\_\.\+\!\*\'\(\)\,\;\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?(?<domain>(([0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿](?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿_\-]{0,61}[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿])?\.)+(?:香港|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|联通|网络|网站|网店|网址|组织机构|移动|点看|澳門|游戏|淡马锡|机构|書籍|时尚|新闻|新加坡|政府|政务|招聘|手机|我爱你|慈善|微博|广东|家電|娱乐|天主教|大拿|在线|嘉里大酒店|嘉里|商标|商店|商城|台灣|台湾|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中國|中国|中信|世界|みんな|ポイント|ファッション|セール|ストア|コム|クラウド|グーグル|アマゾン|한국|삼성|닷컴|닷넷|ລາວ|ไทย|คอม|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|संगठन|भारोत|भारतम्|भारत|नेट|कॉम|همراه|موقع|موريتانيا|مليسيا|مصر|كوم|كاثوليك|قطر|فلسطين|عمان|عرب|عراق|شبكة|سورية|سودان|تونس|ڀارت|پاکستان|بيتك|بھارت|بازار|بارت|ایران|امارات|المغرب|العليان|السعودية|الجزائر|البحرين|الاردن|ارامكو|ابوظبي|קום|ישראל|հայ|გე|укр|срб|сайт|рф|рус|орг|онлайн|москва|мон|мкд|қаз|ком|католик|ею|дети|бел|бг|ευ|ελ|zw|zuerich|zone|zm|zip|zero|zara|zappos|za|yun|yt|youtube|you|yokohama|yoga|yodobashi|ye|yandex|yamaxun|yahoo|yachts|xyz|xxx|xn--zfr164b|xn--ygbi2ammx|xn--yfro4i67o|xn--y9a3aq|xn--xkc2dl3a5ee0h|xn--xkc2al3hye2a|xn--xhq521b|xn--wgbl6a|xn--wgbh1c|xn--w4rs40l|xn--w4r85el8fhu5dnra|xn--vuq861b|xn--vhquv|xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--unup4y|xn--tiq49xqyj|xn--tckwe|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rvc1e0am3e|xn--rovu88b|xn--rhqv96g|xn--qxam|xn--qxa6a|xn--qcka1pmc|xn--q9jyb4c|xn--q7ce6a|xn--pssy2u|xn--pgbs0dh|xn--p1ai|xn--p1acf|xn--otu796d|xn--ogbpf8fl|xn--o3cw4h|xn--nyqy26a|xn--nqv7fs00ema|xn--nqv7f|xn--node|xn--ngbrx|xn--ngbe9e0a|xn--ngbc5azd|xn--mxtq1m|xn--mk1bu44c|xn--mix891f|xn--mgbx4cd0ab|xn--mgbtx2b|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbi4ecexp|xn--mgbgu82a|xn--mgberp4a5d4ar|xn--mgbcpq6gpa1a|xn--mgbca7dzdo|xn--mgbc0a9azcg|xn--mgbbh1a71e|xn--mgbbh1a|xn--mgbayh7gpa|xn--mgbai9azgqp6j|xn--mgbah1a3hjkrd|xn--mgbab2bd|xn--mgbaam7a8h|xn--mgba7c0bbn0a|xn--mgba3a4f16a|xn--mgba3a3ejt|xn--mgb9awbf|xn--lgbbat1ad8j|xn--l1acc|xn--kput3i|xn--kpry57d|xn--kprw13d|xn--kcrx77d1x4a|xn--jvr189m|xn--jlq480n2rg|xn--j6w193g|xn--j1amh|xn--j1aef|xn--io0a7i|xn--imr513n|xn--i1b6b1a6a2e|xn--hxt814e|xn--h2brj9c8c|xn--h2brj9c|xn--h2breg3eve|xn--gk3at1e|xn--gecrj9c|xn--gckr3f0f|xn--g2xx48c|xn--fzys8d69uvgm|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--flw351e|xn--fjq720a|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--fiq228c5hs|xn--fhbei|xn--fct429k|xn--efvy88h|xn--eckvdtc9d|xn--e1a4c|xn--d1alf|xn--d1acj3b|xn--czru2d|xn--czrs0t|xn--czr694b|xn--clchc0ea0b2g2a9gcd|xn--cg4bki|xn--cckwcxetd|xn--cck2b3b|xn--c2br7g|xn--c1avg|xn--bck1b9a5dre4c|xn--b4w605ferd|xn--9krt00a|xn--9et52u|xn--9dbq2a|xn--90ais|xn--90ae|xn--90a3ac|xn--8y0a063a|xn--80aswg|xn--80asehdb|xn--80aqecdr1a|xn--80ao21a|xn--80adxhks|xn--6qq986b3xl|xn--6frz82g|xn--5tzm5g|xn--5su34j936bgsg|xn--55qx5d|xn--55qw42g|xn--54b7fta0cc|xn--4gbrim|xn--4dbrk0ce|xn--45q11c|xn--45brj9c|xn--45br5cyl|xn--42c2d9a|xn--3pxu8k|xn--3hcrj9c|xn--3e0b707e|xn--3ds443g|xn--3bst00m|xn--30rr7y|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|xin|xihuan|xerox|xbox|wtf|wtc|ws|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|wf|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|wanggou|wang|walter|walmart|wales|vu|voyage|voto|voting|vote|volvo|vodka|vn|vlaanderen|vivo|viva|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vi|vg|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|ve|vc|vanguard|vana|vacations|va|uz|uy|us|ups|uol|uno|university|unicom|uk|ug|ubs|ubank|ua|tz|tw|tvs|tv|tushu|tunes|tui|tube|tt|trv|trust|travelersinsurance|travelers|travel|training|trading|trade|tr|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|to|tn|tmall|tm|tl|tkmaxx|tk|tjx|tjmaxx|tj|tirol|tires|tips|tienda|tickets|tiaa|theatre|theater|thd|th|tg|tf|teva|tennis|temasek|tel|technology|tech|team|tdk|td|tci|tc|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|sz|systems|sydney|sy|sx|swiss|swatch|sv|suzuki|surgery|surf|support|supply|supplies|sucks|su|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statefarm|statebank|star|staples|stada|st|ss|srl|sr|spot|sport|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|so|sncf|sn|smile|smart|sm|sling|sl|skype|sky|skin|ski|sk|sj|site|singles|sina|silk|si|show|shouji|shopping|shop|shoes|shiksha|shia|shell|sharp|shangrila|sh|sg|sfr|sexy|sex|sew|seven|services|sener|select|seek|security|secure|seat|search|se|sd|scot|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sc|sbs|sbi|sb|saxo|save|sas|sarl|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|sa|ryukyu|rwe|rw|run|ruhr|rugby|ru|rsvp|rs|room|rogers|rodeo|rocks|ro|rip|rio|ril|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|re|radio|racing|quest|quebec|qpon|qa|py|pwc|pw|pub|pt|ps|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|pr|post|porn|politie|poker|pohl|pnc|pn|pm|plus|plumbing|playstation|play|place|pl|pk|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|physio|photos|photography|photo|phone|philips|phd|pharmacy|ph|pg|pfizer|pf|pet|pe|pccw|pay|party|parts|partners|pars|paris|panasonic|page|pa|ovh|ott|otsuka|osaka|origins|organic|org|orange|oracle|open|ooo|online|onl|ong|one|omega|om|ollo|olayangroup|olayan|okinawa|office|observer|obi|nz|nyc|nu|ntt|nrw|nra|nr|np|nowtv|nowruz|now|norton|nokia|no|nl|nissay|nissan|ninja|nikon|nike|nico|ni|nhk|ngo|ng|nfl|nf|nexus|nextdirect|next|news|new|neustar|network|netflix|netbank|net|nec|ne|nc|nba|navy|name|nagoya|nab|na|mz|my|mx|mw|mv|music|museum|mu|mtr|mtn|mt|msd|ms|mr|mq|mp|movie|mov|motorcycles|moto|moscow|mortgage|mormon|monster|money|monash|mom|moi|moe|moda|mobile|mobi|mo|mn|mma|mm|mls|mlb|ml|mk|mitsubishi|mit|mint|mini|mil|microsoft|miami|mh|mg|merckmsd|menu|men|memorial|meme|melbourne|meet|media|med|me|md|mckinsey|mc|mba|mattel|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|ma|ly|lv|luxury|luxe|lundbeck|lu|ltda|ltd|lt|ls|lr|lplfinancial|lpl|love|lotto|lotte|london|lol|locus|locker|loans|loan|llp|llc|lk|living|live|lipsy|link|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|li|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lc|lb|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancaster|lamer|lamborghini|lacaixa|la|kz|kyoto|ky|kw|kuokgroup|kred|krd|kr|kpn|kpmg|kp|kosher|komatsu|koeln|kn|km|kiwi|kitchen|kindle|kim|kids|kia|ki|kh|kg|kfh|kerryproperties|kerrylogistics|kerryhotels|ke|kddi|kaufen|juniper|juegos|jprs|jpmorgan|jp|joy|jot|joburg|jobs|jo|jnj|jmp|jm|jll|jio|jewelry|jetzt|jeep|je|jcb|java|jaguar|itv|itau|it|istanbul|ist|ismaili|is|irish|ir|iq|ipiranga|io|investments|intuit|international|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|in|immobilien|immo|imdb|imamat|im|il|ikano|ifm|ieee|ie|id|icu|ice|icbc|ibm|hyundai|hyatt|hughes|hu|ht|hsbc|hr|how|house|hotmail|hotels|hot|hosting|host|hospital|horse|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hn|hm|hkt|hk|hiv|hitachi|hisamitsu|hiphop|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|gy|gw|guru|guitars|guide|guge|gucci|gu|gt|gs|group|grocery|gripe|green|gratis|graphics|grainger|gr|gq|gp|gov|got|gop|google|goog|goodyear|goo|golf|goldpoint|gold|godaddy|gn|gmx|gmo|gmbh|gmail|gm|globo|global|gle|glass|gl|giving|gives|gifts|gift|gi|gh|ggee|gg|gf|george|genting|gent|gea|ge|gdn|gd|gbiz|gb|gay|garden|gap|games|game|gallup|gallo|gallery|gal|ga|fyi|futbol|furniture|fund|fun|fujitsu|ftr|frontier|frogans|frl|fresenius|free|fr|fox|foundation|forum|forsale|forex|ford|football|food|foo|fo|fm|fly|flowers|florist|flir|flights|flickr|fk|fj|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fi|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|events|eus|eurovision|eu|et|estate|esq|es|erni|ericsson|er|equipment|epson|enterprises|engineering|engineer|energy|emerck|email|eg|ee|education|edu|edeka|eco|ec|eat|earth|dz|dvr|dvag|durban|dupont|dunlop|dubai|dtv|drive|download|dot|domains|dog|doctor|docs|do|dnp|dm|dk|dj|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|de|dds|dclk|day|datsun|dating|date|data|dance|dad|cz|cyou|cymru|cy|cx|cw|cv|cuisinella|cu|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cr|cpa|courses|coupons|coupon|country|corsica|coop|cool|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|com|cologne|college|coffee|codes|coach|co|cn|cm|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cl|ck|city|citic|citi|citadel|cisco|circle|cipriani|ci|church|chrome|christmas|chintai|cheap|chat|chase|charity|channel|chanel|ch|cg|cfd|cfa|cf|cern|ceo|center|cd|cc|cbre|cbn|cba|catholic|catering|cat|casino|cash|case|casa|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|camp|camera|cam|calvinklein|call|cal|cafe|cab|ca|bzh|bz|by|bw|bv|buzz|buy|business|builders|build|bt|bs|brussels|brother|broker|broadway|bridgestone|bradesco|br|box|boutique|bot|boston|bostik|bosch|booking|book|boo|bond|bom|bofa|boehringer|boats|bo|bnpparibas|bn|bmw|bms|bm|blue|bloomberg|blog|blockbuster|blackfriday|black|bj|biz|bio|bingo|bing|bike|bid|bible|bi|bharti|bh|bg|bf|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|be|bd|bcn|bcg|bbva|bbt|bbc|bb|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|banamex|baidu|baby|ba|azure|az|axa|ax|aws|aw|autos|auto|author|auspost|audio|audible|audi|auction|au|attorney|athleta|at|associates|asia|asda|as|arte|art|arpa|army|archi|aramco|arab|ar|aquarelle|aq|apple|app|apartments|aol|ao|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|am|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|al|akdn|airtel|airforce|airbus|aig|ai|agency|agakhan|ag|africa|afl|af|aetna|aero|aeg|ae|adult|ads|ad|actor|aco|accountants|accountant|accenture|academy|ac|abudhabi|abogado|able|abc|abbvie|abbott|abb|aarp|aaa)|(25[0-5]|(2[0-4]|1\d|[1-9]|)\d\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)))(?:\:(?<port>[0-9]{1,5}))?(?:[/\?](?:\S{0,255})*)?(?:(?=[\s,;!?()\[\]{}"'`<>])|$)/i.exec(n);
    return e !== null && e[0] === n;
  }, dF = n => new RegExp(Id, n), hF = n => new RegExp(i0, n), c0 = n => new RegExp(a0, n), Ro = new class {
    #e = yn(window.devicePixelRatio);
    #t() {
      const e = ke(window.matchMedia(`(resolution: ${ window.devicePixelRatio }dppx)`), 'change', () => {
        x(this.#e, window.devicePixelRatio), e(), this.#t();
      });
    }
    constructor() {
      this.#t();
    }
    get current() {
      p(this.#e);
      return window.devicePixelRatio;
    }
  }(), u0 = [
    'data:',
    'blob:'
  ], du = [
    32,
    48,
    50,
    64,
    72,
    96,
    128,
    176,
    192,
    223,
    224,
    288,
    320,
    480,
    492,
    600,
    720
  ], hu = [
    180,
    240,
    320,
    480,
    600,
    720,
    960,
    1080,
    1280,
    1440
  ];
class ts {
  baseUrl;
  constructor(e) {
    this.baseUrl = e;
  }
  #e = k(() => new URL(this.baseUrl));
  get original() {
    return p(this.#e);
  }
  set original(e) {
    x(this.#e, e);
  }
  get isLocal() {
    return u0.some(e => this.baseUrl.startsWith(e));
  }
  sized(e) {
    if (this.isLocal || !e)
      return this.original;
    const t = new URL(this.original), s = hu.find(r => r >= e * (Ro.current || 1)) || Math.max(...hu);
    t.searchParams.append('fn', `w_${ s }`);
    return t;
  }
}
class Sd extends ts {
  constructor(e) {
    super(e);
  }
  sized(e) {
    if (this.isLocal || !e)
      return this.original;
    const t = new URL(this.original), s = du.find(r => r >= e * (Ro.current || 1)) || Math.max(...du);
    t.searchParams.append('fn', `sqr_${ s }`);
    return t;
  }
}
class kt {
  static emojiUrl(e, t) {
    const s = [];
    let r = 0;
    for (; r < e.length;) {
      const l = e.codePointAt(r);
      l && (s.push(l), r += l > 65535 ? 2 : 1);
    }
    const a = [
        20,
        32,
        48
      ].find((l, d, c) => t <= l || d === c.length - 1) || 0, o = s.filter(l => l !== 65039 && l !== 8205).map(l => l.toString(16)).join('-');
    return new URL(`https://st.mycdn.me/static/emoji/15-0-0/${ a }/${ o }@2x.png`);
  }
  static COLORS = [
    [
      '#ff48b6',
      '#ff8a35'
    ],
    [
      '#ffc93d',
      '#ff832a'
    ],
    [
      '#14e1d5',
      '#03c722'
    ],
    [
      '#08d7f3',
      '#5398ff'
    ],
    [
      '#bf97ff',
      '#526eff'
    ]
  ];
  dataURL = new URL(Ht);
  constructor(e, t) {
    const s = Math.ceil(200 * (Ro.current || 1)), r = document.createElement('canvas');
    r.height = s, r.width = s;
    const i = r.getContext('2d');
    Z(i !== null), i.clearRect(0, 0, r.width, r.height);
    const a = i.createLinearGradient(0, 0, r.width, r.height), o = Math.abs(e % kt.COLORS.length), [l, d] = kt.COLORS[o] || kt.COLORS[0];
    a.addColorStop(0, l), a.addColorStop(1, d), i.fillStyle = a, i.fillRect(0, 0, r.width, r.height);
    const c = Math.round(s * 0.34);
    i.font = `600 ${ c }px Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`, i.textAlign = 'center', i.textBaseline = 'middle';
    const u = window.getComputedStyle(document.body).getPropertyValue('--text-contrast-static');
    i.fillStyle = u;
    const h = t.split(/\s/).slice(0, 2), f = (h[0] || '').matchAll(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g).next().value, m = (h[1] || '').matchAll(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g).next().value;
    if (f?.[0] && f.index === 0) {
      const g = new Image();
      g.crossOrigin = 'anonymous', g.src = kt.emojiUrl(f[0], c).href, g.onload = () => {
        g.width = c, g.height = c, i.drawImage(g, r.width / 2 - c / 2, r.height / 2 - c / 2, c, c), this.dataURL = new URL(r.toDataURL('image/png'));
      }, g.onerror = () => {
        i.fillText(f[0], r.width / 2, r.height / 2), this.dataURL = new URL(r.toDataURL('image/png'));
      }, this.dataURL = new URL(r.toDataURL('image/png'));
    } else {
      const g = (m?.[0] && m.index === 0 ? h.slice(0, 1) : h).map(D => D[0]).join('').toUpperCase();
      i.fillText(g, r.width / 2, r.height / 2), this.dataURL = new URL(r.toDataURL('image/png'));
    }
  }
  sized() {
    return this.dataURL;
  }
}
class qs extends te {
  static resolveId(e) {
    return e;
  }
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return qs.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  get name() {
    return this.$.name;
  }
  #e = k(() => new URL(this.$.iconUrl));
  get iconUrl() {
    return p(this.#e);
  }
  set iconUrl(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.iconLottieUrl ? new URL(this.$.iconLottieUrl) : null);
  get iconLottieUrl() {
    return p(this.#t);
  }
  set iconLottieUrl(e) {
    x(this.#t, e);
  }
  get animojiIds() {
    return new Te(this.$.animojiIds.map(e => $t.resolveId(e)));
  }
  #n = k(() => Array.from(this.animojiIds.values(), e => [
    e,
    M.assets.animojisCache.getLazy(e)
  ]));
  get animojis() {
    return p(this.#n);
  }
  set animojis(e) {
    x(this.#n, e);
  }
}
class $t extends te {
  static resolveId(e) {
    return e;
  }
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return $t.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  #e = k(() => this.$.lottieUrl ? new URL(this.$.lottieUrl) : null);
  get lottieUrl() {
    return p(this.#e);
  }
  set lottieUrl(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.lottiePlayUrl ? new URL(this.$.lottiePlayUrl) : null);
  get lottiePlayUrl() {
    return p(this.#t);
  }
  set lottiePlayUrl(e) {
    x(this.#t, e);
  }
  get setId() {
    return this.$.setId !== void 0 ? qs.resolveId(this.$.setId) : null;
  }
  get emoji() {
    return this.$.emoji;
  }
  #n = k(() => this.$.iconUrl ? new URL(this.$.iconUrl) : null);
  get iconUrl() {
    return p(this.#n);
  }
  set iconUrl(e) {
    x(this.#n, e);
  }
  get canPlay() {
    return !Bl.current;
  }
}
const cr = {
  QUOTE: 20,
  LINK: 10,
  HEADING: 0,
  USER_MENTION: 0,
  EMOJI: 0,
  ANIMOJI: 0,
  STRONG: 0,
  EMPHASIZED: 0,
  MONOSPACED: 0,
  STRIKETHROUGH: 0,
  UNDERLINE: 0,
  CODE: 0
};
let l0 = 0;
class ht {
  plain;
  nodes = [];
  constructor(e, t = []) {
    this.plain = e, this.buildNodes(e, this.enrichWithClientParsing(e, t)), this.mergeAdjacentTextNodes();
  }
  buildNodes(e, t) {
    const s = this.apiElementsToElementMarks(e, t);
    let r = 0, i = 0;
    const a = [], o = () => a[a.length - 1]?.children ?? this.nodes, l = (d, c) => {
        const u = e.slice(d, c);
        u && o().push(new xt(u, i));
      };
    for (const d of s)
      r < d.index && (l(r, d.index), r = d.index), d.endFormats.forEach(c => i &= ~c), d.endElements.forEach(c => {
        if (this.apiElementToNode(e, c) instanceof St) {
          const h = a.pop();
          h && o().push(h);
        }
      }), d.startFormats.forEach(c => i |= c), d.startElements.forEach(c => {
        const u = this.apiElementToNode(e, c);
        if (u instanceof St) {
          a.push(u);
          return;
        }
        (u instanceof Ts || u instanceof Is) && (o().push(u), r += u.length);
      });
    r < e.length && l(r, e.length);
  }
  enrichWithClientParsing(e, t) {
    const s = new Set(), r = [];
    for (const d of t) {
      const c = Math.max(d.from || 0, 0), u = d.length ?? e.length - c;
      if (u === 0)
        continue;
      const h = c + u, f = `${ c },${ h }`;
      switch (d.type) {
      case 'USER_MENTION':
      case 'ANIMOJI': {
          s.add(f);
          break;
        }
      case 'LINK': {
          try {
            new URL(d.attributes?.url || '');
          } catch {
            continue;
          }
          s.add(f);
          break;
        }
      case 'QUOTE':
      case 'CODE':
      case 'EMPHASIZED':
      case 'HEADING':
      case 'STRIKETHROUGH':
      case 'UNDERLINE':
      case 'STRONG':
      case 'MONOSPACED':
        break;
      default:
        d.type;
        break;
      }
      r.push({
        ...d,
        from: c,
        length: u
      });
    }
    Array.from(e.matchAll(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g)).forEach(d => {
      const c = d.index, u = d[0].length;
      s.has(`${ c },${ c + u }`) || r.push({
        type: 'EMOJI',
        from: c,
        length: u
      });
    });
    Array.from(e.matchAll(/(?:^|(?<=[\s,;!?()\[\]{}"'`<>]))([0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\+\-_%'](?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\+\-_%'\.]{0,62}[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\+\-_%'])?@(?=.{1,255}(?:\s|$|^))([0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿](?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿_\-]{0,61}[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿])?\.)+(?:香港|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|联通|网络|网站|网店|网址|组织机构|移动|点看|澳門|游戏|淡马锡|机构|書籍|时尚|新闻|新加坡|政府|政务|招聘|手机|我爱你|慈善|微博|广东|家電|娱乐|天主教|大拿|在线|嘉里大酒店|嘉里|商标|商店|商城|台灣|台湾|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中國|中国|中信|世界|みんな|ポイント|ファッション|セール|ストア|コム|クラウド|グーグル|アマゾン|한국|삼성|닷컴|닷넷|ລາວ|ไทย|คอม|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|संगठन|भारोत|भारतम्|भारत|नेट|कॉम|همراه|موقع|موريتانيا|مليسيا|مصر|كوم|كاثوليك|قطر|فلسطين|عمان|عرب|عراق|شبكة|سورية|سودان|تونس|ڀارت|پاکستان|بيتك|بھارت|بازار|بارت|ایران|امارات|المغرب|العليان|السعودية|الجزائر|البحرين|الاردن|ارامكو|ابوظبي|קום|ישראל|հայ|გე|укр|срб|сайт|рф|рус|орг|онлайн|москва|мон|мкд|қаз|ком|католик|ею|дети|бел|бг|ευ|ελ|zw|zuerich|zone|zm|zip|zero|zara|zappos|za|yun|yt|youtube|you|yokohama|yoga|yodobashi|ye|yandex|yamaxun|yahoo|yachts|xyz|xxx|xn--zfr164b|xn--ygbi2ammx|xn--yfro4i67o|xn--y9a3aq|xn--xkc2dl3a5ee0h|xn--xkc2al3hye2a|xn--xhq521b|xn--wgbl6a|xn--wgbh1c|xn--w4rs40l|xn--w4r85el8fhu5dnra|xn--vuq861b|xn--vhquv|xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--unup4y|xn--tiq49xqyj|xn--tckwe|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rvc1e0am3e|xn--rovu88b|xn--rhqv96g|xn--qxam|xn--qxa6a|xn--qcka1pmc|xn--q9jyb4c|xn--q7ce6a|xn--pssy2u|xn--pgbs0dh|xn--p1ai|xn--p1acf|xn--otu796d|xn--ogbpf8fl|xn--o3cw4h|xn--nyqy26a|xn--nqv7fs00ema|xn--nqv7f|xn--node|xn--ngbrx|xn--ngbe9e0a|xn--ngbc5azd|xn--mxtq1m|xn--mk1bu44c|xn--mix891f|xn--mgbx4cd0ab|xn--mgbtx2b|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbi4ecexp|xn--mgbgu82a|xn--mgberp4a5d4ar|xn--mgbcpq6gpa1a|xn--mgbca7dzdo|xn--mgbc0a9azcg|xn--mgbbh1a71e|xn--mgbbh1a|xn--mgbayh7gpa|xn--mgbai9azgqp6j|xn--mgbah1a3hjkrd|xn--mgbab2bd|xn--mgbaam7a8h|xn--mgba7c0bbn0a|xn--mgba3a4f16a|xn--mgba3a3ejt|xn--mgb9awbf|xn--lgbbat1ad8j|xn--l1acc|xn--kput3i|xn--kpry57d|xn--kprw13d|xn--kcrx77d1x4a|xn--jvr189m|xn--jlq480n2rg|xn--j6w193g|xn--j1amh|xn--j1aef|xn--io0a7i|xn--imr513n|xn--i1b6b1a6a2e|xn--hxt814e|xn--h2brj9c8c|xn--h2brj9c|xn--h2breg3eve|xn--gk3at1e|xn--gecrj9c|xn--gckr3f0f|xn--g2xx48c|xn--fzys8d69uvgm|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--flw351e|xn--fjq720a|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--fiq228c5hs|xn--fhbei|xn--fct429k|xn--efvy88h|xn--eckvdtc9d|xn--e1a4c|xn--d1alf|xn--d1acj3b|xn--czru2d|xn--czrs0t|xn--czr694b|xn--clchc0ea0b2g2a9gcd|xn--cg4bki|xn--cckwcxetd|xn--cck2b3b|xn--c2br7g|xn--c1avg|xn--bck1b9a5dre4c|xn--b4w605ferd|xn--9krt00a|xn--9et52u|xn--9dbq2a|xn--90ais|xn--90ae|xn--90a3ac|xn--8y0a063a|xn--80aswg|xn--80asehdb|xn--80aqecdr1a|xn--80ao21a|xn--80adxhks|xn--6qq986b3xl|xn--6frz82g|xn--5tzm5g|xn--5su34j936bgsg|xn--55qx5d|xn--55qw42g|xn--54b7fta0cc|xn--4gbrim|xn--4dbrk0ce|xn--45q11c|xn--45brj9c|xn--45br5cyl|xn--42c2d9a|xn--3pxu8k|xn--3hcrj9c|xn--3e0b707e|xn--3ds443g|xn--3bst00m|xn--30rr7y|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|xin|xihuan|xerox|xbox|wtf|wtc|ws|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|wf|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|wanggou|wang|walter|walmart|wales|vu|voyage|voto|voting|vote|volvo|vodka|vn|vlaanderen|vivo|viva|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vi|vg|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|ve|vc|vanguard|vana|vacations|va|uz|uy|us|ups|uol|uno|university|unicom|uk|ug|ubs|ubank|ua|tz|tw|tvs|tv|tushu|tunes|tui|tube|tt|trv|trust|travelersinsurance|travelers|travel|training|trading|trade|tr|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|to|tn|tmall|tm|tl|tkmaxx|tk|tjx|tjmaxx|tj|tirol|tires|tips|tienda|tickets|tiaa|theatre|theater|thd|th|tg|tf|teva|tennis|temasek|tel|technology|tech|team|tdk|td|tci|tc|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|sz|systems|sydney|sy|sx|swiss|swatch|sv|suzuki|surgery|surf|support|supply|supplies|sucks|su|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statefarm|statebank|star|staples|stada|st|ss|srl|sr|spot|sport|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|so|sncf|sn|smile|smart|sm|sling|sl|skype|sky|skin|ski|sk|sj|site|singles|sina|silk|si|show|shouji|shopping|shop|shoes|shiksha|shia|shell|sharp|shangrila|sh|sg|sfr|sexy|sex|sew|seven|services|sener|select|seek|security|secure|seat|search|se|sd|scot|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sc|sbs|sbi|sb|saxo|save|sas|sarl|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|sa|ryukyu|rwe|rw|run|ruhr|rugby|ru|rsvp|rs|room|rogers|rodeo|rocks|ro|rip|rio|ril|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|re|radio|racing|quest|quebec|qpon|qa|py|pwc|pw|pub|pt|ps|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|pr|post|porn|politie|poker|pohl|pnc|pn|pm|plus|plumbing|playstation|play|place|pl|pk|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|physio|photos|photography|photo|phone|philips|phd|pharmacy|ph|pg|pfizer|pf|pet|pe|pccw|pay|party|parts|partners|pars|paris|panasonic|page|pa|ovh|ott|otsuka|osaka|origins|organic|org|orange|oracle|open|ooo|online|onl|ong|one|omega|om|ollo|olayangroup|olayan|okinawa|office|observer|obi|nz|nyc|nu|ntt|nrw|nra|nr|np|nowtv|nowruz|now|norton|nokia|no|nl|nissay|nissan|ninja|nikon|nike|nico|ni|nhk|ngo|ng|nfl|nf|nexus|nextdirect|next|news|new|neustar|network|netflix|netbank|net|nec|ne|nc|nba|navy|name|nagoya|nab|na|mz|my|mx|mw|mv|music|museum|mu|mtr|mtn|mt|msd|ms|mr|mq|mp|movie|mov|motorcycles|moto|moscow|mortgage|mormon|monster|money|monash|mom|moi|moe|moda|mobile|mobi|mo|mn|mma|mm|mls|mlb|ml|mk|mitsubishi|mit|mint|mini|mil|microsoft|miami|mh|mg|merckmsd|menu|men|memorial|meme|melbourne|meet|media|med|me|md|mckinsey|mc|mba|mattel|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|ma|ly|lv|luxury|luxe|lundbeck|lu|ltda|ltd|lt|ls|lr|lplfinancial|lpl|love|lotto|lotte|london|lol|locus|locker|loans|loan|llp|llc|lk|living|live|lipsy|link|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|li|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lc|lb|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancaster|lamer|lamborghini|lacaixa|la|kz|kyoto|ky|kw|kuokgroup|kred|krd|kr|kpn|kpmg|kp|kosher|komatsu|koeln|kn|km|kiwi|kitchen|kindle|kim|kids|kia|ki|kh|kg|kfh|kerryproperties|kerrylogistics|kerryhotels|ke|kddi|kaufen|juniper|juegos|jprs|jpmorgan|jp|joy|jot|joburg|jobs|jo|jnj|jmp|jm|jll|jio|jewelry|jetzt|jeep|je|jcb|java|jaguar|itv|itau|it|istanbul|ist|ismaili|is|irish|ir|iq|ipiranga|io|investments|intuit|international|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|in|immobilien|immo|imdb|imamat|im|il|ikano|ifm|ieee|ie|id|icu|ice|icbc|ibm|hyundai|hyatt|hughes|hu|ht|hsbc|hr|how|house|hotmail|hotels|hot|hosting|host|hospital|horse|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hn|hm|hkt|hk|hiv|hitachi|hisamitsu|hiphop|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|gy|gw|guru|guitars|guide|guge|gucci|gu|gt|gs|group|grocery|gripe|green|gratis|graphics|grainger|gr|gq|gp|gov|got|gop|google|goog|goodyear|goo|golf|goldpoint|gold|godaddy|gn|gmx|gmo|gmbh|gmail|gm|globo|global|gle|glass|gl|giving|gives|gifts|gift|gi|gh|ggee|gg|gf|george|genting|gent|gea|ge|gdn|gd|gbiz|gb|gay|garden|gap|games|game|gallup|gallo|gallery|gal|ga|fyi|futbol|furniture|fund|fun|fujitsu|ftr|frontier|frogans|frl|fresenius|free|fr|fox|foundation|forum|forsale|forex|ford|football|food|foo|fo|fm|fly|flowers|florist|flir|flights|flickr|fk|fj|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fi|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|events|eus|eurovision|eu|et|estate|esq|es|erni|ericsson|er|equipment|epson|enterprises|engineering|engineer|energy|emerck|email|eg|ee|education|edu|edeka|eco|ec|eat|earth|dz|dvr|dvag|durban|dupont|dunlop|dubai|dtv|drive|download|dot|domains|dog|doctor|docs|do|dnp|dm|dk|dj|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|de|dds|dclk|day|datsun|dating|date|data|dance|dad|cz|cyou|cymru|cy|cx|cw|cv|cuisinella|cu|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cr|cpa|courses|coupons|coupon|country|corsica|coop|cool|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|com|cologne|college|coffee|codes|coach|co|cn|cm|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cl|ck|city|citic|citi|citadel|cisco|circle|cipriani|ci|church|chrome|christmas|chintai|cheap|chat|chase|charity|channel|chanel|ch|cg|cfd|cfa|cf|cern|ceo|center|cd|cc|cbre|cbn|cba|catholic|catering|cat|casino|cash|case|casa|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|camp|camera|cam|calvinklein|call|cal|cafe|cab|ca|bzh|bz|by|bw|bv|buzz|buy|business|builders|build|bt|bs|brussels|brother|broker|broadway|bridgestone|bradesco|br|box|boutique|bot|boston|bostik|bosch|booking|book|boo|bond|bom|bofa|boehringer|boats|bo|bnpparibas|bn|bmw|bms|bm|blue|bloomberg|blog|blockbuster|blackfriday|black|bj|biz|bio|bingo|bing|bike|bid|bible|bi|bharti|bh|bg|bf|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|be|bd|bcn|bcg|bbva|bbt|bbc|bb|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|banamex|baidu|baby|ba|azure|az|axa|ax|aws|aw|autos|auto|author|auspost|audio|audible|audi|auction|au|attorney|athleta|at|associates|asia|asda|as|arte|art|arpa|army|archi|aramco|arab|ar|aquarelle|aq|apple|app|apartments|aol|ao|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|am|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|al|akdn|airtel|airforce|airbus|aig|ai|agency|agakhan|ag|africa|afl|af|aetna|aero|aeg|ae|adult|ads|ad|actor|aco|accountants|accountant|accenture|academy|ac|abudhabi|abogado|able|abc|abbvie|abbott|abb|aarp|aaa))(?:(?=[\s,;!?()\[\]{}"'`<>])|$)/g)).forEach(d => {
      const c = d.index, u = d[0].length;
      s.has(`${ c },${ c + u }`) || r.push({
        type: 'LINK',
        from: c,
        length: u,
        attributes: { url: `mailto:${ d[0] }` }
      });
    });
    Array.from(e.matchAll(/(?:^|(?<=[\s,;!?()\[\]{}"'`<>]))(?:(?<protocol>(?:https?|ftp|rtsp):\/\/)(?<userInfo>(?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\$\-\_\.\+\!\*\'\(\)\,\;\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿\$\-\_\.\+\!\*\'\(\)\,\;\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?(?<domain>(([0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿](?:[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿_\-]{0,61}[0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿])?\.)+(?:香港|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|联通|网络|网站|网店|网址|组织机构|移动|点看|澳門|游戏|淡马锡|机构|書籍|时尚|新闻|新加坡|政府|政务|招聘|手机|我爱你|慈善|微博|广东|家電|娱乐|天主教|大拿|在线|嘉里大酒店|嘉里|商标|商店|商城|台灣|台湾|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中國|中国|中信|世界|みんな|ポイント|ファッション|セール|ストア|コム|クラウド|グーグル|アマゾン|한국|삼성|닷컴|닷넷|ລາວ|ไทย|คอม|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|संगठन|भारोत|भारतम्|भारत|नेट|कॉम|همراه|موقع|موريتانيا|مليسيا|مصر|كوم|كاثوليك|قطر|فلسطين|عمان|عرب|عراق|شبكة|سورية|سودان|تونس|ڀارت|پاکستان|بيتك|بھارت|بازار|بارت|ایران|امارات|المغرب|العليان|السعودية|الجزائر|البحرين|الاردن|ارامكو|ابوظبي|קום|ישראל|հայ|გე|укр|срб|сайт|рф|рус|орг|онлайн|москва|мон|мкд|қаз|ком|католик|ею|дети|бел|бг|ευ|ελ|zw|zuerich|zone|zm|zip|zero|zara|zappos|za|yun|yt|youtube|you|yokohama|yoga|yodobashi|ye|yandex|yamaxun|yahoo|yachts|xyz|xxx|xn--zfr164b|xn--ygbi2ammx|xn--yfro4i67o|xn--y9a3aq|xn--xkc2dl3a5ee0h|xn--xkc2al3hye2a|xn--xhq521b|xn--wgbl6a|xn--wgbh1c|xn--w4rs40l|xn--w4r85el8fhu5dnra|xn--vuq861b|xn--vhquv|xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--unup4y|xn--tiq49xqyj|xn--tckwe|xn--t60b56a|xn--ses554g|xn--s9brj9c|xn--rvc1e0am3e|xn--rovu88b|xn--rhqv96g|xn--qxam|xn--qxa6a|xn--qcka1pmc|xn--q9jyb4c|xn--q7ce6a|xn--pssy2u|xn--pgbs0dh|xn--p1ai|xn--p1acf|xn--otu796d|xn--ogbpf8fl|xn--o3cw4h|xn--nyqy26a|xn--nqv7fs00ema|xn--nqv7f|xn--node|xn--ngbrx|xn--ngbe9e0a|xn--ngbc5azd|xn--mxtq1m|xn--mk1bu44c|xn--mix891f|xn--mgbx4cd0ab|xn--mgbtx2b|xn--mgbt3dhd|xn--mgbpl2fh|xn--mgbi4ecexp|xn--mgbgu82a|xn--mgberp4a5d4ar|xn--mgbcpq6gpa1a|xn--mgbca7dzdo|xn--mgbc0a9azcg|xn--mgbbh1a71e|xn--mgbbh1a|xn--mgbayh7gpa|xn--mgbai9azgqp6j|xn--mgbah1a3hjkrd|xn--mgbab2bd|xn--mgbaam7a8h|xn--mgba7c0bbn0a|xn--mgba3a4f16a|xn--mgba3a3ejt|xn--mgb9awbf|xn--lgbbat1ad8j|xn--l1acc|xn--kput3i|xn--kpry57d|xn--kprw13d|xn--kcrx77d1x4a|xn--jvr189m|xn--jlq480n2rg|xn--j6w193g|xn--j1amh|xn--j1aef|xn--io0a7i|xn--imr513n|xn--i1b6b1a6a2e|xn--hxt814e|xn--h2brj9c8c|xn--h2brj9c|xn--h2breg3eve|xn--gk3at1e|xn--gecrj9c|xn--gckr3f0f|xn--g2xx48c|xn--fzys8d69uvgm|xn--fzc2c9e2c|xn--fpcrj9c3d|xn--flw351e|xn--fjq720a|xn--fiqz9s|xn--fiqs8s|xn--fiq64b|xn--fiq228c5hs|xn--fhbei|xn--fct429k|xn--efvy88h|xn--eckvdtc9d|xn--e1a4c|xn--d1alf|xn--d1acj3b|xn--czru2d|xn--czrs0t|xn--czr694b|xn--clchc0ea0b2g2a9gcd|xn--cg4bki|xn--cckwcxetd|xn--cck2b3b|xn--c2br7g|xn--c1avg|xn--bck1b9a5dre4c|xn--b4w605ferd|xn--9krt00a|xn--9et52u|xn--9dbq2a|xn--90ais|xn--90ae|xn--90a3ac|xn--8y0a063a|xn--80aswg|xn--80asehdb|xn--80aqecdr1a|xn--80ao21a|xn--80adxhks|xn--6qq986b3xl|xn--6frz82g|xn--5tzm5g|xn--5su34j936bgsg|xn--55qx5d|xn--55qw42g|xn--54b7fta0cc|xn--4gbrim|xn--4dbrk0ce|xn--45q11c|xn--45brj9c|xn--45br5cyl|xn--42c2d9a|xn--3pxu8k|xn--3hcrj9c|xn--3e0b707e|xn--3ds443g|xn--3bst00m|xn--30rr7y|xn--2scrj9c|xn--1qqw23a|xn--1ck2e1b|xn--11b4c3d|xin|xihuan|xerox|xbox|wtf|wtc|ws|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|wf|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|wanggou|wang|walter|walmart|wales|vu|voyage|voto|voting|vote|volvo|vodka|vn|vlaanderen|vivo|viva|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vi|vg|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|ve|vc|vanguard|vana|vacations|va|uz|uy|us|ups|uol|uno|university|unicom|uk|ug|ubs|ubank|ua|tz|tw|tvs|tv|tushu|tunes|tui|tube|tt|trv|trust|travelersinsurance|travelers|travel|training|trading|trade|tr|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|to|tn|tmall|tm|tl|tkmaxx|tk|tjx|tjmaxx|tj|tirol|tires|tips|tienda|tickets|tiaa|theatre|theater|thd|th|tg|tf|teva|tennis|temasek|tel|technology|tech|team|tdk|td|tci|tc|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|sz|systems|sydney|sy|sx|swiss|swatch|sv|suzuki|surgery|surf|support|supply|supplies|sucks|su|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statefarm|statebank|star|staples|stada|st|ss|srl|sr|spot|sport|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|so|sncf|sn|smile|smart|sm|sling|sl|skype|sky|skin|ski|sk|sj|site|singles|sina|silk|si|show|shouji|shopping|shop|shoes|shiksha|shia|shell|sharp|shangrila|sh|sg|sfr|sexy|sex|sew|seven|services|sener|select|seek|security|secure|seat|search|se|sd|scot|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sc|sbs|sbi|sb|saxo|save|sas|sarl|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|sa|ryukyu|rwe|rw|run|ruhr|rugby|ru|rsvp|rs|room|rogers|rodeo|rocks|ro|rip|rio|ril|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|re|radio|racing|quest|quebec|qpon|qa|py|pwc|pw|pub|pt|ps|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|pr|post|porn|politie|poker|pohl|pnc|pn|pm|plus|plumbing|playstation|play|place|pl|pk|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|physio|photos|photography|photo|phone|philips|phd|pharmacy|ph|pg|pfizer|pf|pet|pe|pccw|pay|party|parts|partners|pars|paris|panasonic|page|pa|ovh|ott|otsuka|osaka|origins|organic|org|orange|oracle|open|ooo|online|onl|ong|one|omega|om|ollo|olayangroup|olayan|okinawa|office|observer|obi|nz|nyc|nu|ntt|nrw|nra|nr|np|nowtv|nowruz|now|norton|nokia|no|nl|nissay|nissan|ninja|nikon|nike|nico|ni|nhk|ngo|ng|nfl|nf|nexus|nextdirect|next|news|new|neustar|network|netflix|netbank|net|nec|ne|nc|nba|navy|name|nagoya|nab|na|mz|my|mx|mw|mv|music|museum|mu|mtr|mtn|mt|msd|ms|mr|mq|mp|movie|mov|motorcycles|moto|moscow|mortgage|mormon|monster|money|monash|mom|moi|moe|moda|mobile|mobi|mo|mn|mma|mm|mls|mlb|ml|mk|mitsubishi|mit|mint|mini|mil|microsoft|miami|mh|mg|merckmsd|menu|men|memorial|meme|melbourne|meet|media|med|me|md|mckinsey|mc|mba|mattel|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|ma|ly|lv|luxury|luxe|lundbeck|lu|ltda|ltd|lt|ls|lr|lplfinancial|lpl|love|lotto|lotte|london|lol|locus|locker|loans|loan|llp|llc|lk|living|live|lipsy|link|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|li|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lc|lb|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancaster|lamer|lamborghini|lacaixa|la|kz|kyoto|ky|kw|kuokgroup|kred|krd|kr|kpn|kpmg|kp|kosher|komatsu|koeln|kn|km|kiwi|kitchen|kindle|kim|kids|kia|ki|kh|kg|kfh|kerryproperties|kerrylogistics|kerryhotels|ke|kddi|kaufen|juniper|juegos|jprs|jpmorgan|jp|joy|jot|joburg|jobs|jo|jnj|jmp|jm|jll|jio|jewelry|jetzt|jeep|je|jcb|java|jaguar|itv|itau|it|istanbul|ist|ismaili|is|irish|ir|iq|ipiranga|io|investments|intuit|international|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|in|immobilien|immo|imdb|imamat|im|il|ikano|ifm|ieee|ie|id|icu|ice|icbc|ibm|hyundai|hyatt|hughes|hu|ht|hsbc|hr|how|house|hotmail|hotels|hot|hosting|host|hospital|horse|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hn|hm|hkt|hk|hiv|hitachi|hisamitsu|hiphop|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|gy|gw|guru|guitars|guide|guge|gucci|gu|gt|gs|group|grocery|gripe|green|gratis|graphics|grainger|gr|gq|gp|gov|got|gop|google|goog|goodyear|goo|golf|goldpoint|gold|godaddy|gn|gmx|gmo|gmbh|gmail|gm|globo|global|gle|glass|gl|giving|gives|gifts|gift|gi|gh|ggee|gg|gf|george|genting|gent|gea|ge|gdn|gd|gbiz|gb|gay|garden|gap|games|game|gallup|gallo|gallery|gal|ga|fyi|futbol|furniture|fund|fun|fujitsu|ftr|frontier|frogans|frl|fresenius|free|fr|fox|foundation|forum|forsale|forex|ford|football|food|foo|fo|fm|fly|flowers|florist|flir|flights|flickr|fk|fj|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fi|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|events|eus|eurovision|eu|et|estate|esq|es|erni|ericsson|er|equipment|epson|enterprises|engineering|engineer|energy|emerck|email|eg|ee|education|edu|edeka|eco|ec|eat|earth|dz|dvr|dvag|durban|dupont|dunlop|dubai|dtv|drive|download|dot|domains|dog|doctor|docs|do|dnp|dm|dk|dj|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|de|dds|dclk|day|datsun|dating|date|data|dance|dad|cz|cyou|cymru|cy|cx|cw|cv|cuisinella|cu|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cr|cpa|courses|coupons|coupon|country|corsica|coop|cool|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|com|cologne|college|coffee|codes|coach|co|cn|cm|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cl|ck|city|citic|citi|citadel|cisco|circle|cipriani|ci|church|chrome|christmas|chintai|cheap|chat|chase|charity|channel|chanel|ch|cg|cfd|cfa|cf|cern|ceo|center|cd|cc|cbre|cbn|cba|catholic|catering|cat|casino|cash|case|casa|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|camp|camera|cam|calvinklein|call|cal|cafe|cab|ca|bzh|bz|by|bw|bv|buzz|buy|business|builders|build|bt|bs|brussels|brother|broker|broadway|bridgestone|bradesco|br|box|boutique|bot|boston|bostik|bosch|booking|book|boo|bond|bom|bofa|boehringer|boats|bo|bnpparibas|bn|bmw|bms|bm|blue|bloomberg|blog|blockbuster|blackfriday|black|bj|biz|bio|bingo|bing|bike|bid|bible|bi|bharti|bh|bg|bf|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|be|bd|bcn|bcg|bbva|bbt|bbc|bb|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|banamex|baidu|baby|ba|azure|az|axa|ax|aws|aw|autos|auto|author|auspost|audio|audible|audi|auction|au|attorney|athleta|at|associates|asia|asda|as|arte|art|arpa|army|archi|aramco|arab|ar|aquarelle|aq|apple|app|apartments|aol|ao|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|am|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|al|akdn|airtel|airforce|airbus|aig|ai|agency|agakhan|ag|africa|afl|af|aetna|aero|aeg|ae|adult|ads|ad|actor|aco|accountants|accountant|accenture|academy|ac|abudhabi|abogado|able|abc|abbvie|abbott|abb|aarp|aaa)|(25[0-5]|(2[0-4]|1\d|[1-9]|)\d\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)))(?:\:(?<port>[0-9]{1,5}))?(?:[/\?](?:\S{0,255})*)?(?:(?=[\s,;!?()\[\]{}"'`<>])|$)/gi)).forEach(d => {
      const c = d.index, u = d[0].length;
      if (!s.has(`${ c },${ c + u }`)) {
        const h = d.groups?.protocol ? d[0] : `https://${ d[0] }`;
        r.push({
          type: 'LINK',
          from: c,
          length: u,
          attributes: { url: h }
        });
      }
    });
    Array.from(e.matchAll(/(^|[	   ᠎           ​\u2028\u2029  　﻿\n\r])@([0-9A-Za-zͰ-ϿЀ-ӿԀ-ԯ԰-֏֐-׿؀-ۿ܀-ݏހ-޿ऀ-ॿঀ-৿਀-੿઀-૿଀-୿஀-௿ఀ-౿ಀ-೿ഀ-ൿ඀-෿฀-๿຀-໿ༀ-࿿က-႟Ⴀ-ჿᄀ-ᇿሀ-፿Ꭰ-᏿᐀-ᙿ -᚟ᚠ-᛿ᜀ-ᜟᜠ-᜿ᝀ-᝟ᝠ-᝿ក-៿᠀-᢯ᤀ-᥏ᥐ-᥿　-〿぀-ゟ゠-ヿ一-鿿_-]+)($|[	   ᠎           ​\u2028\u2029  　﻿\n\r])/g)).forEach(d => {
      const c = d[1]?.length || 0, u = d[3]?.length || 0, h = d.index + c, f = d[0].length - c - u;
      s.has(`${ h },${ h + f }`) || r.push({
        type: 'USER_MENTION',
        from: h,
        length: f,
        entityName: d[2]
      });
    });
    return r;
  }
  apiElementsToElementMarks(e, t) {
    const s = new Map(), r = a => {
        let o = s.get(a);
        o || (o = {
          index: a,
          startElements: [],
          endElements: [],
          startFormats: [],
          endFormats: []
        }, s.set(a, o));
        return o;
      };
    for (const a of t) {
      const o = Math.max(a.from || 0, 0), l = a.length ?? e.length - o;
      if (l === 0)
        continue;
      const d = o + l, c = r(o), u = r(d);
      switch (a.type) {
      case 'LINK':
      case 'QUOTE':
      case 'USER_MENTION':
      case 'HEADING': {
          c.startElements.push(a), u.endElements.push(a);
          break;
        }
      case 'EMOJI':
      case 'ANIMOJI': {
          c.startElements.push(a);
          break;
        }
      case 'STRONG': {
          c.startFormats.push(1), u.endFormats.push(1);
          break;
        }
      case 'EMPHASIZED': {
          c.startFormats.push(2), u.endFormats.push(2);
          break;
        }
      case 'MONOSPACED': {
          c.startFormats.push(16), u.endFormats.push(16);
          break;
        }
      case 'STRIKETHROUGH': {
          c.startFormats.push(8), u.endFormats.push(8);
          break;
        }
      case 'UNDERLINE': {
          c.startFormats.push(4), u.endFormats.push(4);
          break;
        }
      case 'CODE': {
          c.startFormats.push(16), u.endFormats.push(16);
          break;
        }
      default:
        a.type;
      }
    }
    const i = Array.from(s.values()).sort((a, o) => a.index - o.index);
    i.forEach(a => {
      a.startElements.sort((o, l) => l.length - o.length || cr[l.type] - cr[o.type]), a.endElements.sort((o, l) => o.length - l.length || cr[o.type] - cr[l.type]);
    });
    return i;
  }
  apiElementToNode(e, t) {
    switch (t.type) {
    case 'LINK':
      return new Qr(t.attributes?.url || '');
    case 'QUOTE':
      return new Yr();
    case 'USER_MENTION':
      return new Bs(t.entityId ? ae.resolveId(t.entityId) : null, t.entityName ?? null);
    case 'HEADING':
      return new qr();
    case 'EMOJI':
      return new Ts(e.slice(t.from, t.from + t.length));
    case 'ANIMOJI':
      return new Is(e.slice(t.from, t.from + t.length), t.attributes?.animojiLottieUrl || null, t.entityId ? $t.resolveId(t.entityId) : null);
    case 'STRONG':
    case 'EMPHASIZED':
    case 'MONOSPACED':
    case 'STRIKETHROUGH':
    case 'UNDERLINE':
    case 'CODE':
      return null;
    default:
      return t.type;
    }
  }
  mergeAdjacentTextNodes() {
    const e = t => {
      const s = [];
      for (const r of t) {
        if (r instanceof St) {
          r.children = e(r.children), s.push(r);
          continue;
        }
        if (r instanceof xt) {
          const i = s[s.length - 1];
          if (i instanceof xt && i.getFormat() === r.getFormat()) {
            const a = i.content + r.content;
            s[s.length - 1] = new xt(a, i.getFormat());
            continue;
          }
          s.push(r);
          continue;
        }
        s.push(r);
      }
      return s;
    };
    this.nodes = e(this.nodes);
  }
  get length() {
    return this.plain.length;
  }
  toApiElements() {
    const e = [];
    let t = 0;
    const s = (r, i = []) => {
      for (const a of r)
        switch (true) {
        case a instanceof xt: {
            const o = a.length;
            d0.forEach(l => {
              a.hasFormat(l) && e.push({
                type: h0[l],
                from: t,
                length: o
              });
            }), t += a.length;
            break;
          }
        case a instanceof Is: {
            const o = a.lottieUrl ? { animojiLottieUrl: a.lottieUrl } : void 0;
            e.push({
              type: 'ANIMOJI',
              from: t,
              length: a.length,
              entityId: a.entityId ?? void 0,
              attributes: o
            }), t += a.length;
            break;
          }
        case a instanceof Ts: {
            t += a.length;
            break;
          }
        case a instanceof St: {
            const o = t;
            s(a.children, i);
            const d = t - t;
            switch (true) {
            case a instanceof Qr: {
                if (a.isEmail)
                  break;
                e.push({
                  type: 'LINK',
                  from: t,
                  length: d,
                  attributes: { url: a.url }
                });
                break;
              }
            case a instanceof Bs: {
                e.push({
                  type: 'USER_MENTION',
                  from: t,
                  length: d,
                  entityId: a.entityId ?? void 0,
                  entityName: a.entityId ? void 0 : a.entityName ?? void 0
                });
                break;
              }
            case a instanceof Yr: {
                e.push({
                  type: 'QUOTE',
                  from: t,
                  length: d
                });
                break;
              }
            case a instanceof qr: {
                e.push({
                  type: 'HEADING',
                  from: t,
                  length: d
                });
                break;
              }
            }
            break;
          }
        }
    };
    s(this.nodes);
    return e;
  }
  chunk(e) {
    if (this.length <= e)
      return [this];
    const t = [], s = [...this.nodes];
    let r = [], i = 0, a = 0;
    const o = () => {
      if (r.length === 0)
        return;
      const l = this.plain.substring(a, a + i), d = new ht(l);
      d.nodes = r, t.push(d), a += i, r = [], i = 0;
    };
    for (; s.length > 0;) {
      const l = s.shift(), d = l.length;
      if (i + d <= e) {
        r.push(l), i += d;
        continue;
      }
      const c = e - i;
      if (c > 0) {
        const [u, h] = l.splitAt(c);
        u && (r.push(u), i += u.length), o(), h && s.unshift(h);
      } else
        o(), s.unshift(l);
    }
    o();
    return t;
  }
  find(e) {
    this.nodes.find;
    const t = [...this.nodes];
    for (; t.length > 0;) {
      const s = t.shift();
      if (!s)
        break;
      if (e(s))
        return s;
      s instanceof St && t.push(...s.children);
    }
  }
}
class yi {
  key;
  constructor() {
    this.key = l0++;
  }
}
class St extends yi {
  children = [];
  get length() {
    return this.children.reduce((e, t) => e + t.length, 0);
  }
  cloneWith(e) {
    const t = e();
    t.children = this.children.map(s => s.clone());
    return t;
  }
  toPlainText() {
    return this.children.map(e => e.toPlainText()).join('');
  }
  splitAt(e) {
    if (e <= 0)
      return [
        null,
        this
      ];
    let t = 0;
    for (let s = 0; s < this.children.length; s++) {
      const r = this.children[s];
      if (!r)
        continue;
      const i = r?.length;
      if (t + i <= e) {
        t += i;
        continue;
      }
      if (t < e) {
        const l = e - t, [d, c] = r.splitAt(l), u = this.clone();
        u.children = [
          ...this.children.slice(0, s),
          ...d ? [d] : []
        ];
        const h = this.clone();
        h.children = [
          ...c ? [c] : [],
          ...this.children.slice(s + 1)
        ];
        return [
          u.children.length > 0 ? u : null,
          h.children.length > 0 ? h : null
        ];
      }
      const a = this.clone();
      a.children = this.children.slice(0, s);
      const o = this.clone();
      o.children = this.children.slice(s);
      return [
        a.children.length > 0 ? a : null,
        o.children.length > 0 ? o : null
      ];
    }
    return [
      this,
      null
    ];
  }
}
const d0 = [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'monospaced'
  ], h0 = {
    bold: 'STRONG',
    italic: 'EMPHASIZED',
    underline: 'UNDERLINE',
    strikethrough: 'STRIKETHROUGH',
    monospaced: 'MONOSPACED'
  }, ze = {
    bold: 1,
    italic: 2,
    underline: 4,
    strikethrough: 8,
    monospaced: 16
  };
class xt extends yi {
  content;
  format = 0;
  constructor(e, t = 0) {
    super(), this.content = e, this.format = t;
  }
  clone() {
    return new xt(this.content, this.getFormat());
  }
  get length() {
    return this.content.length;
  }
  toPlainText() {
    return this.content;
  }
  getFormat() {
    return this.format;
  }
  hasFormat(e) {
    return (this.format & ze[e]) !== 0;
  }
  updateFormat(e, t) {
    const s = ze[e];
    this.format = t ? this.format | s : this.format & ~s;
  }
  splitAt(e) {
    if (e <= 0)
      return [
        null,
        this
      ];
    if (this.content.length <= e)
      return [
        this,
        null
      ];
    const t = this.content.substring(0, e), s = this.content.substring(e);
    return [
      new xt(t, this.format),
      new xt(s, this.format)
    ];
  }
}
class Ts extends yi {
  emoji;
  constructor(e) {
    super(), this.emoji = e;
  }
  clone() {
    return new Ts(this.emoji);
  }
  get length() {
    return this.emoji.length;
  }
  toPlainText() {
    return this.emoji;
  }
  splitAt(e) {
    return [
      null,
      this
    ];
  }
}
class Is extends yi {
  emoji;
  lottieUrl;
  entityId;
  constructor(e, t, s) {
    super(), this.emoji = e, this.lottieUrl = t, this.entityId = s;
  }
  clone() {
    return new Is(this.emoji, this.lottieUrl, this.entityId);
  }
  get length() {
    return this.emoji.length;
  }
  toPlainText() {
    return this.emoji;
  }
  splitAt(e) {
    return [
      null,
      this
    ];
  }
  get animoji() {
    return this.entityId ? M.assets.animojisCache.getLazy(this.entityId) : null;
  }
}
class qr extends St {
  clone() {
    return this.cloneWith(() => new qr());
  }
}
class Yr extends St {
  clone() {
    return this.cloneWith(() => new Yr());
  }
}
class Bs extends St {
  entityId;
  entityName;
  constructor(e, t) {
    super(), this.entityId = e, this.entityName = t;
  }
  clone() {
    return this.cloneWith(() => new Bs(this.entityId, this.entityName));
  }
  #e = k(async () => {
    if (this.entityId)
      return M.contacts.getLazy(this.entityId);
    if (this.entityName) {
      const e = M.contacts.mentionNameIndex.get(this.entityName);
      if (e)
        return M.contacts.get(e);
      try {
        const {modelByLink: t} = await jh(async () => {
            const {modelByLink: r} = await import('./DC99YI-p.js').then(i => i.H);
            return { modelByLink: r };
          }, [
            './DC99YI-p.js',
            './BVjRQOmL.js'
          ], import.meta.url), s = await t({ link: qm(this.entityName) });
        return s.chat || s.contact || null;
      } catch {
        return null;
      }
    }
    return null;
  });
  get entity() {
    return p(this.#e);
  }
  set entity(e) {
    x(this.#e, e);
  }
  get contact() {
    if (this.entityId)
      return M.contacts.getLazy(this.entityId);
    if (this.entityName) {
      const e = M.contacts.mentionNameIndex.get(this.entityName);
      return e ? M.contacts.get(e) : null;
    }
    return null;
  }
}
class Qr extends St {
  url;
  constructor(e) {
    super(), this.url = e;
  }
  clone() {
    return this.cloneWith(() => new Qr(this.url));
  }
  get isEmail() {
    return this.url.startsWith('mailto:');
  }
  get isCallLink() {
    return Nl(this.url, 'joincall/');
  }
  get snippet() {
    return M.linkSnippets.getLazy(this.url);
  }
}
class ae extends te {
  static OPTION_OFFICIAL = 'OFFICIAL';
  static resolveId(e) {
    let t;
    typeof e != 'number' && (t = new Error('contactId is not a number'));
    t && Mt?.error(t, {
      severity: 'warning',
      issueKey: 'contactId'
    });
    return e;
  }
  static resolveChatId(e, t) {
    return ce.resolveId(Number(BigInt(e) ^ BigInt(t)));
  }
  static fromApi(e) {
    return e.options?.includes('BOT') ? qn.fromApi(e) : us.fromApi(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return ae.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  get chatId() {
    return ae.resolveChatId(M.profile.viewer.id, this.id);
  }
  get presence() {
    return M.presences.getLazy(this.id);
  }
  #e = k(() => new Te(this.$.options ?? []));
  get options() {
    return p(this.#e);
  }
  set options(e) {
    x(this.#e, e);
  }
  get isOfficial() {
    return this.options.has(ae.OPTION_OFFICIAL);
  }
  #t = k(() => {
    switch (this.status) {
    case 'REMOVED':
      return false;
    case null:
    case 'BLOCKED':
    case 'HIDDEN':
      return M.contacts.viewerContactIds.has(this.id);
    default:
      return this.status;
    }
  });
  get isAdded() {
    return p(this.#t);
  }
  set isAdded(e) {
    x(this.#t, e);
  }
  #n = k(() => {
    switch (this.$.status) {
    case void 0:
      return null;
    case 'REMOVED':
    case 'HIDDEN':
    case 'BLOCKED':
      return this.$.status;
    default: {
        this.$.status;
        return null;
      }
    }
  });
  get status() {
    return p(this.#n);
  }
  set status(e) {
    x(this.#n, e);
  }
  #s = k(() => this.$.link ?? null);
  get link() {
    return p(this.#s);
  }
  set link(e) {
    x(this.#s, e);
  }
  #r = k(() => {
    if (this.link === null)
      return null;
    try {
      const e = new URL(this.link).pathname.slice(1);
      return e.length === 0 ? null : e;
    } catch {
      return null;
    }
  });
  get mentionName() {
    return p(this.#r);
  }
  set mentionName(e) {
    x(this.#r, e);
  }
  #i = k(() => new ht(this.$.description ?? ''));
  get description() {
    return p(this.#i);
  }
  set description(e) {
    x(this.#i, e);
  }
  #a = k(() => this.$.names[0]?.firstName ?? '...');
  get firstName() {
    return p(this.#a);
  }
  set firstName(e) {
    x(this.#a, e);
  }
  #o = k(() => this.$.names[0]?.lastName ?? null);
  get lastName() {
    return p(this.#o);
  }
  set lastName(e) {
    x(this.#o, e);
  }
  #c = k(() => this.lastName ? `${ this.firstName } ${ this.lastName.slice(0, 1) }` : this.firstName);
  get shortName() {
    return p(this.#c);
  }
  set shortName(e) {
    x(this.#c, e);
  }
  #u = k(() => this.firstName + (this.lastName ? ` ${ this.lastName }` : ''));
  get fullName() {
    return p(this.#u);
  }
  set fullName(e) {
    x(this.#u, e);
  }
  #l = k(() => {
    const e = this.$.names.find(t => t.type === 'ONEME') ?? { firstName: '...' };
    return e.firstName + (e.lastName ? ` ${ e.lastName }` : '');
  });
  get selfFullName() {
    return p(this.#l);
  }
  set selfFullName(e) {
    x(this.#l, e);
  }
  #d = k(() => this.$.photoId ?? null);
  get photoId() {
    return p(this.#d);
  }
  set photoId(e) {
    x(this.#d, e);
  }
  #h = k(() => this.$.baseUrl ? new Sd(this.$.baseUrl) : new kt(this.id, this.fullName));
  get baseUrl() {
    return p(this.#h);
  }
  set baseUrl(e) {
    x(this.#h, e);
  }
}
class us extends ae {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e), this.sharedChats = new f0();
  }
  sharedChats;
  get isViewer() {
    return this.id === M.profile.viewer.id;
  }
  get phone() {
    return this.$.phone ?? null;
  }
  get country() {
    return this.$.country || 'RU';
  }
  get chat() {
    return M.chats.getLazy(this.chatId);
  }
}
class qn extends ae {
  static OPTION_HAS_WEBAPP = 'HAS_WEBAPP';
  static OPTION_RESTRICTED = 'RESTRICTED';
  static OPTION_NO_FORWARD = 'NO_FORWARD';
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  isViewer = false;
  get webApp() {
    return this.options.has(qn.OPTION_HAS_WEBAPP) && this.$.webApp || null;
  }
  get chat() {
    return M.chats.getLazy(this.chatId);
  }
  get menuButtonText() {
    return this.$.menuButton?.text || null;
  }
  get isRestricted() {
    return this.options.has(qn.OPTION_RESTRICTED);
  }
  get isNoForward() {
    return this.options.has(qn.OPTION_NO_FORWARD);
  }
}
class f0 {
  ids = new Te();
  #e = W(We(Number.MAX_SAFE_INTEGER));
  get marker() {
    return p(this.#e);
  }
  set marker(e) {
    x(this.#e, e, true);
  }
  constructor() {
  }
  get hasMore() {
    return !!this.marker;
  }
  add(e) {
    e.forEach(t => this.ids.add(t));
  }
  reset() {
    this.ids.clear(), this.marker = Number.MAX_SAFE_INTEGER;
  }
  #t = k(() => Array.from(this.ids.values(), e => [
    e,
    M.chats.getLazy(e)
  ]));
  get chats() {
    return p(this.#t);
  }
  set chats(e) {
    x(this.#t, e);
  }
}
class Fe extends te {
  contactId;
  static STATUS_OFFLINE = 0;
  static STATUS_ONLINE = 1;
  static STATUS_WAS_RECENTLY = 2;
  static STATUS_WAS_LONG_AGO = 3;
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(e), this.contactId = t;
  }
  get id() {
    return this.contactId;
  }
  get syncTime() {
    return this.$.seen * 1000;
  }
  get isOnline() {
    return this.status === Fe.STATUS_ONLINE;
  }
  get seen() {
    return this.$.seen * 1000;
  }
  get status() {
    if (this.id === M.profile.viewer.id)
      return Fe.STATUS_ONLINE;
    switch (this.$.status) {
    case void 0:
      break;
    case Fe.STATUS_OFFLINE:
    case Fe.STATUS_ONLINE:
    case Fe.STATUS_WAS_RECENTLY:
    case Fe.STATUS_WAS_LONG_AGO:
      return this.$.status;
    default: {
        this.$.status;
        return Fe.STATUS_OFFLINE;
      }
    }
    switch (this.$.on) {
    case void 0:
      return Fe.STATUS_OFFLINE;
    case 'ON':
      return Fe.STATUS_ONLINE;
    case 'INVISIBLE':
      return Fe.STATUS_WAS_RECENTLY;
    case 'WAS_RECENTLY':
      return Fe.STATUS_WAS_RECENTLY;
    case 'WAS_LONG_AGO':
      return Fe.STATUS_WAS_LONG_AGO;
    default: {
        this.$.on;
        return Fe.STATUS_OFFLINE;
      }
    }
  }
}
class Sn extends te {
  static resolveId(e) {
    return e;
  }
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return Sn.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  get name() {
    return this.$.name;
  }
  get link() {
    return this.$.link;
  }
  #e = k(() => new URL(this.$.iconUrl));
  get iconUrl() {
    return p(this.#e);
  }
  set iconUrl(e) {
    x(this.#e, e);
  }
  #t = k(() => new Te(this.$.stickers.map(e => zt.resolveId(e))));
  get stickerIds() {
    return p(this.#t);
  }
  set stickerIds(e) {
    x(this.#t, e);
  }
  get isFavorite() {
    return M.assets.assetSectionsCache.favoriteSetsSection.stickerSetIds.findIndex(e => this.id === e) !== -1;
  }
  #n = k(() => Array.from(this.stickerIds.values(), e => [
    e,
    M.assets.stickersCache.getLazy(e)
  ]));
  get stickers() {
    return p(this.#n);
  }
  set stickers(e) {
    x(this.#n, e);
  }
  #s = k(() => Array.from(this.stickerIds.values(), e => [
    e,
    () => M.assets.stickersCache.getLazy(e)
  ]));
  get stickersLazy() {
    return p(this.#s);
  }
  set stickersLazy(e) {
    x(this.#s, e);
  }
}
class zt extends te {
  static resolveId(e) {
    return e;
  }
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return zt.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  get updateTime() {
    return this.$.updateTime;
  }
  get width() {
    return this.$.width;
  }
  get height() {
    return this.$.height;
  }
  #e = k(() => new URL(this.$.url));
  get url() {
    return p(this.#e);
  }
  set url(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.lottieUrl ? new URL(this.$.lottieUrl) : null);
  get lottieUrl() {
    return p(this.#t);
  }
  set lottieUrl(e) {
    x(this.#t, e);
  }
  #n = k(() => this.$.videoUrl ? new URL(this.$.videoUrl) : null);
  get videoUrl() {
    return p(this.#n);
  }
  set videoUrl(e) {
    x(this.#n, e);
  }
  get setId() {
    return this.$.setId ? Sn.resolveId(this.$.setId) : null;
  }
  get canPlay() {
    return !Bl.current;
  }
}
class ns {
  #e = W(0);
  get bits() {
    return p(this.#e);
  }
  set bits(e) {
    x(this.#e, e, true);
  }
  constructor(e) {
    this.bits = e instanceof ns ? e.bits : e;
  }
  set(e, t) {
    this.bits = t ? this.bits | e : this.bits & ~e;
  }
  get(e) {
    return (this.bits & e) === e;
  }
}
class re extends te {
  static FLAG_POST_EDIT_DELETE_MESSAGE = 1;
  static FLAG_ADD_REMOVE_MEMBER = 2;
  static FLAG_ADD_ADMIN = 4;
  static FLAG_CHANGE_CHAT_INFO = 8;
  static FLAG_PIN_MESSAGE = 16;
  static FLAG_READ_ALL_MESSAGES = 32;
  static FLAG_CALL = 64;
  static FLAG_EDIT_LINK = 128;
  static FLAG_POST_MESSAGE = 256;
  static FLAG_EDIT_MESSAGE = 512;
  static FLAG_DELETE_MESSAGE = 1024;
  static FLAG_VIEW_STATS = 2048;
  static CHAT_DEFAULT_FLAGS = re.FLAG_CHANGE_CHAT_INFO | re.FLAG_PIN_MESSAGE | re.FLAG_ADD_REMOVE_MEMBER | re.FLAG_EDIT_LINK | re.FLAG_READ_ALL_MESSAGES | re.FLAG_POST_EDIT_DELETE_MESSAGE | re.FLAG_CALL;
  static CHANNEL_DEFAULT_FLAGS = re.FLAG_CHANGE_CHAT_INFO | re.FLAG_PIN_MESSAGE | re.FLAG_ADD_REMOVE_MEMBER | re.FLAG_EDIT_LINK | re.FLAG_READ_ALL_MESSAGES | re.FLAG_POST_MESSAGE | re.FLAG_EDIT_MESSAGE | re.FLAG_DELETE_MESSAGE | re.FLAG_VIEW_STATS;
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return ae.resolveId(this.$.id);
  }
  get inviterId() {
    return this.$.inviterId ? ae.resolveId(this.$.inviterId) : null;
  }
  #e = k(() => new ns(this.$.permissions ?? 0));
  get permissions() {
    return p(this.#e);
  }
  set permissions(e) {
    x(this.#e, e);
  }
  get alias() {
    return this.$.alias ?? null;
  }
  get contact() {
    return M.contacts.getLazy(this.id);
  }
  get promotedByMe() {
    return this.inviterId === M.profile.viewer.id;
  }
  get inviter() {
    return this.inviterId ? M.contacts.getLazy(this.inviterId) : null;
  }
}
class xn {
  text;
  #e = W(false);
  get loading() {
    return p(this.#e);
  }
  set loading(e) {
    x(this.#e, e, true);
  }
  constructor(e) {
    this.text = e.text;
  }
}
class m0 extends xn {
  type;
  url;
  constructor(e) {
    super(e), this.type = e.type, this.url = e.url;
  }
}
class p0 extends xn {
  type;
  payload;
  constructor(e) {
    super(e), this.type = e.type, this.payload = e.payload;
  }
}
class g0 extends xn {
  type;
  payload;
  constructor(e) {
    super(e), this.type = e.type, this.payload = e.payload;
  }
}
class D0 extends xn {
  type;
  quick;
  constructor(e) {
    super(e), this.type = e.type, this.quick = e.quick;
  }
}
class _0 extends xn {
  type;
  constructor(e) {
    super(e), this.type = e.type;
  }
}
class xd extends xn {
  type;
  contactId;
  payload;
  webApp;
  constructor(e) {
    super(e), this.type = e.type, this.contactId = ae.resolveId(e.contactId), this.payload = e.payload ?? null, this.webApp = e.webApp;
  }
}
class v0 extends xn {
  type;
  constructor(e) {
    super(e), this.type = e.type;
  }
}
class b0 {
  button;
  type;
  constructor(e) {
    this.button = e, this.type = '_UNKNOWN';
  }
}
class jt {
  unknown = [];
  sticker = null;
  photosVideos = [];
  videoMessage = null;
  share = null;
  file = null;
  audio = null;
  contact = null;
  location = null;
  call = null;
  inlineKeyboard = null;
  constructor(e) {
    if (e instanceof jt) {
      const t = e;
      this.unknown.push(...e.unknown), this.photosVideos.push(...e.photosVideos), this.sticker = e.sticker, this.share = e.share;
    } else
      for (const t of e)
        switch (t._type) {
        case 'CONTROL':
        case 'WIDGET':
          break;
        case 'STICKER':
          this.sticker = new y0(t);
          break;
        case 'PHOTO':
          t.mp4Url ? this.photosVideos.push(new Ma(t)) : this.photosVideos.push(new an(t));
          break;
        case 'VIDEO':
          t.videoType === 1 ? this.videoMessage = new E0(t) : this.photosVideos.push(new Us(t));
          break;
        case 'SHARE':
          this.share = new Ai(t);
          break;
        case 'FILE':
          this.file = new Od(t);
          break;
        case 'AUDIO':
          this.audio = new A0(t);
          break;
        case 'CONTACT':
          this.contact = new C0(t);
          break;
        case 'LOCATION':
          this.location = new I0(t);
          break;
        case 'INLINE_KEYBOARD':
          this.inlineKeyboard = new ko(t);
          break;
        case 'CALL':
          this.call = new T0(t);
          break;
        case 'APP':
        case 'REPLY_KEYBOARD':
        case 'BOT_PAYLOAD':
          break;
        default:
          this.unknown.push(new w0(t));
        }
  }
  #e = k(() => [
    ...this.unknown,
    this.sticker,
    ...this.photosVideos,
    this.share,
    this.file,
    this.audio,
    this.call,
    this.location,
    this.contact,
    this.inlineKeyboard,
    this.videoMessage
  ].filter(e => e !== null));
  get all() {
    return p(this.#e);
  }
  set all(e) {
    x(this.#e, e);
  }
  get isEmpty() {
    return this.all.length === 0;
  }
}
class w0 {
  apiAttach;
  id;
  constructor(e) {
    this.apiAttach = e, this.id = 0;
  }
}
class Ai {
  apiAttach;
  id;
  url;
  title;
  description;
  host;
  image = null;
  media;
  contentLevel;
  constructor(e) {
    this.apiAttach = e;
    this.id = e.shareId;
    this.url = e.url || '';
    this.title = e.title ?? null;
    this.description = e.description || '';
    this.host = e.host || '';
    if (!this.host)
      try {
        this.host = new URL(this.url).host;
      } catch {
      }
    switch (e.image && (this.image = new an(e.image)), this.contentLevel = !!e.contentLevel, e.media?._type) {
    case 'SHARE':
      this.media = new Ai(e.media);
      break;
    case 'PHOTO':
      this.media = new an(e.media);
      break;
    case 'VIDEO':
      this.media = new Us(e.media);
      break;
    case void 0:
      break;
    default:
      e.media;
    }
  }
  get isCallAttach() {
    return Nl(this.url, 'joincall/');
  }
  get isGrabbed() {
    return this.title !== null && this.title !== this.url;
  }
  get isSensitive() {
    return M.profile.viewer.settings.CONTENT_LEVEL_ACCESS && this.contentLevel;
  }
}
class an {
  id;
  url;
  width;
  height;
  previewData;
  token = null;
  constructor(e) {
    this.id = e.photoId, this.token = e.photoToken || null, this.url = e.baseUrl ? new ts(e.baseUrl) : new URL(e.url || Ht), this.width = e.width || 0, this.height = e.height || 0, this.previewData = e.previewData ? new URL(e.previewData) : null;
  }
  get aspectRatio() {
    return this.width / this.height;
  }
}
class Ma {
  id;
  url;
  width;
  height;
  previewData;
  mp4Url;
  token = null;
  constructor(e) {
    this.id = e.photoId, this.url = e.baseUrl ? new ts(e.baseUrl) : new URL(e.url || Ht), this.token = e.photoToken || null, this.width = e.width || 0, this.height = e.height || 0, this.previewData = e.previewData ? new URL(e.previewData) : null, this.mp4Url = e.mp4Url ? new URL(e.mp4Url) : null;
  }
  get aspectRatio() {
    return this.width / this.height;
  }
}
class Us {
  id;
  width;
  height;
  thumbnail = new URL(Ht);
  previewData;
  token;
  constructor(e) {
    this.id = e.videoId, this.token = e.token || null, this.width = e.width || 0, this.height = e.height || 0, e.thumbnail && (this.thumbnail = new URL(e.thumbnail)), this.previewData = e.previewData ? new URL(e.previewData) : null;
  }
  get aspectRatio() {
    return this.width / this.height;
  }
}
class E0 {
  id;
  width;
  height;
  thumbnail = new URL(Ht);
  previewData;
  duration;
  token = null;
  constructor(e) {
    this.id = e.videoId, this.token = e.token || null, this.width = e.width || 0, this.height = e.height || 0, e.thumbnail && (this.thumbnail = new URL(e.thumbnail)), this.previewData = e.previewData ? new URL(e.previewData) : null, this.duration = e.duration || null;
  }
  get aspectRatio() {
    return 1;
  }
}
class y0 {
  id;
  setId;
  width;
  height;
  url;
  lottieUrl;
  mp4Url;
  updateTime;
  constructor(e) {
    this.id = zt.resolveId(e.stickerId), this.width = e.width, this.height = e.height, this.setId = e.setId ? Sn.resolveId(e.setId) : void 0, this.url = new URL(e.url), this.lottieUrl = e.lottieUrl ? new URL(e.lottieUrl) : null, this.mp4Url = e.mp4Url ? new URL(e.mp4Url) : null, this.updateTime = e.updateTime;
  }
  get sticker() {
    return M.assets.stickersCache.getLazy(this.id);
  }
}
class Od {
  id;
  token;
  size;
  name;
  preview;
  deleted = false;
  constructor(e) {
    this.id = e.fileId;
    this.size = e.size;
    this.name = e.name;
    e.token && (this.token = e.token);
    e.deleted && (this.deleted = e.deleted);
    if (e.preview)
      switch (e.preview._type) {
      case 'PHOTO':
        this.preview = new an(e.preview);
        break;
      case 'VIDEO':
        this.preview = new Us(e.preview);
        break;
      case 'AUDIO':
        break;
      case 'WIDGET':
      case 'FILE':
      case 'SHARE':
      case 'APP':
      case 'BOT_PAYLOAD':
      case 'CALL':
      case 'CONTROL':
      case 'CONTACT':
      case 'LOCATION':
      case 'INLINE_KEYBOARD':
      case 'REPLY_KEYBOARD':
      case 'STICKER':
        break;
      default:
        e.preview;
      }
  }
  get nameExtensionless() {
    return this.name.split('.').slice(0, -1).join('.');
  }
  get extension() {
    return this.name.split('.').pop() || '';
  }
  downloading(e, t) {
    return M.downloadUpload.getDownloadFile(this.id, e, t);
  }
}
class mF {
  id;
  url;
  name;
  unsafe;
  #e = W(0);
  get loaded() {
    return p(this.#e);
  }
  set loaded(e) {
    x(this.#e, e, true);
  }
  #t = W(0);
  get total() {
    return p(this.#t);
  }
  set total(e) {
    x(this.#t, e, true);
  }
  expires;
  #n = W(null);
  get filePath() {
    return p(this.#n);
  }
  set filePath(e) {
    x(this.#n, e, true);
  }
  constructor(e, t, s, r) {
    this.id = e, this.url = t, this.name = s, this.unsafe = r;
    const a = new URL(t).searchParams.get('expires');
    this.expires = Number(a) || tn.now + 86400000;
  }
  get progress() {
    return Math.round(this.loaded / this.total * 100) / 100;
  }
  get isDownloading() {
    return this.progress > 0 && this.progress < 1;
  }
}
class A0 {
  id;
  duration;
  url;
  token;
  transcriptionStatus;
  wave;
  constructor(e) {
    this.id = e.audioId, this.duration = e.duration, this.url = new URL(e.url), this.token = e.token || null, this.transcriptionStatus = e.transcriptionStatus || null, this.wave = e.wave || null;
  }
}
class C0 {
  contactId;
  firstName;
  lastName;
  baseUrl = null;
  phone;
  constructor(e) {
    this.firstName = e.name, this.lastName = e.lastName || '', e.contactId && (this.contactId = ae.resolveId(e.contactId)), e.photoUrl && (this.baseUrl = new ts(e.photoUrl)), e.phone && (this.phone = e.phone);
  }
  get id() {
    return this.contactId;
  }
  #e = k(() => this.baseUrl || new kt(this.contactId || 1, this.fullName));
  get photoUrl() {
    return p(this.#e);
  }
  set photoUrl(e) {
    x(this.#e, e);
  }
  get fullName() {
    return this.contact ? this.contact.fullName : this.firstName + (this.lastName ? ` ${ this.lastName }` : '');
  }
  get contact() {
    return this.contactId ? M.contacts.get(this.contactId) : null;
  }
}
class T0 {
  id;
  type;
  hangupType;
  duration;
  joinLink;
  constructor(e) {
    this.id = e.conversationId, this.joinLink = e.joinLink, this.type = e.callType, this.hangupType = e.hangupType, this.duration = e.duration;
  }
}
class I0 {
  latitude;
  longitude;
  zoom;
  constructor(e) {
    this.latitude = e.latitude, this.longitude = e.longitude, this.zoom = e.zoom || 16;
  }
}
class ko {
  callbackId;
  buttons;
  constructor(e) {
    this.callbackId = e.callbackId, this.buttons = e.keyboard.buttons.map(t => t.map(s => {
      switch (s.type) {
      case 'LINK':
        return new m0(s);
      case 'CHAT':
        return new p0(s);
      case 'CALLBACK':
        return new g0(s);
      case 'REQUEST_GEO_LOCATION':
        return new D0(s);
      case 'REQUEST_CONTACT':
        return new _0(s);
      case 'OPEN_APP':
        return new xd(s);
      case 'MESSAGE':
        return new v0(s);
      default:
        return new b0(s);
      }
    }));
  }
}
const ur = 0.05, F0 = 0.95, S0 = 12;
class Hs {
  attaches;
  removedAttaches = new Te();
  #e = W(We([]));
  get pendingPhotosVideos() {
    return p(this.#e);
  }
  set pendingPhotosVideos(e) {
    x(this.#e, e, true);
  }
  #t = W(null);
  get pendingFile() {
    return p(this.#t);
  }
  set pendingFile(e) {
    x(this.#t, e, true);
  }
  constructor(e) {
    e ? e instanceof jt ? this.attaches = e : (this.attaches = e.attaches, this.pendingPhotosVideos.push(...e.pendingPhotosVideos)) : this.attaches = new jt([]);
  }
  get unknown() {
    return this.attaches.unknown;
  }
  #n = k(() => [
    ...this.attaches.photosVideos,
    ...this.pendingPhotosVideos
  ].filter(e => !this.removedAttaches.has(e)));
  get photosVideos() {
    return p(this.#n);
  }
  set photosVideos(e) {
    x(this.#n, e);
  }
  get videoMessage() {
    return this.attaches.videoMessage;
  }
  get sticker() {
    return this.attaches.sticker;
  }
  get share() {
    return this.attaches.share;
  }
  get location() {
    return this.attaches.location;
  }
  get contact() {
    return this.attaches.contact;
  }
  get inlineKeyboard() {
    return this.attaches.inlineKeyboard;
  }
  get audio() {
    return this.attaches.audio;
  }
  get call() {
    return this.attaches.call;
  }
  get file() {
    return this.pendingFile || this.attaches.file;
  }
  #s = k(() => [
    ...this.pendingPhotosVideos,
    this.pendingFile
  ].filter(e => e !== null));
  get allPending() {
    return p(this.#s);
  }
  set allPending(e) {
    x(this.#s, e);
  }
  #r = k(() => this.attaches.all.filter(e => e !== null && !this.removedAttaches.has(e)));
  get allConfirmed() {
    return p(this.#r);
  }
  set allConfirmed(e) {
    x(this.#r, e);
  }
  #i = k(() => [
    ...this.allConfirmed,
    ...this.allPending
  ].filter(e => e !== null));
  get all() {
    return p(this.#i);
  }
  set all(e) {
    x(this.#i, e);
  }
  get isEmpty() {
    return this.all.length === 0;
  }
  get areUploaded() {
    return this.isEmpty ? true : this.allPending.every(e => e.isUploaded);
  }
  add(e) {
    for (const t of e)
      switch (true) {
      case t instanceof fu:
      case t instanceof mu: {
          if (this.all.length >= S0)
            break;
          this.pendingPhotosVideos.push(t);
          break;
        }
      case t instanceof pu:
        this.pendingFile = t;
        break;
      }
  }
  remove(e) {
    switch (true) {
    case e instanceof fu:
    case e instanceof mu:
      this.pendingPhotosVideos.splice(this.pendingPhotosVideos.findIndex(t => t === e), 1), e.finishUpload(), e.abort?.();
      break;
    case e instanceof pu:
      this.pendingFile = null, e.finishUpload(), e.abort?.();
      break;
    default:
      this.removedAttaches.add(e);
    }
  }
}
class Lo {
  id;
  #e = W(ur);
  get progress() {
    return p(this.#e);
  }
  set progress(e) {
    x(this.#e, e, true);
  }
  isUploading;
  resolveUploading;
  #t = W(null);
  get error() {
    return p(this.#t);
  }
  set error(e) {
    x(this.#t, e, true);
  }
  #n = W(null);
  get abortFn() {
    return p(this.#n);
  }
  set abortFn(e) {
    x(this.#n, e, true);
  }
  #s = W(null);
  get retryFn() {
    return p(this.#s);
  }
  set retryFn(e) {
    x(this.#s, e, true);
  }
  constructor(e) {
    this.id = e, this.resolveUploading = () => {
    }, this.isUploading = new Promise(t => {
      this.resolveUploading = t;
    });
  }
  get isUploaded() {
    return this.progress === 1;
  }
  get abort() {
    return this.isUploaded ? null : this.abortFn;
  }
  get retry() {
    return this.error ? this.retryFn : null;
  }
  startUpload(e, {
    abort: t,
    retry: s
  }) {
    if (this.progress === 1)
      return;
    const r = this.resolveUploading;
    this.isUploading = new Promise(i => {
      this.resolveUploading = i;
    }).then(r), this.id = e, this.progress = ur, this.error = null, this.abortFn = t, this.retryFn = s;
  }
  progressUpload(e) {
    this.progress !== 1 && (this.progress = Math.max(Math.min(e, F0), ur));
  }
  finishUpload(e) {
    if (this.progress !== 1) {
      e ? (this.progress = ur, this.error = e) : (this.progress = 1, this.error = null);
      this.resolveUploading();
      this.resolveUploading = () => {
      };
      return this.isUploading;
    }
  }
}
class fu extends Lo {
  cid;
  filename;
  width;
  height;
  token = null;
  url;
  thumbnail = new URL(Ht);
  previewData;
  constructor(e, t, s = Ht, r = 400, i = 300) {
    super(e), this.cid = e, this.filename = t, this.width = r, this.height = i, this.url = new URL(s), this.previewData = new URL(s);
  }
  get aspectRatio() {
    return this.width / this.height;
  }
  updateToken(e) {
    this.token = e;
  }
}
class mu extends Lo {
  cid;
  filename;
  width;
  height;
  token = null;
  thumbnail = new URL(Ht);
  previewData = new URL(Ht);
  isPlaying = false;
  paused = true;
  playbackRate = 1;
  constructor(e, t, s = 400, r = 300) {
    super(e), this.cid = e, this.filename = t, this.width = s, this.height = r;
  }
  get aspectRatio() {
    return this.width / this.height;
  }
  updateToken = e => {
    this.token = e;
  };
  play() {
  }
  pause() {
  }
  setPlaybackRate() {
  }
}
class pu extends Lo {
  cid;
  name;
  size;
  constructor(e, t, s) {
    super(e), this.cid = e, this.name = t, this.size = s;
  }
}
class Rd extends fn {
  chatId;
  #e = W(0);
  get updateTime() {
    return p(this.#e);
  }
  set updateTime(e) {
    x(this.#e, e, true);
  }
  #t = W(null);
  get text() {
    return p(this.#t);
  }
  set text(e) {
    x(this.#t, e, true);
  }
  attaches;
  constructor(e, t) {
    switch (super(), this.chatId = e, true) {
    case typeof t == 'number': {
        this.attaches = new Hs(), this.updateTime = t;
        break;
      }
    default: {
        const s = t;
        this.updateTime = t.saveTime, t.text && (this.text = new ht(t.text, t.elements)), this.attaches = new Hs(t.attaches && new jt(t.attaches));
      }
    }
  }
  get id() {
    return this.chatId;
  }
  get syncTime() {
    return this.updateTime;
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get isEmpty() {
    return (!this.text || this.text.length === 0) && this.attaches.isEmpty;
  }
  update(e) {
    e.removedAttach && this.attaches.remove(e.removedAttach);
    if (e.text !== void 0) {
      const t = e.text.trim();
      this.text = t.length > 0 ? new ht(t, e.elements) : null;
    }
  }
  changeUpdateTime(e) {
    this.updateTime = Math.max(this.updateTime, e);
  }
}
class _n extends Rd {
  #e = W(null);
  get replyTo() {
    return p(this.#e);
  }
  set replyTo(e) {
    x(this.#e, e, true);
  }
  constructor(e, t) {
    if (typeof t != 'number') {
      super(e, t);
      const s = t;
      this.replyTo = t.replyTo ? _e.resolveId(t.replyTo) : null;
    } else
      super(e, t);
  }
  get replyMessage() {
    if (this.replyTo === null)
      return null;
    const e = M.messages.get(this.chatId).get(this.replyTo);
    return e instanceof Ce ? e : null;
  }
  update(e) {
    super.update(e), e.replyTo !== void 0 && (this.replyTo = e.replyTo);
  }
  chunk(e) {
    return this.text ? this.text.chunk(e).map((t, s, r) => {
      const i = new _n(this.chatId, this.updateTime);
      i.text = t;
      s === 0 && (i.replyTo = this.replyTo);
      s === r.length - 1 && (i.attaches = this.attaches);
      return i;
    }) : [this];
  }
}
class pF extends Rd {
  messageId;
  constructor(e, t) {
    super(e, t.updateTime), this.messageId = t.id, this.text = t.text, this.attaches = new Hs(t.attaches);
  }
  get message() {
    const e = M.messages.get(this.chatId).get(this.messageId);
    switch (true) {
    case e instanceof Ce:
      return e;
    case e instanceof js:
    case e instanceof Bo:
      throw new Error('Редактируемое сообщение не может не быть UserMessage');
    default:
      return e;
    }
  }
  get canSend() {
    return !this.isEmpty && this.attaches.areUploaded;
  }
  update(e) {
    super.update(e);
  }
}
class x0 {
  prev = Date.now();
  next() {
    const e = Math.max(Date.now(), this.prev + 1);
    this.prev = e;
    return e;
  }
}
const O0 = new x0();
class No {
  static resolveId(e) {
    return e;
  }
  id;
  #e = W(0);
  get time() {
    return p(this.#e);
  }
  set time(e) {
    x(this.#e, e, true);
  }
  updateTime;
  chatId;
  #t = W(false);
  get failed() {
    return p(this.#t);
  }
  set failed(e) {
    x(this.#t, e, true);
  }
  isOut = true;
  wasEdited = false;
  isReadByViewer = true;
  isReadBySomeone = false;
  text = null;
  link = null;
  attaches;
  constructor(e) {
    this.id = No.resolveId(-O0.next());
    this.time = Date.now();
    this.updateTime = this.time;
    this.attaches = new Hs();
    if (e instanceof _n) {
      const t = e;
      this.chatId = e.chatId, this.text = e.text, this.attaches = new Hs(e.attaches), e.replyTo && (this.link = new gu(e.chatId, e.replyTo));
    } else
      e instanceof Du ? (this.chatId = e.chatId, this.link = e) : (this.chatId = e.chatId, this.attaches = e.attaches, e.replyTo && (this.link = new gu(e.chatId, e.replyTo)));
  }
  get cid() {
    return this.id;
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get senderId() {
    return M.profile.viewer.id;
  }
  get sender() {
    return M.profile.viewer.contact;
  }
  get isEmpty() {
    return (!this.text || this.text.length === 0) && this.attaches.isEmpty && !(this.link instanceof Du);
  }
  get canSend() {
    return this.isEmpty ? Promise.resolve(false) : Promise.all(this.attaches.allPending.map(e => e.isUploading.then(() => {
      e.isUploaded || this.attaches.remove(e);
    }))).then(() => !this.isEmpty);
  }
  get isUnsupported() {
    return !this.text && !this.link && this.attaches.isEmpty;
  }
  fail() {
    this.failed = true;
  }
  retry() {
    this.failed = false, this.time = Date.now();
  }
}
class kd {
  id;
  chatId;
  constructor(e, t) {
    this.id = t, this.chatId = e;
  }
  get message() {
    const e = M.messages.get(this.chatId).get(this.id);
    Z(e instanceof Ce);
    return e;
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get senderId() {
    return this.message.senderId;
  }
  get sender() {
    return this.senderId && M.contacts.getLazy(this.senderId);
  }
  get text() {
    return this.message instanceof Ce ? this.message.text : null;
  }
  get attaches() {
    return this.message.attaches;
  }
  get time() {
    return this.message.time;
  }
}
class gu extends kd {
}
class Du extends kd {
}
class Po extends te {
  static fromApi([e, t]) {
    return t.chatId || t.updateTime === 0 ? Ld.fromApi([
      e,
      t
    ]) : Mo.fromApi([
      e,
      t
    ]);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return this.$[0];
  }
  get syncTime() {
    return this.$[1].updateTime ?? 0;
  }
  get chat() {
    const e = M.chats.get(this.id);
    Z(e instanceof ft || e instanceof Xe || e instanceof In);
    return e;
  }
  get allAnimojis() {
    return M.assets.assetSectionsCache.popularReactionsSection.animojis;
  }
  #e = k(() => this.$[1].isActive);
  get isActive() {
    return p(this.#e);
  }
  set isActive(e) {
    x(this.#e, e);
  }
}
class Mo extends Po {
  static fromApi(e) {
    return new this(e);
  }
}
class Ld extends Po {
  static fromApi(e) {
    return new this(e);
  }
  #e = k(() => this.$[1].count ?? M.config.serverConfig.get('reactions-max'));
  get count() {
    return p(this.#e);
  }
  set count(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$[1].included ?? false);
  get included() {
    return p(this.#t);
  }
  set included(e) {
    x(this.#t, e);
  }
  #n = k(() => this.$[1].reactionIds || []);
  get reactionIds() {
    return p(this.#n);
  }
  set reactionIds(e) {
    x(this.#n, e);
  }
  #s = k(() => {
    const e = new Set(this.reactionIds);
    return M.assets.assetSectionsCache.popularReactionsSection.animojis.filter(t => {
      const s = e.has(t.emoji);
      return this.included ? s : !s;
    });
  });
  get avaliableAnimojis() {
    return p(this.#s);
  }
  set avaliableAnimojis(e) {
    x(this.#s, e);
  }
}
class lr extends te {
  chatId;
  messageId;
  syncTime;
  static fromApi(e, t, s, r) {
    return new this(e, t, s, r);
  }
  constructor(e, t, s, r) {
    super(e), this.chatId = t, this.messageId = s, this.syncTime = r;
  }
  get id() {
    return this.messageId;
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get detailed() {
    return this.chat instanceof ft ? M.messagesDetailedReactions.get(this.chatId).getLazy(this.messageId) : null;
  }
  #e = k(() => this.$.yourReaction ?? null);
  get yourReaction() {
    return p(this.#e);
  }
  set yourReaction(e) {
    x(this.#e, e);
  }
  #t = k(() => new pe((this.$.counters ?? []).map(e => [
    e.reaction,
    new _u(e.reaction, e.count)
  ])));
  get reactions() {
    return p(this.#t);
  }
  set reactions(e) {
    x(this.#t, e);
  }
  #n = k(() => Array.from(this.reactions.values()).sort((e, t) => e.count > t.count || e.count === t.count && e.emoji === this.yourReaction ? -1 : e.count < t.count || e.count === t.count && t.emoji === this.yourReaction ? 1 : 0));
  get sortedReactionsList() {
    return p(this.#n);
  }
  set sortedReactionsList(e) {
    x(this.#n, e);
  }
  get allAnimojis() {
    return M.assets.assetSectionsCache.popularReactionsSection.animojis;
  }
  get maxReactions() {
    switch (true) {
    case this.chat instanceof ss:
    case this.chat instanceof wn:
    case this.chat instanceof sn:
      return 2;
    case this.chat instanceof ft:
    case this.chat instanceof In:
    case this.chat instanceof Xe:
      switch (true) {
      case this.chat.reactionsSettings instanceof Ld:
        return this.chat.reactionsSettings.count;
      case this.chat.reactionsSettings instanceof Mo:
        return 0;
      default:
        return this.chat.reactionsSettings;
      }
    default:
      return this.chat;
    }
  }
  get lastUnplayedReaction() {
    return this.chat.unplayedViewerReactions.get(this.messageId) ?? this.chat.unreadReactions.get(this.messageId) ?? null;
  }
  addViewerReaction(e) {
    if (this.yourReaction === e)
      return;
    const t = this.reactions.get(e);
    t ? t.count += 1 : this.reactions.set(e, new _u(e, 1)), this.yourReaction = e, this.detailed instanceof Jr && this.detailed.reactions.set(M.profile.viewer.id, this.yourReaction);
  }
  removeViewerReaction() {
    if (!this.yourReaction)
      return;
    const e = this.reactions.get(this.yourReaction);
    e && e.count > 1 ? e.count -= 1 : this.reactions.delete(this.yourReaction), this.yourReaction = null, this.detailed instanceof Jr && this.detailed.reactions.delete(M.profile.viewer.id);
  }
}
class _u {
  emoji;
  #e = W(0);
  get count() {
    return p(this.#e);
  }
  set count(e) {
    x(this.#e, e, true);
  }
  constructor(e, t) {
    this.emoji = e, this.count = t;
  }
  get animojiId() {
    return M.assets.animojisCache.emojiToAnimojiMap.get(this.emoji) ?? null;
  }
  get animoji() {
    return this.animojiId ? M.assets.animojisCache.get(this.animojiId) : null;
  }
}
class Jr extends te {
  messageId;
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(t), this.messageId = e;
  }
  get id() {
    return this.messageId;
  }
  get syncTime() {
    return 0;
  }
  #e = k(() => {
    const e = new pe();
    for (const t of this.$) {
      const s = ae.resolveId(t.userId);
      e.set(s, t.reaction);
    }
    return e;
  });
  get reactions() {
    return p(this.#e);
  }
  set reactions(e) {
    x(this.#e, e);
  }
}
class _e extends te {
  chatId;
  static FLAG_HIDE_EDIT = 1;
  static FLAG_IS_LIVE = 2;
  static FLAG_CONTENT_LEVEL = 4;
  static REFRESH_MESSAGE_STAT_TIMEOUT = 20000;
  static resolveId(e) {
    if (typeof e == 'number') {
      const t = new Error('messageId is number');
      Mt?.error(t, {
        severity: 'warning',
        issueKey: 'messageId'
      });
    }
    return e;
  }
  static fromApi(e, t) {
    return e.attaches?.find(i => i._type === 'CONTROL') ? js.fromApi(e, t) : e.attaches?.find(i => i._type === 'WIDGET') ? Bo.fromApi(e, t) : Ce.fromApi(e, t);
  }
  constructor(e, t) {
    super(e), this.chatId = t;
  }
  get id() {
    return _e.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime || this.$.time;
  }
  #e = k(() => !this.$.cid || this.$.cid >= 0 || this.$.sender !== M.profile.viewer.id ? null : No.resolveId(this.$.cid));
  get cid() {
    return p(this.#e);
  }
  set cid(e) {
    x(this.#e, e);
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get time() {
    return this.$.time;
  }
  get updateTime() {
    return this.$.updateTime ?? this.$.time;
  }
  #t = k(() => {
    switch (this.$.status) {
    case 'EDITED':
    case 'REMOVED':
      return this.$.status;
    case 'SPAM':
      return 'REMOVED';
    case void 0:
      return null;
    default: {
        this.$.status;
        return null;
      }
    }
  });
  get status() {
    return p(this.#t);
  }
  set status(e) {
    x(this.#t, e);
  }
  get senderId() {
    return this.$.sender ? ae.resolveId(this.$.sender) : null;
  }
  get sender() {
    return this.senderId !== null ? M.contacts.get(this.senderId) : null;
  }
  get isOut() {
    return this.senderId === M.profile.viewer.id;
  }
  #n = k(() => new ns(this.$.options ?? 0));
  get options() {
    return p(this.#n);
  }
  set options(e) {
    x(this.#n, e);
  }
  get wasEdited() {
    return this.status === 'EDITED' && !this.options.get(_e.FLAG_HIDE_EDIT);
  }
  isReadBy(e) {
    return this.time <= this.chat.readMark(e);
  }
  get isReadByViewer() {
    return this.isReadBy(M.profile.viewer.id);
  }
  get isReadBySomeone() {
    for (const e of this.chat.participants.keys())
      if (e !== M.profile.viewer.id && this.isReadBy(e))
        return true;
    return false;
  }
}
class Ce extends _e {
  static fromApi(e, t) {
    return new this(e, t);
  }
  #e = k(() => this.$.text ? new ht(this.$.text, this.$.elements) : null);
  get text() {
    return p(this.#e);
  }
  set text(e) {
    x(this.#e, e);
  }
  #t = k(() => {
    switch (true) {
    case this.withSensitiveContent:
      return null;
    case this.text !== null:
      return this.text;
    case this.link instanceof Vn && this.link.text !== null:
      return this.link.text;
    default:
      return null;
    }
  });
  get copyableText() {
    return p(this.#t);
  }
  set copyableText(e) {
    x(this.#t, e);
  }
  #n = k(() => {
    if (!this.$.link)
      return null;
    switch (this.$.link?.type) {
    case 'REPLY':
      return new vu(this.$.link, this.chatId, this.id);
    case 'FORWARD':
      return new Vn(this.$.link, this.chatId, this.id);
    default: {
        this.$.link.type;
        return null;
      }
    }
  });
  get link() {
    return p(this.#n);
  }
  set link(e) {
    x(this.#n, e);
  }
  #s = k(() => this.$.attaches ? new jt(this.$.attaches) : new jt([]));
  get attaches() {
    return p(this.#s);
  }
  set attaches(e) {
    x(this.#s, e);
  }
  get reactionInfo() {
    return M.messagesReactions.get(this.chatId).get(this.id);
  }
  get canEdit() {
    return this.chat instanceof Xe && this.chat.viewerCanEdit ? true : this.link instanceof Vn || this.attaches.sticker || this.attaches.contact || this.attaches.file || this.attaches.call || this.attaches.location || this.attaches.videoMessage || !this.chat.viewerCanWrite ? false : this.isOut && this.time > tn.now - 1000 * M.config.serverConfig.get('edit-timeout');
  }
  get canForward() {
    return !this.attaches.call;
  }
  get canComplain() {
    return !(this.isOut || this.chat.restrictions.get(ce.FLAG_RESTRICTION_COMPLAINT));
  }
  get canDelete() {
    switch (true) {
    case this.chat instanceof sn:
      return 'self';
    case this.chat instanceof ss:
    case this.chat instanceof wn:
      return this.isOut && this.time > tn.now - 1000 * M.config.serverConfig.get('edit-timeout') ? 'all' : 'self';
    case this.chat instanceof ft:
    case this.chat instanceof In:
      return this.chat.viewerCanDeleteAnyMessage ? 'all' : M.config.serverConfig.get('delete-msg-fys-large-chat-disabled') && this.chat.isBig ? false : this.isOut && this.time > tn.now - 1000 * M.config.serverConfig.get('edit-timeout') ? 'all' : 'self';
    case this.chat instanceof Xe:
      return this.chat.viewerCanDeleteAnyMessage ? 'all' : false;
    default:
      return this.chat;
    }
  }
  get isViewerMentioned() {
    return this.text?.find(e => e instanceof Bs && e.entityId === M.profile.viewer.id) !== void 0;
  }
  get isViewerReplied() {
    return this.link instanceof vu && this.link.senderId === M.profile.viewer.id;
  }
  #r = k(() => {
    if (!(this.chat instanceof ft) || this.chat.isBig)
      return null;
    const e = new Map();
    if (this.reactionInfo.detailed instanceof Jr)
      for (const [t, s] of this.reactionInfo.detailed.reactions) {
        const r = M.contacts.get(t);
        e.set(r, s);
      }
    for (const [t, s] of this.chat.participantsContacts)
      s instanceof Promise || e.has(s) || s.isViewer || !this.isReadBy(t) || e.set(s, null);
    return e.size === 0 ? null : e;
  });
  get readers() {
    return p(this.#r);
  }
  set readers(e) {
    x(this.#r, e);
  }
  get stats() {
    return this.chat instanceof Xe ? M.messageStats.get(this.chatId).getLazy(this.id) : null;
  }
  get isSensitive() {
    return !M.profile.viewer.settings.CONTENT_LEVEL_ACCESS || !(this.chat instanceof Xe) || this.chat.isViewerParticipant ? false : this.options.get(Ce.FLAG_CONTENT_LEVEL) || this.chat.isSensitive;
  }
  get withSensitiveContent() {
    return this.link instanceof Vn && this.link.isSensitive || this.isSensitive;
  }
}
class js extends _e {
  static fromApi(e, t) {
    return new this(e, t);
  }
  cid = null;
  #e = k(() => {
    const e = this.$.attaches?.find(t => t._type === 'CONTROL');
    if (!e)
      return new oa();
    switch (e.event) {
    case 'title':
      return new R0(e.title);
    case 'icon':
      return new k0(e.url ?? null);
    case 'add':
      return new Nd(e.userIds.map(ae.resolveId));
    case 'remove':
      return new Pd(ae.resolveId(e.userId));
    case 'joinByLink':
      return new L0();
    case 'leave':
      return new P0();
    case 'pin':
      return new N0(_e.resolveId(e.pinnedMessage.id), this.chatId);
    case 'botStarted':
      return new B0();
    case 'new':
      return new M0();
    case 'system':
      return new U0(e.message ?? '', e.shortMessage ?? '');
    case 'hello':
    case 'privacyWarning':
    case 'sendContact':
      return new oa();
    default:
      return new oa();
    }
  });
  get content() {
    return p(this.#e);
  }
  set content(e) {
    x(this.#e, e);
  }
}
class oa {
}
class R0 {
  title;
  constructor(e) {
    this.title = e;
  }
}
class k0 {
  url = null;
  constructor(e) {
    this.url = e ? new URL(e) : null;
  }
}
class Nd {
  contactIds;
  constructor(e) {
    this.contactIds = e;
  }
  #e = k(() => this.contactIds.map(e => M.contacts.get(e)));
  get contacts() {
    return p(this.#e);
  }
  set contacts(e) {
    x(this.#e, e);
  }
}
class Pd {
  contactId;
  constructor(e) {
    this.contactId = e;
  }
  get removedContact() {
    return M.contacts.get(this.contactId);
  }
}
class L0 {
}
class N0 {
  messageId;
  chatId;
  constructor(e, t) {
    this.messageId = e, this.chatId = t;
  }
  get pinnedMessage() {
    const e = M.messages.get(this.chatId).get(_e.resolveId(this.messageId));
    Z(e instanceof Ce);
    return e;
  }
}
class P0 {
}
class M0 {
}
class B0 {
}
class U0 {
  message;
  shortMessage;
  constructor(e, t) {
    this.message = e, this.shortMessage = t;
  }
}
class Md {
  rootChatId;
  rootMessageId;
  id;
  senderId = null;
  updateTime = 0;
  time;
  text = null;
  attaches;
  constructor(e, t, s) {
    this.rootChatId = t, this.rootMessageId = s;
    const r = e.message;
    this.attaches = new jt([]), this.id = _e.resolveId(r.id), this.time = e.message.time, this.updateTime = r.updateTime || this.time, r.sender && (this.senderId = ae.resolveId(r.sender)), r.text && (this.text = new ht(r.text, r.elements)), r.attaches && (this.attaches = new jt(r.attaches));
  }
  get sender() {
    return this.senderId !== null ? M.contacts.getLazy(this.senderId) : null;
  }
}
class vu extends Md {
  #e = W(null);
  get link() {
    return p(this.#e);
  }
  set link(e) {
    x(this.#e, e, true);
  }
  constructor(e, t, s) {
    super(e, t, s);
    const r = e.message;
    r.link?.type == 'FORWARD' && (this.link = new Vn(r.link, t, s));
  }
  get chat() {
    return this.rootChat;
  }
  get rootChat() {
    return M.chats.get(this.rootChatId);
  }
}
class Vn extends Md {
  chatId = null;
  chatName = null;
  chatLink = null;
  contentLevel;
  chatAccessType = null;
  chatType = null;
  constructor(e, t, s) {
    switch (super(e, t, s), e.message.type) {
    case 'CHANNEL':
    case 'USER':
      this.chatType = e.message.type;
      break;
    case 'CHANNEL_ADMIN':
      this.chatType = null;
      break;
    default:
      e.message.type;
    }
    e.chatId !== void 0 && (this.chatId = ce.resolveId(e.chatId)), e.chatName && (this.chatName = e.chatName), e.chatLink && (this.chatLink = e.chatLink), e.chatAccessType && (this.chatAccessType = e.chatAccessType), this.contentLevel = !!e.contentLevel;
  }
  get chat() {
    return this.chatId ? M.chats.getLazy(this.chatId) : null;
  }
  get rootChat() {
    return M.chats.get(this.rootChatId);
  }
  get rootMessage() {
    const e = M.messages.get(this.rootChatId).get(this.rootMessageId);
    Z(e instanceof Ce);
    return e;
  }
  get isSensitive() {
    return !M.profile.viewer.settings.CONTENT_LEVEL_ACCESS || !(this.chat instanceof Xe) || this.chat.isViewerParticipant ? false : !!(this.contentLevel || this.chat.isSensitive);
  }
}
class Bo extends _e {
  static fromApi(e, t) {
    return new this(e, t);
  }
  cid = null;
  #e = k(() => {
    const e = this.$.attaches?.find(t => t._type === 'WIDGET');
    return e ? e.message.map(t => {
      switch (t.type) {
      case 1:
      case 2:
        return new H0(t);
      case 3:
      case 4:
      case 5:
        return new j0(t);
      case 6:
        return new $0(t);
      case 7:
        return new z0(t);
      default:
        return new V0();
      }
    }) : [];
  });
  get content() {
    return p(this.#e);
  }
  set content(e) {
    x(this.#e, e);
  }
}
class H0 {
  type;
  url;
  width;
  height;
  constructor(e) {
    this.type = e.type, this.url = new URL(e.icon.url), this.width = e.icon.width, this.height = e.icon.height;
  }
}
class j0 {
  text;
  type;
  constructor(e) {
    this.text = new ht(e.text.text, e.text.elements), e.type === 3 ? this.type = 'title1' : e.type === 4 ? this.type = 'title2' : e.type === 5 ? this.type = 'description' : (e.type, this.type = 'description');
  }
}
class $0 {
  media;
  constructor(e) {
    this.media = new Od(e.media);
  }
}
class z0 {
  media;
  constructor(e) {
    this.media = new ko(e.media);
  }
}
class V0 {
  constructor() {
  }
}
class G0 {
  isSending = false;
  queue = new pe();
  uploadQueue = new pe();
  failedQueue = new pe();
  constructor() {
  }
  get size() {
    return this.queue.size + this.uploadQueue.size + this.failedQueue.size;
  }
  #e = k(() => Array.from(this.queue.values()).concat(Array.from(this.uploadQueue.values())).concat(Array.from(this.failedQueue.values())));
  get messages() {
    return p(this.#e);
  }
  set messages(e) {
    x(this.#e, e);
  }
  #t = k(() => Math.max(0, ...this.messages.map(e => e.time)));
  get maxTime() {
    return p(this.#t);
  }
  set maxTime(e) {
    x(this.#t, e);
  }
  next() {
    const e = this.queue.values().next().value;
    e || (this.isSending = false);
    return e || null;
  }
  enqueue(e) {
    const t = this.isSending;
    this.isSending = true;
    this.failedQueue.has(e.id) && e.retry();
    this.failedQueue.delete(e.id);
    this.uploadQueue.delete(e.id);
    this.queue.set(e.id, e);
    return !t;
  }
  dequeue(e) {
    this.queue.delete(e.id), this.uploadQueue.delete(e.id), this.failedQueue.delete(e.id);
  }
  enqueueAfterUpload(e) {
    this.failedQueue.has(e.id) && e.retry(), this.failedQueue.delete(e.id), this.uploadQueue.set(e.id, e);
  }
  remove(e) {
    e.cid && e.isOut && this.queue.delete(e.cid);
  }
  fail(e) {
    this.queue.delete(e.cid), this.failedQueue.set(e.cid, e), e.fail();
  }
}
class K0 extends te {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => this.$.OFFICIAL ?? false);
  get OFFICIAL() {
    return p(this.#e);
  }
  set OFFICIAL(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.SIGN_ADMIN ?? false);
  get SIGN_ADMIN() {
    return p(this.#t);
  }
  set SIGN_ADMIN(e) {
    x(this.#t, e);
  }
  #n = k(() => this.$.ONLY_OWNER_CAN_CHANGE_ICON_TITLE ?? true);
  get ONLY_OWNER_CAN_CHANGE_ICON_TITLE() {
    return p(this.#n);
  }
  set ONLY_OWNER_CAN_CHANGE_ICON_TITLE(e) {
    x(this.#n, e);
  }
  #s = k(() => this.$.ONLY_ADMIN_CAN_ADD_MEMBER ?? true);
  get ONLY_ADMIN_CAN_ADD_MEMBER() {
    return p(this.#s);
  }
  set ONLY_ADMIN_CAN_ADD_MEMBER(e) {
    x(this.#s, e);
  }
  #r = k(() => this.$.MEMBERS_CAN_SEE_PRIVATE_LINK ?? false);
  get MEMBERS_CAN_SEE_PRIVATE_LINK() {
    return p(this.#r);
  }
  set MEMBERS_CAN_SEE_PRIVATE_LINK(e) {
    x(this.#r, e);
  }
  #i = k(() => this.$.ONLY_ADMIN_CAN_CALL ?? true);
  get ONLY_ADMIN_CAN_CALL() {
    return p(this.#i);
  }
  set ONLY_ADMIN_CAN_CALL(e) {
    x(this.#i, e);
  }
  #a = k(() => this.$.ALL_CAN_PIN_MESSAGE ?? false);
  get ALL_CAN_PIN_MESSAGE() {
    return p(this.#a);
  }
  set ALL_CAN_PIN_MESSAGE(e) {
    x(this.#a, e);
  }
  #o = k(() => this.$.CONTENT_LEVEL_CHAT ?? false);
  get CONTENT_LEVEL_CHAT() {
    return p(this.#o);
  }
  set CONTENT_LEVEL_CHAT(e) {
    x(this.#o, e);
  }
  #c = k(() => this.$.A_PLUS_CHANNEL ?? false);
  get A_PLUS_CHANNEL() {
    return p(this.#c);
  }
  set A_PLUS_CHANNEL(e) {
    x(this.#c, e);
  }
}
class gF {
  contactId;
  type;
  time = Date.now();
  constructor(e, t) {
    switch (this.contactId = e, t) {
    case 'TEXT':
    case 'AUDIO':
    case 'PHOTO':
    case 'VIDEO':
    case 'FILE':
    case 'STICKER':
      this.type = t;
      break;
    case void 0:
    default:
      this.type = 'TEXT';
    }
  }
  get contact() {
    return M.contacts.getLazy(this.contactId);
  }
}
const W0 = 8000;
class q0 extends pe {
  timeoutIds = new Map();
  set(e, t) {
    this.delete(e);
    this.timeoutIds.set(e, setTimeout(() => {
      this.delete(e);
    }, W0));
    return super.set(e, t);
  }
  delete(e) {
    const t = this.timeoutIds.get(e);
    clearTimeout(t);
    this.timeoutIds.delete(e);
    return super.delete(e);
  }
}
const dr = 25;
class hr {
  chatId;
  attachTypes;
  startMessageId;
  #e = W(We(new Te()));
  get messageIds() {
    return p(this.#e);
  }
  set messageIds(e) {
    x(this.#e, e, true);
  }
  #t = W(true);
  get hasBackward() {
    return p(this.#t);
  }
  set hasBackward(e) {
    x(this.#t, e, true);
  }
  #n = W(true);
  get hasForward() {
    return p(this.#n);
  }
  set hasForward(e) {
    x(this.#n, e, true);
  }
  #s = W(null);
  get isLoadingBackward() {
    return p(this.#s);
  }
  set isLoadingBackward(e) {
    x(this.#s, e, true);
  }
  #r = W(null);
  get isLoadingForward() {
    return p(this.#r);
  }
  set isLoadingForward(e) {
    x(this.#r, e, true);
  }
  constructor(e, t, s) {
    this.chatId = e, this.attachTypes = t, this.startMessageId = s;
  }
  #i = k(() => this.hasBackward && (Array.from(this.messageIds).at(-1) || this.startMessageId || this.chat.lastMessageId) || null);
  get backwardMarker() {
    return p(this.#i);
  }
  set backwardMarker(e) {
    x(this.#i, e);
  }
  #a = k(() => this.hasForward && (Array.from(this.messageIds).at(0) || this.startMessageId || this.chat.lastMessageId) || null);
  get forwardMarker() {
    return p(this.#a);
  }
  set forwardMarker(e) {
    x(this.#a, e);
  }
  get isLoading() {
    return !!(this.isLoadingBackward || this.isLoadingForward);
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  #o = k(() => Array.from(this.messageIds, e => M.messages.get(this.chatId).get(e)).filter(e => e.status !== 'REMOVED' && $s.filter(this, e)));
  get messages() {
    return p(this.#o);
  }
  set messages(e) {
    x(this.#o, e);
  }
  startLoading(e) {
    let t = 0, s = 0;
    const r = new AbortController();
    e === this.backwardMarker && (s = dr, this.isLoadingBackward?.abort(), this.isLoadingBackward = r);
    e === this.forwardMarker && (t = dr, this.isLoadingForward?.abort(), this.isLoadingForward = r);
    s + t === 0 && (s = dr, t = dr, this.isLoadingBackward?.abort(), this.isLoadingForward?.abort(), this.isLoadingBackward = r, this.isLoadingBackward = r, this.messageIds.clear());
    return {
      signal: r.signal,
      forward: t,
      backward: s,
      fail: () => {
        this.isLoadingBackward?.abort(), this.isLoadingForward?.abort(), this.isLoadingBackward = null, this.isLoadingForward = null;
      },
      finish: (i, a) => {
        let o;
        if (s > 0 && t > 0) {
          const l = M.messages.get(this.chatId).get(e).time, d = a.filter(c => c.time > l).length;
          this.hasForward = d >= t, this.hasBackward = a.length - d >= s;
        } else
          s > 0 ? this.hasBackward = a.length >= s : t > 0 && (this.hasForward = a.length >= t, o = Array.from(this.messageIds), this.messageIds.clear());
        for (const l of a.reverse())
          this.messageIds.add(l.id);
        for (const l of o || [])
          this.messageIds.add(l);
        this.isLoadingBackward = null, this.isLoadingForward = null;
      }
    };
  }
  push(e) {
    if (this.forwardMarker === null) {
      const t = Array.from(this.messageIds.values());
      this.messageIds.clear(), this.messageIds.add(e.id);
      for (const s of t)
        this.messageIds.add(s);
    }
  }
  remove(e) {
    this.messageIds.delete(e.id);
  }
}
class $s {
  chatId;
  #e = W(We(new pe()));
  get media() {
    return p(this.#e);
  }
  set media(e) {
    x(this.#e, e, true);
  }
  constructor(e) {
    this.chatId = e;
  }
  get(e, t) {
    let s = this.media.get(e);
    if (!s || s.startMessageId !== t) {
      switch (e) {
      case 'PHOTO_VIDEO':
        s = new hr(this.chatId, [
          'PHOTO',
          'VIDEO'
        ], t);
        break;
      case 'AUDIO':
        s = new hr(this.chatId, ['AUDIO'], t);
        break;
      case 'FILE':
        s = new hr(this.chatId, ['FILE'], t);
        break;
      case 'SHARE':
        s = new hr(this.chatId, ['SHARE'], t);
        break;
      }
      Se(() => {
        s && this.media.set(e, s);
      }), this.media.get(e);
    }
    return s || null;
  }
  static filter(e, t) {
    switch (true) {
    case t instanceof js:
    case t instanceof Bo:
      return null;
    }
    const s = t.link instanceof Vn ? t.link : null;
    return e.attachTypes.some(i => {
      switch (i) {
      case 'PHOTO':
        return t.attaches.photosVideos.some(a => a instanceof an || a instanceof Ma) || s?.attaches.photosVideos.some(a => a instanceof an || a instanceof Ma);
      case 'VIDEO':
        return t.attaches.photosVideos.some(a => a instanceof Us) || s?.attaches.photosVideos.some(a => a instanceof Us);
      case 'AUDIO':
        return !!(t.attaches.audio || s?.attaches.audio);
      case 'FILE':
        return !!(t.attaches.file || s?.attaches.file);
      case 'SHARE':
        return !!(t.attaches.share || s?.attaches.share);
      case 'VIDEO_MSG':
        return !!(t.attaches.videoMessage || s?.attaches.videoMessage);
      default:
        return false;
      }
    }) ? t : null;
  }
  clear() {
    this.media.clear();
  }
  push(e) {
    for (const t of this.media.values()) {
      const s = $s.filter(t, e);
      s && t.push(s);
    }
  }
  remove(e) {
    for (const t of this.media.values()) {
      const s = $s.filter(t, e);
      s && t.remove(s);
    }
  }
}
class Ci extends te {
  static fromApi(e) {
    return new this(e);
  }
  static resolveId(e) {
    return e;
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return Ci.resolveId(this.$.conversationId);
  }
  get joinLink() {
    return this.$.joinLink;
  }
  get type() {
    return this.$.type ?? 0;
  }
  get isActive() {
    return this.$.previewParticipantIds.length > 0;
  }
  #e = k(() => Promise.all(this.$.previewParticipantIds.map(e => M.contacts.getLazy(ae.resolveId(e)))));
  get participantsList() {
    return p(this.#e);
  }
  set participantsList(e) {
    x(this.#e, e);
  }
  get approxParticipantsCount() {
    return this.$.approxParticipantsCount === void 0 ? 0 : this.$.approxParticipantsCount;
  }
  get callType() {
    return this.$.callType;
  }
}
class Y0 extends te {
  contactId;
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(e), this.contactId = t;
  }
  get id() {
    return this.contactId;
  }
  get syncTime() {
    return 0;
  }
  #e = k(() => {
    if (this.$.startMessage)
      return new Q0(new ht(this.$.startMessage.text.text, this.$.startMessage.text.elements), this.$.startMessage.media ? new an(this.$.startMessage.media) : void 0);
  });
  get startMessage() {
    return p(this.#e);
  }
  set startMessage(e) {
    x(this.#e, e);
  }
}
class Q0 {
  text;
  media;
  constructor(e, t) {
    this.text = e, this.media = t;
  }
}
const qt = 30;
class ce extends te {
  static SUBSCRIBE_INTERVAL = 60000;
  static READ_THROTTLE = 200;
  static fromApi(e) {
    switch (e.type) {
    case 'DIALOG':
      return e.id === 0 ? sn.fromApi(e) : e.hasBots ? wn.fromApi(e) : ss.fromApi(e);
    case 'CHAT':
      return !e.videoConversation || e.videoConversation.type === 1 ? ft.fromApi(e) : In.fromApi(e);
    case 'CHANNEL':
      return Xe.fromApi(e);
    default: {
        e.type;
        return e.type;
      }
    }
  }
  static resolveId(e) {
    return e;
  }
  #e = W(false);
  get isOpened() {
    return p(this.#e);
  }
  set isOpened(e) {
    x(this.#e, e, true);
  }
  messageIds = new Te();
  unreadReactions = new pe();
  unplayedViewerReactions = new pe();
  selectedMessages;
  #t = W(null);
  get mediaHistory() {
    return p(this.#t);
  }
  set mediaHistory(e) {
    x(this.#t, e, true);
  }
  #n = W(true);
  get hasBackward() {
    return p(this.#n);
  }
  set hasBackward(e) {
    x(this.#n, e, true);
  }
  backwardLoader = null;
  forwardLoader = null;
  pendingQueue;
  #s = W(null);
  get editDraft() {
    return p(this.#s);
  }
  set editDraft(e) {
    x(this.#s, e, true);
  }
  typings = new q0();
  participantsLoader = null;
  #r = W(null);
  get participantsMarker() {
    return p(this.#r);
  }
  set participantsMarker(e) {
    x(this.#r, e, true);
  }
  bigChatParticipants = new pe();
  constructor(e) {
    super(e), this.lastMessageId ? (this.newMessages === 0 && this.messageIds.add(this.lastMessageId), this.mediaHistory = new $s(this.id)) : this.hasBackward = false, this.participantsMarker = this.participants.size >= this.participantsCount ? null : this.$.participantsMarker ?? 0, this.pendingQueue = new G0(), this.selectedMessages = new J0(this.id), e.lastReactedMessageId && e.lastReaction && this.unreadReactions.set(_e.resolveId(e.lastReactedMessageId), e.lastReaction);
  }
  update(e) {
    e.participantsCount !== this.participantsCount && (this.bigChatParticipants.clear(), this.participantsMarker = e.participantsMarker);
    super.update(e);
    if (this.lastMessage) {
      const t = this.$.prevMessageId ? _e.resolveId(this.$.prevMessageId) : null;
      this.newMessages === 0 && this.messageIds.size === 0 ? (this.messageIds.add(this.lastMessage.id), this.hasBackward = true) : t && this.messageIds.has(t) && this.messageIds.add(this.lastMessage.id), this.lastMessage instanceof Ce && this.pendingQueue.remove(this.lastMessage), this.mediaHistory || (this.mediaHistory = e.mediaHistory);
    } else
      this.hasBackward = false, this.editDraft = null, this.mediaHistory = null, this.messageIds.clear(), this.unreadReactions.clear(), this.selectedMessages.clear(), this.forwardLoader?.abort(), this.forwardLoader = null, this.backwardLoader?.abort(), this.backwardLoader = null;
  }
  get id() {
    return ce.resolveId(this.$.id);
  }
  get syncTime() {
    return Math.max(this.$.created, this.$.modified || 0, this.$.lastEventTime);
  }
  static FLAG_RESTRICTION_INVITE = 1;
  static FLAG_RESTRICTION_MODIFY_ICON = 2;
  static FLAG_RESTRICTION_MODIFY_TITLE = 4;
  static FLAG_RESTRICTION_LEAVE_CHAT = 8;
  static FLAG_RESTRICTION_PIN = 16;
  static FLAG_RESTRICTION_LIVE_LOCATION = 32;
  static FLAG_RESTRICTION_INPUT = 64;
  static FLAG_RESTRICTION_TOGGLE_BOT = 128;
  static FLAG_RESTRICTION_COMPLAINT = 256;
  #i = k(() => new ns(this.$.restrictions ?? 0));
  get restrictions() {
    return p(this.#i);
  }
  set restrictions(e) {
    x(this.#i, e);
  }
  static FLAG_PARTICIPANT_SETTINGS_NON_CONTACT_BAR = 1;
  #a = k(() => new ns(this.$.participantSettings ?? 0));
  get participantSettings() {
    return p(this.#a);
  }
  set participantSettings(e) {
    x(this.#a, e);
  }
  #o = k(() => {
    switch (this.$.status) {
    case 'ACTIVE':
    case 'HIDDEN':
    case 'REMOVED':
      return this.$.status;
    case 'LEFT':
    case 'CLOSED':
      return 'REMOVED';
    default: {
        this.$.status;
        return 'ACTIVE';
      }
    }
  });
  get status() {
    return p(this.#o);
  }
  set status(e) {
    x(this.#o, e);
  }
  get created() {
    return this.$.created;
  }
  get modified() {
    return this.$.modified ?? 0;
  }
  #c = k(() => this.$.type === 'DIALOG' ? Math.max(1, this.$.joinTime ?? 1) : this.$.joinTime && this.$.joinTime > 0 ? this.$.joinTime : null);
  get joinTime() {
    return p(this.#c);
  }
  set joinTime(e) {
    x(this.#c, e);
  }
  #u = k(() => Math.max(0, this.$.lastEventTime, this.draft.updateTime, this.pendingQueue.maxTime));
  get lastEventTime() {
    return p(this.#u);
  }
  set lastEventTime(e) {
    x(this.#u, e);
  }
  get settings() {
    return M.chatsSettings.get(this.id);
  }
  get draft() {
    return M.drafts.get(this.id);
  }
  get viewerCanWrite() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_INPUT) ? false : this.isViewerParticipant;
  }
  get viewerCanForward() {
    return this.viewerCanWrite;
  }
  get viewerCanCall() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_INPUT) ? false : this.isViewerParticipant;
  }
  get viewerCanComplain() {
    this.restrictions.get(ce.FLAG_RESTRICTION_COMPLAINT);
    return false;
  }
  #l = k(() => {
    const e = new pe();
    for (const [t, s] of Object.entries(this.$.participants)) {
      const r = ae.resolveId(+t);
      r === M.profile.viewer.id && this.joinTime === null || e.set(r, s);
    }
    for (const [t, s] of this.bigChatParticipants.entries())
      e.has(t) || e.set(t, s);
    for (const t of [
        this.$.owner,
        ...Object.keys(this.$.adminParticipants || [])
      ]) {
      const s = ae.resolveId(+t);
      e.has(s) || e.set(s, 1);
    }
    return e;
  });
  get participants() {
    return p(this.#l);
  }
  set participants(e) {
    x(this.#l, e);
  }
  #d = k(() => new Map(Array.from(this.participants.keys(), e => [
    e,
    M.contacts.getLazy(e)
  ])));
  get participantsContacts() {
    return p(this.#d);
  }
  set participantsContacts(e) {
    x(this.#d, e);
  }
  #h = k(() => this.$.participantsCount ?? 0);
  get participantsCount() {
    return p(this.#h);
  }
  set participantsCount(e) {
    x(this.#h, e);
  }
  readMark(e) {
    return this.participants.get(e) ?? this.lastMessage?.time ?? 0;
  }
  get viewerReadMark() {
    return this.readMark(M.profile.viewer.id);
  }
  set viewerReadMark(e) {
    if (e < this.viewerReadMark)
      this.markedAsUnread = true, this.newMessages = this.messages.filter(t => t.time > e).length;
    else {
      this.markedAsUnread = false;
      this.participants.set(M.profile.viewer.id, e);
      if (!this.lastMessage)
        return;
      if (e >= this.lastMessage.time)
        this.newMessages = 0;
      else {
        const t = this.messages.filter(s => !s.isReadByViewer && s.time <= e).length;
        this.newMessages = Math.max(this.newMessages - t, 0);
      }
    }
  }
  get lastPendingMessage() {
    return this.pendingQueue.messages.at(-1) ?? null;
  }
  #f = k(() => this.$.lastMessage ? _e.resolveId(this.$.lastMessage.id) : null);
  get lastMessageId() {
    return p(this.#f);
  }
  set lastMessageId(e) {
    x(this.#f, e);
  }
  get lastMessage() {
    return this.lastMessageId ? M.messages.get(this.id).get(this.lastMessageId) : null;
  }
  #m = k(() => {
    if (!this.lastMessageId || !this.$.pinnedMessage)
      return null;
    const e = M.messages.get(this.id).get(_e.resolveId(this.$.pinnedMessage.id));
    switch (Z(e instanceof Ce), e.status) {
    case null:
    case 'EDITED':
      return e;
    case 'REMOVED':
      return null;
    default: {
        e.status;
        return null;
      }
    }
  });
  get pinnedMessage() {
    return p(this.#m);
  }
  set pinnedMessage(e) {
    x(this.#m, e);
  }
  #p = k(() => this.$.hidePinnedMessage ?? false);
  get hidePinnedMessage() {
    return p(this.#p);
  }
  set hidePinnedMessage(e) {
    x(this.#p, e);
  }
  get lastMentionMessage() {
    if (!this.lastMessageId || !this.$.lastMentionMessageId)
      return null;
    const e = M.messages.get(this.id).get(_e.resolveId(this.$.lastMentionMessageId));
    Z(e instanceof Ce);
    if (e.isReadByViewer)
      return null;
    switch (e.status) {
    case null:
    case 'EDITED':
      return e;
    case 'REMOVED':
      return null;
    default: {
        e.status;
        return null;
      }
    }
  }
  get lastReactedMessage() {
    const e = this.$.lastReactedMessageId ? _e.resolveId(this.$.lastReactedMessageId) : null;
    if (!this.lastMessageId || !e || !this.unreadReactions.has(e))
      return null;
    const t = M.messages.get(this.id).get(e);
    switch (Z(t instanceof Ce), t.status) {
    case null:
    case 'EDITED':
      return t;
    case 'REMOVED':
      return null;
    default: {
        t.status;
        return null;
      }
    }
  }
  get lastReaction() {
    return this.lastReactedMessage ? this.$.lastReaction ?? null : null;
  }
  get lastReactionAnimoji() {
    if (!this.lastReaction)
      return null;
    const e = M.assets.animojisCache.emojiToAnimojiMap.get(this.lastReaction);
    return e ? M.assets.animojisCache.getLazy(e) : null;
  }
  #g = k(() => this.lastMessageId ? this.$.newMessages ?? (this.markedAsUnread ? 1 : 0) : 0);
  get newMessages() {
    return p(this.#g);
  }
  set newMessages(e) {
    x(this.#g, e);
  }
  #D = k(() => this.$.markedAsUnread ?? false);
  get markedAsUnread() {
    return p(this.#D);
  }
  set markedAsUnread(e) {
    x(this.#D, e);
  }
  get isRead() {
    return this.newMessages === 0 && !this.markedAsUnread;
  }
  #_ = k(() => this.lastMessageId ? Array.from(this.messageIds, e => M.messages.get(this.id).get(e)).filter(e => {
    switch (e.status) {
    case null:
    case 'EDITED':
      return true;
    case 'REMOVED':
      return false;
    default: {
        e.status;
        return e.status;
      }
    }
  }) : []);
  get messages() {
    return p(this.#_);
  }
  set messages(e) {
    x(this.#_, e);
  }
  canAppend(e) {
    return !(this.lastMessageId === e.id || this.messageIds.has(e.id));
  }
  get backwardMarker() {
    return !this.lastMessageId || !this.hasBackward ? null : this.messages[0]?.time || this.viewerReadMark;
  }
  get forwardMarker() {
    return !this.lastMessageId || this.messageIds.has(this.lastMessageId) ? null : this.messages.at(-1)?.time || this.viewerReadMark;
  }
  minimize() {
    if (this.isOpened || (this.mediaHistory?.clear(), this.messageIds.size <= 2 * qt))
      return;
    const e = this.messages, t = this.isRead ? e.length - qt : e.findIndex(i => !i.isReadByViewer) || 0, s = Math.max(0, t - Math.round(0.2 * qt)), r = Math.min(e.length, t + qt + 1);
    this.messageIds.clear();
    for (const i of e.slice(s, r))
      this.messageIds.add(i.id);
    this.hasBackward = true;
  }
  startLoading(e) {
    if (!this.lastMessage)
      return null;
    let t = 0, s = 0;
    const r = new AbortController();
    return (this.backwardMarker || 0) < e && e < (this.forwardMarker || Infinity) ? null : (e === this.backwardMarker && (s = qt, this.backwardLoader?.abort(), this.backwardLoader = r), e === this.forwardMarker && (t = qt, this.forwardLoader?.abort(), this.forwardLoader = r), s + t === 0 && (s = Math.floor(qt * 0.5), t = qt, this.backwardLoader?.abort(), this.forwardLoader?.abort(), this.backwardLoader = r, this.forwardLoader = r, this.messageIds.clear()), {
      signal: r.signal,
      forward: t,
      backward: s,
      finish: i => {
        i.sort((o, l) => o.time - l.time);
        let a;
        s > 0 && (this.backwardLoader = null, this.hasBackward = i.filter(o => o.time <= e).length >= s, a = Array.from(this.messageIds), this.messageIds.clear()), t > 0 && (this.forwardLoader = null);
        for (const o of i)
          o instanceof Ce && this.pendingQueue.remove(o), this.messageIds.add(o.id);
        for (const o of a || [])
          this.messageIds.add(o);
      }
    });
  }
}
class Uo extends ce {
  #e = k(() => Array.from(this.participants.keys()).find(e => e !== M.profile.viewer.id) ?? M.profile.viewer.id);
  get recipientId() {
    return p(this.#e);
  }
  set recipientId(e) {
    x(this.#e, e);
  }
  get longName() {
    return this.recipient.fullName;
  }
  get description() {
    return this.recipient.description;
  }
  get link() {
    return this.recipient.link;
  }
  get mentionName() {
    return this.recipient.mentionName;
  }
  #t = k(() => this.recipient.baseUrl);
  get baseIconUrl() {
    return p(this.#t);
  }
  set baseIconUrl(e) {
    x(this.#t, e);
  }
  get isOfficial() {
    return this.recipient.isOfficial;
  }
  get viewerCanPin() {
    this.restrictions.get(ce.FLAG_RESTRICTION_PIN);
    return false;
  }
  get viewerCanChangeSettings() {
    return false;
  }
  viewerCanLeaveChat = false;
  isViewerParticipant = true;
  viewerCanRead = true;
}
class sn extends Uo {
  static fromApi(e) {
    Z(e.type === 'DIALOG' && e.id === 0);
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get recipient() {
    const e = M.contacts.get(this.recipientId);
    Z(e instanceof us);
    return e;
  }
  get longName() {
    return 'Избранное';
  }
  get isOfficial() {
    return false;
  }
  get viewerCanWrite() {
    return true;
  }
  get viewerCanCall() {
    return false;
  }
  get viewerCanDelete() {
    return false;
  }
}
class ss extends Uo {
  static fromApi(e) {
    Z(e.type === 'DIALOG');
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => {
    if (!this.viewerCanWrite)
      return null;
    const e = M.config.serverConfig.get('welcome-sticker-ids'), t = e[Math.floor(Math.random() * e.length)];
    return t ? M.assets.stickersCache.getLazy(zt.resolveId(t)) : null;
  });
  get welcomeSticker() {
    return p(this.#e);
  }
  set welcomeSticker(e) {
    x(this.#e, e);
  }
  get recipient() {
    const e = M.contacts.get(this.recipientId);
    Z(e instanceof us);
    return e;
  }
  get viewerCanWrite() {
    switch (this.recipient.status) {
    case null:
    case 'REMOVED':
    case 'HIDDEN':
      return super.viewerCanWrite;
    case 'BLOCKED':
      return false;
    default: {
        this.recipient.status;
        return this.recipient.status;
      }
    }
  }
  get viewerCanCall() {
    return super.viewerCanCall && this.recipient.status !== 'BLOCKED';
  }
  get viewerCanDelete() {
    return true;
  }
  get isSameCountry() {
    return this.recipient.country === M.profile.viewer.contact.country;
  }
  get showNoneContactBar() {
    return this.participantSettings.get(ce.FLAG_PARTICIPANT_SETTINGS_NON_CONTACT_BAR);
  }
}
class wn extends Uo {
  static fromApi(e) {
    Z(e.type === 'DIALOG' && e.hasBots);
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get recipient() {
    const e = M.contacts.get(this.recipientId);
    Z(e instanceof qn);
    return e;
  }
  #e = k(() => this.viewerCanToggleBot === false ? false : this.lastEventTime === 0 ? true : this.$.isSuspended ?? false);
  get isSuspended() {
    return p(this.#e);
  }
  set isSuspended(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.options?.SERVICE_CHAT || false);
  get isService() {
    return p(this.#t);
  }
  set isService(e) {
    x(this.#t, e);
  }
  get viewerCanWrite() {
    switch (this.recipient.status) {
    case null:
    case 'REMOVED':
    case 'HIDDEN':
      return super.viewerCanWrite && !this.isSuspended;
    case 'BLOCKED':
      return false;
    default: {
        this.recipient.status;
        return this.recipient.status;
      }
    }
  }
  get viewerCanForward() {
    return this.viewerCanWrite && !this.recipient.isNoForward;
  }
  get viewerCanCall() {
    return false;
  }
  get viewerCanToggleBot() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_TOGGLE_BOT) === false;
  }
  get viewerCanDelete() {
    return this.viewerCanToggleBot !== false;
  }
  get viewerCanComplain() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_COMPLAINT) ? false : M.config.serverConfig.get('bot-complaint-enabled');
  }
  get botInfo() {
    return M.botInfo.getLazy(this.recipient.id);
  }
}
class Ho extends ce {
  #e = k(() => K0.fromApi(this.$.options ?? {}));
  get options() {
    return p(this.#e);
  }
  set options(e) {
    x(this.#e, e);
  }
  get isOfficial() {
    return this.options.OFFICIAL;
  }
  #t = k(() => this.$.baseIconUrl ? new Sd(this.$.baseIconUrl) : new kt(this.id, this.longName));
  get baseIconUrl() {
    return p(this.#t);
  }
  set baseIconUrl(e) {
    x(this.#t, e);
  }
  #n = k(() => this.$.owner === 0 ? null : ae.resolveId(this.$.owner));
  get ownerId() {
    return p(this.#n);
  }
  set ownerId(e) {
    x(this.#n, e);
  }
  get owner() {
    return this.ownerId ? M.contacts.get(this.ownerId) : null;
  }
  get isViewerOwner() {
    return this.ownerId === M.profile.viewer.id;
  }
  get isViewerParticipant() {
    return this.participants.has(M.profile.viewer.id);
  }
  set isViewerParticipant(e) {
    e ? (this.status = 'ACTIVE', this.joinTime = Date.now(), this.participants.set(M.profile.viewer.id, this.joinTime)) : (this.status = 'REMOVED', this.joinTime = null, this.participants.delete(M.profile.viewer.id));
  }
  #s = k(() => {
    switch (this.$.access) {
    case void 0:
      return 'PRIVATE';
    case 'PRIVATE':
    case 'PUBLIC':
      return this.$.access;
    default: {
        this.$.access;
        return 'PRIVATE';
      }
    }
  });
  get access() {
    return p(this.#s);
  }
  set access(e) {
    x(this.#s, e);
  }
  #r = k(() => this.$.link ?? null);
  get link() {
    return p(this.#r);
  }
  set link(e) {
    x(this.#r, e);
  }
  #i = k(() => new ht(this.$.description ?? ''));
  get description() {
    return p(this.#i);
  }
  set description(e) {
    x(this.#i, e);
  }
  #a = k(() => {
    const e = new pe();
    for (const [t, s] of Object.entries(this.$.adminParticipants ?? {})) {
      const r = ae.resolveId(+t);
      e.set(r, re.fromApi(s));
    }
    return e;
  });
  get adminParticipants() {
    return p(this.#a);
  }
  set adminParticipants(e) {
    x(this.#a, e);
  }
  get viewerAdminParticipant() {
    return this.adminParticipants.get(M.profile.viewer.id) ?? null;
  }
  get isViewerAdmin() {
    return this.isViewerOwner || this.viewerAdminParticipant !== null;
  }
  get viewerCanWrite() {
    switch (this.status) {
    case 'ACTIVE':
    case 'HIDDEN':
      return super.viewerCanWrite;
    case 'REMOVED':
      return false;
    default: {
        this.status;
        return this.status;
      }
    }
  }
  get viewerCanDelete() {
    return this.isViewerOwner;
  }
  get viewerCanPin() {
    return !this.isViewerParticipant || this.restrictions.get(ce.FLAG_RESTRICTION_PIN) ? false : this.isViewerOwner ? true : this.viewerAdminParticipant?.permissions.get(re.FLAG_PIN_MESSAGE) || this.options.ALL_CAN_PIN_MESSAGE;
  }
  get viewerCanAddMember() {
    return this.isViewerParticipant ? this.isViewerOwner ? true : this.viewerAdminParticipant?.permissions.get(re.FLAG_ADD_REMOVE_MEMBER) || !this.options.ONLY_ADMIN_CAN_ADD_MEMBER : false;
  }
  get viewerCanRemoveMember() {
    return this.isViewerOwner ? true : this.viewerAdminParticipant?.permissions.get(re.FLAG_ADD_REMOVE_MEMBER) || false;
  }
  get viewerCanChangeLink() {
    return this.isViewerOwner ? true : this.viewerCanAddMember ? !!this.viewerAdminParticipant?.permissions.get(re.FLAG_EDIT_LINK) : false;
  }
  get viewerCanAddAdmin() {
    return this.isViewerOwner ? true : this.viewerAdminParticipant?.permissions.get(re.FLAG_ADD_ADMIN) ?? false;
  }
  get viewerCanDeleteAnyMessage() {
    return this.isViewerOwner ? true : this.viewerAdminParticipant?.permissions.get(re.FLAG_POST_EDIT_DELETE_MESSAGE) || false;
  }
  get viewerCanChangeIconTitle() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_MODIFY_ICON) && this.restrictions.get(ce.FLAG_RESTRICTION_MODIFY_TITLE) ? false : this.options.ONLY_OWNER_CAN_CHANGE_ICON_TITLE ? this.isViewerOwner : this.isViewerParticipant;
  }
  get viewerCanChangeSettings() {
    return this.status !== 'ACTIVE' && this.status !== 'HIDDEN' ? false : this.isViewerOwner || this.viewerCanChangeLink || this.viewerCanChangeIconTitle;
  }
  get viewerCanLeaveChat() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_LEAVE_CHAT) ? false : this.isViewerParticipant;
  }
  get viewerCanRead() {
    return this.isViewerParticipant || this.access === 'PUBLIC';
  }
  get viewerCanChangeReactionsSettings() {
    return this.isViewerParticipant ? this.isViewerAdmin : false;
  }
  get reactionsSettings() {
    return M.chatReactionsSettings.get(this.id);
  }
  get viewerCanChangeType() {
    return false;
  }
}
class ft extends Ho {
  static fromApi(e) {
    Z(e.type === 'CHAT');
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => this.$.title ? this.$.title : [...this.participantsContacts.values()].slice(0, 5).map(e => e instanceof us && !e.isViewer ? e.firstName : null).filter(Boolean).join(', '));
  get longName() {
    return p(this.#e);
  }
  set longName(e) {
    x(this.#e, e);
  }
  get mentionName() {
    return null;
  }
  get isBig() {
    return this.participantsCount > M.config.serverConfig.get('max-readmarks');
  }
  #t = k(() => this.$.hasBots ?? false);
  get hasBots() {
    return p(this.#t);
  }
  set hasBots(e) {
    x(this.#t, e);
  }
  #n = k(() => new Set(this.$.subject?.organizationIds));
  get organizationIds() {
    return p(this.#n);
  }
  set organizationIds(e) {
    x(this.#n, e);
  }
  #s = k(() => this.participantsMarker !== null ? null : Array.from(this.participants.keys()).reduce((e, t) => {
    const s = M.presences.getLazy(t);
    return s instanceof Fe && s.isOnline ? e + 1 : e;
  }, 0));
  get participantsOnlineCount() {
    return p(this.#s);
  }
  set participantsOnlineCount(e) {
    x(this.#s, e);
  }
  #r = k(() => this.$.videoConversation ? Ci.fromApi(this.$.videoConversation) : null);
  get videoConversation() {
    return p(this.#r);
  }
  set videoConversation(e) {
    x(this.#r, e);
  }
  get viewerCanCall() {
    return !super.viewerCanCall || this.participantsCount > M.config.serverConfig.get('group-call-part-limit') ? false : this.options.ONLY_ADMIN_CAN_CALL ? !!this.viewerAdminParticipant?.permissions.get(re.FLAG_CALL) : true;
  }
  get showNoneContactBar() {
    return this.participantSettings.get(ce.FLAG_PARTICIPANT_SETTINGS_NON_CONTACT_BAR);
  }
  get viewerCanChangeType() {
    return this instanceof ft && this.isViewerOwner && M.config.serverConfig.get('edit-chat-type-screen-enabled');
  }
}
class In extends Ho {
  static fromApi(e) {
    Z(e.type === 'CHAT');
    Z(e.videoConversation);
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => this.$.title ? this.$.title : [...this.participantsContacts.values()].slice(0, 5).map(e => e instanceof us && !e.isViewer ? e.firstName : null).filter(Boolean).join(', '));
  get longName() {
    return p(this.#e);
  }
  set longName(e) {
    x(this.#e, e);
  }
  get mentionName() {
    return null;
  }
  get isBig() {
    return this.participantsCount > M.config.serverConfig.get('max-readmarks');
  }
  hasBots = false;
  organizationIds = new Set();
  #t = k(() => this.participantsMarker !== null ? null : Array.from(this.participants.keys()).reduce((e, t) => {
    const s = M.presences.getLazy(t);
    return s instanceof Fe && s.isOnline ? e + 1 : e;
  }, 0));
  get participantsOnlineCount() {
    return p(this.#t);
  }
  set participantsOnlineCount(e) {
    x(this.#t, e);
  }
  #n = k(() => (Z(this.$.videoConversation), Ci.fromApi(this.$.videoConversation)));
  get videoConversation() {
    return p(this.#n);
  }
  set videoConversation(e) {
    x(this.#n, e);
  }
  get viewerCanChangeSettings() {
    return false;
  }
  get viewerCanCall() {
    return !super.viewerCanCall || this.participantsCount > M.config.serverConfig.get('group-call-part-limit') ? false : this.options.ONLY_ADMIN_CAN_CALL ? !!this.viewerAdminParticipant?.permissions.get(re.FLAG_CALL) : true;
  }
}
class Xe extends Ho {
  static fromApi(e) {
    Z(e.type === 'CHANNEL');
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => this.$.title ?? '');
  get longName() {
    return p(this.#e);
  }
  set longName(e) {
    x(this.#e, e);
  }
  #t = k(() => {
    if (!this.link)
      return null;
    try {
      const e = new URL(this.link);
      return e.pathname.startsWith('/join/') ? null : e.pathname.slice(1) ?? null;
    } catch {
      return null;
    }
  });
  get mentionName() {
    return p(this.#t);
  }
  set mentionName(e) {
    x(this.#t, e);
  }
  get viewerCanComplain() {
    return this.restrictions.get(ce.FLAG_RESTRICTION_COMPLAINT) || this.isViewerOwner ? false : M.config.serverConfig.get('channels-complaint-enabled');
  }
  get viewerCanWrite() {
    return super.viewerCanWrite && !!(this.viewerAdminParticipant?.permissions.get(re.FLAG_POST_MESSAGE) || this.viewerAdminParticipant?.permissions.get(re.FLAG_POST_EDIT_DELETE_MESSAGE));
  }
  get viewerCanChangeIconTitle() {
    return this.isViewerOwner || !!this.viewerAdminParticipant?.permissions.get(re.FLAG_CHANGE_CHAT_INFO);
  }
  get viewerCanEdit() {
    return this.isViewerOwner || !!(this.viewerAdminParticipant?.permissions.get(re.FLAG_EDIT_MESSAGE) || this.viewerAdminParticipant?.permissions.get(re.FLAG_POST_EDIT_DELETE_MESSAGE));
  }
  get viewerCanDeleteAnyMessage() {
    return this.isViewerOwner || !!(this.viewerAdminParticipant?.permissions.get(re.FLAG_DELETE_MESSAGE) || this.viewerAdminParticipant?.permissions.get(re.FLAG_POST_EDIT_DELETE_MESSAGE));
  }
  get viewerCanCall() {
    return false;
  }
  get isSensitive() {
    return this.isViewerParticipant ? false : M.profile.viewer.settings.CONTENT_LEVEL_ACCESS && this.options.CONTENT_LEVEL_CHAT;
  }
  get viewerCanViewStats() {
    return M.config.serverConfig.get('channel-statistics-botid') <= 0 ? false : !!this.viewerAdminParticipant?.permissions.get(re.FLAG_VIEW_STATS);
  }
  get viewerCanChangeType() {
    return this instanceof Xe && this.isViewerOwner && M.config.serverConfig.get('edit-channel-type-screen-enabled');
  }
}
class J0 {
  chatId;
  ids = new Te();
  constructor(e) {
    this.chatId = e;
  }
  #e = k(() => {
    const e = [];
    for (const t of this.ids) {
      const s = M.messages.get(this.chatId).get(t);
      s instanceof Ce && e.push(s);
    }
    return e;
  });
  get messages() {
    return p(this.#e);
  }
  set messages(e) {
    x(this.#e, e);
  }
  get canDelete() {
    return this.messages.every(e => e.canDelete);
  }
  get size() {
    return this.messages.length;
  }
  clear() {
    this.ids.clear();
  }
  add(e) {
    this.ids.add(e.id);
  }
  delete(e) {
    this.ids.delete(e);
  }
  has(e) {
    return this.ids.has(e);
  }
}
class X0 {
  perChat = new pe();
  constructor() {
  }
  get(e) {
    let t = this.perChat.get(e);
    return t || (mt(() => {
      t = Se(() => {
        const s = new Z0(e);
        this.perChat.set(e, s);
        return s;
      });
    }), t = this.perChat.get(e), Z(t !== void 0), t);
  }
  async resync(e) {
    await Promise.all([Object.entries(e).map(async ([t, s]) => {
        const r = ce.resolveId(Number(t)), i = await Promise.all(s.map(a => this.get(r).upsert(a)));
        for (const a of i)
          switch (a.status) {
          case 'REMOVED':
            break;
          case null:
          case 'EDITED':
            break;
          default:
            a.status;
          }
      })]);
  }
}
class Z0 extends xe {
  chatId;
  constructor(e) {
    super(), this.chatId = e;
  }
  convert(e) {
    return _e.fromApi(e, this.chatId);
  }
  fetch(e) {
    return ee.socket.cmd(ip, {
      chatId: this.chatId,
      messageIds: e
    }).then(t => t.messages);
  }
  fetchGraph(e, t) {
    const s = e.attaches?.find(r => r._type === 'CONTROL');
    return Promise.all([
      t.senderId && M.contacts.getLazy(t.senderId),
      t instanceof js && t.content instanceof Nd && Promise.all(t.content.contactIds.map(r => M.contacts.getLazy(r))),
      t instanceof js && t.content instanceof Pd && M.contacts.getLazy(t.content.contactId),
      t instanceof Ce && t.attaches.contact?.contactId && M.contacts.getLazy(t.attaches.contact.contactId),
      t instanceof Ce && t.link?.attaches.contact?.contactId && M.contacts.getLazy(t.link.attaches.contact.contactId),
      t instanceof Ce && t.attaches.inlineKeyboard instanceof ko && Promise.all(t.attaches.inlineKeyboard.buttons.flat().filter(r => r instanceof xd).map(r => M.contacts.getLazy(r.contactId))),
      s && s.event === 'pin' && M.messages.get(t.chatId).upsert(s.pinnedMessage),
      e.stats && M.messageStats.get(t.chatId).upsert([
        t.id,
        e.stats
      ]),
      e.reactionInfo && M.messagesReactions.get(t.chatId).upsert([
        t.id,
        e.reactionInfo
      ])
    ]);
  }
  onNotFound(e) {
    return {
      id: e,
      time: 0,
      type: 'USER',
      status: 'REMOVED'
    };
  }
}
const bu = ee.logTask((n, {analyticsAndMetrics: e}) => {
    e.settings.logEvent(n);
  }), DF = ee.logTask((n, {analyticsAndMetrics: e}) => {
    e.webapp.logWebapp(n);
  }), _F = ee.logTask((n, {analyticsAndMetrics: e}) => {
    e.call.logEvent(n);
  }), vF = ee.logTask((n, {analyticsAndMetrics: e}) => {
    e.unknownCallerAction.logEvent(n);
  }), wu = '__oneme_theme', ev = [
    'system',
    'light',
    'dark'
  ], tv = [
    'moscow',
    'space',
    'nature',
    'neon',
    'lebedev',
    'nyorange',
    'nygreen',
    'simple'
  ], nv = {
    system: 1,
    light: 2,
    dark: 3
  }, sv = {
    simple: 'simple',
    space: 'space',
    nature: 'nature',
    neon: 'neon',
    moscow: 'Moscow',
    lebedev: 'lebedev',
    nyorange: 'nyorange',
    nygreen: 'nygreen'
  };
class Xr {
  #e = W('system');
  get _colorScheme() {
    return p(this.#e);
  }
  set _colorScheme(e) {
    x(this.#e, e, true);
  }
  #t = W('space');
  get _colorTheme() {
    return p(this.#t);
  }
  set _colorTheme(e) {
    x(this.#t, e, true);
  }
  constructor() {
    this.loadFromStorage(), this.saveToStorage();
  }
  get colorScheme() {
    return this._colorScheme;
  }
  set colorScheme(e) {
    this._colorScheme = e, this.saveToStorage(), bu({
      event: 'THEME',
      params: { paramValue: nv[e] }
    });
  }
  get colorTheme() {
    return this._colorTheme;
  }
  set colorTheme(e) {
    this._colorTheme = e, this.saveToStorage(), bu({
      event: 'BACKGROUND',
      params: { paramValue: sv[e] }
    });
  }
  get displayColorScheme() {
    return this.colorScheme === 'system' ? Qp.current : this.colorScheme;
  }
  saveToStorage() {
    localStorage.setItem(wu, JSON.stringify({
      colorScheme: this._colorScheme,
      colorTheme: this._colorTheme
    }));
  }
  loadFromStorage() {
    const e = localStorage.getItem(wu);
    if (e)
      try {
        const t = JSON.parse(e), s = t.colorScheme, r = t.colorTheme;
        typeof s == 'string' && Xr.isValidColorScheme(s) && (this._colorScheme = s), typeof r == 'string' && Xr.isValidColorTheme(r) && (this._colorTheme = r);
      } catch {
      }
  }
  static isValidColorScheme(e) {
    return ev.find(t => t === e) !== void 0;
  }
  static isValidColorTheme(e) {
    return tv.find(t => t === e) !== void 0;
  }
}
class rv extends te {
  static ESIA_VERIFIED_FLAG = 1;
  static SECOND_FACTOR_PASSWORD_ENABLED = 2;
  static SECOND_FACTOR_HAS_EMAIL = 3;
  static SECOND_FACTOR_HAS_HINT = 4;
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  has(e) {
    return this.$.includes(e);
  }
}
class Eu extends te {
  static fromApi(e) {
    return new this(e);
  }
  theme = new Xr();
  constructor(e) {
    super(e);
  }
  get id() {
    return ae.resolveId(this.$.contact.id);
  }
  get syncTime() {
    return this.$.contact.updateTime;
  }
  update(e) {
    super.update(e);
  }
  #e = k(() => rv.fromApi(this.$.profileOptions ?? []));
  get profileOptions() {
    return p(this.#e);
  }
  set profileOptions(e) {
    x(this.#e, e);
  }
  get phone() {
    return this.$.contact.phone ?? null;
  }
  get contact() {
    const e = M.contacts.get(this.id);
    Z(e instanceof us);
    return e;
  }
  get folders() {
    return M.folders.folders;
  }
  get settings() {
    return M.config.userSettings;
  }
  get informer() {
    return M.banners.informer;
  }
  get dontDisturb() {
    return this.settings.DONT_DISTURB_UNTIL === -1 ? true : this.settings.DONT_DISTURB_UNTIL > tn.now;
  }
  #t = k(() => Array.from(M.profile.sessions).sort((e, t) => t.time - e.time));
  get sessions() {
    return p(this.#t);
  }
  set sessions(e) {
    x(this.#t, e);
  }
  #n = k(() => Array.from(M.profile.blacklistIds, e => M.contacts.get(e)).filter(({status: e}) => e === 'BLOCKED'));
  get blacklist() {
    return p(this.#n);
  }
  set blacklist(e) {
    x(this.#n, e);
  }
  get timeToDelete() {
    return M.profile.timeToDelete;
  }
  #s = k(() => M.callRecords.values.filter(e => e.message.status !== 'REMOVED').sort((e, t) => t.message.time - e.message.time));
  get callHistory() {
    return p(this.#s);
  }
  set callHistory(e) {
    x(this.#s, e);
  }
}
class iv {
  viewer;
  sessions;
  blacklistIds;
  #e = W(0);
  get timeToDelete() {
    return p(this.#e);
  }
  set timeToDelete(e) {
    x(this.#e, e, true);
  }
  constructor() {
    this.viewer = Eu.fromApi({
      contact: {
        id: 0,
        updateTime: 0,
        names: [{ firstName: '' }]
      }
    }), this.sessions = new Te(), this.blacklistIds = new Te();
  }
  async upsert(e) {
    if (e.profile) {
      await M.contacts.upsert(e.profile.contact);
      const t = Eu.fromApi(e.profile);
      t.syncTime >= this.viewer.syncTime && this.viewer.update(t);
    }
    e.timeToDelete !== void 0 && (this.timeToDelete = e.timeToDelete);
    if (e.sessions) {
      this.sessions.clear();
      for (const t of e.sessions)
        this.sessions.add(t);
    }
    e.clearBlacklist && this.blacklistIds.clear(), e.blacklist && (await Promise.all(e.blacklist.map(async s => (await M.contacts.upsert(s)).id))).forEach(s => {
      M.profile.blacklistIds.add(s);
    });
  }
}
const av = 'ENTRIES', Bd = 'KEYS', Ud = 'VALUES', Re = '';
class ca {
  constructor(e, t) {
    const s = e._tree, r = Array.from(s.keys());
    this.set = e, this._type = t, this._path = r.length > 0 ? [{
        node: s,
        keys: r
      }] : [];
  }
  next() {
    const e = this.dive();
    this.backtrack();
    return e;
  }
  dive() {
    if (this._path.length === 0)
      return {
        done: true,
        value: void 0
      };
    const {
      node: e,
      keys: t
    } = Nn(this._path);
    if (Nn(t) === Re)
      return {
        done: false,
        value: this.result()
      };
    const s = e.get(Nn(t));
    this._path.push({
      node: s,
      keys: Array.from(s.keys())
    });
    return this.dive();
  }
  backtrack() {
    if (this._path.length === 0)
      return;
    const e = Nn(this._path).keys;
    e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack());
  }
  key() {
    return this.set._prefix + this._path.map(({keys: e}) => Nn(e)).filter(e => e !== Re).join('');
  }
  value() {
    return Nn(this._path).node.get(Re);
  }
  result() {
    switch (this._type) {
    case Ud:
      return this.value();
    case Bd:
      return this.key();
    default:
      return [
        this.key(),
        this.value()
      ];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
}
const Nn = n => n[n.length - 1], ov = (n, e, t) => {
    const s = new Map();
    if (e === void 0)
      return s;
    const r = e.length + 1, i = r + t, a = new Uint8Array(i * r).fill(t + 1);
    for (let o = 0; o < r; ++o)
      a[o] = o;
    for (let o = 1; o < i; ++o)
      a[o * r] = o;
    Hd(n, e, t, s, a, 1, r, '');
    return s;
  }, Hd = (n, e, t, s, r, i, a, o) => {
    const l = i * a;
    e:
      for (const d of n.keys())
        if (d === Re) {
          const c = r[l - 1];
          c <= t && s.set(o, [
            n.get(d),
            c
          ]);
        } else {
          let c = i;
          for (let u = 0; u < d.length; ++u, ++c) {
            const h = d[u], f = a * c, m = f - a;
            let g = r[f];
            const D = Math.max(0, c - t - 1), _ = Math.min(a - 1, c + t);
            for (let S = D; S < _; ++S) {
              const N = h !== e[S], L = r[m + S] + +N, U = r[m + S + 1] + 1, C = r[f + S] + 1, R = r[f + S + 1] = Math.min(L, U, C);
              R < g && (g = R);
            }
            if (g > t)
              continue e;
          }
          Hd(n.get(d), e, t, s, r, c, a, o + d);
        }
  };
class Xt {
  constructor(e = new Map(), t = '') {
    this._size = void 0, this._tree = e, this._prefix = t;
  }
  atPrefix(e) {
    if (!e.startsWith(this._prefix))
      throw new Error('Mismatched prefix');
    const [t, s] = Zr(this._tree, e.slice(this._prefix.length));
    if (t === void 0) {
      const [r, i] = jo(s);
      for (const a of r.keys())
        if (a !== Re && a.startsWith(i)) {
          const o = new Map();
          o.set(a.slice(i.length), r.get(a));
          return new Xt(o, e);
        }
    }
    return new Xt(t, e);
  }
  clear() {
    this._size = void 0, this._tree.clear();
  }
  delete(e) {
    this._size = void 0;
    return cv(this._tree, e);
  }
  entries() {
    return new ca(this, av);
  }
  forEach(e) {
    for (const [t, s] of this)
      e(t, s, this);
  }
  fuzzyGet(e, t) {
    return ov(this._tree, e, t);
  }
  get(e) {
    const t = Ba(this._tree, e);
    return t !== void 0 ? t.get(Re) : void 0;
  }
  has(e) {
    const t = Ba(this._tree, e);
    return t !== void 0 && t.has(Re);
  }
  keys() {
    return new ca(this, Bd);
  }
  set(e, t) {
    if (typeof e != 'string')
      throw new Error('key must be a string');
    this._size = void 0;
    ua(this._tree, e).set(Re, t);
    return this;
  }
  get size() {
    if (this._size)
      return this._size;
    this._size = 0;
    const e = this.entries();
    for (; !e.next().done;)
      this._size += 1;
    return this._size;
  }
  update(e, t) {
    if (typeof e != 'string')
      throw new Error('key must be a string');
    this._size = void 0;
    const s = ua(this._tree, e);
    s.set(Re, t(s.get(Re)));
    return this;
  }
  fetch(e, t) {
    if (typeof e != 'string')
      throw new Error('key must be a string');
    this._size = void 0;
    const s = ua(this._tree, e);
    let r = s.get(Re);
    r === void 0 && s.set(Re, r = t());
    return r;
  }
  values() {
    return new ca(this, Ud);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(e) {
    const t = new Xt();
    for (const [s, r] of e)
      t.set(s, r);
    return t;
  }
  static fromObject(e) {
    return Xt.from(Object.entries(e));
  }
}
const Zr = (n, e, t = []) => {
    if (e.length === 0 || n == null)
      return [
        n,
        t
      ];
    for (const s of n.keys())
      if (s !== Re && e.startsWith(s)) {
        t.push([
          n,
          s
        ]);
        return Zr(n.get(s), e.slice(s.length), t);
      }
    t.push([
      n,
      e
    ]);
    return Zr(void 0, '', t);
  }, Ba = (n, e) => {
    if (e.length === 0 || n == null)
      return n;
    for (const t of n.keys())
      if (t !== Re && e.startsWith(t))
        return Ba(n.get(t), e.slice(t.length));
  }, ua = (n, e) => {
    const t = e.length;
    e:
      for (let s = 0; n && s < t;) {
        for (const i of n.keys())
          if (i !== Re && e[s] === i[0]) {
            const a = Math.min(t - s, i.length);
            let o = 1;
            for (; o < a && e[s + o] === i[o];)
              ++o;
            const l = n.get(i);
            if (o === i.length)
              n = l;
            else {
              const d = new Map();
              d.set(i.slice(o), l), n.set(e.slice(s, s + o), d), n.delete(i), n = d;
            }
            s += o;
            continue e;
          }
        const r = new Map();
        n.set(e.slice(s), r);
        return r;
      }
    return n;
  }, cv = (n, e) => {
    const [t, s] = Zr(n, e);
    if (t !== void 0) {
      t.delete(Re);
      if (t.size === 0)
        jd(s);
      else if (t.size === 1) {
        const [r, i] = t.entries().next().value;
        $d(s, r, i);
      }
    }
  }, jd = n => {
    if (n.length === 0)
      return;
    const [e, t] = jo(n);
    e.delete(t);
    if (e.size === 0)
      jd(n.slice(0, -1));
    else if (e.size === 1) {
      const [s, r] = e.entries().next().value;
      s !== Re && $d(n.slice(0, -1), s, r);
    }
  }, $d = (n, e, t) => {
    if (n.length === 0)
      return;
    const [s, r] = jo(n);
    s.set(r + e, t), s.delete(r);
  }, jo = n => n[n.length - 1], $o = 'or', zd = 'and', uv = 'and_not';
class En {
  constructor(e) {
    if (e?.fields == null)
      throw new Error('MiniSearch: option "fields" must be provided');
    const t = e.autoVacuum == null || e.autoVacuum === true ? ha : e.autoVacuum;
    this._options = {
      ...da,
      ...e,
      autoVacuum: t,
      searchOptions: {
        ...yu,
        ...e.searchOptions || {}
      },
      autoSuggestOptions: {
        ...mv,
        ...e.autoSuggestOptions || {}
      }
    }, this._index = new Xt(), this._documentCount = 0, this._documentIds = new Map(), this._idToShortId = new Map(), this._fieldIds = {}, this._fieldLength = new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = Ha, this.addFields(this._options.fields);
  }
  add(e) {
    const {
        extractField: t,
        stringifyField: s,
        tokenize: r,
        processTerm: i,
        fields: a,
        idField: o
      } = this._options, l = t(e, o);
    if (l == null)
      throw new Error(`MiniSearch: document does not have ID field "${ o }"`);
    if (this._idToShortId.has(l))
      throw new Error(`MiniSearch: duplicate ID ${ l }`);
    const d = this.addDocumentId(l);
    this.saveStoredFields(d, e);
    for (const c of a) {
      const u = t(e, c);
      if (u == null)
        continue;
      const h = r(s(u, c), c), f = this._fieldIds[c], m = new Set(h).size;
      this.addFieldLength(d, f, this._documentCount - 1, m);
      for (const g of h) {
        const D = i(g, c);
        if (Array.isArray(D))
          for (const _ of D)
            this.addTerm(f, d, _);
        else
          D && this.addTerm(f, d, D);
      }
    }
  }
  addAll(e) {
    for (const t of e)
      this.add(t);
  }
  addAllAsync(e, t = {}) {
    const r = {
        chunk: [],
        promise: Promise.resolve()
      }, {
        chunk: i,
        promise: a
      } = e.reduce(({
        chunk: o,
        promise: l
      }, d, c) => (o.push(d), (c + 1) % s === 0 ? {
        chunk: [],
        promise: l.then(() => new Promise(u => setTimeout(u, 0))).then(() => this.addAll(o))
      } : {
        chunk: o,
        promise: l
      }), r);
    return a.then(() => this.addAll(i));
  }
  remove(e) {
    const {
        tokenize: t,
        processTerm: s,
        extractField: r,
        stringifyField: i,
        fields: a,
        idField: o
      } = this._options, l = r(e, o);
    if (l == null)
      throw new Error(`MiniSearch: document does not have ID field "${ o }"`);
    const d = this._idToShortId.get(l);
    if (d == null)
      throw new Error(`MiniSearch: cannot remove document with ID ${ l }: it is not in the index`);
    for (const c of a) {
      const u = r(e, c);
      if (u == null)
        continue;
      const h = t(i(u, c), c), f = this._fieldIds[c], m = new Set(h).size;
      this.removeFieldLength(d, f, this._documentCount, m);
      for (const g of h) {
        const D = s(g, c);
        if (Array.isArray(D))
          for (const _ of D)
            this.removeTerm(f, d, _);
        else
          D && this.removeTerm(f, d, D);
      }
    }
    this._storedFields.delete(d), this._documentIds.delete(d), this._idToShortId.delete(l), this._fieldLength.delete(d), this._documentCount -= 1;
  }
  removeAll(e) {
    if (e)
      for (const t of e)
        this.remove(t);
    else {
      if (arguments.length > 0)
        throw new Error('Expected documents to be present. Omit the argument to remove all documents.');
      this._index = new Xt(), this._documentCount = 0, this._documentIds = new Map(), this._idToShortId = new Map(), this._fieldLength = new Map(), this._avgFieldLength = [], this._storedFields = new Map(), this._nextId = 0;
    }
  }
  discard(e) {
    const t = this._idToShortId.get(e);
    if (t == null)
      throw new Error(`MiniSearch: cannot discard document with ID ${ e }: it is not in the index`);
    this._idToShortId.delete(e), this._documentIds.delete(t), this._storedFields.delete(t), (this._fieldLength.get(t) || []).forEach((s, r) => {
      this.removeFieldLength(t, r, this._documentCount, s);
    }), this._fieldLength.delete(t), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum();
  }
  maybeAutoVacuum() {
    if (this._options.autoVacuum === false)
      return;
    const {
      minDirtFactor: e,
      minDirtCount: t,
      batchSize: s,
      batchWait: r
    } = this._options.autoVacuum;
    this.conditionalVacuum({
      batchSize: s,
      batchWait: r
    }, {
      minDirtCount: t,
      minDirtFactor: e
    });
  }
  discardAll(e) {
    const t = this._options.autoVacuum;
    try {
      this._options.autoVacuum = false;
      for (const s of e)
        this.discard(s);
    } finally {
      this._options.autoVacuum = t;
    }
    this.maybeAutoVacuum();
  }
  replace(e) {
    const {
        idField: t,
        extractField: s
      } = this._options, r = s(e, t);
    this.discard(r), this.add(e);
  }
  vacuum(e = {}) {
    return this.conditionalVacuum(e);
  }
  conditionalVacuum(e, t) {
    return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && t, this._enqueuedVacuum != null ? this._enqueuedVacuum : (this._enqueuedVacuum = this._currentVacuum.then(() => {
      const s = this._enqueuedVacuumConditions;
      this._enqueuedVacuumConditions = Ha;
      return this.performVacuuming(e, s);
    }), this._enqueuedVacuum)) : this.vacuumConditionsMet(t) === false ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(e), this._currentVacuum);
  }
  async performVacuuming(e, t) {
    const s = this._dirtCount;
    if (this.vacuumConditionsMet(t)) {
      const r = e.batchSize || 1000, i = e.batchWait || 10;
      let a = 1;
      for (const [o, l] of this._index) {
        for (const [d, c] of l)
          for (const [u] of c)
            this._documentIds.has(u) || (c.size <= 1 ? l.delete(d) : c.delete(u));
        this._index.get(o).size === 0 && this._index.delete(o), a % r === 0 && await new Promise(d => setTimeout(d, i)), a += 1;
      }
      this._dirtCount -= s;
    }
    await null, this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null;
  }
  vacuumConditionsMet(e) {
    if (e == null)
      return true;
    t = t || 20;
    s = s || 0.1;
    return this.dirtCount >= t && this.dirtFactor >= s;
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  has(e) {
    return this._idToShortId.has(e);
  }
  getStoredFields(e) {
    const t = this._idToShortId.get(e);
    if (t != null)
      return this._storedFields.get(t);
  }
  search(e, t = {}) {
    const {searchOptions: s} = this._options, r = {
        ...s,
        ...t
      }, i = this.executeQuery(e, t), a = [];
    for (const [o, {
            score: l,
            terms: d,
            match: c
          }] of i) {
      const u = d.length || 1, h = {
          id: this._documentIds.get(o),
          score: l * u,
          terms: Object.keys(c),
          queryTerms: d,
          match: c
        };
      Object.assign(h, this._storedFields.get(o)), (r.filter == null || r.filter(h)) && a.push(h);
    }
    e === En.wildcard && r.boostDocument == null || a.sort(Cu);
    return a;
  }
  autoSuggest(e, t = {}) {
    t = {
      ...this._options.autoSuggestOptions,
      ...t
    };
    const s = new Map();
    for (const {
          score: i,
          terms: a
        } of this.search(e, t)) {
      const o = a.join(' '), l = s.get(o);
      l != null ? (l.score += i, l.count += 1) : s.set(o, {
        score: i,
        terms: a,
        count: 1
      });
    }
    const r = [];
    for (const [i, {
            score: a,
            terms: o,
            count: l
          }] of s)
      r.push({
        suggestion: i,
        terms: o,
        score: a / l
      });
    r.sort(Cu);
    return r;
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  static loadJSON(e, t) {
    if (t == null)
      throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
    return this.loadJS(JSON.parse(e), t);
  }
  static async loadJSONAsync(e, t) {
    if (t == null)
      throw new Error('MiniSearch: loadJSON should be given the same options used when serializing the index');
    return this.loadJSAsync(JSON.parse(e), t);
  }
  static getDefault(e) {
    if (da.hasOwnProperty(e))
      return la(da, e);
    throw new Error(`MiniSearch: unknown option "${ e }"`);
  }
  static loadJS(e, t) {
    const l = this.instantiateMiniSearch(e, t);
    l._documentIds = fr(r), l._fieldLength = fr(i), l._storedFields = fr(a);
    for (const [d, c] of l._documentIds)
      l._idToShortId.set(c, d);
    for (const [d, c] of s) {
      const u = new Map();
      for (const h of Object.keys(c)) {
        let f = c[h];
        o === 1 && (f = f.ds), u.set(parseInt(h, 10), fr(f));
      }
      l._index.set(d, u);
    }
    return l;
  }
  static async loadJSAsync(e, t) {
    const l = this.instantiateMiniSearch(e, t);
    l._documentIds = await mr(r), l._fieldLength = await mr(i), l._storedFields = await mr(a);
    for (const [c, u] of l._documentIds)
      l._idToShortId.set(u, c);
    let d = 0;
    for (const [c, u] of s) {
      const h = new Map();
      for (const f of Object.keys(u)) {
        let m = u[f];
        o === 1 && (m = m.ds), h.set(parseInt(f, 10), await mr(m));
      }
      ++d % 1000 === 0 && await Vd(0), l._index.set(c, h);
    }
    return l;
  }
  static instantiateMiniSearch(e, t) {
    if (l !== 1 && l !== 2)
      throw new Error('MiniSearch: cannot deserialize an index created with an incompatible version');
    const d = new En(t);
    d._documentCount = s;
    d._nextId = r;
    d._idToShortId = new Map();
    d._fieldIds = i;
    d._avgFieldLength = a;
    d._dirtCount = o || 0;
    d._index = new Xt();
    return d;
  }
  executeQuery(e, t = {}) {
    if (e === En.wildcard)
      return this.executeWildcardQuery(t);
    if (typeof e != 'string') {
      const h = {
          ...t,
          ...e,
          queries: void 0
        }, f = e.queries.map(m => this.executeQuery(m, h));
      return this.combineResults(f, h.combineWith);
    }
    const {
        tokenize: s,
        processTerm: r,
        searchOptions: i
      } = this._options, a = {
        tokenize: s,
        processTerm: r,
        ...i,
        ...t
      }, u = o(e).flatMap(h => l(h)).filter(h => !!h).map(fv(a)).map(h => this.executeQuerySpec(h, a));
    return this.combineResults(u, a.combineWith);
  }
  executeQuerySpec(e, t) {
    const s = {
        ...this._options.searchOptions,
        ...t
      }, r = (s.fields || this._options.fields).reduce((g, D) => ({
        ...g,
        [D]: la(s.boost, D) || 1
      }), {}), {
        fuzzy: d,
        prefix: c
      } = {
        ...{
          fuzzy: 0.45,
          prefix: 0.375
        },
        ...a
      }, u = this._index.get(e.term), h = this.termResults(e.term, e.term, 1, e.termBoost, u, r, i, l);
    let f, m;
    e.prefix && (f = this._index.atPrefix(e.term));
    if (e.fuzzy) {
      const g = e.fuzzy === true ? 0.2 : e.fuzzy, D = g < 1 ? Math.min(o, Math.round(e.term.length * g)) : g;
      D && (m = this._index.fuzzyGet(e.term, D));
    }
    if (f)
      for (const [g, D] of f) {
        const _ = g.length - e.term.length;
        if (!_)
          continue;
        m?.delete(g);
        const S = c * g.length / (g.length + 0.3 * _);
        this.termResults(e.term, g, S, e.termBoost, D, r, i, l, h);
      }
    if (m)
      for (const g of m.keys()) {
        const [D, _] = m.get(g);
        if (!_)
          continue;
        const S = d * g.length / (g.length + _);
        this.termResults(e.term, g, S, e.termBoost, D, r, i, l, h);
      }
    return h;
  }
  executeWildcardQuery(e) {
    const t = new Map(), s = {
        ...this._options.searchOptions,
        ...e
      };
    for (const [r, i] of this._documentIds) {
      const a = s.boostDocument ? s.boostDocument(i, '', this._storedFields.get(r)) : 1;
      t.set(r, {
        score: a,
        terms: [],
        match: {}
      });
    }
    return t;
  }
  combineResults(e, t = $o) {
    if (e.length === 0)
      return new Map();
    const s = t.toLowerCase(), r = lv[s];
    if (!r)
      throw new Error(`Invalid combination operator: ${ t }`);
    return e.reduce(r) || new Map();
  }
  toJSON() {
    const e = [];
    for (const [t, s] of this._index) {
      const r = {};
      for (const [i, a] of s)
        r[i] = Object.fromEntries(a);
      e.push([
        t,
        r
      ]);
    }
    return {
      documentCount: this._documentCount,
      nextId: this._nextId,
      documentIds: Object.fromEntries(this._documentIds),
      fieldIds: this._fieldIds,
      fieldLength: Object.fromEntries(this._fieldLength),
      averageFieldLength: this._avgFieldLength,
      storedFields: Object.fromEntries(this._storedFields),
      dirtCount: this._dirtCount,
      index: e,
      serializationVersion: 2
    };
  }
  termResults(e, t, s, r, i, a, o, l, d = new Map()) {
    if (i == null)
      return d;
    for (const c of Object.keys(a)) {
      const u = a[c], h = this._fieldIds[c], f = i.get(h);
      if (f == null)
        continue;
      let m = f.size;
      const g = this._avgFieldLength[h];
      for (const D of f.keys()) {
        if (!this._documentIds.has(D)) {
          this.removeTerm(h, D, t), m -= 1;
          continue;
        }
        const _ = o ? o(this._documentIds.get(D), t, this._storedFields.get(D)) : 1;
        if (!_)
          continue;
        const S = f.get(D), N = this._fieldLength.get(D)[h], L = hv(S, m, this._documentCount, N, g, l), U = s * r * u * _ * L, C = d.get(D);
        if (C) {
          C.score += U, pv(C.terms, e);
          const R = la(C.match, t);
          R ? R.push(c) : C.match[t] = [c];
        } else
          d.set(D, {
            score: U,
            terms: [e],
            match: { [t]: [c] }
          });
      }
    }
    return d;
  }
  addTerm(e, t, s) {
    const r = this._index.fetch(s, Tu);
    let i = r.get(e);
    if (i == null)
      i = new Map(), i.set(t, 1), r.set(e, i);
    else {
      const a = i.get(t);
      i.set(t, (a || 0) + 1);
    }
  }
  removeTerm(e, t, s) {
    if (!this._index.has(s)) {
      this.warnDocumentChanged(t, e, s);
      return;
    }
    const r = this._index.fetch(s, Tu), i = r.get(e);
    i == null || i.get(t) == null ? this.warnDocumentChanged(t, e, s) : i.get(t) <= 1 ? i.size <= 1 ? r.delete(e) : i.delete(t) : i.set(t, i.get(t) - 1), this._index.get(s).size === 0 && this._index.delete(s);
  }
  warnDocumentChanged(e, t, s) {
    for (const r of Object.keys(this._fieldIds))
      if (this._fieldIds[r] === t) {
        this._options.logger('warn', `MiniSearch: document with ID ${ this._documentIds.get(e) } has changed before removal: term "${ s }" was not present in field "${ r }". Removing a document after it has changed can corrupt the index!`, 'version_conflict');
        return;
      }
  }
  addDocumentId(e) {
    const t = this._nextId;
    this._idToShortId.set(e, t);
    this._documentIds.set(t, e);
    this._documentCount += 1;
    this._nextId += 1;
    return t;
  }
  addFields(e) {
    for (let t = 0; t < e.length; t++)
      this._fieldIds[e[t]] = t;
  }
  addFieldLength(e, t, s, r) {
    let i = this._fieldLength.get(e);
    i == null && this._fieldLength.set(e, i = []), i[t] = r;
    const o = (this._avgFieldLength[t] || 0) * s + r;
    this._avgFieldLength[t] = o / (s + 1);
  }
  removeFieldLength(e, t, s, r) {
    if (s === 1) {
      this._avgFieldLength[t] = 0;
      return;
    }
    const i = this._avgFieldLength[t] * s - r;
    this._avgFieldLength[t] = i / (s - 1);
  }
  saveStoredFields(e, t) {
    const {
      storeFields: s,
      extractField: r
    } = this._options;
    if (s == null || s.length === 0)
      return;
    let i = this._storedFields.get(e);
    i == null && this._storedFields.set(e, i = {});
    for (const a of s) {
      const o = r(t, a);
      o !== void 0 && (i[a] = o);
    }
  }
}
En.wildcard = Symbol('*');
const la = (n, e) => Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0, lv = {
    [$o]: (n, e) => {
      for (const t of e.keys()) {
        const s = n.get(t);
        if (s == null)
          n.set(t, e.get(t));
        else {
          const {
            score: r,
            terms: i,
            match: a
          } = e.get(t);
          s.score = s.score + r, s.match = Object.assign(s.match, a), Au(s.terms, i);
        }
      }
      return n;
    },
    [zd]: (n, e) => {
      const t = new Map();
      for (const s of e.keys()) {
        const r = n.get(s);
        if (r == null)
          continue;
        const {
          score: i,
          terms: a,
          match: o
        } = e.get(s);
        Au(r.terms, a), t.set(s, {
          score: r.score + i,
          terms: r.terms,
          match: Object.assign(r.match, o)
        });
      }
      return t;
    },
    [uv]: (n, e) => {
      for (const t of e.keys())
        n.delete(t);
      return n;
    }
  }, dv = {
    k: 1.2,
    b: 0.7,
    d: 0.5
  }, hv = (n, e, t, s, r, i) => {
    return Math.log(1 + (t - e + 0.5) / (e + 0.5)) * (l + n * (a + 1) / (n + a * (1 - o + o * s / r)));
  }, fv = n => (e, t, s) => {
    const r = typeof n.fuzzy == 'function' ? n.fuzzy(e, t, s) : n.fuzzy || false, i = typeof n.prefix == 'function' ? n.prefix(e, t, s) : n.prefix === true, a = typeof n.boostTerm == 'function' ? n.boostTerm(e, t, s) : 1;
    return {
      term: e,
      fuzzy: r,
      prefix: i,
      termBoost: a
    };
  }, da = {
    idField: 'id',
    extractField: (n, e) => n[e],
    stringifyField: (n, e) => n.toString(),
    tokenize: n => n.split(gv),
    processTerm: n => n.toLowerCase(),
    fields: void 0,
    searchOptions: void 0,
    storeFields: [],
    logger: (n, e) => {
      typeof console?.[n] == 'function' && console[n](e);
    },
    autoVacuum: true
  }, yu = {
    combineWith: $o,
    prefix: false,
    fuzzy: false,
    maxFuzzy: 6,
    boost: {},
    weights: {
      fuzzy: 0.45,
      prefix: 0.375
    },
    bm25: dv
  }, mv = {
    combineWith: zd,
    prefix: (n, e, t) => e === t.length - 1
  }, Ua = {
    batchSize: 1000,
    batchWait: 10
  }, Ha = {
    minDirtFactor: 0.1,
    minDirtCount: 20
  }, ha = {
    ...Ua,
    ...Ha
  }, pv = (n, e) => {
    n.includes(e) || n.push(e);
  }, Au = (n, e) => {
    for (const t of e)
      n.includes(t) || n.push(t);
  }, Cu = ({score: n}, {score: e}) => e - n, Tu = () => new Map(), fr = n => {
    const e = new Map();
    for (const t of Object.keys(n))
      e.set(parseInt(t, 10), n[t]);
    return e;
  }, mr = async n => {
    const e = new Map();
    let t = 0;
    for (const s of Object.keys(n))
      e.set(parseInt(s, 10), n[s]), ++t % 1000 === 0 && await Vd(0);
    return e;
  }, Vd = n => new Promise(e => setTimeout(e, n)), gv = /[\n\r\p{Z}\p{P}]+/u;
class Dv extends xe {
  searchIndex;
  mentionNameIndex = new Map();
  viewerContactIds = new Te();
  #e = k(() => this.values.filter(e => e.isAdded).sort((e, t) => e.firstName.localeCompare(t.firstName, 'ru')));
  get viewerContacts() {
    return p(this.#e);
  }
  set viewerContacts(e) {
    x(this.#e, e);
  }
  constructor() {
    super(), this.searchIndex = new En({
      fields: [
        'fullName',
        'mentionName'
      ],
      processTerm(e) {
        e = e.toLocaleLowerCase();
        const t = new Set([e]);
        ee.socket.locale === 'ru' && t.add(Ll(e));
        return [...t];
      },
      tokenize(e, t) {
        switch (t) {
        case 'mentionName':
          return [
            e,
            `@${ e }`
          ];
        default:
          return e.replaceAll(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, s => ` ${ s } `).split(/\s+/);
        }
      },
      searchOptions: {
        boostDocument(e) {
          return e === M.profile.viewer.contact.chatId ? Infinity : 1;
        },
        processTerm(e) {
          return e.toLocaleLowerCase();
        },
        combineWith: 'AND'
      }
    });
  }
  convert(e) {
    return ae.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(ep, { contactIds: e }).then(t => t.contacts);
  }
  onNotFound(e) {
    return {
      id: e,
      updateTime: this.syncTime + 1,
      status: 'REMOVED',
      names: [{
          type: 'ONEME',
          firstName: 'Профиль',
          lastName: 'удален'
        }]
    };
  }
  onUpsert(e) {
    return mt(() => {
      je(() => (e.isViewer || this.searchIndex.add({
        id: e.id,
        fullName: e.fullName,
        mentionName: e.mentionName
      }), e.mentionName && this.mentionNameIndex.set(e.mentionName, e.id), () => {
        e.isViewer || this.searchIndex.discard(e.id), e.mentionName && this.mentionNameIndex.delete(e.mentionName);
      }));
    });
  }
  async resync(e) {
    this.invalidateAll(s => !this.viewerContactIds.has(s.id));
    const t = await Promise.all(e.map(s => this.upsert(s)));
    for (const s of t)
      if (M.profile.viewer.id !== s.id)
        switch (s.status) {
        case null:
        case 'BLOCKED':
        case 'HIDDEN':
          this.viewerContactIds.add(s.id);
          break;
        case 'REMOVED':
          this.viewerContactIds.delete(s.id);
          break;
        default:
          s.status;
        }
  }
}
class zo {
  static resolveId(e) {
    return e;
  }
  id;
  name;
  description = null;
  iconUrl = null;
  startParam = null;
  appId = null;
  url = null;
  background;
  constructor(e) {
    this.id = zo.resolveId(e.id), this.name = e.name, this.background = e.background, this.description = e.description ?? null, this.iconUrl = e.iconUrl ? new URL(e.iconUrl) : null, this.startParam = e.startParam ?? null, this.url = e.url ?? null, this.appId = e.appId ? ae.resolveId(e.appId) : null;
  }
}
class ja extends te {
  static fromApi(e) {
    return new this(e);
  }
  static sorter(e, t) {
    return e.settings.favIndex !== t.settings.favIndex ? t.settings.favIndex - e.settings.favIndex : t.lastEventTime - e.lastEventTime;
  }
  constructor(e) {
    super(e);
  }
  get syncTime() {
    return this.$.folderSync;
  }
  #e = k(() => {
    const e = this.items.get($a);
    return e ? (Z(e instanceof za), e) : za.fromApi({
      id: $a,
      updateTime: 0,
      title: 'Все'
    });
  });
  get all() {
    return p(this.#e);
  }
  set all(e) {
    x(this.#e, e);
  }
  #t = k(() => {
    for (const e of this.items.values())
      if (e.isUnread)
        return e;
    return null;
  });
  get unread() {
    return p(this.#t);
  }
  set unread(e) {
    x(this.#t, e);
  }
  #n = k(() => {
    for (const e of this.items.values())
      if (e.isPersonal)
        return e;
    return null;
  });
  get personal() {
    return p(this.#n);
  }
  set personal(e) {
    x(this.#n, e);
  }
  #s = k(() => {
    for (const e of this.items.values())
      if (e.isChannels)
        return e;
    return null;
  });
  get channels() {
    return p(this.#s);
  }
  set channels(e) {
    x(this.#s, e);
  }
  #r = k(() => new pe(Array.from(this.$.foldersOrder ?? [], e => {
    const t = J.resolveId(e);
    return [
      t,
      M.folders.get(t)
    ];
  })));
  get items() {
    return p(this.#r);
  }
  set items(e) {
    x(this.#r, e);
  }
  #i = k(() => new pe(Array.from(this.items.values()).filter(e => !e.isHidden).map(e => [
    e.id,
    e
  ])));
  get visible() {
    return p(this.#i);
  }
  set visible(e) {
    x(this.#i, e);
  }
  #a = k(() => Array.from(this.items.values()).filter(e => e.canDrag));
  get draggable() {
    return p(this.#a);
  }
  set draggable(e) {
    x(this.#a, e);
  }
}
const $a = 'all.chat.folder';
class J extends te {
  static MAX_NAME_LENGTH = 20;
  static FILTER_UNREAD = 0;
  static FILTER_READ = 1;
  static FILTER_CHANNEL = 2;
  static FILTER_CHAT = 3;
  static FILTER_DIALOG = 4;
  static FILTER_OWNER = 5;
  static FILTER_ADMIN = 6;
  static FILTER_MUTED = 7;
  static FILTER_CONTACT = 8;
  static FILTER_NOT_CONTACT = 9;
  static FILTER_BOT = 10;
  static FILTER_NOT_MUTED = 11;
  static FILTER_MARKED_UNREAD = 12;
  static FILTER_ORG = 13;
  static OPTION_HIDE_EMPTY = 0;
  static OPTION_NO_DELETE = 1;
  static OPTION_NO_TITLE_EDIT = 2;
  static OPTION_NO_FILTERS_EDIT = 3;
  static SUBJECT_ORG = 13;
  static fromApi(e) {
    switch (e.id) {
    case $a:
      return za.fromApi(e);
    default:
      return new this(e);
    }
  }
  static resolveId(e) {
    return e;
  }
  get id() {
    return J.resolveId(this.$.id);
  }
  get syncTime() {
    return this.$.updateTime;
  }
  get isLoading() {
    return M.chats.isLoading;
  }
  #e = k(() => new Te((this.$.include || []).map(ce.resolveId)));
  get chatIds() {
    return p(this.#e);
  }
  set chatIds(e) {
    x(this.#e, e);
  }
  #t = k(() => new ht(this.$.title, this.$.elements));
  get title() {
    return p(this.#t);
  }
  set title(e) {
    x(this.#t, e);
  }
  get emoji() {
    return this.$.emoji || null;
  }
  #n = k(() => M.chats.viewerChats.filter(e => this.chatIds.has(e.id)));
  get chatsIncluded() {
    return p(this.#n);
  }
  set chatsIncluded(e) {
    x(this.#n, e);
  }
  #s = k(() => (this.$.widgets ?? []).map(e => new zo(e)));
  get widgets() {
    return p(this.#s);
  }
  set widgets(e) {
    x(this.#s, e);
  }
  #r = k(() => new Te(this.$.filters ?? []));
  get filters() {
    return p(this.#r);
  }
  set filters(e) {
    x(this.#r, e);
  }
  #i = k(() => new Te(this.$.options ?? []));
  get options() {
    return p(this.#i);
  }
  set options(e) {
    x(this.#i, e);
  }
  #a = k(() => new Set(this.$.filterSubjects?.[J.SUBJECT_ORG] ?? []));
  get organizationIds() {
    return p(this.#a);
  }
  set organizationIds(e) {
    x(this.#a, e);
  }
  #o = k(() => M.chats.viewerChats.filter(e => {
    if (this.chatIds.has(e.id))
      return true;
    if (this.filters.size === 0)
      return false;
    let t = 0;
    switch (t |= 1 << (e.isRead ? J.FILTER_READ : J.FILTER_UNREAD), e.markedAsUnread && (t |= 1 << J.FILTER_MARKED_UNREAD), t |= 1 << (e.settings.isMuted ? J.FILTER_MUTED : J.FILTER_NOT_MUTED), true) {
    case e instanceof sn:
      t |= 1 << J.FILTER_DIALOG;
      break;
    case e instanceof ss:
      t |= 1 << J.FILTER_DIALOG, t |= 1 << (e.recipient.isAdded ? J.FILTER_CONTACT : J.FILTER_NOT_CONTACT);
      break;
    case e instanceof wn:
      t |= 1 << J.FILTER_DIALOG, t |= 1 << J.FILTER_BOT;
      break;
    case e instanceof ft:
    case e instanceof In:
      t |= 1 << J.FILTER_CHAT, e.isViewerAdmin && (t |= 1 << J.FILTER_ADMIN), e.isViewerOwner && (t |= 1 << J.FILTER_OWNER);
      const i = [
        ...this.organizationIds,
        ...e.organizationIds
      ];
      i.length > new Set(i).size && (t |= 1 << J.FILTER_ORG);
      break;
    case e instanceof Xe:
      t |= 1 << J.FILTER_CHANNEL, e.isViewerAdmin && (t |= 1 << J.FILTER_ADMIN), e.isViewerOwner && (t |= 1 << J.FILTER_OWNER);
      break;
    }
    let s = 0, r = 0;
    for (const i of this.filters)
      switch (i) {
      case J.FILTER_CHANNEL:
      case J.FILTER_CHAT:
      case J.FILTER_DIALOG:
      case J.FILTER_CONTACT:
      case J.FILTER_NOT_CONTACT:
      case J.FILTER_BOT:
        r |= 1 << i;
        break;
      case J.FILTER_UNREAD:
      case J.FILTER_READ:
      case J.FILTER_OWNER:
      case J.FILTER_ADMIN:
      case J.FILTER_MUTED:
      case J.FILTER_NOT_MUTED:
      case J.FILTER_MARKED_UNREAD:
      case J.FILTER_ORG:
        s |= 1 << i;
        break;
      }
    r ||= Number.MAX_SAFE_INTEGER;
    return (t & s) === s && (t & r) > 0;
  }));
  get chats() {
    return p(this.#o);
  }
  set chats(e) {
    x(this.#o, e);
  }
  #c = k(() => this.chats.reduce((e, t) => t.isRead ? e : e + 1, 0));
  get unreadCount() {
    return p(this.#c);
  }
  set unreadCount(e) {
    x(this.#c, e);
  }
  #u = k(() => this.chats.length === 0 && this.options.has(J.OPTION_HIDE_EMPTY));
  get isHidden() {
    return p(this.#u);
  }
  set isHidden(e) {
    x(this.#u, e);
  }
  #l = k(() => M.config.serverConfig.get('enable-filters-for-folders') ? this.filters.has(J.FILTER_CONTACT) && this.filters.has(J.FILTER_NOT_CONTACT) : this.filters.has(J.FILTER_CONTACT) && this.filters.has(J.FILTER_NOT_CONTACT) && this.filters.size === 2);
  get isPersonal() {
    return p(this.#l);
  }
  set isPersonal(e) {
    x(this.#l, e);
  }
  #d = k(() => this.filters.size === 1 && this.filters.has(J.FILTER_CHANNEL));
  get isChannels() {
    return p(this.#d);
  }
  set isChannels(e) {
    x(this.#d, e);
  }
  #h = k(() => M.config.serverConfig.get('enable-filters-for-folders') ? this.filters.has(J.FILTER_UNREAD) : this.filters.has(J.FILTER_UNREAD) && this.filters.size === 1);
  get isUnread() {
    return p(this.#h);
  }
  set isUnread(e) {
    x(this.#h, e);
  }
  isAll = false;
  canDrag = true;
  get canDelete() {
    return !this.options.has(J.OPTION_NO_DELETE);
  }
  get canRename() {
    return !this.options.has(J.OPTION_NO_TITLE_EDIT);
  }
  get sourceId() {
    return this.$.sourceId ?? null;
  }
}
class za extends J {
  static fromApi(e) {
    return new this(e);
  }
  isAll = true;
  #e = k(() => M.chats.viewerChats);
  get chats() {
    return p(this.#e);
  }
  set chats(e) {
    x(this.#e, e);
  }
  canDrag = false;
  get canDelete() {
    return false;
  }
  get canRename() {
    return false;
  }
  #t = k(() => this.chats.reduce((e, t) => t instanceof sn || t.isRead || t.settings.isMuted ? e : e + 1, 0));
  get unreadCount() {
    return p(this.#t);
  }
  set unreadCount(e) {
    x(this.#t, e);
  }
  #n = k(() => M.config.serverConfig.get('search-webapps-showcase').items.map(({
    id: t,
    title: s,
    icon: r
  }) => new _v(t, s, r)));
  get webAppsCarousel() {
    return p(this.#n);
  }
  set webAppsCarousel(e) {
    x(this.#n, e);
  }
}
class _v {
  title;
  id;
  icon;
  constructor(e, t, s) {
    this.title = t, this.id = ae.resolveId(e), this.icon = new URL(s);
  }
}
class vv extends xe {
  #e = W(0);
  get marker() {
    return p(this.#e);
  }
  set marker(e) {
    x(this.#e, e, true);
  }
  forwardLoader = null;
  searchIndex;
  mentionNameIndex = new Map();
  #t = k(() => this.values.filter(e => {
    switch (e.status) {
    case 'ACTIVE':
      const t = e.isViewerParticipant && e.lastEventTime > this.marker && e.lastEventTime > 0;
      return e instanceof wn ? t && (e.viewerCanToggleBot || !!e.lastMessageId) : t;
    case 'HIDDEN':
    case 'REMOVED':
      return false;
    }
  }).sort(ja.sorter));
  get viewerChats() {
    return p(this.#t);
  }
  set viewerChats(e) {
    x(this.#t, e);
  }
  constructor() {
    super(), this.searchIndex = new En({
      fields: [
        'longName',
        'mentionName'
      ],
      processTerm(e) {
        e = e.toLocaleLowerCase();
        const t = new Set([e]);
        ee.socket.locale === 'ru' && t.add(Ll(e));
        return [...t];
      },
      tokenize(e, t) {
        switch (t) {
        case 'mentionName':
          return [
            e,
            `@${ e }`
          ];
        default:
          return e.replaceAll(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g, s => ` ${ s } `).split(/\s+/);
        }
      },
      searchOptions: {
        boostDocument(e) {
          return e === M.profile.viewer.contact.chatId ? Infinity : 1;
        },
        processTerm(e) {
          return e.toLocaleLowerCase();
        },
        combineWith: 'AND',
        filter(e) {
          const t = M.chats.get(e.id);
          switch (true) {
          case t instanceof sn:
          case t instanceof ss:
            return true;
          case t instanceof wn:
            return !!t.lastMessageId;
          case t instanceof ft:
          case t instanceof In:
          case t instanceof Xe:
            switch (t.status) {
            case 'ACTIVE':
              return t.isViewerParticipant;
            case 'HIDDEN':
            case 'REMOVED':
              return false;
            default:
              return t.status;
            }
          default:
            return t;
          }
        }
      }
    });
  }
  convert(e) {
    return ce.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(np, { chatIds: e }).then(t => t.chats || []);
  }
  fetchGraph(e, t) {
    let s;
    switch (true) {
    case t instanceof sn:
    case t instanceof ss:
    case t instanceof wn:
      s = Promise.all([M.contacts.getLazy(t.recipientId)]);
      break;
    case t instanceof ft:
    case t instanceof In:
    case t instanceof Xe:
      s = Promise.all([
        t.ownerId && M.contacts.getLazy(t.ownerId),
        e.reactions && M.chatReactionsSettings.upsert([
          t.id,
          e.reactions
        ])
      ]);
      break;
    }
    return Promise.all([
      s,
      e.lastMessage && M.messages.get(t.id).upsert(e.lastMessage),
      e.pinnedMessage && M.messages.get(t.id).upsert(e.pinnedMessage),
      e.lastMentionMessageId && M.messages.get(t.id).getLazy(_e.resolveId(e.lastMentionMessageId)),
      e.lastReactedMessageId && M.messages.get(t.id).getLazy(_e.resolveId(e.lastReactedMessageId)),
      t.editDraft && M.messages.get(t.id).getLazy(t.editDraft.messageId)
    ]);
  }
  onNotFound(e) {
    return e >= 0 ? {
      id: e,
      status: 'REMOVED',
      type: 'DIALOG',
      owner: 0,
      participants: {
        [e ^ M.profile.viewer.id]: 0,
        [M.profile.viewer.id]: 0
      },
      participantsCount: 2,
      lastEventTime: 0,
      joinTime: 1,
      created: 1,
      modified: 0
    } : {
      id: e,
      status: 'REMOVED',
      type: 'CHAT',
      access: 'PRIVATE',
      title: 'Чат не найден',
      owner: 0,
      participants: {},
      participantsCount: 0,
      lastEventTime: 0,
      created: 0,
      modified: 0
    };
  }
  onUpsert(e) {
    return mt(() => {
      je(() => (this.searchIndex.add({
        id: e.id,
        longName: e instanceof sn ? [
          e.longName,
          M.profile.viewer.contact.fullName,
          ...M.config.serverConfig.get('saved-messages-aliases')
        ].join(' ') : e.longName,
        mentionName: e.mentionName
      }), () => {
        this.searchIndex.discard(e.id);
      })), je(() => (e.mentionName && this.mentionNameIndex.set(e.mentionName, e.id), () => {
        e.mentionName && this.mentionNameIndex.delete(e.mentionName);
      }));
    });
  }
  async resync(e, t) {
    this.forwardLoader?.abort(), this.forwardLoader = null, this.invalidateAll(r => t ? true : !r.isViewerParticipant), await Promise.all(e.map(r => this.upsert(r))), this.marker = Math.max(t || this.marker), (async () => {
      for (this.forwardLoader?.abort(), this.forwardLoader = new AbortController(); this.marker && !this.forwardLoader.signal.aborted;) {
        const r = await ee.socket.cmd(sp, { marker: this.marker }, { signal: this.forwardLoader.signal });
        await Promise.all(r.chats.map(i => this.upsert(i))), this.marker = r.marker || 0, await Zn(2000, this.forwardLoader.signal);
      }
      this.forwardLoader = null;
    })().catch(r => {
      r instanceof ot && Mt?.error(r);
    });
  }
  get isLoading() {
    return this.marker !== 0;
  }
}
class bv extends xe {
  constructor() {
    super({
      batchScheduler(e) {
        setTimeout(e, 500);
      }
    });
  }
  onNotFound(e) {
    return [
      e,
      {
        status: Fe.STATUS_WAS_LONG_AGO,
        seen: this.syncTime + 1
      }
    ];
  }
  convert([e, t]) {
    return Fe.fromApi(t, e);
  }
  fetch(e) {
    return ee.socket.cmd(tp, { contactIds: e }).then(t => Object.entries(t.presence).map(([s, r]) => [
      ae.resolveId(Number(s)),
      r
    ]));
  }
  onUpsert(e) {
    const t = M.config.serverConfig.get('presence-ttl') * 1000;
    return mt(() => {
      je(() => {
        const s = setInterval(() => {
          this.invalidate(e.id);
        }, t);
        return () => {
          clearInterval(s);
        };
      });
    });
  }
}
class Gd {
  createMemoryStorage() {
    const e = new Map();
    return {
      length: e.size,
      clear: () => e.clear(),
      getItem: t => e.get(t) || null,
      key: t => Array.from(e.keys())[t] || null,
      removeItem: t => e.delete(t),
      setItem: (t, s) => e.set(t, s)
    };
  }
  init(e, t, s) {
    const r = this.getItem(e);
    return s || r === null || t !== null && typeof t != typeof r ? (this.setItem(e, t), t) : r;
  }
  getItem(e) {
    const t = this.storage.getItem(e);
    if (t === null)
      return null;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  setItem(e, t) {
    const s = typeof t == 'string' ? t : JSON.stringify(t);
    this.storage.setItem(e, s);
  }
  removeItem(e) {
    this.storage.removeItem(e);
  }
  clear() {
    this.storage.clear();
  }
  getStorageType() {
    return 'memoryStorage';
  }
}
class wv extends Gd {
  storage;
  isStorageAvailable;
  constructor() {
    super(), this.isStorageAvailable = this.checkSessionStorageAvailability(), this.storage = this.isStorageAvailable ? window.sessionStorage : this.createMemoryStorage();
  }
  checkSessionStorageAvailability() {
    try {
      const e = '__test__';
      window.sessionStorage.setItem(e, e);
      window.sessionStorage.removeItem(e);
      return true;
    } catch (e) {
      console.warn('sessionStorage недоступен, используется fallback в памяти', e);
      return false;
    }
  }
  getStorageType() {
    return this.isStorageAvailable ? 'sessionStorage' : 'memoryStorage';
  }
}
class Ev extends Gd {
  storage;
  isStorageAvailable;
  constructor() {
    super(), this.isStorageAvailable = this.checkSessionStorageAvailability(), this.storage = this.isStorageAvailable ? window.localStorage : this.createMemoryStorage();
  }
  checkSessionStorageAvailability() {
    try {
      const e = '__test__';
      window.localStorage.setItem(e, e);
      window.localStorage.removeItem(e);
      return true;
    } catch (e) {
      console.warn('localStorage недоступен, используется fallback в памяти', e);
      return false;
    }
  }
  getStorageType() {
    return this.isStorageAvailable ? 'localStorage' : 'memoryStorage';
  }
}
const Kd = new wv(), Yn = new Ev();
class fa extends te {
  #e = W(We({}));
  get overrides() {
    return p(this.#e);
  }
  set overrides(e) {
    x(this.#e, e, true);
  }
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e), this.overrides = Yn.init(ma, {});
  }
  get(e) {
    return this.overrides?.[e] ?? this.$.experiments?.[e] ?? this.$.server?.[e] ?? Iu[e];
  }
  get keys() {
    return Object.keys(Iu);
  }
  override(e, t) {
    this.overrides[e] = t, Yn.setItem(ma, yr(this.overrides));
  }
  resetOverrides() {
    this.overrides = {}, Yn.setItem(ma, {});
  }
}
const ma = '__server_config_overrides__', yv = {
    'async-tracer': 0,
    'presence-ttl': 1800,
    'non-contact-sync-time': 86400,
    'account-nickname-enabled': false,
    'edit-timeout': 0,
    'reactions-menu': [],
    'invite-long': '',
    'calls-endpoint': '',
    'calls-test-domain': '',
    'max-readmarks': 100,
    'max-cname-length': 200,
    'max-description-length': 400,
    'max-msg-length': 4000,
    'file-upload-unsupported-types': [],
    'file-upload-max-size': 4294967296,
    'image-quality': 0.8,
    'image-width': 1920,
    'image-height': 1920,
    'image-size': 10000000,
    'max-favorite-chats': 5,
    'bot-complaint-enabled': false,
    'reactions-max': 8,
    'welcome-sticker-ids': [],
    'edit-chat-type-screen-enabled': false,
    'edit-channel-type-screen-enabled': false,
    'esia-verify-botId': 0,
    'official-org': false,
    'esia-enabled': false,
    'calls-debug-mode': false,
    'channels-suggests-folder': false,
    'delete-msg-fys-large-chat-disabled': false,
    'calls-web-download-logs': false,
    'calls-web-upload-logs': false,
    'calls-video-zoom': false,
    'calls-fullscreen-mode': false,
    'group-call-part-limit': 100,
    'call-chat-members-load-config': {},
    cfs: false,
    cse: false,
    'calls-hotkeys': false,
    'gc-link-pre-settings': false,
    'gc-from-p2p': false,
    'call-rate': {},
    'channels-enabled': false,
    'max-participants': 20000,
    'saved-messages-aliases': [],
    'author-visibility-forward-enabled': false,
    'official-bot-naming-enabled': false,
    'search-webapps-showcase': { items: [] },
    'settings-entry-banners': [],
    'appearance-multi-theme-screen-enabled': false,
    'moscow-theme-enabled': false,
    'creation-2fa-config': {
      enabled: false,
      pass_min_len: 6,
      pass_max_len: 64,
      hint_max_len: 30
    },
    'lebedev-theme-enabled': false,
    'quotes-enabled': false,
    'channels-complaint-enabled': false,
    'reactions-settings-enabled': false,
    'channel-statistics-botid': 0,
    'enable-filters-for-folders': false,
    'enable-unknown-contact-bottom-sheet': 0,
    'informer-enabled': false,
    'family-protection-botid': 0,
    'new-year-theme-2026': false,
    'non-contact-complaints-enabled': false
  }, Av = { 'ab-experiment-login-test': 0 }, Iu = {
    ...yv,
    ...Av
  };
class Fu extends te {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => this.$.PUSH_DETAILS ?? true);
  get PUSH_DETAILS() {
    return p(this.#e);
  }
  set PUSH_DETAILS(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.DONT_DISTURB_UNTIL ?? 0);
  get DONT_DISTURB_UNTIL() {
    return p(this.#t);
  }
  set DONT_DISTURB_UNTIL(e) {
    x(this.#t, e);
  }
  #n = k(() => this.$.PUSH_SOUND ?? '_DEFAULT_');
  get PUSH_SOUND() {
    return p(this.#n);
  }
  set PUSH_SOUND(e) {
    x(this.#n, e);
  }
  #s = k(() => this.$.CHATS_PUSH_SOUND ?? '_DEFAULT_');
  get CHATS_PUSH_SOUND() {
    return p(this.#s);
  }
  set CHATS_PUSH_SOUND(e) {
    x(this.#s, e);
  }
  #r = k(() => {
    switch (this.$.CHATS_PUSH_NOTIFICATION) {
    case void 0:
      return 'ON';
    case 'ON':
    case 'OFF':
    case 'REPLY':
      return this.$.CHATS_PUSH_NOTIFICATION;
    default: {
        this.$.CHATS_PUSH_NOTIFICATION;
        return 'ON';
      }
    }
  });
  get CHATS_PUSH_NOTIFICATION() {
    return p(this.#r);
  }
  set CHATS_PUSH_NOTIFICATION(e) {
    x(this.#r, e);
  }
  #i = k(() => {
    switch (this.$.CHATS_INVITE) {
    case void 0:
      return 'ALL';
    case 'ALL':
    case 'CONTACTS':
    case 'NOBODY':
      return this.$.CHATS_INVITE;
    default: {
        this.$.CHATS_INVITE;
        return 'ALL';
      }
    }
  });
  get CHATS_INVITE() {
    return p(this.#i);
  }
  set CHATS_INVITE(e) {
    x(this.#i, e);
  }
  #a = k(() => {
    switch (this.$.INCOMING_CALL) {
    case void 0:
      return 'ALL';
    case 'ALL':
    case 'CONTACTS':
    case 'NOBODY':
      return this.$.INCOMING_CALL;
    default: {
        this.$.INCOMING_CALL;
        return 'ALL';
      }
    }
  });
  get INCOMING_CALL() {
    return p(this.#a);
  }
  set INCOMING_CALL(e) {
    x(this.#a, e);
  }
  #o = k(() => this.$.HIDDEN ?? false);
  get HIDDEN() {
    return p(this.#o);
  }
  set HIDDEN(e) {
    x(this.#o, e);
  }
  #c = k(() => this.$.SAFE_MODE ?? false);
  get SAFE_MODE() {
    return p(this.#c);
  }
  set SAFE_MODE(e) {
    x(this.#c, e);
  }
  #u = k(() => {
    switch (this.$.SEARCH_BY_PHONE) {
    case void 0:
      return 'ALL';
    case 'ALL':
    case 'CONTACTS':
      return this.$.SEARCH_BY_PHONE;
    default: {
        this.$.SEARCH_BY_PHONE;
        return 'ALL';
      }
    }
  });
  get SEARCH_BY_PHONE() {
    return p(this.#u);
  }
  set SEARCH_BY_PHONE(e) {
    x(this.#u, e);
  }
  #l = k(() => this.$.UNSAFE_FILES ?? true);
  get UNSAFE_FILES() {
    return p(this.#l);
  }
  set UNSAFE_FILES(e) {
    x(this.#l, e);
  }
  #d = k(() => this.$.CONTENT_LEVEL_ACCESS ?? false);
  get CONTENT_LEVEL_ACCESS() {
    return p(this.#d);
  }
  set CONTENT_LEVEL_ACCESS(e) {
    x(this.#d, e);
  }
  #h = k(() => {
    switch (this.$.FAMILY_PROTECTION) {
    case void 0:
      return 'OFF';
    case 'OFF':
    case 'ADMIN':
    case 'MANAGEABLE':
      return this.$.FAMILY_PROTECTION;
    default: {
        this.$.FAMILY_PROTECTION;
        return 'OFF';
      }
    }
  });
  get FAMILY_PROTECTION() {
    return p(this.#h);
  }
  set FAMILY_PROTECTION(e) {
    x(this.#h, e);
  }
}
class Cv {
  hash;
  serverConfig;
  userSettings;
  constructor() {
    this.serverConfig = fa.fromApi({}), this.userSettings = Fu.fromApi({});
  }
  async upsert(e) {
    e.user && this.userSettings.update(Fu.fromApi(e.user));
    e.chats && await M.chatsSettings.upsertMany(e.chats);
    if (e.server) {
      const {
        server: t,
        experiments: s
      } = this.serverConfig.snapshot();
      this.serverConfig.update(fa.fromApi({
        experiments: s,
        server: {
          ...t ?? {},
          ...e.server
        }
      })), Op(this.serverConfig.get('async-tracer'));
    }
    if (e.experiments) {
      const {server: t} = this.serverConfig.snapshot();
      this.serverConfig.update(fa.fromApi({
        server: t,
        experiments: e.experiments
      }));
    }
    e.hash && (this.hash = e.hash);
  }
  async resync(e) {
    return this.upsert(e);
  }
}
class Tv extends xe {
  folders;
  constructor() {
    super(), this.folders = ja.fromApi({ folderSync: 0 });
  }
  get syncTime() {
    return Math.max(super.syncTime, this.folders.syncTime);
  }
  convert(e) {
    return J.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(bp, { folderIds: e }).then(t => t.folders);
  }
  fetchGraph(e, t) {
    return Promise.all([
      Promise.all(t.widgets.map(s => s.appId).map(s => s && M.contacts.getLazy(s))),
      Promise.all(Array.from(t.chatIds, s => M.chats.getLazy(s)))
    ]);
  }
  onNotFound(e) {
    return new Error('not implemented');
  }
  async upsertDelta(e) {
    await Promise.all((e.folders ?? []).map(s => this.upsert(s)));
    const t = ja.fromApi({
      ...this.folders.snapshot(),
      ...e
    });
    t.syncTime >= this.folders.syncTime && this.folders.update(t);
  }
  async resync() {
    const e = await ee.socket.cmd(vp, { folderSync: this.syncTime });
    await this.upsertDelta(e);
  }
}
class pa extends te {
  chatId;
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(e), this.chatId = t;
  }
  get id() {
    return this.chatId;
  }
  get syncTime() {
    return 0;
  }
  #e = k(() => this.$.favIndex ?? 0);
  get favIndex() {
    return p(this.#e);
  }
  set favIndex(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.dontDisturbUntil ?? 0);
  get dontDisturbUntil() {
    return p(this.#t);
  }
  set dontDisturbUntil(e) {
    x(this.#t, e);
  }
  get isMuted() {
    switch (this.dontDisturbUntil) {
    case -1:
      return true;
    case 0:
      return false;
    default:
      return this.dontDisturbUntil > tn.now;
    }
  }
}
class Iv extends xe {
  constructor() {
    super();
  }
  convert([e, t]) {
    return pa.fromApi(t, e);
  }
  fetch(e) {
    return Promise.reject(new Error('not implemented'));
  }
  onNotFound(e) {
    return new Error('not implemented');
  }
  upsertMany(e) {
    return Promise.all(Object.entries(e).map(([t, s]) => {
      const r = ce.resolveId(Number(t));
      return this.upsert([
        r,
        s
      ]);
    }));
  }
  get(e) {
    let t = this.cache.get(e);
    t instanceof pa || (t = Se(() => (t = pa.fromApi({}, e), this.cache.set(e, t), t)), this.cache.get(e));
    return t;
  }
}
class Fv extends $_ {
  constructor() {
    super();
  }
  convert([e, t]) {
    return new _n(e, t);
  }
  fetch() {
    return Promise.resolve([]);
  }
  fetchGraph(e, t) {
    return Promise.all([t.replyTo && M.messages.get(t.chatId).getLazy(t.replyTo)]);
  }
  onNotFound() {
    return new Error('not found');
  }
  get(e) {
    let t = this.cache.get(e);
    t instanceof _n || (t = Se(() => (t = new _n(e, 0), this.cache.set(e, t), t)), this.cache.get(e));
    return t;
  }
  remove = (e, t) => {
    const s = this.get(e);
    Se(() => {
      this.cache.set(e, new _n(e, t));
    });
    this.cache.get(e);
    return s;
  };
}
class Sv {
  perChat = new pe();
  constructor() {
  }
  get(e) {
    let t = this.perChat.get(e);
    return t || (mt(() => {
      t = Se(() => {
        const s = new xv(e);
        this.perChat.set(e, s);
        return s;
      });
    }), t = this.perChat.get(e), Z(t !== void 0), t);
  }
  invalidateAll() {
    for (const e of this.perChat.values())
      e.invalidateAll();
  }
}
class xv extends xe {
  chatId;
  constructor(e) {
    super(), this.chatId = e;
  }
  convert([e, t]) {
    return lr.fromApi(t, this.chatId, e, Date.now());
  }
  fetch(e) {
    return ee.socket.cmd(mp, {
      chatId: this.chatId,
      messageIds: e
    }).then(t => Object.entries(t.messagesReactions).map(([s, r]) => [
      _e.resolveId(s),
      r
    ]));
  }
  onNotFound(e) {
    return [
      e,
      {}
    ];
  }
  get(e) {
    let t = this.getLazy(e);
    t instanceof lr || (mt(() => {
      t = Se(() => (t = lr.fromApi({}, this.chatId, e, 0), this.cache.set(e, t), t));
    }), this.cache.get(e), Z(t instanceof lr));
    return t;
  }
}
class Ov {
  perChat = new pe();
  constructor() {
  }
  get(e) {
    let t = this.perChat.get(e);
    return t || (mt(() => {
      t = Se(() => {
        const s = new Rv(e);
        this.perChat.set(e, s);
        return s;
      });
    }), t = this.perChat.get(e), Z(t !== void 0), t);
  }
  invalidateAll() {
    for (const e of this.perChat.values())
      e.invalidateAll();
  }
}
class Rv extends xe {
  chatId;
  constructor(e) {
    super(), this.chatId = e;
  }
  convert([e, t]) {
    return Jr.fromApi(e, t);
  }
  fetch(e) {
    return Promise.all(e.map(t => ee.socket.cmd(pp, {
      chatId: this.chatId,
      messageId: t,
      count: 100
    }).then(({
      reactions: s = []
    }) => [
      t,
      s
    ])));
  }
  fetchGraph(e, t) {
    return Promise.all(Array.from(t.reactions.keys(), s => M.contacts.getLazy(s)));
  }
  onNotFound(e) {
    return [
      e,
      []
    ];
  }
}
class kv {
  videoLinks = new pe();
  pendingUploads = {
    files: new Map(),
    videos: new Map()
  };
  downloadCache = new pe();
  createKey(e, t, s) {
    return `${ e }_${ t }_${ s }`;
  }
  addDownloadFile(e, t, s, r) {
    this.downloadCache.set(this.createKey(e, t, s), r);
  }
  getDownloadFile(e, t, s) {
    return this.downloadCache.get(this.createKey(e, t, s)) || null;
  }
  constructor() {
  }
  async finishFileUpload(e, t) {
    const s = this.pendingUploads.files.get(e);
    this.pendingUploads.files.delete(e);
    return s?.finishUpload(t);
  }
  async finishVideoUpload(e, t) {
    const s = this.pendingUploads.videos.get(e);
    this.pendingUploads.videos.delete(e);
    return s?.finishUpload(t);
  }
  removeFromDownload = (e, t, s) => {
    this.downloadCache.delete(this.createKey(e, t, s));
  };
  getVideoSources(e) {
    const t = this.videoLinks.get(e);
    return !t || t.expires < tn.now ? null : t;
  }
  setVideoSources(e, t) {
    this.videoLinks.set(e, t);
  }
  deleteVideoSources(e) {
    this.videoLinks.delete(e);
  }
}
class Lv extends te {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return this.$[0];
  }
  get syncTime() {
    return 0;
  }
  get url() {
    return this.$[0];
  }
  #e = k(() => this.$[1] ? new Ai(this.$[1]) : null);
  get share() {
    return p(this.#e);
  }
  set share(e) {
    x(this.#e, e);
  }
}
class Nv extends xe {
  constructor() {
    super();
  }
  convert(e) {
    return Lv.fromApi(e);
  }
  async fetch(e) {
    const t = [...e];
    try {
      const s = await ee.socket.cmd(rp, { text: t.join(' ') }), r = new Map(s.attachments.reduce((i, a) => (a._type !== 'SHARE' || a.url === void 0 || i.push([
          a.url,
          a
        ]), i), []));
      return t.map(i => [
        i,
        r.get(i)
      ]);
    } catch {
      return [];
    }
  }
  onNotFound(e) {
    return [
      e,
      void 0
    ];
  }
}
class Pv extends xe {
  constructor() {
    super();
  }
  onNotFound(e) {
    return new Error(`BotInfo with id ${ e } not found`);
  }
  convert([e, t]) {
    return Y0.fromApi(t, e);
  }
  fetch(e) {
    return Promise.all(e.map(t => ee.socket.cmd(fp, { botId: t }).then(s => [
      ae.resolveId(Number(t)),
      s
    ])));
  }
}
class Mv extends te {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get id() {
    return `${ this.chatId }_${ this.messageId }`;
  }
  get syncTime() {
    return 0;
  }
  get chatId() {
    return ce.resolveId(this.$.chatId);
  }
  get chat() {
    return M.chats.get(this.chatId);
  }
  get messageId() {
    return _e.resolveId(this.$.message.id);
  }
  get message() {
    const e = M.messages.get(this.chatId).get(this.messageId);
    Z(e instanceof Ce);
    return e;
  }
  get callAttach() {
    const e = this.message.attaches.call;
    Z(e);
    return e;
  }
}
class Bv extends xe {
  abortController = null;
  constructor() {
    super();
  }
  convert(e) {
    return Mv.fromApi(e);
  }
  async fetchGraph(e, t) {
    return Promise.all([
      M.chats.getLazy(t.chatId),
      M.messages.get(t.chatId).upsert(e.message)
    ]);
  }
  fetch(e) {
    return Promise.reject(new Error('not implemented'));
  }
  onNotFound(e) {
    return new Error('not implemented');
  }
  async resync() {
    this.abortController?.abort(), this.abortController = new AbortController();
    try {
      (await ee.socket.cmd(op, {
        forward: false,
        count: 100
      }, { signal: this.abortController.signal })).history.forEach(t => {
        this.upsert(t);
      }), this.abortController = null;
    } catch (e) {
      if (e instanceof ot && e.code === 'error.call.history.inconsistency') {
        await Zn(5000, this.abortController?.signal);
        return this.resync();
      }
      Mt?.error(e);
    }
  }
}
class Uv extends xe {
  constructor() {
    super();
  }
  convert(e) {
    return Sn.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(gi, {
      type: 'STICKER_SET',
      ids: e
    }).then(t => t.stickerSets || []);
  }
  onNotFound(e) {
    return new Error(`StickerSet with id ${ e } not found`);
  }
}
class Hv extends xe {
  constructor() {
    super();
  }
  convert(e) {
    return zt.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(gi, {
      type: 'STICKER',
      ids: e
    }).then(t => t.stickers || []);
  }
  onNotFound(e) {
    return new Error(`Sticker with id ${ e } not found`);
  }
}
class jv extends xe {
  emojiToAnimojiMap = new pe();
  constructor() {
    super();
  }
  convert(e) {
    return $t.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(gi, {
      type: 'ANIMOJI',
      ids: e
    }).then(t => t.animojis || []);
  }
  onNotFound(e) {
    return new Error(`Animoji with id ${ e } not found`);
  }
  onUpsert(e) {
    return mt(() => {
      je(() => (this.emojiToAnimojiMap.set(e.emoji, e.id), () => {
        this.emojiToAnimojiMap.delete(e.emoji);
      }));
    });
  }
}
class $v extends xe {
  constructor() {
    super();
  }
  convert(e) {
    return qs.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(gi, {
      type: 'ANIMOJI_SET',
      ids: e
    }).then(t => t.animojiSets || []);
  }
  onNotFound(e) {
    return new Error(`AnimojiSet with id ${ e } not found`);
  }
}
class Ke extends te {
  static resolveId(e) {
    return e;
  }
  static fromApi(e) {
    switch (e.type) {
    case 'STICKERS':
      return ei.fromApi(e);
    case 'ANIMOJI_SETS':
      return Yd.fromApi(e);
    case 'REACTION':
      return Va.fromApi(e);
    case 'RECENTS':
      return Wd.fromApi(e);
    case 'STICKER_SETS':
      return Fs.fromApi(e);
    default:
      return e;
    }
  }
  get id() {
    return Ke.resolveId(this.$.id);
  }
  get syncTime() {
    return 0;
  }
}
class ei extends Ke {
  appendAbortCtrl = null;
  static fromApi(e) {
    return new this(e);
  }
  get syncTime() {
    return this.$.updateTime ?? 0;
  }
  get title() {
    return this.$.title ?? '';
  }
  get totalCount() {
    return this.$.totalCount ?? 0;
  }
  get isLoadingNextPage() {
    return this.appendAbortCtrl !== null;
  }
  #e = W(We(this.$.marker ?? null));
  get marker() {
    return p(this.#e);
  }
  set marker(e) {
    x(this.#e, e, true);
  }
  #t = k(() => this.$.stickers.map(zt.resolveId));
  get stickerIds() {
    return p(this.#t);
  }
  set stickerIds(e) {
    x(this.#t, e);
  }
  #n = k(() => this.stickerIds.map(e => M.assets.stickersCache.getLazy(e)));
  get stickers() {
    return p(this.#n);
  }
  set stickers(e) {
    x(this.#n, e);
  }
  #s = k(() => this.stickerIds.map(e => [
    e,
    () => M.assets.stickersCache.getLazy(e)
  ]));
  get stickersLazy() {
    return p(this.#s);
  }
  set stickersLazy(e) {
    x(this.#s, e);
  }
  append(e) {
    const t = new Set(this.stickerIds);
    this.stickerIds.push(...e.filter(s => !t.has(s)));
  }
  prepend(e) {
    const t = new Set(this.stickerIds);
    this.stickerIds.unshift(...e.filter(s => !t.has(s)));
  }
  startAppend() {
    this.appendAbortCtrl?.abort();
    this.appendAbortCtrl = new AbortController();
    return {
      signal: this.appendAbortCtrl.signal,
      finish: (e, t) => {
        this.appendAbortCtrl = null, this.marker = t || null;
        const s = new Set(this.$.stickers);
        this.$.stickers.push(...e.filter(r => !s.has(r)));
      }
    };
  }
  changePosition(e, t) {
    const s = this.stickerIds.findIndex(r => r === e);
    s === -1 || s === t || (this.stickerIds.splice(s, 1), this.stickerIds.splice(t, 0, e));
  }
  remove(e) {
    const t = this.stickerIds.reduce((s, r, i) => (e.has(r) && s.push(i), s), []);
    t.sort((s, r) => r - s).forEach(s => {
      this.stickerIds.splice(s, 1);
    });
    return t;
  }
}
class Fs extends Ke {
  appendAbortCtrl = null;
  static fromApi(e) {
    return new this(e);
  }
  get syncTime() {
    return this.$.updateTime ?? 0;
  }
  get title() {
    return this.$.title ?? '';
  }
  get totalCount() {
    return this.$.totalCount ?? 0;
  }
  get isLoadingNextPage() {
    return this.appendAbortCtrl !== null;
  }
  #e = W(We(this.$.marker ?? null));
  get marker() {
    return p(this.#e);
  }
  set marker(e) {
    x(this.#e, e, true);
  }
  #t = k(() => this.$.stickerSets.map(Sn.resolveId));
  get stickerSetIds() {
    return p(this.#t);
  }
  set stickerSetIds(e) {
    x(this.#t, e);
  }
  #n = k(() => this.stickerSetIds.map(e => M.assets.stickerSetsCache.getLazy(e)));
  get stickerSets() {
    return p(this.#n);
  }
  set stickerSets(e) {
    x(this.#n, e);
  }
  append(e) {
    const t = new Set(this.stickerSetIds);
    this.stickerSetIds.push(...e.filter(s => !t.has(s)));
  }
  prepend(e) {
    const t = new Set(this.stickerSetIds);
    this.stickerSetIds.unshift(...e.filter(s => !t.has(s)));
  }
  startAppend() {
    this.appendAbortCtrl?.abort();
    this.appendAbortCtrl = new AbortController();
    return {
      signal: this.appendAbortCtrl.signal,
      finish: (e, t) => {
        this.appendAbortCtrl = null, this.marker = t || null;
        const s = new Set(this.$.stickerSets);
        this.$.stickerSets.push(...e.filter(r => !s.has(r)));
      }
    };
  }
  changePosition(e, t) {
    const s = this.stickerSetIds.findIndex(r => r === e);
    s === -1 || s === t || (this.stickerSetIds.splice(s, 1), this.stickerSetIds.splice(t, 0, e));
  }
  remove(e) {
    const t = this.stickerSetIds.reduce((s, r, i) => (e.has(r) && s.push(i), s), []);
    t.sort((s, r) => r - s).forEach(s => {
      this.stickerSetIds.splice(s, 1);
    });
    return t;
  }
}
class Va extends Ke {
  static fromApi(e) {
    return new this(e);
  }
  get syncTime() {
    return this.$.updateTime ?? 0;
  }
  #e = k(() => (this.$.reactions || [])?.map($t.resolveId));
  get animojiIds() {
    return p(this.#e);
  }
  set animojiIds(e) {
    x(this.#e, e);
  }
  #t = k(() => this.animojiIds.map(e => M.assets.animojisCache.get(e)));
  get animojis() {
    return p(this.#t);
  }
  set animojis(e) {
    x(this.#t, e);
  }
}
class Wd extends Ke {
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  #e = k(() => (this.$.recentEmojiList || []).map(Vv.fromApi));
  get emojiAnimojiList() {
    return p(this.#e);
  }
  set emojiAnimojiList(e) {
    x(this.#e, e);
  }
  #t = k(() => this.$.recentsList.map(zv.fromApi));
  get recentsList() {
    return p(this.#t);
  }
  set recentsList(e) {
    x(this.#t, e);
  }
  #n = k(() => this.recentsList.filter(e => e instanceof qd));
  get recentStickers() {
    return p(this.#n);
  }
  set recentStickers(e) {
    x(this.#n, e);
  }
}
const zv = {
  fromApi(n) {
    switch (n.type) {
    case 'STICKER':
      return new qd(n);
    case 'GIF':
      return new Wv(n);
    default:
      return n;
    }
  }
};
class qd {
  id;
  stickerId;
  constructor(e) {
    this.id = e.id, this.stickerId = zt.resolveId(e.stickerId);
  }
  get sticker() {
    return M.assets.stickersCache.getLazy(this.stickerId);
  }
}
const Vv = {
  fromApi(n) {
    switch (n.type) {
    case 'EMOJI':
      return new Gv(n);
    case 'ANIMOJI':
      return new Kv(n);
    default:
      return n;
    }
  }
};
class Gv {
  id;
  emoji;
  constructor(e) {
    this.id = e.value, this.emoji = e.value;
  }
}
class Kv {
  id;
  constructor(e) {
    this.id = $t.resolveId(e.id);
  }
  get animoji() {
    return M.assets.animojisCache.getLazy(this.id);
  }
}
class Wv {
  id;
  gif;
  constructor(e) {
    this.id = e.id, this.gif = new an(e.gif);
  }
}
class Yd extends Ke {
  static fromApi(e) {
    return new this(e);
  }
  #e = k(() => this.$.animojiSetIds.map(qs.resolveId));
  get animojiSetIds() {
    return p(this.#e);
  }
  set animojiSetIds(e) {
    x(this.#e, e);
  }
  #t = k(() => this.animojiSetIds.map(e => M.assets.animojiSetsCache.getLazy(e)));
  get animojiSets() {
    return p(this.#t);
  }
  set animojiSets(e) {
    x(this.#t, e);
  }
  #n = k(() => this.animojiSetIds.map(e => [
    e,
    M.assets.animojiSetsCache.getLazy(e)
  ]));
  get animojiSetsWithIds() {
    return p(this.#n);
  }
  set animojiSetsWithIds(e) {
    x(this.#n, e);
  }
}
const Ie = {
    RECENT: Ke.resolveId('RECENT'),
    FAVORITE_STICKERS: Ke.resolveId('FAVORITE_STICKERS'),
    FAVORITE_STICKER_SETS: Ke.resolveId('FAVORITE_STICKER_SETS'),
    NEW_STICKER_SETS: Ke.resolveId('NEW_STICKER_SETS'),
    POPULAR_REACTIONS: Ke.resolveId('POPULAR'),
    SYSTEM_ANIMOJIS: Ke.resolveId('SYSTEM')
  }, ga = 100;
class qv extends xe {
  constructor() {
    super();
  }
  convert(e) {
    return Ke.fromApi(e);
  }
  fetch(e) {
    throw new Error('Попытались запросить секции напрямую по ID');
  }
  onNotFound(e) {
    return new Error(`AssetSection with id ${ e } not found`);
  }
  async fetchGraph(e, t) {
    if (t instanceof Va)
      return Promise.all(t.animojiIds.map(s => M.assets.animojisCache.getLazy(s)));
  }
  get(e) {
    if (this.cache.get(e) === void 0) {
      let s;
      switch (e) {
      case Ie.RECENT: {
          s = {
            id: Ie.RECENT,
            type: 'RECENTS',
            recentsList: [],
            emojiList: []
          };
          break;
        }
      case Ie.FAVORITE_STICKERS: {
          s = {
            id: Ie.FAVORITE_STICKERS,
            title: 'Избранные',
            type: 'STICKERS',
            stickers: []
          };
          break;
        }
      case Ie.FAVORITE_STICKER_SETS: {
          s = {
            id: Ie.FAVORITE_STICKER_SETS,
            type: 'STICKER_SETS',
            stickerSets: []
          };
          break;
        }
      case Ie.NEW_STICKER_SETS: {
          s = {
            id: Ie.NEW_STICKER_SETS,
            type: 'STICKER_SETS',
            stickerSets: []
          };
          break;
        }
      case Ie.POPULAR_REACTIONS: {
          s = {
            id: Ie.POPULAR_REACTIONS,
            type: 'REACTION',
            reactions: []
          };
          break;
        }
      case Ie.SYSTEM_ANIMOJIS: {
          s = {
            id: Ie.SYSTEM_ANIMOJIS,
            type: 'ANIMOJI_SETS',
            animojiSetIds: []
          };
          break;
        }
      }
      s && (Se(() => {
        this.cache.set(e, this.convert(s));
      }), this.cache.get(e));
    }
    return super.get(e);
  }
  get recentSection() {
    const e = this.get(Ie.RECENT);
    Z(e instanceof Wd);
    return e;
  }
  get popularReactionsSection() {
    const e = this.get(Ie.POPULAR_REACTIONS);
    Z(e instanceof Va);
    return e;
  }
  get favoriteSetsSection() {
    const e = this.get(Ie.FAVORITE_STICKER_SETS);
    Z(e instanceof Fs);
    return e;
  }
  get newStickerSetSection() {
    const e = this.get(Ie.NEW_STICKER_SETS);
    Z(e instanceof Fs);
    return e;
  }
  get favoriteSection() {
    const e = this.get(Ie.FAVORITE_STICKERS);
    Z(e instanceof ei);
    return e;
  }
  get systemAnimojisSection() {
    const e = this.get(Ie.SYSTEM_ANIMOJIS);
    Z(e instanceof Yd);
    return e;
  }
  async loadMore(e, t = ga) {
    if (e.marker !== null)
      switch (true) {
      case e instanceof ei:
        return this.loadMoreStickerSection(e, t);
      case e instanceof Fs:
        return this.loadMoreStickerSetSection(e, t);
      }
  }
  async loadMoreStickerSection(e, t = ga) {
    if (e.marker !== null)
      try {
        const {
            signal: s,
            finish: r
          } = e.startAppend(), i = await ee.socket.cmd(kc, {
            sectionId: e.id,
            from: e.marker,
            count: t
          }, { signal: s });
        r(i.stickers || [], i.marker);
      } catch {
      }
  }
  async loadMoreStickerSetSection(e, t = ga) {
    if (e.marker !== null)
      try {
        const {
            signal: s,
            finish: r
          } = e.startAppend(), i = await ee.socket.cmd(kc, {
            sectionId: e.id,
            from: e.marker,
            count: t
          }, { signal: s });
        r(i.stickerSets || [], i.marker);
      } catch {
      }
  }
  async clearRecents() {
    this.recentSection.recentsList = [];
    let e = false;
    try {
      e = (await ee.socket.cmd(_p, {
        type: 'RECENT',
        ids: []
      })).success ?? false, e && this.riskyPartialUpdate(this.recentSection.id, s => {
        s.type === 'RECENTS' && (s.recentsList = []);
      });
    } catch (t) {
      console.error('Failed to clear recents section', t), e = false;
    }
    e || this.recentSection.rollback();
    return e;
  }
  async addFavoriteSticker(e) {
    this.favoriteSection.prepend([e]);
    let t = false;
    try {
      const s = await ee.socket.cmd(Zm, {
        type: 'FAVORITE_STICKER',
        id: e
      });
      t = s.success ?? false, t && this.riskyPartialUpdate(this.favoriteSection.id, r => {
        r.type === 'STICKERS' && (r.stickers.push(e), s.updateTime && (r.updateTime = s.updateTime));
      });
    } catch (s) {
      console.error('Failed to add favorite sticker', s), t = false;
    }
    t || this.favoriteSection.rollback();
    return t;
  }
  async removeFavoriteSticker(e) {
    this.favoriteSection.remove(new Set([e]));
    let t = false;
    try {
      const s = await ee.socket.cmd(Dp, {
        type: 'FAVORITE_STICKER',
        ids: [e]
      });
      t = s.success ?? false, t && this.riskyPartialUpdate(this.favoriteSection.id, r => {
        r.type === 'STICKERS' && (r.stickers = r.stickers.filter(i => i !== e), s.updateTime && (r.updateTime = s.updateTime));
      });
    } catch (s) {
      console.error('Failed to remove favorite sticker', s), t = false;
    }
    t || this.favoriteSection.rollback();
    return t;
  }
}
class Yv {
  syncTime = 0;
  stickersCache;
  stickerSetsCache;
  animojisCache;
  assetSectionsCache;
  animojiSetsCache;
  constructor() {
    this.stickersCache = new Hv(), this.stickerSetsCache = new Uv(), this.animojisCache = new jv(), this.assetSectionsCache = new qv(), this.animojiSetsCache = new $v();
  }
  handle_NOTIF_ASSETS_UPDATE = async e => {
    const t = [], s = [];
    e.id && s.push(e.id), e.ids && s.push(...e.ids);
    const r = new Set(s);
    switch (e.type) {
    case 'RECENT': {
        this.assetSectionsCache.riskyPartialUpdate(this.assetSectionsCache.recentSection.id, i => {
          if (i.type !== 'RECENTS')
            return;
          const a = c => {
              switch (c.type) {
              case 'EMOJI':
                return c.value;
              case 'ANIMOJI':
                return c.id;
              default:
                return c;
              }
            }, o = c => c.id, l = new Set(e.recentEmojiList?.map(a)), d = new Set(e.recentsList?.map(o));
          switch (e.updateType) {
          case 'ADDED': {
              e.recentEmojiList && (i.recentEmojiList = (i.recentEmojiList || []).filter(c => !l.has(a(c))), i.recentEmojiList.unshift(...e.recentEmojiList)), e.recentsList && (i.recentsList = i.recentsList.filter(c => !d.has(o(c))), i.recentsList.unshift(...e.recentsList));
              break;
            }
          case 'LIST_UPDATED': {
              e.recentEmojiList && (i.recentEmojiList = e.recentEmojiList), e.recentsList && (i.recentsList = e.recentsList);
              break;
            }
          case 'REMOVED': {
              e.recentsList && (i.recentsList = i.recentsList.filter(c => !d.has(o(c))));
              break;
            }
          case 'UPDATED':
          case 'MOVED':
          case 'PRICE_UPDATED':
            break;
          default:
            e.updateType;
          }
        });
        break;
      }
    case 'FAVORITE_STICKER': {
        this.assetSectionsCache.riskyPartialUpdate(this.assetSectionsCache.favoriteSection.id, i => {
          if (i.type === 'STICKERS') {
            switch (e.updateType) {
            case 'ADDED': {
                i.stickers = i.stickers.filter(a => !r.has(a)), i.stickers.unshift(...s);
                break;
              }
            case 'REMOVED': {
                i.stickers = i.stickers.filter(a => !r.has(a));
                break;
              }
            case 'MOVED': {
                const a = e.position;
                if (a === void 0)
                  break;
                s.map(o => {
                  const l = i.stickers.findIndex(d => d === o);
                  l === -1 || l === a || (i.stickers.splice(l, 1), i.stickers.splice(a, 0, o));
                });
                break;
              }
            case 'LIST_UPDATED':
            case 'UPDATED':
            case 'PRICE_UPDATED':
              break;
            default:
              e.updateType;
            }
            e.sync && (i.updateTime = e.sync);
          }
        });
        break;
      }
    case 'FAVORITE_STICKER_SET': {
        this.assetSectionsCache.riskyPartialUpdate(this.assetSectionsCache.favoriteSetsSection.id, i => {
          if (i.type === 'STICKER_SETS') {
            switch (e.updateType) {
            case 'ADDED': {
                i.stickerSets = i.stickerSets.filter(a => !r.has(a)), i.stickerSets.unshift(...s);
                break;
              }
            case 'REMOVED': {
                i.stickerSets = i.stickerSets.filter(a => !r.has(a));
                break;
              }
            case 'MOVED': {
                const a = e.position;
                if (a === void 0)
                  break;
                s.map(o => {
                  const l = i.stickerSets.findIndex(d => d === o);
                  l === -1 || l === a || (i.stickerSets.splice(l, 1), i.stickerSets.splice(a, 0, o));
                });
                break;
              }
            case 'LIST_UPDATED':
            case 'UPDATED':
            case 'PRICE_UPDATED':
              break;
            default:
              e.updateType;
            }
            e.sync && (i.updateTime = e.sync);
          }
        });
        break;
      }
    case 'STICKER':
    case 'STICKER_SET':
    case 'ANIMOJI':
    case 'ANIMOJI_SET':
    case 'BACKGROUND':
    case 'REACTION':
      break;
    default:
      e.type;
    }
    await Promise.all(t);
  };
  async resync() {
    try {
      const e = ee.socket.cmd(ir, {
          sync: this.syncTime,
          type: 'STICKER'
        }), t = ee.socket.cmd(ir, {
          sync: this.syncTime,
          type: 'FAVORITE_STICKER'
        }), s = ee.socket.cmd(ir, {
          sync: this.syncTime,
          type: 'REACTION'
        }), r = ee.socket.cmd(ir, {
          sync: this.syncTime,
          type: 'ANIMOJI_SET'
        }), i = await Promise.all([
          e,
          t,
          s,
          r
        ]);
      await Promise.all(i.map(a => {
        this.syncTime = Math.max(this.syncTime, a.sync);
        if (a.stickersUpdates) {
          const o = this.fromRawUpdates(a.stickersUpdates, zt.resolveId);
          this.stickersCache.invalidateAll(l => {
            const d = o.get(l.id);
            return d !== void 0 && l.syncTime < d;
          });
        }
        if (a.stickerSetsUpdates) {
          const o = this.fromRawUpdates(a.stickerSetsUpdates, Sn.resolveId);
          this.stickerSetsCache.invalidateAll(l => {
            const d = o.get(l.id);
            return d !== void 0 && l.syncTime < d;
          });
        }
        if (a.animojiUpdates) {
          const o = this.fromRawUpdates(a.animojiUpdates, $t.resolveId);
          this.animojisCache.invalidateAll(l => {
            const d = o.get(l.id);
            return d !== void 0 && l.syncTime < d;
          });
        }
        return (a.sections || []).map(o => this.assetSectionsCache.upsert(o).then(async l => {
          if (l instanceof ei || l instanceof Fs)
            for (; l.marker !== null;)
              await this.assetSectionsCache.loadMore(l);
        }));
      }).flat());
    } catch (e) {
      console.error('Failed to sync assets', e);
    }
  }
  fromRawUpdates(e, t) {
    return new Map(Object.entries(e).map(([s, r]) => [
      t(parseInt(s)),
      r
    ]));
  }
}
class Qv extends te {
  messageId;
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(e), this.messageId = t;
  }
  get id() {
    return this.messageId;
  }
  get syncTime() {
    const e = this.views ?? 0, t = this.forwards ?? 0;
    return e + t;
  }
  get views() {
    return !this.$.views || this.$.views < 1 ? null : this.$.views;
  }
  get forwards() {
    return !this.$.forwards || this.$.forwards < 1 ? null : this.$.forwards;
  }
}
class Jv {
  perChat = new pe();
  constructor() {
  }
  get(e) {
    let t = this.perChat.get(e);
    return t || (mt(() => {
      t = Se(() => {
        const s = new Xv(e);
        this.perChat.set(e, s);
        return s;
      });
    }), t = this.perChat.get(e), Z(t !== void 0), t);
  }
  invalidateAll() {
    for (const e of this.perChat.values())
      e.invalidateAll();
  }
}
class Xv extends xe {
  chatId;
  constructor(e) {
    super(), this.chatId = e;
  }
  onNotFound(e) {
    return [
      e,
      {
        views: 0,
        forwards: 0
      }
    ];
  }
  convert([e, t]) {
    return Qv.fromApi(t, e);
  }
  fetch(e) {
    return ee.socket.cmd(ap, {
      chatId: this.chatId,
      messageIds: e,
      readOnly: true
    }).then(t => Object.entries(t.stats).map(([s, r]) => [
      _e.resolveId(s),
      r
    ]));
  }
}
const Zv = {
  chat: 1,
  channel: 2,
  p2p_message: 3,
  chat_message: 4,
  channel_message: 5,
  user_profile: 6,
  bot_profile: 7
};
class eb extends te {
  static fromApi(e) {
    return new this(e);
  }
  get complainSync() {
    return this.$.complainSync;
  }
  #e = k(() => this.$.complains?.reduce((e, t) => {
    const [s] = Object.entries(Zv).find(([r, i]) => i === t.typeId) || [];
    s && (e[s] = t.reasons.map(r => new tb(r)));
    return e;
  }, {}));
  get reasons() {
    return p(this.#e);
  }
  set reasons(e) {
    x(this.#e, e);
  }
}
class tb {
  apiReason;
  constructor(e) {
    this.apiReason = e;
  }
  get title() {
    return this.apiReason.reasonTitle;
  }
  get id() {
    return this.apiReason.reasonId;
  }
}
class nb extends xe {
  constructor() {
    super({ allowReplaceInstance: true });
  }
  convert(e) {
    return Po.fromApi(e);
  }
  fetch(e) {
    return ee.socket.cmd(gp, { chatIds: e }).then(t => t.chatReactionsSettings ? t.chatReactionsSettings.map(s => (Z(s.chatId), [
      ce.resolveId(s.chatId),
      s
    ])) : []);
  }
  async upsert(e) {
    const t = await super.upsert(e);
    switch (true) {
    case t instanceof Mo:
      this.invalidate(t.id);
      break;
    }
    return t;
  }
  onNotFound(e) {
    return new Error('not implemented');
  }
}
class Su extends te {
  informerShown = false;
  static fromApi(e) {
    return new this(e);
  }
  constructor(e) {
    super(e);
  }
  get updateTime() {
    return this.$.updateTime;
  }
  get showTime() {
    return this.$.showTime;
  }
  #e = k(() => this.$.banners.map(e => Ss.fromApi(e, this.showTime)));
  get banners() {
    return p(this.#e);
  }
  set banners(e) {
    x(this.#e, e);
  }
  #t = k(() => {
    const e = this.banners.filter(t => t.canShow);
    return e.length === 0 || this.informerShown ? null : e.length === 1 ? e[0] : e.reduce((t, s) => s.priority > t.priority ? s : t);
  });
  get activeBanner() {
    return p(this.#t);
  }
  set activeBanner(e) {
    x(this.#t, e);
  }
}
class Ss extends te {
  static TYPE_TEXT = 0;
  static TYPE_LINK = 1;
  static TYPE_UPDATE = 2;
  static resolveId(e) {
    return e;
  }
  showCounter;
  #e = W(0);
  get closedAt() {
    return p(this.#e);
  }
  set closedAt(e) {
    x(this.#e, e, true);
  }
  showTime;
  #t = W(0);
  get showAt() {
    return p(this.#t);
  }
  set showAt(e) {
    x(this.#t, e, true);
  }
  static fromApi(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(e);
    const s = M.banners.informerState.banners[Ss.resolveId(e.id)];
    this.showCounter = s?.showCounter || 0, this.closedAt = s?.closedTime || 0, this.showTime = t;
  }
  get hasRemainingShows() {
    return this.showCounter === 0 ? true : this.showCounter < this.repeat;
  }
  get isCloseCooldownOver() {
    return this.closedAt ? Date.now() - this.closedAt > this.rerun : true;
  }
  #n = k(() => M.config.serverConfig.get('informer-enabled') && !(this.animoji instanceof Promise) && !this.isShowTimeOver);
  get isEnabled() {
    return p(this.#n);
  }
  set isEnabled(e) {
    x(this.#n, e);
  }
  #s = k(() => this.showAt === 0 ? false : tn.now - this.showAt > this.showTime);
  get isShowTimeOver() {
    return p(this.#s);
  }
  set isShowTimeOver(e) {
    x(this.#s, e);
  }
  get canShow() {
    return this.hasRemainingShows && this.isCloseCooldownOver && this.id !== M.banners.informerState.lastShowedBannerId;
  }
  get id() {
    return Ss.resolveId(this.$.id);
  }
  get title() {
    return this.$.title;
  }
  get isTitleAnimated() {
    return this.$.isTitleAnimated;
  }
  get description() {
    return this.$.description;
  }
  get url() {
    return this.$.url;
  }
  get type() {
    return this.$.type || Ss.TYPE_TEXT;
  }
  get animoji() {
    const e = $t.resolveId(this.$.animojiId);
    return M.assets.animojisCache.getLazy(e);
  }
  get repeat() {
    return this.$.repeat ?? 0;
  }
  get rerun() {
    return this.$.rerun;
  }
  get priority() {
    return this.$.priority;
  }
}
class sb {
  informer;
  INFORMER_KEY = '__oneme_informer';
  informerState = {
    lastShowedBannerId: null,
    banners: {}
  };
  constructor() {
    this.informerState = Yn.init(this.INFORMER_KEY, {
      lastShowedBannerId: null,
      banners: {}
    }), this.informer = Su.fromApi({
      banners: [],
      showTime: 0,
      updateTime: 0
    });
  }
  syncBannerState(e) {
    const t = new Set(e.map(r => r.id)), s = Object.entries(this.informerState.banners).filter(([r]) => t.has(r));
    this.informerState.banners = Object.fromEntries(s), Yn.setItem(this.INFORMER_KEY, yr(this.informerState));
  }
  async upsert(e) {
    e.updateTime > this.informer.updateTime && (this.syncBannerState(e.banners), this.informer.update(Su.fromApi(e)));
  }
  updateInformerState(e, t) {
    this.informerState.banners[e] = {
      ...this.informerState.banners[e],
      ...t
    }, Yn.setItem(this.INFORMER_KEY, yr(this.informerState));
  }
}
class rb {
  config;
  profile;
  contacts;
  presences;
  folders;
  chats;
  chatsSettings;
  chatReactionsSettings;
  drafts;
  messages;
  messagesReactions;
  messagesDetailedReactions;
  downloadUpload;
  linkSnippets;
  botInfo;
  callRecords;
  assets;
  messageStats;
  complainReasons;
  banners;
  static init() {
    let e;
    mt(() => {
      e = new this();
    });
    Z(e);
    return e;
  }
  constructor() {
    this.config = new Cv(), this.profile = new iv(), this.contacts = new Dv(), this.presences = new bv(), this.folders = new Tv(), this.chats = new vv(), this.chatsSettings = new Iv(), this.chatReactionsSettings = new nb(), this.drafts = new Fv(), this.messages = new X0(), this.messagesReactions = new Sv(), this.messagesDetailedReactions = new Ov(), this.downloadUpload = new kv(), this.linkSnippets = new Nv(), this.botInfo = new Pv(), this.callRecords = new Bv(), this.assets = new Yv(), this.messageStats = new Jv(), this.complainReasons = eb.fromApi({
      complainSync: 0,
      complains: []
    }), this.banners = new sb();
  }
}
const M = rb.init();
class ib {
  #e = W(null);
  get activeSource() {
    return p(this.#e);
  }
  set activeSource(e) {
    x(this.#e, e);
  }
  requestPlayback(e) {
    this.activeSource !== e && (this.activeSource !== null && this.activeSource.onPlaybackRelease(), this.activeSource = e);
  }
  releasePlayback(e) {
    this.activeSource === e && (this.activeSource = null);
  }
}
const bF = new ib();
var ab = ue('<div><div></div></div>');
function wF(n, e) {
  st(e, true);
  let t = W(void 0), s = W(void 0), r = W(null);
  function i(f) {
    f.preventDefault();
    if (f.target === p(t)) {
      a(m, g);
      return;
    }
    if (f.target === p(s)) {
      o(m, g);
      return;
    }
  }
  function a(f, m) {
    if (!p(s))
      return;
    const {
        left: g,
        top: D
      } = p(s).getBoundingClientRect(), _ = e.axis === 'x' ? g : D, S = e.axis === 'x' ? f : m, N = Math.sign(S - _);
    e.onStepScroll(N);
  }
  function o(f, m) {
    if (!p(s))
      return;
    const {
      left: g,
      top: D
    } = p(s).getBoundingClientRect();
    x(r, e.axis === 'x' ? f - g : m - D, true), document.body.style.pointerEvents = 'none';
  }
  function l() {
    x(r, null), document.body.style.pointerEvents = '';
  }
  function d(f) {
    if (!p(t) || p(r) === null)
      return;
    const {
        width: D,
        height: _,
        left: S,
        top: N
      } = p(t).getBoundingClientRect(), L = e.axis === 'x' ? D : _, U = e.axis === 'x' ? S : N, b = ((e.axis === 'x' ? m : g) - U - p(r)) / (L - e.thumbSize);
    e.onThumbMove(b);
  }
  var c = ab();
  Qn('mouseup', Wo, function (...f) {
    (p(r) !== null ? l : void 0)?.apply(this, f);
  }), Qn('mousemove', Wo, function (...f) {
    (p(r) !== null ? d : void 0)?.apply(this, f);
  }), Nt(c, '--trackSize: 10px; --thumbThickness: 6px'), c.__mousedown = i;
  var u = me(c);
  let h;
  Jn(u, f => x(s, f), () => p(s)), he(c), Jn(c, f => x(t, f), () => p(t)), nt(() => {
    Pt(c, 1, `track track--${ e.axis ?? '' }`, 'svelte-1jl1s9c'), h = Pt(u, 1, `thumb thumb--${ e.axis ?? '' }`, 'svelte-1jl1s9c', h, { 'thumb--forceVisible': !!p(r) }), Nt(u, `
      width: ${ e.axis === 'x' ? `${ e.thumbSize }px` : '100%' };
      height: ${ e.axis === 'y' ? `${ e.thumbSize }px` : '100%' };
      transform: translate3d(
        ${ (e.axis === 'x' ? e.thumbOffset : 0) ?? '' }px,
        ${ (e.axis === 'y' ? e.thumbOffset : 0) ?? '' }px,
      0);
    `);
  }), X(n, c), rt();
}
ri(['mousedown']);
var ob = ue('<div><!></div>');
function cb(n, e) {
  const t = Qe(e, 'disabled', 3, false), s = ii(e, [
      '$$slots',
      '$$events',
      '$$legacy',
      'appearance',
      'size',
      'children',
      'disabled'
    ]);
  var r = ob();
  Ar(r, () => ({
    class: `badgeIcon badgeIcon--${ e.size ?? '' } badgeIcon--${ e.appearance ?? '' }-${ t() ? 'disabled' : 'regular' }`,
    ...s
  }), void 0, void 0, void 0, 'svelte-175g6s8');
  var i = me(r);
  Lt(i, () => e.children), he(r), X(n, r);
}
var ub = ue('<span> </span>');
function lb(n, e) {
  st(e, true);
  const t = ii(e, [
    '$$slots',
    '$$events',
    '$$legacy',
    'text'
  ]);
  cb(n, Ku(() => t, {
    children: (s, r) => {
      var i = ub(), a = me(i, true);
      he(i), nt(() => {
        Pt(i, 1, `text text--${ e.size ?? '' }`, 'svelte-1vguf0e'), Za(a, e.text);
      }), X(s, i);
    },
    $$slots: { default: true }
  })), rt();
}
const db = 'ru', xu = ['ru'], Qd = ['baseLocale'];
globalThis.__paraglide = {};
let Ou = false, B = () => {
    let n;
    for (const e of Qd) {
      if (e === 'baseLocale')
        n = db;
      else if (Jd(e) && ti.has(e)) {
        const t = ti.get(e);
        if (t) {
          const s = t.getLocale();
          if (s instanceof Promise)
            continue;
          n = s;
        }
      }
      if (n !== void 0) {
        const t = mb(n);
        Ou || (Ou = true, fb(t, { reload: false }));
        return t;
      }
    }
    throw new Error('No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found');
  };
const hb = n => {
  window.location.reload();
};
let fb = (n, e) => {
  const t = {
    reload: true,
    ...e
  };
  let s;
  try {
    s = 'ru';
  } catch {
  }
  const r = [];
  for (const a of Qd)
    if (a !== 'baseLocale' && Jd(a) && ti.has(a)) {
      const o = ti.get(a);
      if (o) {
        let l = o.setLocale(n);
        l instanceof Promise && (l = l.catch(d => {
          throw new Error(`Custom strategy "${ a }" setLocale failed.`, { cause: d });
        }), r.push(l));
      }
    }
  const i = () => {
    t.reload && window.location && n !== s && hb();
  };
  if (r.length)
    return Promise.all(r).then(() => {
      i();
    });
  i();
};
function mb(n) {
  if (typeof n != 'string')
    throw new Error(`Invalid locale: ${ n }. Expected a string.`);
  const e = n.toLowerCase(), t = xu.find(s => s.toLowerCase() === e);
  if (!t)
    throw new Error(`Invalid locale: ${ n }. Expected one of: ${ 'ru' }`);
  return t;
}
const ti = new Map();
function Jd(n) {
  return typeof n == 'string' && /^custom-[A-Za-z0-9_-]+$/.test(n);
}
const pb = () => 'Устройства', gb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Устройства'), Db = () => 'Устройства с MAX', _b = (n = {}, e = {}) => (e.locale ?? 'ru', 'Устройства с MAX'), vb = () => `Входите на новых устройствах 
и управляйте сессиями`, bb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Входите на новых устройствах \nи управляйте сессиями'), wb = () => 'текущая', Eb = (n = {}, e = {}) => (e.locale ?? 'ru', 'текущая'), yb = () => 'в сети', Ab = (n = {}, e = {}) => (e.locale ?? 'ru', 'в сети'), Cb = () => 'Завершить все сессии, кроме текущей', Tb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Завершить все сессии, кроме текущей'), Ib = () => 'Каналы', Fb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Каналы'), Sb = () => 'Добавить', xb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Добавить'), Ob = () => 'Добавить чаты', Rb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Добавить чаты'), kb = () => 'Обновить QR-код', Lb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Обновить QR-код'), Nb = () => 'QR-код устарел', Pb = (n = {}, e = {}) => (e.locale ?? 'ru', 'QR-код устарел'), Mb = () => 'Обновите его, чтобы войти в профиль или скачать приложение', Bb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Обновите его, чтобы войти в профиль или скачать приложение'), Ub = () => 'Войдите в MAX по QR-коду', Hb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Войдите в MAX по QR-коду'), jb = () => 'Наведите камеру на QR-код, чтобы войти в профиль или скачать приложение', $b = (n = {}, e = {}) => (e.locale ?? 'ru', 'Наведите камеру на QR-код, чтобы войти в профиль или скачать приложение'), zb = () => 'Напишите имя, чтобы сохранить изменения', Vb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Напишите имя, чтобы сохранить изменения'), Gb = () => 'Нужна хотя бы одна буква', Kb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нужна хотя бы одна буква'), Wb = () => 'Здесь могут быть только буквы', qb = (n = {}, e = {}) => (e.locale ?? 'ru', 'Здесь могут быть только буквы');
function Ys(n, e, t) {
  return new Intl.PluralRules(n, t).select(Number(e));
}
const Yb = n => {
    const e = Ys('ru', n.count, {});
    return e == 'one' ? `Введите минимум ${ n.count } символ` : e == 'few' ? `Введите минимум ${ n.count } символа` : e == 'many' ? `Введите минимум ${ n.count } символов` : 'auth:error-minSymbols';
  }, Qb = (n, e = {}) => (e.locale ?? 'ru', Yb(n)), Jb = n => {
    const e = Ys('ru', n.count, {});
    return e == 'one' ? `Введите максимум ${ n.count } символ` : e == 'few' ? `Введите максимум ${ n.count } символа` : e == 'many' ? `Введите максимум ${ n.count } символов` : 'auth:error-maxSymbols';
  }, Xb = (n, e = {}) => (e.locale ?? 'ru', Jb(n)), Zb = () => 'Пароли не совпадают, попробуйте еще раз', ew = (n = {}, e = {}) => (e.locale ?? 'ru', 'Пароли не совпадают, попробуйте еще раз'), tw = () => 'Много символов, попробуйте сократить', nw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Много символов, попробуйте сократить'), sw = () => 'Неверный пароль', rw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Неверный пароль'), iw = n => {
    const e = Ys('ru', n.count, {});
    return e == 'one' ? `Удаляем ваш профиль, это займет ${ n.count } день` : e == 'few' ? `Удаляем ваш профиль, это займет ${ n.count } дня` : e == 'many' ? `Удаляем ваш профиль, это займет ${ n.count } дней` : 'auth:snackbar-profileDeleteNotice';
  }, aw = (n, e = {}) => (e.locale ?? 'ru', iw(n)), ow = () => 'Что-то с интернетом, проверьте сеть и попробуйте снова', cw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Что-то с интернетом, проверьте сеть и попробуйте снова'), uw = () => 'Не удалось загрузить аватар', lw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не удалось загрузить аватар'), dw = () => 'Неизвестная ошибка', hw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Неизвестная ошибка'), fw = () => 'Назад', mw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Назад'), pw = () => 'Помощь', gw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Помощь'), Dw = () => 'Ответы на популярные вопросы', _w = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ответы на популярные вопросы'), vw = () => 'С каким номером телефона хотите войти?', bw = (n = {}, e = {}) => (e.locale ?? 'ru', 'С каким номером телефона хотите войти?'), ww = () => 'На него придёт СМС с кодом', Ew = (n = {}, e = {}) => (e.locale ?? 'ru', 'На него придёт СМС с кодом'), yw = () => 'Для входа нужен номер из России или страны из списка — нажмите на флаг, чтобы выбрать', Aw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Для входа нужен номер из России или страны из списка — нажмите на флаг, чтобы выбрать'), Cw = () => 'Войти', Tw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Войти'), Iw = () => 'Скачайте MAX на мобильный, чтобы зарегистрироваться', Fw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Скачайте MAX на мобильный, чтобы зарегистрироваться'), Sw = () => 'Наведите камеру телефона на QR-код выше или установите мобильное приложение', xw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Наведите камеру телефона на QR-код выше или установите мобильное приложение'), Ow = () => 'Код придёт, если номер телефона зарегистрирован', Rw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Код придёт, если номер телефона зарегистрирован'), kw = n => `Отправили код на ${ n.phone }`, Lw = (n, e = {}) => (e.locale ?? 'ru', kw(n)), Nw = () => 'Если номер неверный, вернитесь назад', Pw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Если номер неверный, вернитесь назад'), Mw = () => 'Получить новый код можно через ', Bw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Получить новый код можно через '), Uw = () => 'Получить новый код', Hw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Получить новый код'), jw = () => 'Введите пароль для входа', $w = (n = {}, e = {}) => (e.locale ?? 'ru', 'Введите пароль для входа'), zw = () => 'Ваш профиль дополнительно защищен', Vw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ваш профиль дополнительно защищен'), Gw = () => 'Пароль', Kw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Пароль'), Ww = () => 'Продолжить', qw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Продолжить'), Yw = () => 'Какой код пришёл на почту?', Qw = (n = {}, e = {}) => (e.locale ?? 'ru', 'Какой код пришёл на почту?'), Jw = n => `Проверьте почту ${ n.email }`, Xw = (n, e = {}) => (e.locale ?? 'ru', Jw(n)), Zw = () => 'Получить новый код можно через ', eE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Получить новый код можно через '), tE = () => 'Получить новый код', nE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Получить новый код'), sE = () => 'Придумайте новый пароль', rE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Придумайте новый пароль'), iE = () => 'Пароль', aE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Пароль'), oE = n => {
    const e = Ys('ru', n.count, {});
    return e == 'one' ? `От ${ n.count } символа, прописные и строчные буквы, цифры и специальные символы: $ # \\ _ @ & *` : e == 'few' ? `От ${ n.count } символов, прописные и строчные буквы, цифры и специальные символы: $ # \\ _ @ & *` : e == 'many' ? `От ${ n.count } символов, прописные и строчные буквы, цифры и специальные символы: $ # \\ _ @ & *` : 'auth:passwordRecovery-hint';
  }, cE = (n, e = {}) => (e.locale ?? 'ru', oE(n)), uE = () => 'Повторите пароль', lE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Повторите пароль'), dE = () => 'Сохранить', hE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Сохранить'), fE = () => 'Что делать, если нет доступа к почте?', mE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Что делать, если нет доступа к почте?'), pE = () => 'Если вы не помните пароль и у вас нет доступа к почте, войти в профиль не получится', gE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Если вы не помните пароль и у вас нет доступа к почте, войти в профиль не получится'), DE = () => 'Вы можете удалить профиль — через 7 дней ваши данные и чаты исчезнут, и можно будет заново зарегистрироваться с тем же номером', _E = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы можете удалить профиль — через 7 дней ваши данные и чаты исчезнут, и можно будет заново зарегистрироваться с тем же номером'), vE = () => 'Удалить профиль', bE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Удалить профиль'), wE = () => 'Отменить', EE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отменить'), yE = () => 'Как вас зовут?', AE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Как вас зовут?'), CE = () => 'Так вас будут видеть другие пользователи', TE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Так вас будут видеть другие пользователи'), IE = () => 'Имя', FE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Имя'), SE = () => 'Фамилия (необязательно)', xE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Фамилия (необязательно)'), OE = () => 'Необязательно', RE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Необязательно'), kE = n => n.context == 'placeholder' ? 'Введите имя' : n.context == 'continue' ? 'Продолжить' : 'auth:names-button-submit', LE = (n, e = {}) => (e.locale ?? 'ru', kE(n)), NE = () => 'Каким будет фото профиля?', PE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Каким будет фото профиля?'), ME = () => 'Загрузите своё или подберите аватар', BE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Загрузите своё или подберите аватар'), UE = () => 'Начать общение', HE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Начать общение'), jE = () => 'Зарегистрироваться', $E = (n = {}, e = {}) => (e.locale ?? 'ru', 'Зарегистрироваться'), zE = () => 'Нажимая «Войти», вы принимаете ', VE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нажимая «Войти», вы принимаете '), GE = () => 'политику конфиденциальности', KE = (n = {}, e = {}) => (e.locale ?? 'ru', 'политику конфиденциальности'), WE = () => 'пользовательское соглашение', qE = (n = {}, e = {}) => (e.locale ?? 'ru', 'пользовательское соглашение'), YE = () => ' и ', QE = (n = {}, e = {}) => (e.locale ?? 'ru', ' и '), JE = () => 'Войти по номеру телефона', XE = (n = {}, e = {}) => (e.locale ?? 'ru', 'Войти по номеру телефона'), ZE = () => 'Зарегистрироваться', ey = (n = {}, e = {}) => (e.locale ?? 'ru', 'Зарегистрироваться'), ty = () => 'Забыли пароль?', ny = (n = {}, e = {}) => (e.locale ?? 'ru', 'Забыли пароль?'), sy = () => 'Нет доступа к почте?', ry = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нет доступа к почте?'), iy = () => 'Семейная защита', ay = (n = {}, e = {}) => (e.locale ?? 'ru', 'Семейная защита'), oy = () => 'Отключена', cy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отключена'), uy = () => 'Вы администратор', ly = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы администратор'), dy = () => 'Профиль под защитой', hy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Профиль под защитой'), fy = n => `Окно: ${ n.header }`, my = (n, e = {}) => (e.locale ?? 'ru', fy(n)), py = () => 'Это зарегистрированный канал', gy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Это зарегистрированный канал'), Dy = () => 'Он есть в перечне Роскомнадзора', _y = (n = {}, e = {}) => (e.locale ?? 'ru', 'Он есть в перечне Роскомнадзора'), vy = () => 'Понятно', by = (n = {}, e = {}) => (e.locale ?? 'ru', 'Понятно'), wy = () => 'Заблокировать пользователя?', Ey = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать пользователя?'), yy = () => 'Вы больше не сможете писать и звонить друг другу', Ay = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы больше не сможете писать и звонить друг другу'), Cy = () => 'Заблокировать', Ty = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать'), Iy = () => 'Заблокировать контакт', Fy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать контакт'), Sy = () => 'Не блокировать', xy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не блокировать'), Oy = () => 'Не блокировать', Ry = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не блокировать'), ky = () => 'Ошибка блокировки контакта', Ly = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ошибка блокировки контакта'), Ny = () => 'Вы не сможете видеть статус «в сети» других пользователей', Py = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы не сможете видеть статус «в сети» других пользователей'), My = () => 'Все равно выбрать', By = (n = {}, e = {}) => (e.locale ?? 'ru', 'Все равно выбрать'), Uy = () => 'Отменить', Hy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отменить'), jy = () => 'Ошибка. Повторите попытку позже.', $y = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ошибка. Повторите попытку позже.'), zy = () => 'Вы точно хотите очистить избранное?', Vy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы точно хотите очистить избранное?'), Gy = n => `Очистить историю чата с ${ n.longName }?`, Ky = (n, e = {}) => (e.locale ?? 'ru', Gy(n)), Wy = () => 'Очистить историю канала?', qy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить историю канала?'), Yy = () => 'Очистить историю чата?', Qy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить историю чата?'), Jy = () => 'Восстановить сохранённые сообщения, медиа и файлы не получится', Xy = (n = {}, e = {}) => (e.locale ?? 'ru', 'Восстановить сохранённые сообщения, медиа и файлы не получится'), Zy = () => 'Восстановить посты не получится', eA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Восстановить посты не получится'), tA = () => 'Восстановить переписку не получится', nA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Восстановить переписку не получится'), sA = () => 'Очистить у всех', rA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить у всех'), iA = () => 'Очистить', aA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить'), oA = () => 'Отменить', cA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отменить'), uA = () => 'Что-то пошло не так', lA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Что-то пошло не так'), dA = () => 'Вы очистили историю', hA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы очистили историю'), fA = () => 'Не удалось очистить историю', mA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не удалось очистить историю'), pA = () => 'Очистить недавние стикеры', gA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить недавние стикеры'), DA = () => 'Вы точно хотите очистить список недавних стикеров?', _A = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы точно хотите очистить список недавних стикеров?'), vA = () => 'Очистить', bA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Очистить'), wA = () => 'Отмена', EA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отмена'), yA = () => 'Завершить все сессии, кроме текущей', AA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Завершить все сессии, кроме текущей'), CA = () => 'Завершить', TA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Завершить'), IA = () => 'Отменить', FA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отменить'), SA = () => 'Ошибка. Повторите попытку позже.', xA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ошибка. Повторите попытку позже.'), OA = n => `Выйти из чата «${ n.longName }»?`, RA = (n, e = {}) => (e.locale ?? 'ru', OA(n)), kA = n => `Отписаться от канала «${ n.longName }»?`, LA = (n, e = {}) => (e.locale ?? 'ru', kA(n)), NA = () => 'Для этого нужно передать права владельца', PA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Для этого нужно передать права владельца'), MA = () => 'Вы сможете вернуться только по ссылке-приглашению, все равно выйти?', BA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы сможете вернуться только по ссылке-приглашению, все равно выйти?'), UA = () => 'Выйти', HA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Выйти'), jA = () => 'Отписаться', $A = (n = {}, e = {}) => (e.locale ?? 'ru', 'Отписаться'), zA = () => 'Выйти', VA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Выйти'), GA = () => 'Передать права', KA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Передать права'), WA = () => 'Передать права', qA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Передать права'), YA = () => 'Не выходить', QA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не выходить'), JA = () => 'Не отписываться', XA = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не отписываться'), ZA = () => 'Не выходить', e1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Не выходить'), t1 = () => 'Вы вышли из чата', n1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы вышли из чата'), s1 = () => 'Вы вышли из канала', r1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Вы вышли из канала'), i1 = () => 'Ошибка. Повторите попытку позже', a1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ошибка. Повторите попытку позже'), o1 = () => 'Чат', c1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Чат'), u1 = () => 'Начать', l1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Начать'), d1 = () => 'Разблокировать', h1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Разблокировать'), f1 = () => 'Звук', m1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Звук'), p1 = () => 'Поиск', g1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Поиск'), D1 = () => 'Ещё', _1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Ещё'), v1 = () => 'В контакты', b1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'В контакты'), w1 = () => 'Заблокировать', E1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать'), y1 = () => 'Подписаться', A1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Подписаться'), C1 = () => 'Чат готов!', T1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Чат готов!'), I1 = () => `Теперь можно пригласить участников
и начать общение`, F1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Теперь можно пригласить участников\nи начать общение'), S1 = () => `Можно общаться, ставить реакции
и делиться файлами`, x1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Можно общаться, ставить реакции\nи делиться файлами'), O1 = () => `Чат группового звонка
по
ссылке`, R1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Чат группового звонка\nпо\nссылке'), k1 = () => 'Канал готов!', L1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Канал готов!'), N1 = () => `Теперь можно создать первый пост
и поделиться им, чтобы привлечь
подписчиков`, P1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Теперь можно создать первый пост\nи поделиться им, чтобы привлечь\nподписчиков'), M1 = () => 'Скоро здесь появятся первые посты', B1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Скоро здесь появятся первые посты'), U1 = () => `Можно поделиться каналом,
чтобы поддержать автора`, H1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Можно поделиться каналом,\nчтобы поддержать автора'), j1 = () => 'Сообщений пока нет', $1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Сообщений пока нет'), z1 = () => 'Напишите первым', V1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Напишите первым'), G1 = () => `Напишите первым или отправьте
этот стикер`, K1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Напишите первым или отправьте\nэтот стикер'), W1 = n => `Номер телефона:
${ n.country }`, q1 = (n, e = {}) => (e.locale ?? 'ru', W1(n)), Y1 = () => 'Нет в контактах', Q1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нет в контактах'), J1 = () => 'Хотите узнать, что умеет официальный аккаунт?', X1 = (n = {}, e = {}) => (e.locale ?? 'ru', 'Хотите узнать, что умеет официальный аккаунт?'), Z1 = () => 'Хотите узнать, что умеет бот?', eC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Хотите узнать, что умеет бот?'), tC = () => 'Хотите продолжить чат с официальным аккаунтом?', nC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Хотите продолжить чат с официальным аккаунтом?'), sC = () => 'Хотите продолжить чат с ботом?', rC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Хотите продолжить чат с ботом?'), iC = () => 'Нажмите Начать, чтобы запустить чат с официальным аккаунтом и оценить его в деле', aC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нажмите Начать, чтобы запустить чат с официальным аккаунтом и оценить его в деле'), oC = () => 'Нажмите Начать, чтобы запустить чат с ботом и оценить его в деле', cC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нажмите Начать, чтобы запустить чат с ботом и оценить его в деле'), uC = () => 'Напишите сообщение', lC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Напишите сообщение'), dC = () => 'Это избранное', hC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Это избранное'), fC = () => 'Сохраняйте сообщения, медиа и файлы — доступ будет только у вас', mC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Сохраняйте сообщения, медиа и файлы — доступ будет только у вас'), pC = () => 'Выйти и пожаловаться', gC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Выйти и пожаловаться'), DC = () => 'Выйти и пожаловаться', _C = (n = {}, e = {}) => (e.locale ?? 'ru', 'Выйти и пожаловаться'), vC = () => 'Скрыть баннер выхода и жалобы', bC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Скрыть баннер выхода и жалобы'), wC = () => 'В контакты', EC = (n = {}, e = {}) => (e.locale ?? 'ru', 'В контакты'), yC = () => 'Добавить в контакты', AC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Добавить в контакты'), CC = () => 'Заблокировать', TC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать'), IC = () => 'Заблокировать контакт', FC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Заблокировать контакт'), SC = () => 'Скрыть баннер добавления в контакты', xC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Скрыть баннер добавления в контакты'), OC = n => n.context == 'RU' ? 'Россия' : n.context == 'BY' ? 'Беларусь' : n.context == 'AZ' ? 'Азербайджан' : n.context == 'AM' ? 'Армения' : n.context == 'GE' ? 'Грузия' : n.context == 'KZ' ? 'Казахстан' : n.context == 'KG' ? 'Кыргызстан' : n.context == 'MD' ? 'Молдова' : n.context == 'TJ' ? 'Таджикистан' : n.context == 'UZ' ? 'Узбекистан' : 'Россия', RC = (n, e = {}) => (e.locale ?? 'ru', OC(n)), kC = n => n.context == 'VIDEO' ? 'Входящий видеозвонок' : 'Входящий аудиозвонок', LC = (n, e = {}) => (e.locale ?? 'ru', kC(n)), NC = () => 'Нет в контактах', PC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Нет в контактах'), MC = () => 'Открыть чат', BC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Открыть чат'), UC = () => 'Открыть чат, отмечен непрочитанным', HC = (n = {}, e = {}) => (e.locale ?? 'ru', 'Открыть чат, отмечен непрочитанным'), jC = n => {
    const e = Ys('ru', n.count, {});
    return e == 'one' ? `Открыть чат, ${ n.count } новое сообщение` : e == 'few' ? `Открыть чат, ${ n.count } новых сообщения` : e == 'many' ? `Открыть чат, ${ n.count } новых сообщений` : 'calls:callActive-chatButton-openChatWithNewMessages';
  }, $C = (n, e = {}) => (e.locale ?? 'ru', jC(n)), zC = Object.freeze(Object.defineProperty({
    __proto__: null,
    'aside:folderChatsTab-addChatsButton': Rb,
    'auth:avatar-button-submit': HE,
    'auth:avatar-explainer-line1': BE,
    'auth:avatar-explainer-title': PE,
    'auth:code-button-resendCode': Hw,
    'auth:code-explainer-line1': Lw,
    'auth:code-explainer-line2': Pw,
    'auth:code-explainer-title': Rw,
    'auth:code-smsInfo-timer': Bw,
    'auth:error-emptyName': Vb,
    'auth:error-invalidChars': Kb,
    'auth:error-maxSymbols': Xb,
    'auth:error-minSymbols': Qb,
    'auth:error-onlyReadableChars': qb,
    'auth:error-passwordsMismatch': ew,
    'auth:error-tooLong': nw,
    'auth:error-wrongPassword': rw,
    'auth:footer-code-button': ey,
    'auth:footer-password-button': ny,
    'auth:footer-passwordCode-button': ry,
    'auth:footer-phone-button': $E,
    'auth:footer-phone-legal-confidentialPolicy': KE,
    'auth:footer-phone-legal-line1': VE,
    'auth:footer-phone-legal-line2': QE,
    'auth:footer-phone-legal-userAgreement': qE,
    'auth:footer-registrationDisabled-button': XE,
    'auth:header-button-back': mw,
    'auth:header-button-help': gw,
    'auth:help-tooltip': _w,
    'auth:names-button-submit': LE,
    'auth:names-explainer-line1': TE,
    'auth:names-explainer-title': AE,
    'auth:names-firstName-placeholder': FE,
    'auth:names-lastName-hint': RE,
    'auth:names-lastName-placeholder': xE,
    'auth:password-button-submit': qw,
    'auth:password-explainer-line1': Vw,
    'auth:password-explainer-title': $w,
    'auth:password-input-placeholder': Kw,
    'auth:passwordCode-button-resendCode': nE,
    'auth:passwordCode-explainer-line1': Xw,
    'auth:passwordCode-explainer-title': Qw,
    'auth:passwordCode-smsInfo-timer': eE,
    'auth:passwordRecovery-button-submit': hE,
    'auth:passwordRecovery-explainer-title': rE,
    'auth:passwordRecovery-hint': cE,
    'auth:passwordRecovery-input1-placeholder': aE,
    'auth:passwordRecovery-input2-placeholder': lE,
    'auth:phone-button-submit': Tw,
    'auth:phone-explainer-line1': Ew,
    'auth:phone-explainer-title': bw,
    'auth:phone-hint': Aw,
    'auth:profileDelete-button-cancel': EE,
    'auth:profileDelete-button-submit': bE,
    'auth:profileDelete-explainer-line1': gE,
    'auth:profileDelete-explainer-line2': _E,
    'auth:profileDelete-explainer-title': mE,
    'auth:qr-expired-subtitle': Bb,
    'auth:qr-expired-title': Pb,
    'auth:qr-idle-subtitle': $b,
    'auth:qr-idle-title': Hb,
    'auth:qr-refresh-button-label': Lb,
    'auth:registrationDisabled-info-subtitle': xw,
    'auth:registrationDisabled-info-title': Fw,
    'auth:snackbar-profileDeleteNotice': aw,
    'auth:snackbar-somethingWrongWithNet': cw,
    'auth:snackbar-unableToLoadAvatar': lw,
    'auth:snackbar-unknownError': hw,
    'calls:callActive-chatButton-openChat': BC,
    'calls:callActive-chatButton-openChatUnread': HC,
    'calls:callActive-chatButton-openChatWithNewMessages': $C,
    'calls:incoming-notContact': PC,
    'calls:incoming-subtitle': LC,
    'chatInfo:actions-addContactBtn-text': b1,
    'chatInfo:actions-blockBtn-text': E1,
    'chatInfo:actions-chatBtn-text': c1,
    'chatInfo:actions-moreBtn-text': _1,
    'chatInfo:actions-searchBtn-text': g1,
    'chatInfo:actions-soundBtn-text': m1,
    'chatInfo:actions-startBtn-text': l1,
    'chatInfo:actions-subscribeBtn-text': A1,
    'chatInfo:actions-unblockBtn-text': h1,
    'devicesSettings:caption': gb,
    'devicesSettings:session-close-all-but-current': Tb,
    'devicesSettings:session-current': Eb,
    'devicesSettings:session-online': Ab,
    'devicesSettings:subtitle': bb,
    'devicesSettings:title': _b,
    'emptyChat:botDialog-subtitle': lC,
    'emptyChat:botDialog-subtitle-suspended-bot': cC,
    'emptyChat:botDialog-subtitle-suspended-official': aC,
    'emptyChat:botDialog-title-cleared-bot': rC,
    'emptyChat:botDialog-title-cleared-official': nC,
    'emptyChat:botDialog-title-suspended-bot': eC,
    'emptyChat:botDialog-title-suspended-official': X1,
    'emptyChat:callMultichat-title': R1,
    'emptyChat:channel-subtitle': H1,
    'emptyChat:channel-subtitle-admin': P1,
    'emptyChat:channel-subtitle-private': B1,
    'emptyChat:channel-title': L1,
    'emptyChat:multichat-subtitle': x1,
    'emptyChat:multichat-subtitle-admin': F1,
    'emptyChat:multichat-title': T1,
    'emptyChat:savedDialog-subtitle': mC,
    'emptyChat:savedDialog-title': hC,
    'emptyChat:userDialog-notContact-subtitle': Q1,
    'emptyChat:userDialog-notContact-title': q1,
    'emptyChat:userDialog-subtitle-option1': V1,
    'emptyChat:userDialog-subtitle-option2': K1,
    'emptyChat:userDialog-title': $1,
    'foldersSettings:recommended-add-action': xb,
    'foldersSettings:recommended-channels-title': Fb,
    'knownCountries:name': RC,
    'modal:aPlusMark-button': by,
    'modal:aPlusMark-subtitle': _y,
    'modal:aPlusMark-title': gy,
    'modal:blockContact-cancelBtn-ariaLabel': Ry,
    'modal:blockContact-cancelBtn-text': xy,
    'modal:blockContact-header-subtitle': Ay,
    'modal:blockContact-header-title': Ey,
    'modal:blockContact-snackbar-error': Ly,
    'modal:blockContact-submitBtn-ariaLabel': Fy,
    'modal:blockContact-submitBtn-text': Ty,
    'modal:changeHiddenSettings-cancelBtn': Hy,
    'modal:changeHiddenSettings-snack': $y,
    'modal:changeHiddenSettings-submitBtn': By,
    'modal:changeHiddenSettings-title': Py,
    'modal:clearChat-cancelBtn': cA,
    'modal:clearChat-checkbox': rA,
    'modal:clearChat-error': lA,
    'modal:clearChat-snackError': mA,
    'modal:clearChat-snackSuccess': hA,
    'modal:clearChat-submitBtn': aA,
    'modal:clearChat-subtitle-channel': eA,
    'modal:clearChat-subtitle-chat': nA,
    'modal:clearChat-subtitle-savedDialog': Xy,
    'modal:clearChat-title-channel': qy,
    'modal:clearChat-title-chat': Qy,
    'modal:clearChat-title-dialog': Ky,
    'modal:clearChat-title-savedDialog': Vy,
    'modal:clearRecents-cancelBtn': EA,
    'modal:clearRecents-submitBtn': bA,
    'modal:clearRecents-subtitle': _A,
    'modal:clearRecents-title': gA,
    'modal:closeSessionConfirmation-cancelBtn': FA,
    'modal:closeSessionConfirmation-snack': xA,
    'modal:closeSessionConfirmation-submitBtn': TA,
    'modal:closeSessionConfirmation-title': AA,
    'modal:leaveChat-cancelBtn-ariaLabel': e1,
    'modal:leaveChat-cancelBtn-text-channel': XA,
    'modal:leaveChat-cancelBtn-text-chat': QA,
    'modal:leaveChat-header-subtitle-needTransfer': PA,
    'modal:leaveChat-header-subtitle-private': BA,
    'modal:leaveChat-header-title-channel': LA,
    'modal:leaveChat-header-title-chat': RA,
    'modal:leaveChat-snackbar-error': a1,
    'modal:leaveChat-snackbar-success-channel': r1,
    'modal:leaveChat-snackbar-success-chat': n1,
    'modal:leaveChat-submitBtn-ariaLabel': VA,
    'modal:leaveChat-submitBtn-text-channel': $A,
    'modal:leaveChat-submitBtn-text-chat': HA,
    'modal:leaveChat-transferBtn-ariaLabel': qA,
    'modal:leaveChat-transferBtn-text': KA,
    'settings:ariaHeaderPrefix': my,
    'settings:privacySettings-familyProtection-cell-title': ay,
    'settings:privacySettings-familyProtection-status-admin': ly,
    'settings:privacySettings-familyProtection-status-manageable': hy,
    'settings:privacySettings-familyProtection-status-off': cy,
    'topBar:addContact-addBtn-ariaLabel': AC,
    'topBar:addContact-addBtn-text': EC,
    'topBar:addContact-blockBtn-ariaLabel': FC,
    'topBar:addContact-blockBtn-text': TC,
    'topBar:addContact-closeBtn-ariaLabel': xC,
    'topBar:exitAndReport-closeBtn-ariaLabel': bC,
    'topBar:exitAndReportBtn-ariaLabel': _C,
    'topBar:exitAndReportBtn-text': gC
  }, Symbol.toStringTag, { value: 'Module' }));
function VC(n, ...e) {
  const t = zC[n];
  return t(s, r || {});
}
const GC = Qm, EF = 20000;
function Xd(n, e) {
  return new Date(n).getFullYear() === new Date(e).getFullYear();
}
function KC(n, e) {
  return Xd(n, e) && new Date(n).getMonth() === new Date(e).getMonth();
}
function yF(n, e) {
  return Xd(n, e) && KC(n, e) && new Date(n).getDate() === new Date(e).getDate();
}
function AF(n, [e, t, s]) {
  return n % 10 == 1 && n % 100 != 11 ? e : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? t : s;
}
function CF(n, e) {
  e = window.devicePixelRatio > 1 ? e * 2 : e;
  const t = [];
  let s = 0;
  for (; s < n.length;) {
    const o = n.codePointAt(s);
    o && (t.push(o), s += o > 65535 ? 2 : 1);
  }
  const i = [
      32,
      48,
      64,
      96
    ].find((o, l, d) => e <= o || l === d.length - 1) || 0, a = t.filter(o => o !== 65039 && o !== 8205).map(o => o.toString(16).toUpperCase().padStart(4, '0')).join('-');
  return new URL(`https://st.max.ru/emojis/${ a }_${ i }.webp`);
}
function TF(n) {
  if (n === 0)
    return '0 B';
  const e = [
      'B',
      'KB',
      'MB',
      'GB',
      'TB',
      'PB',
      'EB',
      'ZB',
      'YB'
    ], t = Math.floor(Math.log(n) / Math.log(1024));
  return `${ (n / Math.pow(1024, t)).toFixed(2) } ${ e[t] }`;
}
function WC(n) {
  if (n < 1000)
    return n.toString();
  const e = [
      '',
      'K',
      'M',
      'B'
    ], t = Math.floor(Math.log(n) / Math.log(1000));
  let s = (n / Math.pow(1000, t)).toFixed(1).replace('.', ',');
  s.endsWith(',0') && (s = s.slice(0, -2));
  return `${ s }${ e[t] }`;
}
function Ru(n) {
  return n > 9 ? n.toString() : n.toString().padStart(2, '0');
}
function IF(n) {
  const e = Math.floor(n / 3600), t = Math.floor(n % 3600 / 60), s = Math.floor(n % 60);
  return e > 0 ? `${ Ru(e) }:${ t.toString().padStart(2, '0') }:${ s.toString().padStart(2, '0') }` : `${ Ru(t) }:${ s.toString().padStart(2, '0') }`;
}
function FF(n) {
  if (n < 60)
    return `${ Math.floor(n) } сек`;
  const e = Math.floor(n / 60);
  if (e < 60)
    return `${ e } мин`;
  const t = Math.floor(n / 3600), s = Math.floor(n % 3600 / 60);
  return s === 0 ? `${ t } ч` : `${ t } ч ${ s } мин`;
}
function SF(n, e) {
  return Math.floor((n - e) / 1000);
}
function xF(n) {
  return n ? n.replace(/([.*+?^${}()|[\]/\\])/g, '\\$1') : '';
}
async function OF(n, e) {
  const s = await (await fetch(n)).blob(), r = URL.createObjectURL(s);
  Qm({
    node: e,
    href: r
  });
}
const RF = {
  flipDurationMs: 200,
  dropTargetStyle: { outline: 'none' }
};
function kF(n, e, t) {
  return Math.min(Math.max(n, e), t);
}
function LF(n, e, t) {
  return n + (e - n) * t;
}
const NF = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.screen.width < 660;
function PF(n) {
  let e = BigInt(n), t = '';
  for (let s = 7; s >= 0; s--)
    t = String.fromCharCode(Number(e & 0xffn)) + t, e >>= 8n;
  return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function qC(n) {
  const e = '='.repeat((4 - n.length % 4) % 4), t = n.replace(/-/g, '+').replace(/_/g, '/') + e, s = atob(t);
  let r = 0n;
  for (let i = 0; i < s.length; i++)
    r = r << 8n | BigInt(s.charCodeAt(i));
  return r.toString();
}
function MF(n) {
  try {
    qC(n);
    return true;
  } catch {
    return false;
  }
}
function BF(n, e) {
  return Array.from({ length: Math.ceil(n.length / e) }, (t, s) => n.slice(s * e, s * e + e));
}
function Zd(n) {
  return n.trim().slice(0, 2).toUpperCase();
}
function UF(n) {
  return Zd(n).split('').map(t => String.fromCodePoint(t.charCodeAt(0) + 127397)).join('');
}
function HF(n) {
  const e = Zd(n);
  return VC('knownCountries:name', { context: e });
}
const eh = '__oneme_utm_params';
function th(n) {
  return n.startsWith('utm_');
}
function jF(n) {
  const e = {};
  n.searchParams.forEach((t, s) => {
    th(s) && (e[s] = t);
  }), Object.keys(e).length && Kd.setItem(eh, e);
}
function $F() {
  try {
    const n = {}, e = Kd.getItem(eh);
    switch (true) {
    case e === null:
    case typeof e == 'boolean':
    case typeof e == 'number':
    case typeof e == 'string':
      return null;
    case typeof e == 'object':
      for (const [s, r] of Object.entries(e))
        th(s) && (n[s] = r);
      return Object.keys(n).length ? n : null;
    default:
      ;
      return null;
    }
  } catch {
    return null;
  }
}
function YC(n, e) {
  st(e, true);
  const t = ii(e, [
    '$$slots',
    '$$events',
    '$$legacy',
    'count'
  ]);
  let s = k(() => WC(e.count));
  lb(n, Ku({
    get text() {
      return p(s);
    }
  }, () => t));
  rt();
}
const QC = (n, e) => {
  let t = () => e?.().active, s = () => e?.().onClick, r = () => e?.().leftIcon, i = () => e?.().name, a = () => e?.().indicator;
  var o = ZC();
  let l;
  o.__click = function (...g) {
    s()?.apply(this, g);
  };
  var d = me(o);
  var c = g => {
    var D = JC(), _ = me(D);
    Lt(_, r), he(D), X(g, D);
  };
  ye(d, g => {
    r() && g(c);
  });
  var u = gn(d), h = gn(u);
  {
    var f = g => {
        YC(g, {
          appearance: 'themed',
          size: 16,
          get count() {
            return a();
          },
          'aria-label': ''
        });
      }, m = g => {
        var D = Ve(), _ = Me(D);
        var S = N => {
          var L = XC();
          X(N, L);
        };
        ye(_, N => {
          a() && N(S);
        }, true);
        X(g, D);
      };
    ye(h, g => {
      typeof a() == 'number' ? g(f) : g(m, false);
    });
  }
  he(o), nt(() => {
    l = Pt(o, 1, 'tab svelte-xew0r2', null, l, { 'tab--active': t() }), Za(u, ` ${ i() ?? '' } `);
  }), X(n, o);
};
var JC = ue('<div class="icon svelte-xew0r2"><!></div>'), XC = ue('<div class="dot svelte-xew0r2"></div>'), ZC = ue('<button><!> <!></button>'), eT = ue('<li><!></li>'), tT = ue('<div class="wrapper svelte-xew0r2"><ul class="tabs svelte-xew0r2"><!> <div class="active-slide svelte-xew0r2"></div></ul></div>');
function zF(n, e) {
  st(e, true);
  let t = Qe(e, 'activeIndex', 15);
  const s = We([]), r = We([]);
  function i(d) {
    let c, u, h = false;
    const f = D => {
        h = true, c = D.pageX - d.offsetLeft, u = d.scrollLeft;
      }, m = D => {
        if (!h)
          return;
        D.preventDefault();
        const S = (D.pageX - d.offsetLeft - c) * 2;
        d.scrollLeft = u - S;
      };
    d.addEventListener('mousedown', f);
    const g = () => {
      h = false;
    };
    d.addEventListener('mouseleave', g);
    d.addEventListener('mouseup', g);
    d.addEventListener('mousemove', m);
    return {
      update() {
      },
      destroy() {
        d.removeEventListener('mousedown', f), d.removeEventListener('mouseleave', f), d.removeEventListener('mouseup', g), d.removeEventListener('mousemove', m);
      }
    };
  }
  var a = tT(), o = me(a), l = me(o);
  qu(l, 17, () => e.items, Wh, (d, c, u) => {
    var h = eT();
    let f;
    var m = me(h);
    let g = k(() => ({
      ...p(c),
      onClick: () => t(u),
      active: t() === u
    }));
    QC(m, () => p(g));
    he(h), Jn(h, (g, D) => s[D] = g, g => s?.[g], () => [u]), nt(() => f = Pt(h, 1, 'item svelte-xew0r2', null, f, { 'active-item': t() === u })), rf(h, 'clientWidth', g => r[u] = g), X(d, h);
  }), Gu(2), he(o), Yu(o, d => i?.(d)), he(a), nt(() => Nt(o, `--active-tab-width: ${ r[t()] ?? '' }px; --active-tab-left: ${ s[t()]?.offsetLeft ?? '' }px`)), X(n, a), rt();
}
ri(['click']);
const Ga = new Map(), ku = new IntersectionObserver(nT);
function nT(n) {
  n.forEach(e => {
    const t = Ga.get(e.target);
    t && t(e.isIntersecting);
  });
}
function sT(n, e) {
  st(e, true);
  let t = Qe(e, 'isVisible', 15, false);
  function s(a) {
    function o() {
      ku.unobserve(a), Ga.delete(a);
    }
    function l(d) {
      const c = e.once && t() !== d;
      t(d), c && o();
    }
    Ga.set(a, l);
    ku.observe(a);
    return { destroy: o };
  }
  var r = Ve(), i = Me(r);
  Lt(i, () => e.children, () => s, t), X(n, r), rt();
}
const rT = 1000, iT = 10000;
function pr(n) {
  return n === void 0 ? '100%' : typeof n == 'string' ? n : `${ n }px`;
}
var aT = ue('<img loading="lazy" decoding="async"/>'), oT = ue('<div><!></div>');
function VF(n, e) {
  st(e, true);
  const t = Qe(e, 'fit', 3, 'cover');
  let s = W(false), r = W(false);
  const i = k(() => {
      switch (true) {
      case e.url instanceof URL:
        return e.url;
      case e.url instanceof kt:
        return e.url.sized();
      case e.url instanceof ts:
        return !e.width || typeof e.width == 'string' || p(s) ? e.url.original : e.url.sized(e.width);
      default:
        return e.url;
      }
    }), a = k(() => {
      let u = 'var(--background-accent-neutral-fade)';
      switch (e.placeholder) {
      case void 0:
        break;
      case null:
        u = 'none';
        break;
      default:
        u = `url('${ e.placeholder.href }');`;
      }
      p(r) && (u = 'none');
      return [
        `width:${ pr(e.width) }`,
        `height:${ pr(e.height) }`,
        `background:${ u }`,
        'background-size:cover',
        'background-position:center',
        `object-fit:${ t() }`,
        e.radius && `border-radius:${ e.radius }`
      ].filter(Boolean).join(';');
    });
  let o = W(0);
  const l = new AbortController();
  eo(() => l.abort());
  function d() {
    const u = Math.min(2 ** p(o) * rT, iT), h = Math.floor(u / 2 + Math.random() * (u / 2));
    Zn(h, l.signal).then(() => Do(l.signal)).then(c).catch(() => {
    });
  }
  function c() {
    x(o, p(o) + 1), e.url instanceof ts && p(o) > 3 && x(s, true);
  }
  sT(n, {
    once: true,
    children: (h, f = qo, m = qo) => {
      var g = oT(), D = me(g);
      var _ = S => {
        var N = Ve(), L = Me(N);
        Kh(L, () => p(o), U => {
          var C = aT();
          nt(() => {
            Nt(C, p(a)), Pt(C, 1, `img ${ e.class ?? '' }`, 'svelte-1aizpza'), wt(C, 'src', p(i).href), wt(C, 'alt', e.alt), wt(C, 'draggable', e.draggable);
          }), Qn('load', C, R => {
            R.target instanceof HTMLImageElement && t() === 'cover' && x(r, true);
          }, true), Qn('error', C, d, true), X(U, C);
        }), X(S, N);
      };
      ye(D, S => {
        m() && S(_);
      });
      he(g), Yu(g, S => f()?.(S)), nt((S, N) => Nt(g, `
        width:${ S ?? '' };
        height:${ N ?? '' };
        display: inline-block;
      `), [
        () => pr(e.width),
        () => pr(e.height)
      ]), X(h, g);
    },
    $$slots: { default: true }
  }), rt();
}
function cT(n, e, t) {
  var s = t || {}, r = s.noTrailing, i = r === void 0 ? false : r, a = s.noLeading, o = a === void 0 ? false : a, l = s.debounceMode, d = l === void 0 ? void 0 : l, c, u = false, h = 0;
  function f() {
    c && clearTimeout(c);
  }
  function m(D) {
    var _ = D || {}, S = _.upcomingOnly, N = S === void 0 ? false : S;
    f(), u = !N;
  }
  function g() {
    for (var D = arguments.length, _ = new Array(D), S = 0; S < D; S++)
      _[S] = arguments[S];
    var N = this, L = Date.now() - h;
    if (u)
      return;
    function U() {
      h = Date.now(), e.apply(N, _);
    }
    function C() {
      c = void 0;
    }
    !o && d && !c && U(), f(), d === void 0 && L > n ? o ? (h = Date.now(), i || (c = setTimeout(d ? C : U, n))) : U() : i !== true && (c = setTimeout(d ? C : U, d === void 0 ? n - L : n));
  }
  g.cancel = m;
  return g;
}
function GF(n, e, t) {
  var s = {}, r = s.atBegin, i = r === void 0 ? false : r;
  return cT(n, e, { debounceMode: i !== false });
}
export {
  Xu as $,
  te as A,
  wn as B,
  xT as C,
  Mt as D,
  ep as E,
  VT as F,
  RI as G,
  OT as H,
  kT as I,
  $s as J,
  XT as K,
  lI as L,
  ft as M,
  CI as N,
  eb as O,
  CT as P,
  qn as Q,
  ee as R,
  pe as S,
  Qt as T,
  Ce as U,
  aI as V,
  yI as W,
  YT as X,
  _e as Y,
  jT as Z,
  ZT as _,
  M as a,
  Ym as a$,
  wt as a0,
  DT as a1,
  bF as a2,
  sT as a3,
  qu as a4,
  Yu as a5,
  IF as a6,
  Us as a7,
  Ma as a8,
  pT as a9,
  pu as aA,
  Ai as aB,
  E0 as aC,
  XI as aD,
  JI as aE,
  QI as aF,
  GI as aG,
  WI as aH,
  KI as aI,
  YI as aJ,
  qI as aK,
  VI as aL,
  zI as aM,
  $I as aN,
  jI as aO,
  HI as aP,
  UI as aQ,
  BI as aR,
  MI as aS,
  Mc as aT,
  ps as aU,
  rr as aV,
  Ki as aW,
  ms as aX,
  Oc as aY,
  xg as aZ,
  aF as a_,
  VF as aa,
  fu as ab,
  mu as ac,
  an as ad,
  ot as ae,
  Te as af,
  Bl as ag,
  TI as ah,
  II as ai,
  gu as aj,
  Du as ak,
  GT as al,
  qT as am,
  No as an,
  _n as ao,
  Vn as ap,
  jt as aq,
  Hs as ar,
  w0 as as,
  ko as at,
  T0 as au,
  I0 as av,
  C0 as aw,
  A0 as ax,
  y0 as ay,
  Od as az,
  rf as b,
  eI as b$,
  hp as b0,
  dp as b1,
  $F as b2,
  Pc as b3,
  An as b4,
  Ls as b5,
  Xn as b6,
  VC as b7,
  Wi as b8,
  Jh as b9,
  gF as bA,
  js as bB,
  k0 as bC,
  L0 as bD,
  Jm as bE,
  Kd as bF,
  AI as bG,
  mI as bH,
  Zm as bI,
  Dp as bJ,
  _p as bK,
  tI as bL,
  sI as bM,
  oI as bN,
  QT as bO,
  JT as bP,
  hI as bQ,
  ht as bR,
  rI as bS,
  O0 as bT,
  kt as bU,
  yT as bV,
  ST as bW,
  AT as bX,
  OI as bY,
  FT as bZ,
  TT as b_,
  Qp as ba,
  Xm as bb,
  Rc as bc,
  cp as bd,
  Nc as be,
  up as bf,
  Lc as bg,
  lp as bh,
  zF as bi,
  Yn as bj,
  ET as bk,
  _F as bl,
  bT as bm,
  NF as bn,
  cf as bo,
  of as bp,
  B as bq,
  vT as br,
  jF as bs,
  Ar as bt,
  ta as bu,
  Kh as bv,
  tf as bw,
  Wh as bx,
  DF as by,
  us as bz,
  kF as c,
  R0 as c$,
  KT as c0,
  Zn as c1,
  RT as c2,
  yd as c3,
  ap as c4,
  PT as c5,
  zT as c6,
  BT as c7,
  WT as c8,
  re as c9,
  yD as cA,
  Qg as cB,
  Wg as cC,
  Jg as cD,
  Vg as cE,
  Gg as cF,
  $g as cG,
  ad as cH,
  kp as cI,
  eF as cJ,
  cT as cK,
  yF as cL,
  Xd as cM,
  KC as cN,
  En as cO,
  Ms as cP,
  vF as cQ,
  tF as cR,
  CF as cS,
  xt as cT,
  Ts as cU,
  Is as cV,
  Qr as cW,
  Yr as cX,
  qr as cY,
  Bs as cZ,
  M0 as c_,
  nI as ca,
  UT as cb,
  NT as cc,
  LT as cd,
  wI as ce,
  FI as cf,
  SI as cg,
  uI as ch,
  iI as ci,
  pF as cj,
  bI as ck,
  J as cl,
  LI as cm,
  PI as cn,
  NI as co,
  kI as cp,
  $T as cq,
  wF as cr,
  sF as cs,
  PD as ct,
  BD as cu,
  HD as cv,
  LD as cw,
  MD as cx,
  VD as cy,
  Hr as cz,
  GF as d,
  Kv as d$,
  Nd as d0,
  P0 as d1,
  N0 as d2,
  Pd as d3,
  U0 as d4,
  B0 as d5,
  oa as d6,
  TF as d7,
  H0 as d8,
  j0 as d9,
  pi as dA,
  Nl as dB,
  MF as dC,
  qC as dD,
  EF as dE,
  OF as dF,
  ts as dG,
  Qm as dH,
  _0 as dI,
  SF as dJ,
  rF as dK,
  Zv as dL,
  LF as dM,
  BF as dN,
  gT as dO,
  YC as dP,
  _T as dQ,
  HF as dR,
  iF as dS,
  Mo as dT,
  Ld as dU,
  wT as dV,
  Ro as dW,
  WC as dX,
  Qv as dY,
  PF as dZ,
  UF as d_,
  $0 as da,
  z0 as db,
  V0 as dc,
  b0 as dd,
  xF as de,
  FF as df,
  Bo as dg,
  vu as dh,
  _I as di,
  fI as dj,
  DI as dk,
  ZI as dl,
  gI as dm,
  pI as dn,
  vI as dp,
  Fe as dq,
  hr as dr,
  $t as ds,
  d0 as dt,
  Fd as du,
  oF as dv,
  cF as dw,
  uF as dx,
  WD as dy,
  AF as dz,
  ae as e,
  Gv as e0,
  Wd as e1,
  ei as e2,
  Sn as e3,
  hF as e4,
  c0 as e5,
  dF as e6,
  Td as e7,
  lF as e8,
  xd as e9,
  v0 as ea,
  g0 as eb,
  p0 as ec,
  D0 as ed,
  m0 as ee,
  cb as ef,
  rv as eg,
  Ss as eh,
  RF as ei,
  ns as ej,
  ce as f,
  Sd as g,
  qm as h,
  Z as i,
  mF as j,
  Qm as k,
  MT as l,
  EI as m,
  cI as n,
  Ll as o,
  ja as p,
  dI as q,
  IT as r,
  Pt as s,
  tn as t,
  Xe as u,
  In as v,
  sn as w,
  ss as x,
  xI as y,
  HT as z
};