// app.js

new Vue({
    // target div w/ #events
    el: '#events',
    // register any values or collections that hold data
    data: {
        event: { name:'', description: '', date: ''},
        events: []
    },

    // anything within will run on application load
    ready: function() {
        this.fetchEvents();
    },

    // methods we want to use, are registered here
    methods: {
        fetchEvents: function() {
            var events = [
                {
                    id: 1,
                    name: 'TIFF',
                    description: 'Toronto International Film Festival',
                    date: '2015-09-10'
                },
                {
                    id: 2,
                    name: 'BOB',
                    description: 'Blast Off Music Festival',
                    date: '2015-11-21'
                },
                {
                    id: 3,
                    name: 'LARRY',
                    description: 'Travel Agent Convention',
                    date: '2015-09-10'
                }
            ];
            // $set is a convenience method provided by Vue
            // similar to pushing data into an array
            this.$set('events', events);
        },

        addEvent: function() {
            if(this.event.name) {
                this.events.push(this.event);
                this.event = { name: '', description: '', date: ''};
            }
        },
        deleteEvent: function(index) {
            this.events.splice(index, 1);
        }
    }
});