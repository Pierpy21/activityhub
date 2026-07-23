export interface Activity {
  time: string;
  title: string;
  location: string;
  type: 'meal' | 'transport' | 'excursion' | 'class' | 'night' | 'free' | 'info';
  notes?: string;
}

export interface DaySchedule {
  id: number;
  date: string;
  dayName: string;
  shortDate: string;
  type: 'Arrivals' | 'Excursion' | 'Classes' | 'Departures';
  highlight: string;
  activities: Activity[];
}

export const scheduleData: DaySchedule[] = [
  {
    id: 1,
    date: "2026-07-22",
    dayName: "Wednesday",
    shortDate: "22 Jul",
    type: "Arrivals",
    highlight: "ORD Arrivals & Campus Welcome",
    activities: [
      { time: "TBD", title: "Group Arrivals", location: "O'Hare Airport (ORD)", type: "transport" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "Evening", title: "Campus Activities", location: "DePaul Campus", type: "night" }
    ]
  },
  {
    id: 2,
    date: "2026-07-23",
    dayName: "Thursday",
    shortDate: "23 Jul",
    type: "Excursion",
    highlight: "Skydeck & Dinner @ Giordano's",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "Morning", title: "Welcome Speech", location: "Room 120B", type: "info" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "2:15pm", title: "Take Brown Line (Loop)", location: "Quincy Station", type: "transport", notes: "Take the Brown Line (Loop) to Quincy Station." },
      { time: "2:45pm", title: "Federal Reserve Museum", location: "LaSalle St & Jackson Blvd", type: "excursion", notes: "Walk to the Federal Reserve Museum located on the corner intersection of LaSelle St & Jackson Blvd." },
      { time: "3:30pm", title: "Walk to Union Station", location: "West of Jackson Blvd", type: "transport", notes: "Walk to Union Station going west of Jackson Blvd." },
      { time: "4:00pm", title: "Skydeck Entrance", location: "Sears Tower", type: "excursion", notes: "Walk to the Sears Tower for Skydeck Entrance." },
      { time: "5:30pm - 6:45pm", title: "Walk to Restaurant", location: "Wabash Ave & Superior St", type: "transport", notes: "Walk East of Jackson Blvd and make a left on Wabash Ave. Continue to walk up north and make a right on Superior St. Walking will take 40-50 minutes total." },
      { time: "7:00pm", title: "Dinner Reservation", location: "Giordano's (Rush St & Superior St)", type: "meal" }
    ]
  },
  {
    id: 3,
    date: "2026-07-24",
    dayName: "Friday",
    shortDate: "24 Jul",
    type: "Classes",
    highlight: "Classes & Sport Night",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "08:30am - 12:15pm", title: "Morning Classes", location: "Campus", type: "class" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm - 5:15pm", title: "Afternoon Classes", location: "Campus", type: "class" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "8:00pm - 11:00pm", title: "SPORT NIGHT", location: "Ray Meyer Fitness and Recreation Center", type: "night" }
    ]
  },
  {
    id: 4,
    date: "2026-07-25",
    dayName: "Saturday",
    shortDate: "25 Jul",
    type: "Excursion",
    highlight: "Griffin Museum, U of Chicago & Fireworks",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:15am", title: "Take Red Line (Loop)", location: "Jackson Station", type: "transport", notes: "Take the Red Line (Loop) to Jackson Station." },
      { time: "9:45am", title: "Take Bus 6 (South Shore)", location: "Hyde Park & 56th St Stop", type: "transport", notes: "Take 6 Bus (South Shore) to Hyde Park & 56th St Stop." },
      { time: "10:00am - 1:00pm", title: "Griffin Museum Entrance", location: "Hyde Park", type: "excursion" },
      { time: "1:00pm", title: "Lunch Break (Box Lunch)", location: "Hyde Park Area", type: "meal" },
      { time: "2:00pm - 4:00pm", title: "Obama Presidential Center & Jackson Park", location: "Hyde Park", type: "excursion" },
      { time: "4:00pm - 5:00pm", title: "University of Chicago", location: "U of Chicago Campus", type: "excursion", notes: "Both the university and presidential center close at 5pm." },
      { time: "5:15pm", title: "Take Bus 2 (Navy Pier)", location: "Illinois & Lake Shore Stop", type: "transport", notes: "Bus 2 (Navy Pier) from Stoney Island & 57th Drive stop to Illinois & Lake Shore stop." },
      { time: "6:30pm - 9:00pm", title: "Dinner Break & Free Time", location: "Navy Pier Area", type: "free" },
      { time: "10:00pm", title: "Fireworks Show", location: "Navy Pier", type: "night" },
      { time: "10:30pm", title: "Return to Campus", location: "Grand Station to Fullerton", type: "transport", notes: "Walk Westward to Grand station and take the Red Line to Fullerton station." }
    ]
  },
  {
    id: 5,
    date: "2026-07-26",
    dayName: "Sunday",
    shortDate: "26 Jul",
    type: "Excursion",
    highlight: "Art Institute, Millennium Park & Mag Mile",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:15am", title: "Take Red Line (Loop)", location: "Lake Station", type: "transport", notes: "Take the Red Line (Loop) to Lake Station." },
      { time: "9:45am", title: "Millennium Park (The Bean)", location: "Millennium Park", type: "excursion" },
      { time: "10:30am", title: "Cultural Center Entrance", location: "Michigan Ave", type: "excursion" },
      { time: "11:30am - 2:00pm", title: "Art Institute Entrance", location: "Michigan Ave", type: "excursion" },
      { time: "2:30pm", title: "Lunch Break (Box Lunch)", location: "Buckingham Fountain", type: "meal" },
      { time: "4:00pm", title: "Maggie Daley Park & Cancer Survivor's Garden", location: "Grant Park Area", type: "excursion" },
      { time: "4:30pm", title: "Walk alongside Lakefront", location: "Lakefront", type: "excursion" },
      { time: "5:30pm - 9:00pm", title: "Dinner Break & Free Time", location: "Magnificent Mile", type: "free", notes: "Free time on Michigan Ave & Grant Park." },
      { time: "9:00pm", title: "Return to Campus", location: "Monroe/Lake/Grand to Fullerton", type: "transport", notes: "Take the Red Line back to Fullerton station from the closest station: (Monroe/Lake/Grand)." }
    ]
  },
  {
    id: 6,
    date: "2026-07-27",
    dayName: "Monday",
    shortDate: "27 Jul",
    type: "Classes",
    highlight: "Classes & Karaoke Night",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "09:00am - 12:15pm", title: "Morning Classes", location: "Campus", type: "class" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm - 5:15pm", title: "Afternoon Classes", location: "Campus", type: "class" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "8:00pm - 11:00pm", title: "KARAOKE & JUST DANCE NIGHT", location: "Room 120B", type: "night" }
    ]
  },
  {
    id: 7,
    date: "2026-07-28",
    dayName: "Tuesday",
    shortDate: "28 Jul",
    type: "Excursion",
    highlight: "360 Chicago, Riverwalk & Chinatown",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am - 9:30am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:30am - 10:00am", title: "Take Red Line (Loop)", location: "Chicago Station", type: "transport", notes: "Take the Red Line (Loop) to Chicago Station." },
      { time: "10:00am - 11:00am", title: "360 Chicago Entrance", location: "Hancock Tower", type: "excursion" },
      { time: "11:00am - 4:00pm", title: "Lunch Break & Free Time", location: "Water Tower Place", type: "free" },
      { time: "4:00pm - 5:30pm", title: "Chicago Riverwalk", location: "Wacker Drive", type: "excursion", notes: "Walk south of Michigan Ave and cross the river to Wacker Drive. Make a right to the stairs before the intersection... Walk westward toward the Trump Tower." },
      { time: "5:30pm", title: "Take Red Line to Chinatown", location: "Lake Station to Cermak", type: "transport", notes: "Walk from the west end of the riverwalk to the Red Line's Lake station by walking eastward on Lake Street. Get off at Cermak-Chinatown station." },
      { time: "6:00pm - 9:00pm", title: "Dinner Break & Free Time", location: "Chinatown", type: "meal" },
      { time: "9:00pm", title: "Return to Campus", location: "Cermak to Fullerton Station", type: "transport", notes: "Take the Red Line (Howard) back to Fullerton station from the Cermak station." }
    ]
  },
  {
    id: 8,
    date: "2026-07-29",
    dayName: "Wednesday",
    shortDate: "29 Jul",
    type: "Classes",
    highlight: "Classes & Sport Night",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "09:00am - 12:15pm", title: "Morning Classes", location: "Campus", type: "class" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm - 5:15pm", title: "Afternoon Classes", location: "Campus", type: "class" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "8:00pm - 11:00pm", title: "SPORT NIGHT", location: "Ray Meyer Fitness and Recreation Center", type: "night" }
    ]
  },
  {
    id: 9,
    date: "2026-07-30",
    dayName: "Thursday",
    shortDate: "30 Jul",
    type: "Excursion",
    highlight: "Shoreline Cruise & Navy Pier",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:15am", title: "Take Red Line (Loop)", location: "Grand Station", type: "transport", notes: "Take the Red Line (Loop) to Grand Station." },
      { time: "9:45am", title: "Walk to Navy Pier", location: "East of Grand Ave", type: "transport", notes: "Walk east of Grand Ave to Navy Pier." },
      { time: "10:30am", title: "Shoreline Cruise", location: "Navy Pier", type: "excursion" },
      { time: "12:00pm - 4:30pm", title: "Lunch Break & Free Time", location: "Navy Pier", type: "free" },
      { time: "5:00pm - 9:00pm", title: "Rush St Shopping & Dinner", location: "Rush St Area", type: "free" },
      { time: "9:00pm", title: "Return to Campus", location: "Grand/Chicago Ave to Fullerton", type: "transport", notes: "Walk west to Grand or Chicago Avenue station whichever is closest. Take the Red Line to Fullerton Station." }
    ]
  },
  {
    id: 10,
    date: "2026-07-31",
    dayName: "Friday",
    shortDate: "31 Jul",
    type: "Classes",
    highlight: "Classes & Karaoke Night",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "09:00am - 12:15pm", title: "Morning Classes", location: "Campus", type: "class" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm - 5:15pm", title: "Afternoon Classes", location: "Campus", type: "class" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "8:00pm - 10:00pm", title: "KARAOKE & JUST DANCE NIGHT", location: "Room 120B", type: "night" }
    ]
  },
  {
    id: 11,
    date: "2026-08-01",
    dayName: "Saturday",
    shortDate: "1 Aug",
    type: "Excursion",
    highlight: "North Avenue Beach Day",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:15am", title: "Take Brown Line & Walk", location: "Sedgwick Station", type: "transport", notes: "Take the Brown Line (Loop) to Sedgwick Station. Walk eastward on North Ave. Make a left on Clark St and then a right on LaSalle Drive to reach the beach." },
      { time: "10:00am - 4:00pm", title: "Beach Day", location: "North Avenue Beach", type: "excursion" },
      { time: "4:00pm", title: "Return to Campus", location: "Walk to Sedgwick Station", type: "transport", notes: "Walk toward LaSelle Drive and continue westward to North Ave to return to the Brown Line station for Fullerton." },
      { time: "6:30pm", title: "Dinner on Campus", location: "Campus", type: "meal" },
      { time: "8:00pm", title: "SPORT NIGHT", location: "Ray Meyer Fitness and Recreation Center", type: "night" }
    ]
  },
  {
    id: 12,
    date: "2026-08-02",
    dayName: "Sunday",
    shortDate: "2 Aug",
    type: "Excursion",
    highlight: "Field Museum & Lincoln Park Zoo",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast & Box Lunch Pickup", location: "Campus", type: "meal" },
      { time: "9:00am", title: "Meet Activity Leader", location: "The Quad", type: "info" },
      { time: "9:15am", title: "Take Red Line (Loop)", location: "Roosevelt Station", type: "transport", notes: "Take the Red Line (Loop) to Roosevelt Station." },
      { time: "10:00am", title: "Field Museum Entrance", location: "Museum Campus", type: "excursion" },
      { time: "1:00pm", title: "Museum Campus Free Time", location: "Museum Campus", type: "free" },
      { time: "2:30pm", title: "Take Red Line & Walk", location: "Clark/Division Station", type: "transport", notes: "Take the Red Line to Clark/Division station. Walk north on Clark St through LaSalle Drive toward the Lincoln Park Zoo." },
      { time: "3:30pm", title: "Lincoln Park Zoo Entrance", location: "Lincoln Park", type: "excursion" },
      { time: "6:30pm", title: "Dinner Break & Free Time", location: "Fullerton/Halsted/Lincoln Ave", type: "meal" },
      { time: "8:00pm", title: "Walk back to Campus", location: "Campus", type: "transport" }
    ]
  },
  {
    id: 13,
    date: "2026-08-03",
    dayName: "Monday",
    shortDate: "3 Aug",
    type: "Classes",
    highlight: "Classes & Oscar Night",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "09:00am - 12:15pm", title: "Morning Classes", location: "Campus", type: "class" },
      { time: "12:45pm - 13:30pm", title: "Lunch", location: "Campus", type: "meal" },
      { time: "2:00pm - 5:15pm", title: "Afternoon Classes", location: "Campus", type: "class" },
      { time: "6:45pm - 7:30pm", title: "Dinner", location: "Campus", type: "meal" },
      { time: "8:00pm - 10:00pm", title: "OSCAR NIGHT", location: "Room 120B", type: "night" }
    ]
  },
  {
    id: 14,
    date: "2026-08-04",
    dayName: "Tuesday",
    shortDate: "4 Aug",
    type: "Departures",
    highlight: "ORD Departures",
    activities: [
      { time: "07:30am - 08:15am", title: "Breakfast", location: "Campus", type: "meal" },
      { time: "Morning", title: "Free Time", location: "Campus", type: "free" },
      { time: "TBD", title: "ORD Departures", location: "O'Hare Airport (ORD)", type: "transport" }
    ]
  }
];