(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[318],{6434:function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="row justify-center items-center">\n      <q-btn flat dense label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn flat dense label="Next" @click="calendarNext" />\n    </div>\n    <q-separator />\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="week"\n      :disabled-before="disabledBefore"\n      :disabled-after="disabledAfter"\n      locale="en-us"\n      animated\n      transition-prev="slide-right"\n      transition-next="slide-left"\n      style="height: 400px;"\n    />\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nconst CURRENT_DAY = new Date()\n\nfunction getCurrentDay (day) {\n  const newDay = new Date(CURRENT_DAY)\n  newDay.setDate(day)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: getCurrentDay(CURRENT_DAY.getDate()),\n      today: getCurrentDay(CURRENT_DAY.getDate())\n    }\n  },\n  computed: {\n    disabledBefore () {\n      // find the monday of this week\n      if (this.today) {\n        const monday = 1 // day of week (ts.weekday)\n        let ts = QCalendar.parseTimestamp(this.today)\n        ts = QCalendar.addToDate(ts, { day: (ts.weekday > monday ? -(ts.weekday - monday) : (monday - ts.weekday)) })\n        return ts.date\n      }\n      return undefined\n    },\n\n    disabledAfter () {\n      // find the 1st day of the next month\n      if (this.today) {\n        const friday = 5 // day of week (ts.weekday)\n        let ts = QCalendar.parseTimestamp(this.today)\n        // get days in month\n        ts = QCalendar.addToDate(ts, { day: (ts.weekday > friday ? -(ts.weekday - friday) : (friday - ts.weekday)) })\n        return ts.date\n      }\n      return undefined\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    }\n  }\n}\n<\/script>\n'}}]);