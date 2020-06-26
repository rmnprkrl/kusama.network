/*!
  * Leap Bootstrap Theme
  * Copyright 2018-2019 Medium Rare (undefined)
  */
!(function(t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(
				exports,
				require('aos'),
				require('jquery'),
				require('jquery-countdown'),
				require('scrollmonitor'),
				require('flickity'),
				require('ion-rangeslider'),
				require('isotope-layout'),
				require('jarallax'),
				require('plyr'),
				require('prismjs'),
				require('smooth-scroll'),
				require('twitter-fetcher'),
				require('typed.js')
			)
		: 'function' == typeof define && define.amd
			? define(
					[
						'exports',
						'aos',
						'jquery',
						'jquery-countdown',
						'scrollmonitor',
						'flickity',
						'ion-rangeslider',
						'isotope-layout',
						'jarallax',
						'plyr',
						'prismjs',
						'smooth-scroll',
						'twitter-fetcher',
						'typed.js'
					],
					e
				)
			: e(
					((t = t || self).theme = {}),
					t.AOS,
					t.jQuery,
					null,
					t.scrollMonitor,
					t.Flickity,
					null,
					t.Isotope,
					t.jarallax,
					t.Plyr,
					t.Prism,
					t.SmoothScroll,
					t.twitterFetcher,
					t.Typed
				)
})(this, function(t, e, C, i, b, E, n, V, r, a, o, s, A, l) {
	'use strict'
	var u
	function c(t, e) {
		for (var i = 0; i < e.length; i++) {
			var n = e[i]
			;(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(t, n.key, n)
		}
	}
	function W(t, e, i) {
		return e && c(t.prototype, e), i && c(t, i), t
	}
	;(e = e && e.hasOwnProperty('default') ? e.default : e),
		(C = C && C.hasOwnProperty('default') ? C.default : C),
		(b = b && b.hasOwnProperty('default') ? b.default : b),
		(E = E && E.hasOwnProperty('default') ? E.default : E),
		(V = V && V.hasOwnProperty('default') ? V.default : V),
		(r = r && r.hasOwnProperty('default') ? r.default : r),
		(a = a && a.hasOwnProperty('default') ? a.default : a),
		(o = o && o.hasOwnProperty('default') ? o.default : o),
		(s = s && s.hasOwnProperty('default') ? s.default : s),
		(A = A && A.hasOwnProperty('default') ? A.default : A),
		(l = l && l.hasOwnProperty('default') ? l.default : l),
		e.init({ once: !0 }),
		(u = C),
		'objectFit' in document.documentElement.style == 0 &&
			u('.bg-image').each(function() {
				var t = u(this),
					e = t.attr('src'),
					i = t.get(0).classList
				t.before(
					u(
						'<div class="' +
							i +
							'" style="background: url(' +
							e +
							'); background-size: cover; background-position: 50% 50%;"></div>'
					)
				),
					t.remove()
			})
	var h,
		d,
		f,
		m,
		p,
		g,
		y,
		v,
		w,
		S,
		T,
		k,
		I,
		D,
		F,
		P,
		O,
		x,
		L,
		j,
		R,
		M = (function(n) {
			if ('function' != typeof n.fn.countdown)
				throw new Error(
					'mrCountdown requires jquery.countdown.js (https://github.com/hilios/jQuery.countdown/)'
				)
			var t = 'mrCountdown',
				r = 'mr.countdown',
				e = n.fn[t],
				i = { LOAD_DATA_API: 'load.mr.countdown.data-api' },
				a = 'days',
				o = 'Timer Done',
				s = '%Y',
				l = '%m',
				u = '%w',
				c = '%D',
				h = '%H',
				d = '%M',
				f = '%S',
				m = '%!Y:Year,Years;',
				p = '%!m:Month,Months;',
				g = '%!w:Week,Weeks;',
				y = '%!d:Day,Days;',
				v = '%!H:Hour,Hours;',
				w = '%!M:Minute,Minutes;',
				b = '%!S:Second,Seconds;',
				E = 'd-none',
				A = '[data-countdown-date]',
				S = '[data-active-state]',
				T = '[data-elapsed-state]',
				k = 'data-countdown-date',
				I = 'data-days-text',
				C = 'data-date-format',
				V = 'data-date-fallback',
				D = '[data-years]',
				F = '[data-months]',
				P = '[data-weeks]',
				O = '[data-days]',
				x = '[data-hours]',
				L = '[data-minutes]',
				j = '[data-seconds]',
				R = '[data-years-label]',
				M = '[data-months-label]',
				_ = '[data-weeks-label]',
				N = '[data-days-label]',
				q = '[data-hours-label]',
				H = '[data-minutes-label]',
				Q = '[data-seconds-label]',
				B = 'format',
				z = 'detailed',
				U = (function() {
					function i(t) {
						this.element = t
						var e = n(t)
						;(this.date = e.attr(k)),
							(this.daysText = e.attr(I) || a),
							(this.countdownText = '%D ' + this.daysText + ' %H:%M:%S'),
							(this.dateFormat = e.attr(C) || this.countdownText),
							(this.fallback = e.attr(V) || o),
							(this.detailed = null !== this.element.getAttribute('data-' + z)),
							this.detailed &&
								((this.years = {
									show: e.find(D).length,
									element: e.find(D),
									format: e.find(D).data(B) || s,
									label: {
										show: e.find(R).length,
										element: e.find(R),
										format: e.find(R).data(B) || m
									}
								}),
								(this.months = {
									show: e.find(F).length,
									element: e.find(F),
									format: e.find(F).data(B) || l,
									label: {
										show: e.find(M).length,
										element: e.find(M),
										format: e.find(M).data(B) || p
									}
								}),
								(this.weeks = {
									show: e.find(P).length,
									element: e.find(P),
									format: e.find(P).data(B) || u,
									label: {
										show: e.find(_).length,
										element: e.find(_),
										format: e.find(_).data(B) || g
									}
								}),
								(this.days = {
									show: e.find(O).length,
									element: e.find(O),
									format: e.find(O).data(B) || c,
									label: {
										show: e.find(N).length,
										element: e.find(N),
										format: e.find(N).data(B) || y
									}
								}),
								(this.hours = {
									show: e.find(x).length,
									element: e.find(x),
									format: e.find(x).data(B) || h,
									label: {
										show: e.find(q).length,
										element: e.find(q),
										format: e.find(q).data(B) || v
									}
								}),
								(this.minutes = {
									show: e.find(L).length,
									element: e.find(L),
									format: e.find(L).data(B) || d,
									label: {
										show: e.find(H).length,
										element: e.find(H),
										format: e.find(H).data(B) || w
									}
								}),
								(this.seconds = {
									show: e.find(j).length,
									element: e.find(j),
									format: e.find(j).data(B) || f,
									label: {
										show: e.find(Q).length,
										element: e.find(Q),
										format: e.find(Q).data(B) || b
									}
								})),
							this.initCountdown()
					}
					return (
						(i.prototype.initCountdown = function() {
							var e = this,
								i = n(this.element)
							this.detailed
								? i.countdown(this.date, function(t) {
										t.elapsed
											? (i.find(T).removeClass(E), i.find(S).addClass(E))
											: (e.years.show && e.years.element.text(t.strftime(e.years.format)),
												e.years.label.show &&
													e.years.label.element.text(t.strftime(e.years.label.format)),
												e.months.show && e.months.element.text(t.strftime(e.months.format)),
												e.months.label.show &&
													e.months.label.element.text(t.strftime(e.months.label.format)),
												e.weeks.show && e.weeks.element.text(t.strftime(e.weeks.format)),
												e.weeks.label.show &&
													e.weeks.label.element.text(t.strftime(e.weeks.label.format)),
												e.days.show && e.days.element.text(t.strftime(e.days.format)),
												e.days.label.show &&
													e.days.label.element.text(t.strftime(e.days.label.format)),
												e.hours.show && e.hours.element.text(t.strftime(e.hours.format)),
												e.hours.label.show &&
													e.hours.label.element.text(t.strftime(e.hours.label.format)),
												e.minutes.show && e.minutes.element.text(t.strftime(e.minutes.format)),
												e.minutes.label.show &&
													e.minutes.label.element.text(t.strftime(e.minutes.label.format)),
												e.seconds.show && e.seconds.element.text(t.strftime(e.seconds.format)),
												e.seconds.label.show &&
													e.seconds.label.element.text(t.strftime(e.seconds.label.format)))
									})
								: n(this.element).countdown(this.date, function(t) {
										t.elapsed ? i.text(e.fallback) : i.text(t.strftime(e.dateFormat))
									})
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.1.0'
								}
							}
						]),
						i
					)
				})()
			return (
				n(window).on(i.LOAD_DATA_API, function() {
					for (var t = n.makeArray(n(A)), e = t.length; e--; ) {
						var i = n(t[e])
						U.jQueryInterface.call(i, i.data())
					}
				}),
				(n.fn[t] = U.jQueryInterface),
				(n.fn[t].Constructor = U),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = e), U.jQueryInterface
				}),
				U
			)
		})(C),
		_ = function() {
			return (_ =
				Object.assign ||
				function(t) {
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var r in (e = arguments[i])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
					return t
				}).apply(this, arguments)
		},
		N = (function() {
			function t(t, e, i) {
				var u = this
				;(this.target = t),
					(this.endVal = e),
					(this.options = i),
					(this.version = '2.0.4'),
					(this.defaults = {
						startVal: 0,
						decimalPlaces: 0,
						duration: 2,
						useEasing: !0,
						useGrouping: !0,
						smartEasingThreshold: 999,
						smartEasingAmount: 333,
						separator: ',',
						decimal: '.',
						prefix: '',
						suffix: ''
					}),
					(this.finalEndVal = null),
					(this.useEasing = !0),
					(this.countDown = !1),
					(this.error = ''),
					(this.startVal = 0),
					(this.paused = !0),
					(this.count = function(t) {
						u.startTime || (u.startTime = t)
						var e = t - u.startTime
						;(u.remaining = u.duration - e),
							u.useEasing
								? u.countDown
									? (u.frameVal = u.startVal - u.easingFn(e, 0, u.startVal - u.endVal, u.duration))
									: (u.frameVal = u.easingFn(e, u.startVal, u.endVal - u.startVal, u.duration))
								: u.countDown
									? (u.frameVal = u.startVal - (u.startVal - u.endVal) * (e / u.duration))
									: (u.frameVal = u.startVal + (u.endVal - u.startVal) * (e / u.duration)),
							u.countDown
								? (u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal)
								: (u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal),
							(u.frameVal = Math.round(u.frameVal * u.decimalMult) / u.decimalMult),
							u.printValue(u.frameVal),
							e < u.duration
								? (u.rAF = requestAnimationFrame(u.count))
								: null !== u.finalEndVal ? u.update(u.finalEndVal) : u.callback && u.callback()
					}),
					(this.formatNumber = function(t) {
						var e,
							i,
							n,
							r,
							a,
							o = t < 0 ? '-' : ''
						if (
							((e = Math.abs(t).toFixed(u.options.decimalPlaces)),
							(n = (i = (e += '').split('.'))[0]),
							(r = 1 < i.length ? u.options.decimal + i[1] : ''),
							u.options.useGrouping)
						) {
							a = ''
							for (var s = 0, l = n.length; s < l; ++s)
								0 !== s && s % 3 == 0 && (a = u.options.separator + a), (a = n[l - s - 1] + a)
							n = a
						}
						return (
							u.options.numerals &&
								u.options.numerals.length &&
								((n = n.replace(/[0-9]/g, function(t) {
									return u.options.numerals[+t]
								})),
								(r = r.replace(/[0-9]/g, function(t) {
									return u.options.numerals[+t]
								}))),
							o + u.options.prefix + n + r + u.options.suffix
						)
					}),
					(this.easeOutExpo = function(t, e, i, n) {
						return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
					}),
					(this.options = _({}, this.defaults, i)),
					(this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
					(this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
					(this.startVal = this.validateValue(this.options.startVal)),
					(this.frameVal = this.startVal),
					(this.endVal = this.validateValue(e)),
					(this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
					(this.decimalMult = Math.pow(10, this.options.decimalPlaces)),
					this.resetDuration(),
					(this.options.separator = String(this.options.separator)),
					(this.useEasing = this.options.useEasing),
					'' === this.options.separator && (this.options.useGrouping = !1),
					(this.el = 'string' == typeof t ? document.getElementById(t) : t),
					this.el ? this.printValue(this.startVal) : (this.error = '[CountUp] target is null or undefined')
			}
			return (
				(t.prototype.determineDirectionAndSmartEasing = function() {
					var t = this.finalEndVal ? this.finalEndVal : this.endVal
					this.countDown = this.startVal > t
					var e = t - this.startVal
					if (Math.abs(e) > this.options.smartEasingThreshold) {
						this.finalEndVal = t
						var i = this.countDown ? 1 : -1
						;(this.endVal = t + i * this.options.smartEasingAmount), (this.duration = this.duration / 2)
					} else (this.endVal = t), (this.finalEndVal = null)
					this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing)
				}),
				(t.prototype.start = function(t) {
					this.error ||
						((this.callback = t),
						0 < this.duration
							? (this.determineDirectionAndSmartEasing(),
								(this.paused = !1),
								(this.rAF = requestAnimationFrame(this.count)))
							: this.printValue(this.endVal))
				}),
				(t.prototype.pauseResume = function() {
					this.paused
						? ((this.startTime = null),
							(this.duration = this.remaining),
							(this.startVal = this.frameVal),
							this.determineDirectionAndSmartEasing(),
							(this.rAF = requestAnimationFrame(this.count)))
						: cancelAnimationFrame(this.rAF),
						(this.paused = !this.paused)
				}),
				(t.prototype.reset = function() {
					cancelAnimationFrame(this.rAF),
						(this.paused = !0),
						this.resetDuration(),
						(this.startVal = this.validateValue(this.options.startVal)),
						(this.frameVal = this.startVal),
						this.printValue(this.startVal)
				}),
				(t.prototype.update = function(t) {
					cancelAnimationFrame(this.rAF),
						(this.startTime = null),
						(this.endVal = this.validateValue(t)),
						this.endVal !== this.frameVal &&
							((this.startVal = this.frameVal),
							this.finalEndVal || this.resetDuration(),
							this.determineDirectionAndSmartEasing(),
							(this.rAF = requestAnimationFrame(this.count)))
				}),
				(t.prototype.printValue = function(t) {
					var e = this.formattingFn(t)
					'INPUT' === this.el.tagName
						? (this.el.value = e)
						: 'text' === this.el.tagName || 'tspan' === this.el.tagName
							? (this.el.textContent = e)
							: (this.el.innerHTML = e)
				}),
				(t.prototype.ensureNumber = function(t) {
					return 'number' == typeof t && !isNaN(t)
				}),
				(t.prototype.validateValue = function(t) {
					var e = Number(t)
					return this.ensureNumber(e)
						? e
						: ((this.error = '[CountUp] invalid start or end value: ' + t), null)
				}),
				(t.prototype.resetDuration = function() {
					;(this.startTime = null),
						(this.duration = 1e3 * Number(this.options.duration)),
						(this.remaining = this.duration)
				}),
				t
			)
		})(),
		q = (function(n) {
			if (void 0 === b)
				throw new Error('mrCountup requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)')
			var t = 'mrCountup',
				r = 'mr.countup',
				e = '.' + r,
				i = n.fn[t],
				a = 'start',
				o = 'end',
				s = 'duration',
				l = 'grouping',
				u = 'separator',
				c = 'decimal-character',
				h = 'decimal-places',
				d = 'prefix',
				f = 'suffix',
				m = 'easing',
				p = { LOAD_DATA_API: 'load' + e + '.data-api', RESIZE: 'resize' + e },
				g = '[data-countup]',
				y = (function() {
					function i(t) {
						var e = n(t)
						;(this.start = parseFloat(e.data(a), 10) || 0),
							(this.end = parseFloat(e.data(o), 10) || parseFloat(e.text(), 10)),
							(this.duration = parseFloat(e.data(s), 10) || 2.5),
							(this.grouping = !0 === e.data(l) || !1),
							(this.separator = e.data(u) || ','),
							(this.decimalCharacter = e.data(c) || '.'),
							(this.decimalPlaces = parseInt(e.data(h), 10) || 0),
							(this.prefix = e.data(d) || ''),
							(this.suffix = e.data(f) || '')
						var i = e.data(m)
						;(this.easing = !1 !== i || i), (this.element = t), this.initWatcher(t), this.startCounting()
					}
					var t = i.prototype
					return (
						(t.initWatcher = function(t) {
							var e = this
							this.CountUp = new N(t, this.end, {
								startVal: this.start,
								decimalPlaces: this.decimalPlaces,
								duration: this.duration,
								useEasing: this.easing,
								useGrouping: this.grouping,
								separator: this.separator,
								decimal: this.decimalCharacter,
								prefix: this.prefix,
								suffix: this.suffix
							})
							var i = b.create(t)
							;(this.watcher = i).stateChange(function() {
								e.startCounting()
							})
						}),
						(t.startCounting = function() {
							if (this.watcher.isFullyInViewport) {
								if (this.CountUp.error) throw new Error(this.CountUp.error)
								this.CountUp.start()
							}
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.1.0'
								}
							}
						]),
						i
					)
				})()
			return (
				n(window).on(p.LOAD_DATA_API, function() {
					for (var t = n.makeArray(n(g)), e = t.length; e--; ) {
						var i = n(t[e])
						y.jQueryInterface.call(i, i.data())
					}
				}),
				(n.fn[t] = y.jQueryInterface),
				(n.fn[t].Constructor = y),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = i), y.jQueryInterface
				}),
				y
			)
		})(C),
		H = ((d = 'script'),
		(h = C)('body').tooltip({ selector: '[data-toggle="tooltip"]', container: 'body' }),
		h('body').popover({ selector: '[data-toggle="popover"]', container: 'body' }),
		h('.toast').toast(),
		{
			version: '1.2.0',
			selector: { RECAPTCHA: '[data-recaptcha]' },
			activateIframeSrc: function(t) {
				var e = h(t)
				e.attr('data-src') && e.attr('src', e.attr('data-src'))
			},
			idleIframeSrc: function(t) {
				var e = h(t)
				e.attr('data-src', e.attr('src')).attr('src', '')
			},
			forEach: function(t, e, i) {
				if (t)
					if (t.length) for (var n = 0; n < t.length; n += 1) e.call(i, n, t[n])
					else (t[0] || H.isElement(t)) && e.call(i, 0, t)
			},
			dedupArray: function(t) {
				return t.reduce(
					function(t, e) {
						var i = JSON.stringify(e)
						return -1 === t.temp.indexOf(i) && (t.out.push(e), t.temp.push(i)), t
					},
					{ temp: [], out: [] }
				).out
			},
			isElement: function(t) {
				return !(!t || 1 !== t.nodeType)
			},
			getFuncFromString: function(t, e) {
				var i = t || null
				if ('function' == typeof i) return t
				if ('string' == typeof i) {
					if (!i.length) return null
					for (var n = e || window, r = i.split('.'); r.length; ) {
						var a = r.shift()
						if (void 0 === n[a]) return null
						n = n[a]
					}
					if ('function' == typeof n) return n
				}
				return null
			},
			getScript: function(t, i) {
				var n = document.createElement(d),
					e = document.getElementsByTagName(d)[0]
				;(n.async = 1),
					(n.defer = 1),
					(n.onreadystatechange = function(t, e) {
						;(e || !n.readyState || /loaded|complete/.test(n.readyState)) &&
							((n.onload = null),
							(n.onreadystatechange = null),
							(n = void 0),
							!e && i && 'function' == typeof i && i())
					}),
					(n.onload = n.onreadystatechange),
					(n.src = t),
					e.parentNode.insertBefore(n, e)
			}
		}),
		Q = ((m = 'mrDropdownGrid'),
		(g = '.' + (p = 'mr.dropdownGrid')),
		(y = '.data-api'),
		(v = (f = C).fn[m]),
		(w = new RegExp('38|40|27')),
		(S = { SHOW: 'show' }),
		(T = {
			LOAD_DATA_API: 'load' + g + y,
			RESIZE: 'resize' + g,
			HIDE: 'hide' + g,
			HIDDEN: 'hidden' + g,
			SHOW: 'show' + g,
			SHOWN: 'shown' + g,
			CLICK: 'click' + g,
			MOUSE_ENTER: 'mouseenter' + g,
			MOUSE_LEAVE: 'mouseleave' + g,
			CLICK_DATA_API: 'click' + g + y,
			KEYDOWN_DATA_API: 'keydown' + g + y,
			KEYUP_DATA_API: 'keyup' + g + y
		}),
		(k = '[data-toggle="dropdown-grid"]'),
		(I = '.dropdown form'),
		(F = D = '.dropdown-menu'),
		(P = '[data-dropdown-content]'),
		(O = '.navbar-nav'),
		(x = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'),
		(L = 'data-hover'),
		(j = 'data-dropdown-grid-hover'),
		(R = (function() {
			function l(t) {
				;(this.ticking = !1),
					(this.isActive = !1),
					(this.element = t),
					this.getOptions(),
					(this.parent = l.getParentFromElement(this.element)),
					(this.menu = this.getMenuElement()),
					(this.container = this.getContainerElement()),
					(this.content = this.getContentElement()),
					(this.isSubmenu = this.hasParentMenu()),
					this.isSubmenu && (this.siblingMenus = this.getSiblingMenus()),
					(this.submenus = this.getSubmenus()),
					(this.hover = this.options.hover),
					this.addEventListeners(),
					this.setResizeEvent()
			}
			var t = l.prototype
			return (
				(t.getOptions = function() {
					this.options ||
						((this.options = {}),
						(this.options.hover =
							('true' === this.element.getAttribute(L) || 'true' === document.body.getAttribute(j)) &&
							'false' !== this.element.getAttribute(L)))
				}),
				(t.toggle = function(t) {
					if ((this.getParentMenu(), !this.element.disabled && !f(this.element).hasClass(S.DISABLED))) {
						this.isActive = f(this.menu).hasClass(S.SHOW)
						var e = this.isActive,
							i = !this.isActive
						if (
							(this.isSubmenu || l.clearMenus(),
							(this.isSubmenu || !e) && (this.isSubmenu || !i || !t || t.type !== T.MOUSE_LEAVE))
						) {
							if (this.isSubmenu && this.isActive)
								return l.clearMenus(null, this.element), void l.clearMenus(null, this.submenus)
							this.isSubmenu && !this.isActive && l.clearMenus(null, this.siblingMenus)
							var n = { relatedTarget: this.element },
								r = f.Event(T.SHOW, n)
							f(this.parent).trigger(r),
								r.isDefaultPrevented() ||
									('ontouchstart' in document.documentElement &&
										0 === f(this.parent).closest(O).length &&
										f(document.body).children().on('mouseover', null, f.noop),
									this.element.focus(),
									this.element.setAttribute('aria-expanded', !0),
									f(this.menu).toggleClass(S.SHOW),
									this.updatePosition(),
									(this.isActive = !0),
									f(this.parent).toggleClass(S.SHOW).trigger(f.Event(T.SHOWN, n)))
						}
					}
				}),
				(t.updatePosition = function(t) {
					var e = t || window.innerWidth,
						i = Q.getDimensionsFromElement(this.element)
					this.positionContainer(i.offsetLeft), this.positionContent(e, i.offsetLeft)
				}),
				(t.positionContainer = function(t) {
					if (!this.container) throw new TypeError('No element matching .dropdown-menu.container found.')
					this.container.style.left = '-' + t + 'px'
				}),
				(t.positionContent = function(t, e) {
					if (!this.content) throw new TypeError('No [data-dropdown-content] element was found.')
					var i,
						n = Q.getDimensionsFromElement(this.content).width
					if (this.isSubmenu) {
						this.getParentMenu()
						var r = Q.getDimensionsFromElement(this.parentMenu.content)
						i =
							r.offsetLeft + r.width + n <= t
								? r.offsetLeft + r.width
								: r.offsetLeft >= n ? r.offsetLeft - n : 0
					} else i = t <= n + e ? t - n : e
					var a = Math.round(i) + 'px'
					this.content.style.left = a
				}),
				(t.setResizeEvent = function() {
					var t = this
					f(window).on(T.RESIZE, function() {
						t.ticking ||
							(window.requestAnimationFrame(function() {
								t.updatePosition(), (t.ticking = !1)
							}),
							(t.ticking = !0))
					})
				}),
				(t.getMenuElement = function() {
					return this.menu || (this.parent && (this.menu = this.parent.querySelector(D))), this.menu
				}),
				(t.getContainerElement = function() {
					return (
						this.container || (this.parent && (this.container = this.parent.querySelector('' + D + F))),
						this.container
					)
				}),
				(t.getContentElement = function() {
					return (
						this.content || (this.parent && (this.content = this.container.querySelector(P))), this.content
					)
				}),
				(t.hasParentMenu = function() {
					return 0 < f(this.element).closest(P).length
				}),
				(t.getParentMenu = function() {
					this.isSubmenu &&
						!this.parentMenu &&
						(this.parentMenu = f(this.parent).closest(D).siblings(k).data(p))
				}),
				(t.getSiblingMenus = function() {
					return f(this.element).closest(P).get(0).querySelectorAll(k)
				}),
				(t.getSubmenus = function() {
					var t = this.content.querySelectorAll(k)
					return (this.isParent = 0 !== t.length), t
				}),
				(t.addEventListeners = function() {
					var e = this
					f(this.element).on(T.CLICK, function(t) {
						t.preventDefault(), t.stopPropagation(), e.toggle()
					}),
						this.hover &&
							f(this.parent).on(T.MOUSE_ENTER + ' ' + T.MOUSE_LEAVE, function(t) {
								t.preventDefault(),
									t.stopPropagation(),
									(t.type + g === T.MOUSE_ENTER && e.isActive) ||
										(t.type + g === T.MOUSE_LEAVE && !e.isActive) ||
										e.toggle(t)
							})
				}),
				(l.getDimensionsFromElement = function(t) {
					if (t && H.isElement(t)) {
						var e = t.getBoundingClientRect()
						return (
							(e.offsetLeft = Math.round(
								e.left + window.pageXOffset - document.documentElement.clientLeft
							)),
							e
						)
					}
					throw new TypeError("Can't get a measurement from a non-element")
				}),
				(l.getParentFromElement = function(t) {
					return t.parentNode
				}),
				(l.clearMenus = function(s, t) {
					var e
					;(!s || (3 !== s.which && 'keyup' !== s.type) || 9 === s.which) &&
						((e = t && 'object' == typeof t ? t : document.querySelectorAll(k)),
						H.forEach(e, function(t, e) {
							var i = l.getParentFromElement(e),
								n = f(e).data(p),
								r = { relatedTarget: e }
							if ((s && 'click' === s.type && (r.clickEvent = s), n)) {
								var a = n.menu
								if (
									f(i).hasClass(S.SHOW) &&
									!(
										(s &&
											(('click' === s.type && /input|textarea/i.test(s.target.tagName)) ||
												('keyup' === s.type && 9 === s.which)) &&
											f.contains(i, s.target)) ||
										(s &&
											'click' === s.type &&
											(f.contains(n.content, s.target) || n.content.isSameNode(s.target)))
									)
								) {
									var o = f.Event(T.HIDE, r)
									f(i).trigger(o),
										o.isDefaultPrevented() ||
											('ontouchstart' in document.documentElement &&
												f(document.body).children().off('mouseover', null, f.noop),
											e.setAttribute('aria-expanded', 'false'),
											(n.isActive = !1),
											f(a).removeClass(S.SHOW),
											f(i).removeClass(S.SHOW).trigger(f.Event(T.HIDDEN, r)))
								}
							}
						}))
				}),
				(l.jQueryInterface = function(i) {
					return this.each(function() {
						var t = f(this),
							e = t.data(p)
						if ((e || ((e = new l(this)), t.data(p, e)), 'string' == typeof i)) {
							if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"')
							e[i]()
						}
					})
				}),
				(l.dataApiKeydownHandler = function(t) {
					if (
						(/input|textarea/i.test(t.target.tagName)
							? (32 !== t.which && 27 === t.which) ||
								!((40 !== t.which && 38 !== t.which) || f(t.target).closest(D).length)
							: w.test(t.which)) &&
						(t.preventDefault(), t.stopPropagation(), !this.disabled && !f(this).hasClass(S.DISABLED))
					) {
						var e = l.getParentFromElement(this),
							i = f(e).hasClass(S.SHOW)
						if ((i || (27 === t.which && 32 === t.which)) && (!i || (27 !== t.which && 32 !== t.which))) {
							var n = [].slice.call(e.querySelectorAll(x))
							if (0 !== n.length) {
								var r = n.indexOf(t.target)
								38 === t.which && 0 < r && (r -= 1),
									40 === t.which && r < n.length - 1 && (r += 1),
									r < 0 && (r = 0),
									n[r].focus()
							}
						} else {
							if (27 === t.which) {
								var a = e.querySelector(k)
								f(a).trigger('focus')
							}
							f(this).trigger('click')
						}
					}
				}),
				W(l, null, [
					{
						key: 'VERSION',
						get: function() {
							return '1.0.0'
						}
					}
				]),
				l
			)
		})()),
		f(document)
			.on(T.KEYDOWN_DATA_API, k, R.dataApiKeydownHandler)
			.on(T.KEYDOWN_DATA_API, D, R.dataApiKeydownHandler)
			.on(T.CLICK_DATA_API + ' ' + T.KEYUP_DATA_API, R.clearMenus)
			.on(T.CLICK_DATA_API, I, function(t) {
				t.stopPropagation()
			}),
		f(document).ready(function() {
			for (var t = f.makeArray(f(k)), e = t.length; e--; ) {
				var i = f(t[e])
				R.jQueryInterface.call(i, i.data())
			}
		}),
		(f.fn[m] = R.jQueryInterface),
		(f.fn[m].Constructor = R),
		(f.fn[m].noConflict = function() {
			return (f.fn[m] = v), R.jQueryInterface
		}),
		R)
	!(function() {
		var i = 'href',
			n = 'fade-page',
			r = 500,
			t = document.getElementsByClassName(n)
		function e(t) {
			if (!(t.ctrlKey || t.shiftKey || t.metaKey || (t.button && 1 === t.button))) {
				t.preventDefault(), t.stopPropagation(), document.body.classList.add(n)
				var e = this.getAttribute(i)
				setTimeout(function() {
					'' !== e && '#' !== e && (window.location.href = e)
				}, r)
			}
		}
		for (var a = 0; a < t.length; a += 1) t[a].addEventListener('click', e, !1)
	})(),
		$(document).on('shown.bs.modal layoutComplete', function(t) {
			$(t.target).find('[data-flickity]').each(function(t, e) {
				var i = $(e)
				i.data().flickity.isInitActivated && i.flickity('resize')
			})
		})
	var B,
		z = (function(n) {
			if (!(H && '1.2.0' <= H.version)) throw new Error('mrUtil >= version 1.2.0 is required.')
			var t = 'mrRecaptchav2',
				r = 'mr.recaptchav2',
				e = n.fn[t],
				a = { RECAPTCHAV2: 'https://www.google.com/recaptcha/api.js?onload=mrRecaptchav2Init&render=explicit' },
				o = '[data-recaptcha]',
				s = 'form',
				l = 'invisible',
				u = [],
				c = !1,
				h = (function() {
					function i(t) {
						;(this.element = t),
							(this.form = this.getForm()),
							(this.isReady = !1),
							(this.isValid = !1),
							(this.options = n(this.element).data()),
							(this.invisible = this.options.size === l),
							(this.id = null),
							u.push(this)
					}
					var t = i.prototype
					return (
						(t.init = function() {
							var t = this
							'' === this.element.innerHTML.replace(/[\s\xA0]+/g, '') &&
								((this.id = grecaptcha.render(this.element, {
									sitekey: this.options.sitekey,
									theme: this.options.theme,
									size: this.options.size,
									badge: this.options.badge,
									tabindex: this.options.tabindex,
									callback: function() {
										t.validate()
									},
									'expired-callback': function() {
										t.invalidate()
									}
								})),
								(this.isReady = !0))
						}),
						(t.validate = function() {
							;(this.isValid = !0), this.invisible && this.form && n(this.form).trigger('submit')
						}),
						(t.invalidate = function() {
							this.isValid = !1
						}),
						(t.checkValidity = function() {
							return !(!this.isReady || !this.isValid)
						}),
						(t.execute = function() {
							this.isReady && this.invisible && grecaptcha.execute(this.id)
						}),
						(t.reset = function() {
							this.isReady && (grecaptcha.reset(this.id), (this.isValid = !1))
						}),
						(t.getForm = function() {
							var t = n(this.element).closest(s)
							return t.length ? t.get(0) : null
						}),
						(i.getRecaptchaFromForm = function(t) {
							if (H.isElement(t)) {
								var e = t.querySelector(o)
								return (e && n(e).data(r)) || null
							}
							throw new TypeError('Form argument passed to getRecaptchaFromForm is not an element.')
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							},
							{
								key: 'ready',
								get: function() {
									return c
								}
							},
							{
								key: 'instances',
								get: function() {
									return u
								}
							},
							{
								key: 'apiReady',
								set: function(t) {
									!0 === t &&
										!1 === c &&
										H.forEach(i.instances, function(t, e) {
											e.init()
										}),
										(c = !0)
								}
							}
						]),
						i
					)
				})()
			return (
				(window.mrRecaptchav2Init = function() {
					z.apiReady = !0
				}),
				n(document).ready(function() {
					var t = n.makeArray(n(o))
					if (0 < t.length) {
						H.getScript(a.RECAPTCHAV2)
						for (var e = t.length; e--; ) {
							var i = n(t[e])
							h.jQueryInterface.call(i, i.data())
						}
					}
				}),
				(n.fn[t] = h.jQueryInterface),
				(n.fn[t].Constructor = h),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = e), h.jQueryInterface
				}),
				h
			)
		})(jQuery),
		U = (function(r) {
			if (!(H && '1.2.0' <= H.version)) throw new Error('mrUtil >= version 1.2.0 is required.')
			var t = 'mrFormEmail',
				n = 'mr.formEmail',
				e = '.' + n,
				i = r.fn[t],
				a = 'btn-loading-animate',
				o = 'was-validated',
				s = 'd-none',
				l = 'action',
				u = 'disabled',
				c = 'data-feedback-delay',
				h = 'data-success-redirect',
				d = '[data-form-email]',
				f = '[data-success-message]',
				m = '[data-error-message]',
				p = 'button[type="submit"]',
				g = 'span',
				y = 'input,textarea,select',
				v = { SENT: 'sent' + e, LOAD_DATA_API: 'load' + e + '.data-api', SUBMIT: 'submit' },
				w = 'data-loading-text',
				b = 'Sending',
				E = 'forms/mail.php',
				A = 5e3,
				S = 'Form submission error',
				T = 'success',
				k = 'error',
				I = (function() {
					function i(t) {
						;(this.form = t),
							(this.action = this.form.getAttribute(l) || E),
							(this.feedback = this.getFeedbackElements()),
							this.getRecaptcha(),
							this.initSubmitButton(),
							this.setSubmitEvent()
					}
					var t = i.prototype
					return (
						(t.submitForm = function() {
							this.hideAllFeedback(), this.validateForm() && this.ajaxSubmit()
						}),
						(t.validateForm = function() {
							var t = this.form.checkValidity()
							if (this.recaptcha)
								if (this.recaptcha.invisible) {
									if (t && !this.recaptcha.checkValidity()) return this.recaptcha.execute(), !1
								} else !1 === this.recaptcha.checkValidity() && (t = !1)
							return t
								? (this.form.classList.remove(o), !0)
								: (clearTimeout(this.feedbackTimeout),
									this.form.classList.add(o),
									this.showFeedback(k, this.validationErrorMessage),
									!1)
						}),
						(t.ajaxSubmit = function() {
							var t = r(this.form).serializeArray()
							t.push({ name: 'url', value: window.location.href }),
								C.ajax({
									context: this,
									data: t,
									dataType: 'json',
									error: this.showFeedback,
									success: this.processResponse,
									type: 'POST',
									url: this.action
								}),
								this.toggleFormLoading(!0)
						}),
						(t.initSubmitButton = function() {
							return (
								this.submitButton || (this.submitButton = this.form.querySelector(p)),
								(this.submitButtonSpan = this.submitButton.querySelector(g)),
								(this.loadingText = this.submitButton.getAttribute(w) || b),
								(this.originalSubmitText = this.submitButtonSpan.textContent),
								this.submitButton
							)
						}),
						(t.processResponse = function(t) {
							var e = this,
								i = t.status === T
							this.toggleFormLoading(!1),
								this.recaptcha && this.recaptcha.reset(),
								r(this.form).trigger(r.Event(v.SENT))
							var n = this.form.getAttribute(h)
							i && n && '' !== n
								? (window.location = n)
								: i &&
									(this.form.reset(),
									(this.feedbackTimeout = setTimeout(function() {
										return e.hideAllFeedback()
									}, this.feedbackDelay))),
								n || this.showFeedback(t.status, t.message),
								t.errorDetail &&
									console.error(
										t.errorName || S,
										0 === t.errorDetail.indexOf('{') ? JSON.parse(t.errorDetail) : t.errorDetail
									)
						}),
						(t.showFeedback = function(t, e, i) {
							this.toggleFormLoading(!1),
								'object' == typeof t && t.statusText
									? (clearTimeout(this.feedbackTimeout),
										(this.feedback.error.innerHTML =
											(i || e) + ': <em>"' + this.action + '"</em> (' + t.status + ' ' + e + ')'),
										this.feedback.error.classList.remove(s))
									: ((this.feedback[t].innerHTML = e), this.feedback[t].classList.remove(s))
						}),
						(t.hideAllFeedback = function() {
							this.feedback.success.classList.add(s), this.feedback.error.classList.add(s)
						}),
						(t.getFeedbackElements = function() {
							if (!this.feedback) {
								;(this.feedback = {
									success: this.form.querySelector(f),
									error: this.form.querySelector(m)
								}),
									(this.validationErrorMessage = this.feedback.error.innerHTML)
								var t = this.form.getAttribute(c) || A
								;(this.feedbackDelay = parseInt(t, 10)), (this.feedbackTimeout = null)
							}
							return this.feedback
						}),
						(t.getRecaptcha = function() {
							if (this.form.querySelector(H.selector.RECAPTCHA)) {
								if (!z)
									throw new Error(
										'mrRecaptcha.js is required to handle the reCAPTCHA element in this form.'
									)
								this.recaptcha = z.getRecaptchaFromForm(this.form)
							}
						}),
						(t.toggleFormLoading = function(t) {
							this.toggleSubmitButtonLoading(t), i.toggleDisabled(this.form.querySelectorAll(y), t)
						}),
						(t.toggleSubmitButtonLoading = function(t) {
							this.toggleSubmitButtonText(t),
								this.toggleSubmitButtonAnimation(t),
								i.toggleDisabled(this.submitButton, t)
						}),
						(t.toggleSubmitButtonAnimation = function(t) {
							this.submitButton.classList[t ? 'add' : 'remove'](a)
						}),
						(t.toggleSubmitButtonText = function(t) {
							this.submitButtonSpan.textContent = t ? this.loadingText : this.originalSubmitText
						}),
						(i.toggleDisabled = function(t, i) {
							H.forEach(t, function(t, e) {
								return e[i ? 'setAttribute' : 'removeAttribute'](u, '')
							})
						}),
						(i.getInstanceFromForm = function(t) {
							if (H.isElement(t)) return r(t).data(n) || null
							throw new TypeError('Form argument passed to getInstanceFromForm is not an element.')
						}),
						(t.setSubmitEvent = function() {
							var e = this
							r(this.form).on(v.SUBMIT, function(t) {
								t.preventDefault(), e.submitForm()
							})
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = r(this),
									e = t.data(n)
								e || ((e = new i(this)), t.data(n, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							}
						]),
						i
					)
				})()
			return (
				r(window).on(v.LOAD_DATA_API, function() {
					for (var t = r.makeArray(r(d)), e = t.length; e--; ) {
						var i = r(t[e])
						I.jQueryInterface.call(i, i.data())
					}
				}),
				(r.fn[t] = I.jQueryInterface),
				(r.fn[t].Constructor = I),
				(r.fn[t].noConflict = function() {
					return (r.fn[t] = i), I.jQueryInterface
				}),
				I
			)
		})(C),
		G = (function(n) {
			if ('function' != typeof n.fn.ionRangeSlider)
				throw new Error(
					'mrIonRangeSlider requires ion.rangeSlider.js (https://github.com/IonDen/ion.rangeSlider)'
				)
			if (!(H && '1.2.0' <= H.version)) throw new Error('mrUtil >= version 1.2.0 is required.')
			var t = 'mrIonRangeSlider',
				r = 'mr.ionRangeSlider',
				e = n.fn[t],
				a = { LOAD_DATA_API: 'load.mr.ionRangeSlider.data-api', CHANGE: 'input' },
				o = '[data-ion-rangeslider]',
				s = 'INPUT',
				l = 'text',
				u = 'theme',
				c = (function() {
					function i(t) {
						var e = n(t)
						;(this.options = e.data()),
							(this.element = t),
							(this.fromElement = null),
							(this.toElement = null),
							(this.unitElement = null),
							this.initRangeSlider()
					}
					var t = i.prototype
					return (
						(t.initRangeSlider = function() {
							var t = this.options
							t.fromSelector &&
								((this.fromElement = document.querySelectorAll(t.fromSelector)),
								this.setFromUpdateEvent(this.fromElement)),
								t.toSelector &&
									((this.toElement = document.querySelectorAll(t.toSelector)),
									this.setToUpdateEvent(this.toElement)),
								t.unitSelector &&
									t.unitSingle &&
									t.unitPlural &&
									(this.unitElement = document.querySelectorAll(t.unitSelector)),
								n(this.element).ionRangeSlider({
									skin: u,
									onStart: H.getFuncFromString(t.onStart),
									onFinish: H.getFuncFromString(t.onFinish),
									onChange: this.handleChange,
									scope: this,
									onUpdate: H.getFuncFromString(t.onUpdate)
								}),
								(this.rangeSlider = n(this.element).data('ionRangeSlider'))
						}),
						(t.handleChange = function(t) {
							if (
								(this.fromElement &&
									0 < this.fromElement.length &&
									G.updateValue(this.fromElement, t.from_value || t.from),
								this.toElement &&
									0 < this.toElement.length &&
									G.updateValue(this.toElement, t.to_value || t.to),
								this.unitElement && 0 < this.unitElement.length)
							) {
								var e = parseInt(t.from_value, 10) || t.value
								G.updateValue(
									this.unitElement,
									1 < e ? this.options.unitPlural : this.options.unitSingle
								)
							}
							var i = H.getFuncFromString(this.options.onChange)
							i && i(t)
						}),
						(t.setToUpdateEvent = function(t) {
							var i = this
							H.forEach(t, function(t, e) {
								e.tagName.toUpperCase() === s &&
									e.type === l &&
									e.addEventListener(a.CHANGE, function() {
										i.rangeSlider.update({ to: e.value })
									})
							})
						}),
						(t.setFromUpdateEvent = function(t) {
							var i = this
							H.forEach(t, function(t, e) {
								e.tagName.toUpperCase() === s &&
									e.type === l &&
									e.addEventListener(a.CHANGE, function() {
										i.rangeSlider.update({ from: e.value })
									})
							})
						}),
						(i.updateValue = function(t, i) {
							H.forEach(t, function(t, e) {
								e[e.tagName.toUpperCase() === s ? 'value' : 'textContent'] = i
							})
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							}
						]),
						i
					)
				})()
			return (
				n(window).on(a.LOAD_DATA_API, function() {
					for (var t = n.makeArray(n(o)), e = t.length; e--; ) {
						var i = n(t[e])
						c.jQueryInterface.call(i, i.data())
					}
				}),
				(n.fn[t] = c.jQueryInterface),
				(n.fn[t].Constructor = c),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = e), c.jQueryInterface
				}),
				c
			)
		})(C),
		K = (function(f) {
			if (void 0 === V)
				throw new Error('mrIsotope requires isotope.pkgd.js (https://github.com/metafizzy/isotope)')
			var t = 'mrIsotope',
				n = 'mr.isotope',
				e = f.fn[t],
				r = 'active',
				m = {
					LOAD_DATA_API: 'load.mr.isotope.data-api',
					FILTER_CLICK: 'click touchstart',
					SORTER_CLICK: 'click touchstart'
				},
				a = 'masonry',
				p = 'original-order',
				o = '.js-filter-inited',
				s = 'data-isotope-id',
				l = '[data-isotope-collection]',
				u = '[data-isotope-item]',
				c = '[data-isotope-filters]',
				h = '[data-isotope-sorters]',
				i = 'data-category',
				d = 'data-filter',
				g = 'data-sort',
				y = 'data-primary-sort',
				v = 'data-secondary-sort',
				w = 'data-sort-selector',
				b = 'data-sort-ascending',
				E = '*'
			function A(t) {
				return t && t !== E ? '[' + i + '*="' + t + '"]' : E
			}
			function S(t, e) {
				return document.querySelectorAll(h + '[' + s + '="' + t + '"] [' + g + '="' + e + '"]')
			}
			function T(t, e) {
				return document.querySelectorAll(c + '[' + s + '="' + t + '"] [' + d + '="' + e + '"]')
			}
			function k(t, i) {
				t &&
					H.forEach(t, function(t, e) {
						e && void 0 !== e.classList && (i ? e.classList.add(r) : e.classList.remove(r))
					})
			}
			var I = (function() {
				function i(t) {
					var e = f(t).data()
					;(this.element = t),
						(this.attributes = e),
						(this.filters = {}),
						(this.sorters = {}),
						(this.activeFilter = null),
						(this.activeSorter = null),
						(this.isotope = null),
						(this.options = {}),
						(this.options.getSortData = {}),
						(this.options.sortAscending = {}),
						this.initIsotope(),
						this.initSorters(),
						this.initFilters()
				}
				var t = i.prototype
				return (
					(t.initFilters = function() {
						var n = this,
							r = (function(t, e) {
								var i = e ? ':not(' + e + ')' : ''
								return document.querySelectorAll(c + '[' + s + '="' + t + '"] [' + d + ']' + i)
							})(this.attributes.isotopeId, o)
						H.forEach(r, function(t, e) {
							var i = e.attributes[d] && e.attributes[d].value
							;(n.filters[i] = T(n.attributes.isotopeId, i)),
								f(e).on(m.FILTER_CLICK, function(t) {
									t.preventDefault && t.preventDefault(),
										k(n.activeFilter, !1),
										k(n.filters[i], !0),
										(n.activeFilter = r),
										(n.options.filter = '*' === i ? i : A(i)),
										n.isotope.arrange(n.options)
								}),
								e.classList.add(o)
						})
					}),
					(t.initSorters = function() {
						var d = this,
							t = (function(t) {
								return document.querySelectorAll(
									h +
										'[' +
										s +
										'="' +
										t +
										'"] [' +
										g +
										'][' +
										w +
										'],\n      ' +
										h +
										'[' +
										s +
										'="' +
										t +
										'"] [' +
										g +
										'][' +
										y +
										'][' +
										v +
										']'
								)
							})(this.attributes.isotopeId),
							e = this.attributes.defaultSort || p
						H.forEach(t, function(t, e) {
							var i = e.attributes,
								n = i[g],
								r = i[w],
								a = i[b],
								o = i[y],
								s = i[v],
								l = n && n.value,
								u = r && r.value,
								c = o && o.value && s && s.value ? [ o.value, s.value ] : null,
								h = !(a && a.value && 'false' === a.value)
							;(d.sorters[l] = S(d.attributes.isotopeId, l)),
								f(e).on(m.SORTER_CLICK, function(t) {
									t.preventDefault && t.preventDefault(),
										k(d.activeSorter, !1),
										k(d.sorters[l], !0),
										(d.activeSorter = d.sorters[l]),
										(d.options.sortBy = c || l),
										d.isotope.arrange(d.options)
								}),
								(d.options.sortAscending[l] = h),
								l === p || c || (d.options.getSortData[l] = u)
						}),
							(this.options.sortBy = e),
							(this.activeSorter = S(this.attributes.isotopeId, e)),
							k(this.activeSorter, !0),
							this.isotope.updateSortData(),
							this.isotope.arrange(this.options)
					}),
					(t.initIsotope = function() {
						var t = window.location.hash.replace('#', ''),
							e =
								(t = '' === t || this.attributes.ignoreHash ? null : t) ||
								this.attributes.defaultFilter ||
								E,
							i = A(e),
							n = !1 == !this.attributes.sortAscending
						;(this.options.itemSelector = u),
							(this.options.layoutMode = this.attributes.layoutMode || a),
							(this.options.filter = i),
							(this.options.sortAscending[p] = n),
							(this.isotope = new V(this.element, this.options)),
							(this.activeFilter = T(this.attributes.isotopeId, e)),
							k(this.activeFilter, !0)
					}),
					(i.jQueryInterface = function() {
						return this.each(function() {
							var t = f(this),
								e = t.data(n)
							e || ((e = new i(this)), t.data(n, e))
						})
					}),
					W(i, null, [
						{
							key: 'VERSION',
							get: function() {
								return '1.0.0'
							}
						}
					]),
					i
				)
			})()
			return (
				f(window).on(m.LOAD_DATA_API, function() {
					for (var t = f.makeArray(f(l)), e = t.length; e--; ) {
						var i = f(t[e])
						I.jQueryInterface.call(i, i.data())
					}
				}),
				(f.fn[t] = I.jQueryInterface),
				(f.fn[t].Constructor = I),
				(f.fn[t].noConflict = function() {
					return (f.fn[t] = e), I.jQueryInterface
				}),
				I
			)
		})(C)
	;(B = C),
		'function' == typeof r &&
			(B('.alert-dismissible').on('closed.bs.alert', function() {
				r(document.querySelectorAll('[data-jarallax]'), 'onScroll')
			}),
			B(document).on('resized.mr.overlayNav', function() {
				r(document.querySelectorAll('[data-jarallax]'), 'onResize')
			}),
			r(document.querySelectorAll('[data-jarallax]'), {
				disableParallax: /iPad|iPhone|iPod|Android/,
				disableVideo: /iPad|iPhone|iPod|Android/
			}))
	var Z,
		Y,
		J,
		X,
		tt,
		et,
		it,
		nt,
		rt,
		at,
		ot,
		st,
		lt,
		ut,
		ct = [
			{ featureType: 'administrative.country', elementType: 'labels.text', stylers: [ { lightness: '29' } ] },
			{
				featureType: 'administrative.province',
				elementType: 'labels.text.fill',
				stylers: [ { lightness: '-12' }, { color: '#796340' } ]
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [ { lightness: '15' }, { saturation: '15' } ]
			},
			{
				featureType: 'landscape.man_made',
				elementType: 'geometry',
				stylers: [ { visibility: 'on' }, { color: '#fbf5ed' } ]
			},
			{
				featureType: 'landscape.natural',
				elementType: 'geometry',
				stylers: [ { visibility: 'on' }, { color: '#fbf5ed' } ]
			},
			{ featureType: 'poi', elementType: 'labels', stylers: [ { visibility: 'off' } ] },
			{
				featureType: 'poi.attraction',
				elementType: 'all',
				stylers: [ { visibility: 'on' }, { lightness: '30' }, { saturation: '-41' }, { gamma: '0.84' } ]
			},
			{ featureType: 'poi.attraction', elementType: 'labels', stylers: [ { visibility: 'on' } ] },
			{ featureType: 'poi.business', elementType: 'all', stylers: [ { visibility: 'off' } ] },
			{ featureType: 'poi.business', elementType: 'labels', stylers: [ { visibility: 'off' } ] },
			{ featureType: 'poi.medical', elementType: 'geometry', stylers: [ { color: '#fbd3da' } ] },
			{ featureType: 'poi.medical', elementType: 'labels', stylers: [ { visibility: 'on' } ] },
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [ { color: '#b0e9ac' }, { visibility: 'on' } ]
			},
			{ featureType: 'poi.park', elementType: 'labels', stylers: [ { visibility: 'on' } ] },
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [ { hue: '#68ff00' }, { lightness: '-24' }, { gamma: '1.59' } ]
			},
			{ featureType: 'poi.sports_complex', elementType: 'all', stylers: [ { visibility: 'on' } ] },
			{
				featureType: 'poi.sports_complex',
				elementType: 'geometry',
				stylers: [ { saturation: '10' }, { color: '#c3eb9a' } ]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [ { visibility: 'on' }, { lightness: '30' }, { color: '#e7ded6' } ]
			},
			{
				featureType: 'road',
				elementType: 'labels',
				stylers: [ { visibility: 'on' }, { saturation: '-39' }, { lightness: '28' }, { gamma: '0.86' } ]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.fill',
				stylers: [ { color: '#ffe523' }, { visibility: 'on' } ]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [ { visibility: 'on' }, { saturation: '0' }, { gamma: '1.44' }, { color: '#fbc28b' } ]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [ { visibility: 'on' }, { saturation: '-40' } ]
			},
			{ featureType: 'road.arterial', elementType: 'geometry', stylers: [ { color: '#fed7a5' } ] },
			{
				featureType: 'road.arterial',
				elementType: 'geometry.fill',
				stylers: [ { visibility: 'on' }, { gamma: '1.54' }, { color: '#fbe38b' } ]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry.fill',
				stylers: [ { color: '#ffffff' }, { visibility: 'on' }, { gamma: '2.62' }, { lightness: '10' } ]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry.stroke',
				stylers: [ { visibility: 'on' }, { weight: '0.50' }, { gamma: '1.04' } ]
			},
			{ featureType: 'transit.station.airport', elementType: 'geometry.fill', stylers: [ { color: '#dee3fb' } ] },
			{ featureType: 'water', elementType: 'geometry', stylers: [ { saturation: '46' }, { color: '#a4e1ff' } ] }
		],
		ht = (function(d) {
			var t = 'mrMaps',
				i = 'mr.maps',
				e = d.fn[t],
				n = '[data-maps-api-key]',
				r = 'div.map-marker',
				a = 'div.map-style',
				f = 'data-address',
				m = 'data-latlong',
				p = 'data-marker-image',
				g = 'data-marker-title',
				y = 'div.info-window',
				o = '',
				v = { MAP_LOADED: 'loaded.mr.maps' },
				w = {
					MARKER_IMAGE_URL: '/assets/img/map-marker.png',
					MAP: { disableDefaultUI: !0, draggable: !0, scrollwheel: !1, zoom: 17, zoomControl: !1 }
				}
			w.MAP.styles = void 0 !== ct ? ct : void 0
			var s = (function() {
				function h(t) {
					;(this.element = t),
						(this.$element = d(t)),
						(this.markers = []),
						(this.geocoder = new google.maps.Geocoder()),
						(this.markerElements = this.$element.find(r)),
						(this.styleElement = this.$element.find(a).first()),
						this.initMap(),
						this.createMarkers()
				}
				h.init = function() {
					for (var t = d.makeArray(d(n)), e = t.length; e--; ) {
						var i = d(t[e])
						h.jQueryInterface.call(i, i.data())
					}
				}
				var t = h.prototype
				return (
					(t.initMap = function() {
						var t,
							e = this,
							i = this.element,
							n = this.$element,
							r = void 0 !== n.attr('data-zoom-controls'),
							a = void 0 !== n.attr('data-zoom-controls') && n.attr('data-zoom-controls'),
							o = void 0 !== n.attr('data-latlong') && n.attr('data-latlong'),
							s = !!o && parseFloat(o.substr(0, o.indexOf(','))),
							l = !!o && parseFloat(o.substr(o.indexOf(',') + 1)),
							u = n.attr('data-address') || '',
							c = {}
						try {
							c.styles = this.styleElement.length ? JSON.parse(this.styleElement.html().trim()) : void 0
						} catch (t) {
							throw new Error(t)
						}
						if (
							((c.zoom = n.attr('data-map-zoom') ? parseInt(n.attr('data-map-zoom'), 10) : void 0),
							(c.zoomControl = r),
							(c.zoomControlOptions = !1 !== a ? { position: google.maps.ControlPosition[a] } : void 0),
							(t = jQuery.extend({}, w.MAP, c)),
							(this.map = new google.maps.Map(i, t)),
							google.maps.event.addListenerOnce(this.map, 'center_changed', function() {
								var t = d.Event(v.MAP_LOADED, { map: e.map })
								n.trigger(t)
							}),
							void 0 !== s && '' !== s && !1 !== s && void 0 !== l && '' !== l && !1 !== l)
						)
							this.map.setCenter(new google.maps.LatLng(s, l))
						else {
							if ('' === u)
								throw new Error('No valid address or latitude/longitude pair provided for map.')
							this.geocodeAddress(u, h.centerMap, this, this.map)
						}
					}),
					(t.geocodeAddress = function(i, n, r, a) {
						this.geocoder.geocode({ address: i }, function(t, e) {
							if (e !== google.maps.GeocoderStatus.OK)
								throw new Error('There was a problem geocoding the address "' + i + '".')
							n(t, r, a)
						})
					}),
					(h.centerMap = function(t, e) {
						e.map.setCenter(t[0].geometry.location)
					}),
					(h.moveMarker = function(t, e, i) {
						i.setPosition(t[0].geometry.location)
					}),
					(t.createMarkers = function() {
						var c = this
						;(w.MARKER = {
							icon: {
								url: this.$element.attr(p) || w.MARKER_IMAGE_URL,
								scaledSize: new google.maps.Size(50, 50)
							},
							title: o,
							optimised: !1
						}),
							this.markerElements.each(function(t, e) {
								var i,
									n = d(e),
									r = n.attr(f),
									a = n.attr(m),
									o = n.find(y),
									s = { title: n.attr(g) }
								s.icon =
									void 0 !== n.attr(p)
										? { url: n.attr(p), scaledSize: new google.maps.Size(50, 50) }
										: void 0
								var l = jQuery.extend({}, w.MARKER, s)
								if (((i = new google.maps.Marker(jQuery.extend({}, l, { map: c.map }))), o.length)) {
									var u = new google.maps.InfoWindow({
										content: o.first().html(),
										maxWidth: parseInt(o.attr('data-max-width') || '250', 10)
									})
									i.addListener('click', function() {
										u.open(c.map, i)
									})
								}
								if (a)
									/(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/.test(a) &&
										(i.setPosition(
											new google.maps.LatLng(
												parseFloat(a.substr(0, a.indexOf(','))),
												parseFloat(a.substr(a.indexOf(',') + 1))
											)
										),
										(c.markers[t] = i))
								else {
									if (!r)
										throw ((i = null),
										new Error(
											'Invalid data-address or data-latlong provided for marker ' + (t + 1)
										))
									c.geocodeAddress(r, h.moveMarker, c, i), (c.markers[t] = i)
								}
							})
					}),
					(h.jQueryInterface = function() {
						return this.each(function() {
							var t = d(this),
								e = t.data(i)
							e || ((e = new h(this)), t.data(i, e))
						})
					}),
					W(h, null, [
						{
							key: 'VERSION',
							get: function() {
								return '1.1.0'
							}
						}
					]),
					h
				)
			})()
			if (
				document.querySelector('[data-maps-api-key]') &&
				!document.querySelector('.gMapsAPI') &&
				d('[data-maps-api-key]').length
			) {
				var l = d('[data-maps-api-key]:first').attr('data-maps-api-key') || ''
				if ('' !== l) {
					var u = document.createElement('script')
					;(u.type = 'text/javascript'),
						(u.src = 'https://maps.googleapis.com/maps/api/js?key=' + l + '&callback=theme.mrMaps.init'),
						(u.className = 'gMapsAPI'),
						document.body.appendChild(u)
				}
			}
			return (
				(d.fn[t] = s.jQueryInterface),
				(d.fn[t].Constructor = s),
				(d.fn[t].noConflict = function() {
					return (d.fn[t] = e), s.jQueryInterface
				}),
				s
			)
		})(jQuery),
		dt = ((Y = 'mrOverlayNav'),
		(X = '.' + (J = 'mr.overlayNav')),
		(tt = (Z = C).fn[Y]),
		(et = {
			RESIZE: 'resize' + X,
			RESIZED: 'resized' + X,
			IMAGE_LOAD: 'load',
			TOGGLE_SHOW: 'show.bs.collapse',
			TOGGLE_HIDE: 'hide.bs.collapse',
			NOTIFICATION_CLOSE: '',
			ALERT_CLOSE: 'close.bs.alert'
		}),
		(it = 'body > div.navbar-container'),
		(nt = 'body > div.navbar-container > nav[data-overlay]'),
		(rt = 'nav'),
		(at = '[data-overlay]'),
		(ot = 'img'),
		(st = 'navbar-toggled-show'),
		(lt = (function() {
			function i(t) {
				;(this.ticking = !1),
					(this.element = t),
					(this.navHeight = this.getNavHeight()),
					(this.container = i.getContainerElement()),
					(this.overlayElement = i.getFirstOverlayElement()),
					this.setImageLoadEvent(),
					this.updateValues(),
					this.setResizeEvent(),
					this.setToggleEvent()
			}
			var t = i.prototype
			return (
				(t.getNavHeight = function() {
					this.navHeight = this.element.getBoundingClientRect().height
				}),
				(t.updateValues = function() {
					this.getNavHeight(),
						this.updateContainer(),
						this.updateOverlayElement(),
						Z(this.element).trigger(Z.Event(et.RESIZED))
				}),
				(t.updateContainer = function() {
					this.container &&
						((this.container.style.minHeight = this.navHeight + 'px'),
						(this.container.style.marginBottom = '-' + this.navHeight + 'px'))
				}),
				(t.updateOverlayElement = function() {
					this.overlayElement &&
						this.overlayElement.style.setProperty('padding-top', this.navHeight + 'px', 'important')
				}),
				(t.setResizeEvent = function() {
					var t = this
					Z(window).on(et.RESIZE + ' ' + et.ALERT_CLOSE, function() {
						t.ticking ||
							(window.requestAnimationFrame(function() {
								t.updateValues(), (t.ticking = !1)
							}),
							(t.ticking = !0))
					})
				}),
				(t.setToggleEvent = function() {
					var i = this
					Z(this.container).on(et.TOGGLE_SHOW + ' ' + et.TOGGLE_HIDE, function(t) {
						var e = t.type + '.' + t.namespace === et.TOGGLE_SHOW ? 'add' : 'remove'
						i.element.classList[e](st)
					})
				}),
				(t.setImageLoadEvent = function() {
					var i = this,
						t = this.container.querySelectorAll(ot)
					H.forEach(t, function(t, e) {
						e.addEventListener(et.IMAGE_LOAD, function() {
							return i.updateValues()
						})
					})
				}),
				(i.getContainerElement = function() {
					return this.container || (this.container = document.querySelector(it)), this.container
				}),
				(i.getFirstOverlayElement = function() {
					return document.querySelector(at + ':not(' + rt + ')')
				}),
				(i.jQueryInterface = function() {
					return this.each(function() {
						var t = Z(this),
							e = t.data(J)
						e || ((e = new i(this)), t.data(J, e))
					})
				}),
				W(i, null, [
					{
						key: 'VERSION',
						get: function() {
							return '1.0.0'
						}
					}
				]),
				i
			)
		})()),
		Z(document).ready(function() {
			for (var t = Z.makeArray(Z(nt)), e = t.length; e--; ) {
				var i = Z(t[e])
				lt.jQueryInterface.call(i, i.data())
			}
		}),
		(Z.fn[Y] = lt.jQueryInterface),
		(Z.fn[Y].Constructor = lt),
		(Z.fn[Y].noConflict = function() {
			return (Z.fn[Y] = tt), lt.jQueryInterface
		}),
		lt)
	a.setup('[data-provider],.plyr'),
		(ut = C)(document).on('hide.bs.tab', function(t) {
			ut(ut(t.target).attr('href')).find('[data-toggle="popover"]').popover('hide')
		}),
		ut(document).on('hide.bs.collapse', function(t) {
			ut(t.target).find('[data-toggle="popover"]').popover('hide')
		}),
		o.highlightAll()
	var ft = (function(n) {
			if (void 0 === b)
				throw new Error(
					'mrReadingPosition requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)'
				)
			var t = 'mrReadingPosition',
				r = 'mr.readingPosition',
				e = n.fn[t],
				a = 'reading-position-hidden',
				o = { LOAD_DATA_API: 'load.mr.readingPosition.data-api', RESIZE: 'resize', SCROLL: 'scroll' },
				i = 'progress.reading-position',
				s = '[data-reading-position]',
				l = 'value',
				u = 'max',
				c = 100,
				h = document.querySelectorAll(i),
				d = function() {
					return (
						(0 === document.documentElement.scrollTop
							? document.body.scrollTop
							: document.documentElement.scrollTop) || 0
					)
				},
				f = (function() {
					function i(t) {
						;(this.progressBars = h),
							(this.element = t),
							(this.top = 0),
							(this.bottom = 0),
							(this.height = 0),
							(this.scrollLength = 0),
							(this.articlePositionPercent = 0),
							(this.ticking = !1),
							(this.inView = !1),
							(this.reading = !1),
							this.initWatcher(t),
							this.initBarValues(),
							this.setValue(d()),
							this.setScrollEvent(),
							this.setResizeEvent()
					}
					var t = i.prototype
					return (
						(t.initWatcher = function(t) {
							var e = this,
								i = b.create(t)
							;(this.watcher = i),
								this.recalculateAll(),
								i.stateChange(function() {
									;(e.inView = i.isInViewport),
										(e.reading = i.isAboveViewport && i.isFullyInViewport),
										e.toggleBars(e.reading)
								})
						}),
						(t.initBarValues = function() {
							H.forEach(this.progressBars, function(t, e) {
								e.setAttribute(u, c)
							})
						}),
						(t.setValue = function(t) {
							var i = this
							this.recalculatePercentage(t),
								H.forEach(this.progressBars, function(t, e) {
									e.setAttribute(l, i.articlePositionPercent)
								})
						}),
						(t.toggleBars = function(i) {
							H.forEach(this.progressBars, function(t, e) {
								i ? e.classList.remove(a) : e.classList.add(a)
							})
						}),
						(t.setScrollEvent = function() {
							var e = this
							window.addEventListener(o.SCROLL, function() {
								var t = d()
								!e.ticking &&
									e.inView &&
									e.reading &&
									(window.requestAnimationFrame(function() {
										e.setValue(t), (e.ticking = !1)
									}),
									(e.ticking = !0))
							})
						}),
						(t.setResizeEvent = function() {
							var t = this
							window.addEventListener(o.RESIZE, function() {
								return t.recalculateAll()
							})
						}),
						(t.recalculateAll = function() {
							this.watcher.recalculateLocation(),
								(this.top = this.watcher.top),
								(this.bottom = this.watcher.bottom),
								(this.height = this.watcher.height),
								(this.scrollLength =
									this.height -
									Math.max(document.documentElement.clientHeight, window.innerHeight || 0)),
								this.recalculatePercentage(d())
						}),
						(t.recalculatePercentage = function(t) {
							this.articlePositionPercent = t ? (t - this.top) / this.scrollLength * 100 : 0
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							}
						]),
						i
					)
				})()
			return (
				n(window).on(o.LOAD_DATA_API, function() {
					if (0 !== h.length)
						for (var t = n.makeArray(n(s)), e = t.length; e--; ) {
							var i = n(t[e])
							f.jQueryInterface.call(i, i.data())
						}
				}),
				(n.fn[t] = f.jQueryInterface),
				(n.fn[t].Constructor = f),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = e), f.jQueryInterface
				}),
				f
			)
		})(jQuery),
		mt = new s('a[data-smooth-scroll]', { offset: C('body').attr('data-smooth-scroll-offset') || 0 }),
		pt = (function(s) {
			if (void 0 === b)
				throw new Error('mrSticky requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)')
			var t = 'mrSticky',
				n = 'mr.sticky',
				e = s.fn[t],
				l = 'position-fixed',
				u = 'sticky-bottom',
				r = 'sticky-viewport-bottom',
				a = 'scrolled',
				o = 'min-height',
				c = 'max-width',
				h = 'top',
				d = {
					LOAD_DATA_API: 'load.mr.sticky.data-api',
					WINDOW_RESIZE: 'resize',
					ALERT_CLOSED: 'closed.bs.alert'
				},
				f = 'below-nav',
				m = 'bottom',
				p = 'sticky',
				g = '[data-sticky]',
				y = 'body > div.navbar-container [data-sticky="top"]',
				v = '.alert-dismissible',
				w = (function() {
					function i(t) {
						var e = s(t),
							i = e.data(p),
							n = e.closest('section') || null
						;(this.element = t),
							(this.stickBelowNav = i === f),
							(this.stickBottom = i === m),
							(this.stickyUntil = n),
							this.updateNavProperties(),
							(this.isNavElement = e.is(this.navElement)),
							this.initWatcher(e),
							this.updateCss(),
							this.setResizeEvent(),
							this.onWatcherChange(e),
							(this.ticking = !1)
					}
					var t = i.prototype
					return (
						(t.initWatcher = function(t) {
							var e = this,
								i = s(t),
								n = !this.isNavElement,
								r = this.stickBelowNav && this.navIsSticky && n ? { top: this.navHeight } : 0
							r = this.stickBottom && n ? { bottom: -i.outerHeight } : r
							var a = b.create(t, r)
							a.lock()
							var o =
								null !== this.stickyUntil
									? b.create(this.stickyUntil, { bottom: -(a.height + r.top) })
									: null
							;(this.watcher = a),
								(this.untilWatcher = o),
								(this.navHeight = this.navHeight),
								this.isNavElement && 0 === a.top && !this.navIsAbsolute && i.addClass(l),
								a.stateChange(function() {
									e.onWatcherChange(i)
								}),
								null !== o &&
									(o.exitViewport(function() {
										i.addClass(u)
									}),
									o.enterViewport(function() {
										i.removeClass(u)
									}))
						}),
						(t.onWatcherChange = function(t) {
							t.toggleClass(
								l,
								this.watcher.isAboveViewport ||
									(!this.navIsAbsolute &&
										!this.stickBottom &&
										this.isNavElement &&
										0 === this.watcher.top)
							),
								t.toggleClass(
									a,
									this.watcher.isAboveViewport && this.isNavElement && !this.stickBottom
								),
								t.toggleClass(
									r,
									(this.watcher.isFullyInViewport || this.watcher.isAboveViewport) && this.stickBottom
								),
								this.stickBottom ||
									t.css(
										h,
										this.watcher.isAboveViewport && this.navIsSticky && this.stickBelowNav
											? this.navHeight
											: 0
									)
						}),
						(t.setResizeEvent = function() {
							var t = this
							s(v).on(d.ALERT_CLOSED, function() {
								t.watcher.isInViewport &&
									(t.watcher.unlock(), t.watcher.recalculateLocation(), t.watcher.lock()),
									t.onResize()
							}),
								s(window).on(d.WINDOW_RESIZE, function() {
									t.onResize()
								})
						}),
						(t.onResize = function() {
							var t = this
							this.ticking ||
								(window.requestAnimationFrame(function() {
									t.updateCss(), (t.ticking = !1)
								}),
								(this.ticking = !0))
						}),
						(t.updateCss = function() {
							var t = s(this.element)
							t.css(c, t.parent().width()), this.updateNavProperties()
							var e = t.outerHeight(),
								i = !this.isNavElement
							;((!this.navIsAbsolute && this.isNavElement) || i) && t.parent().css(o, e),
								this.navIsSticky && i && t.css(o, e)
						}),
						(t.updateNavProperties = function() {
							var t = this.navElement || s(y).first()
							;(this.navElement = t),
								(this.navHeight = t.outerHeight()),
								(this.navIsAbsolute = 'absolute' === t.css('position')),
								(this.navIsSticky = 0 < t.length)
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = s(this),
									e = t.data(n)
								e || ((e = new i(this)), t.data(n, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.3.0'
								}
							}
						]),
						i
					)
				})()
			return (
				s(window).on(d.LOAD_DATA_API, function() {
					for (var t = s.makeArray(s(g)), e = t.length; e--; ) {
						var i = s(t[e])
						w.jQueryInterface.call(i, i.data())
					}
				}),
				(s.fn[t] = w.jQueryInterface),
				(s.fn[t].Constructor = w),
				(s.fn[t].noConflict = function() {
					return (s.fn[t] = e), w.jQueryInterface
				}),
				w
			)
		})(C),
		gt = (function(c) {
			if (void 0 === A)
				throw new Error(
					'mrTwitterFetcher requires twitterFetcher.js (https://github.com/jasonmayes/Twitter-Post-Fetcher)'
				)
			var t = 'mrTwitterFetcher',
				n = 'mr.twitterFetcher',
				e = '.' + n,
				i = c.fn[t],
				h = {
					LOAD_DATA_API: 'load' + e + '.data-api',
					RESIZE: 'resize' + e,
					READY: 'ready' + e,
					APPEND: 'tweetAppended' + e
				},
				r = '[data-twitter-fetcher]',
				a = 'data-twitter',
				d = '.user',
				f = '.tweet',
				m = '.timePosted',
				p = '.interact',
				o = 'twitter',
				s = 6,
				l = 'username',
				u = 'max-tweets',
				g = 'flickity',
				y = 'twitterFlickity',
				v = 'isotope',
				w = (function() {
					function i(t) {
						var e = c(t)
						;(this.element = t),
							(this.element.id = 'tweets-' + new Date().getTime()),
							(this.username = e.data(l).replace('@', '') || o),
							(this.maxTweets = parseInt(e.data(u), 10) || s),
							(this.slider = null !== this.element.getAttribute(a + '-' + g)),
							(this.slider = this.slider && 'object' == typeof e.data(y) ? e.data(y) : this.slider),
							(this.isotope = null !== this.element.getAttribute(a + '-' + v)),
							this.initTwitterFeed()
					}
					return (
						(i.prototype.initTwitterFeed = function() {
							var u = this
							;(this.config = {
								profile: { screenName: this.username },
								domId: this.element.id,
								maxTweets: this.maxTweets,
								enableLinks: !0,
								showUser: !0,
								showTime: !0,
								dateFunction: '',
								showRetweet: !1,
								customCallback: function(t) {
									for (
										var e = c(u.element), i = e.children().first().detach(), n = t.length, r = 0;
										r < n;

									) {
										var a = c('<div>').append(c(t[r])),
											o = i.clone()
										o.find(f).html(a.find(f).html()),
											o.find(d).html(a.find(d).html()),
											o.find(m).html(a.find(m).html()),
											o.find(p).html(a.find(p).html()),
											e.append(o),
											(r += 1)
										var s = c.Event(h.APPEND)
										;(s.appendedElement = o), (s.mrTwitterFetcher = u), c(u.element).trigger(s)
									}
									if (!0 === u.slider || 'object' == typeof u.slider) {
										if (void 0 === E)
											throw new Error(
												'mrTwitterFetcher requires flickity.js (https://github.com/metafizzy/flickity)'
											)
										e.data('flickity', new E(u.element, u.slider))
									} else if (!0 === u.isotope) {
										if ('undefined' == typeof Isotope)
											throw new Error(
												'mrTwitterFetcher requires isotope.js (https://github.com/metafizzy/isotope)'
											)
										c(u.element).mrIsotope()
									}
									var l = c.Event(h.READY)
									;(l.mrTwitterFetcher = u), c(u.element).trigger(l)
								}
							}),
								A.fetch(this.config)
						}),
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = c(this),
									e = t.data(n)
								e || ((e = new i(this)), t.data(n, e))
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							}
						]),
						i
					)
				})()
			return (
				c(window).on(h.LOAD_DATA_API, function() {
					for (var t = c.makeArray(c(r)), e = t.length; e--; ) {
						var i = c(t[e])
						w.jQueryInterface.call(i, i.data())
					}
				}),
				(c.fn[t] = w.jQueryInterface),
				(c.fn[t].Constructor = w),
				(c.fn[t].noConflict = function() {
					return (c.fn[t] = i), w.jQueryInterface
				}),
				w
			)
		})(C),
		yt = (function(n) {
			if ('function' != typeof l)
				throw new Error('mrTypedText requires typed.js (https://github.com/mattboldt/typed.js/)')
			if (void 0 === b)
				throw new Error('mrTypedText requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)')
			var t = 'mrTypedText',
				r = 'mr.typedText',
				e = n.fn[t],
				i = { LOAD_DATA_API: 'load.mr.typedText.data-api' },
				a = '[data-typed-text]',
				o = (function() {
					function i(t) {
						this.element = t
						var e = n(t)
						;(this.Typed = new l(this.element, e.data())), this.initWatcher(t)
					}
					return (
						(i.jQueryInterface = function() {
							return this.each(function() {
								var t = n(this),
									e = t.data(r)
								e || ((e = new i(this)), t.data(r, e))
							})
						}),
						(i.prototype.initWatcher = function(t) {
							var e = this,
								i = b.create(t)
							i.stateChange(function() {
								i.isInViewport ? e.Typed.start() : e.Typed.stop()
							})
						}),
						W(i, null, [
							{
								key: 'VERSION',
								get: function() {
									return '1.0.0'
								}
							}
						]),
						i
					)
				})()
			return (
				n(window).on(i.LOAD_DATA_API, function() {
					for (var t = n.makeArray(n(a)), e = t.length; e--; ) {
						var i = n(t[e])
						o.jQueryInterface.call(i, i.data())
					}
				}),
				(n.fn[t] = o.jQueryInterface),
				(n.fn[t].Constructor = o),
				(n.fn[t].noConflict = function() {
					return (n.fn[t] = e), o.jQueryInterface
				}),
				o
			)
		})(C)
	!(function() {
		if ('undefined' == typeof $)
			throw new TypeError('Medium Rare JavaScript requires jQuery. jQuery must be included before theme.js.')
	})(),
		(t.mrCountdown = M),
		(t.mrCountup = q),
		(t.mrDropdownGrid = Q),
		(t.mrFormEmail = U),
		(t.mrIonRangeSlider = G),
		(t.mrIsotope = K),
		(t.mrMaps = ht),
		(t.mrMapsStyle = ct),
		(t.mrOverlayNav = dt),
		(t.mrReadingPosition = ft),
		(t.mrSmoothScroll = mt),
		(t.mrSticky = pt),
		(t.mrTwitterFetcher = gt),
		(t.mrTypedText = yt),
		(t.mrUtil = H),
		Object.defineProperty(t, '__esModule', { value: !0 })
})
//# sourceMappingURL=theme.js.map
