(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[288],{"1dc2":function(e,n,a){"use strict";a.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="row justify-center items-center">\n      <q-btn flat dense label="Prev" @click="calendarPrev" />\n      <q-separator vertical />\n      <q-btn flat dense label="Next" @click="calendarNext" />\n    </div>\n    <q-separator />\n    <div class="row justify-center full-width">\n      <q-calendar\n        ref="calendar"\n        v-model="selectedDate"\n        view="day-resource"\n        :resources="resources"\n        :resource-height="50"\n        locale="en-us"\n        sticky\n        animated\n        transition-prev="slide-right"\n        transition-next="slide-left"\n        style="height: 200px; max-width: 800px; width: 100%;"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'2019-04-01\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  },\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    }\n  }\n}\n<\/script>\n'}}]);