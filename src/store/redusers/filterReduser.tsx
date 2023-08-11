import { createSlice } from '@reduxjs/toolkit';

interface filter {
  Expeditions: boolean;
  EverydayUse: boolean;
  ExtremeWeather: boolean;
  FamiliesGroups: boolean;
  SportsActivities: boolean;
  Travel: boolean;
  TrekkingBikepacking: boolean;
  BeaniesCaps: boolean;
  Campingfurniture: boolean;
  Hoodies: boolean;
  WaistPacks: boolean;
  Hygiene: boolean;
  Cooking: boolean;
  WashBags: boolean;
  Longsleeves: boolean;
  KnivesEquipment: boolean;
  Organizer: boolean;
  Sweater: boolean;
  Backpacks: boolean;
  Sleeping: boolean;
  Tshirts: boolean;
  Tarps: boolean;
  TentSpareParts: boolean;
  Tents: boolean;
  Accessories: boolean;
  L_1_4: boolean;
  L_5_18: boolean;
  L_19_35: boolean;
  People1_2: boolean;
  People2_3: boolean;
  People3_4: boolean;
  Morethan35L: boolean;
  Groups: boolean;
  Season3: boolean;
  Season4: boolean;
  CarryEssentials: boolean;
  Dawn: boolean;
  Dusk: boolean;
  MonolithSeries: boolean;
  MotionSeries: boolean;
  TransitLine: boolean;
}

const initialState: filter = {
  Expeditions: false,
  EverydayUse: false,
  ExtremeWeather: false,
  FamiliesGroups: false,
  SportsActivities: false,
  Travel: false,
  TrekkingBikepacking: false,
  BeaniesCaps: false,
  Campingfurniture: false,
  Hoodies: false,
  WaistPacks: false,
  Hygiene: false,
  Cooking: false,
  WashBags: false,
  Longsleeves: false,
  KnivesEquipment: false,
  Organizer: false,
  Sweater: false,
  Backpacks: false,
  Sleeping: false,
  Tshirts: false,
  Tarps: false,
  TentSpareParts: false,
  Tents: false,
  Accessories: false,
  L_1_4: false,
  L_5_18: false,
  L_19_35: false,
  People1_2: false,
  People2_3: false,
  People3_4: false,
  Morethan35L: false,
  Groups: false,
  Season3: false,
  Season4: false,
  CarryEssentials: false,
  Dawn: false,
  Dusk: false,
  MonolithSeries: false,
  MotionSeries: false,
  TransitLine: false,
};

export const Filter = createSlice({
  name: 'Zelte',
  initialState,
  reducers: {
    expeditions: (state) => {
      state.Expeditions = !state.Expeditions;
    },
    extremeWeather: (state) => {
      state.ExtremeWeather = !state.ExtremeWeather;
    },
    familiesGroups: (state) => {
      state.FamiliesGroups = !state.FamiliesGroups;
    },
    trekkingBikepacking: (state) => {
      state.TrekkingBikepacking = !state.TrekkingBikepacking;
    },
    tentSpareParts: (state) => {
      state.TentSpareParts = !state.TentSpareParts;
    },
    tents: (state) => {
      state.Tents = !state.Tents;
    },
    accessories: (state) => {
      state.Accessories = !state.Accessories;
    },
    people1_2: (state) => {
      state.People1_2 = !state.People1_2;
    },
    people2_3: (state) => {
      state.People2_3 = !state.People2_3;
    },
    people3_4: (state) => {
      state.People3_4 = !state.People3_4;
    },
    groups: (state) => {
      state.Groups = !state.Groups;
    },
    season3: (state) => {
      state.Season3 = !state.Season3;
    },
    season4: (state) => {
      state.Season4 = !state.Season4;
    },

    // BAGS

    everydayUse: (state) => {
      state.EverydayUse = !state.EverydayUse;
    },
    sportsActivities: (state) => {
      state.SportsActivities = !state.SportsActivities;
    },
    travel: (state) => {
      state.Travel = !state.Travel;
    },
    waistPacks: (state) => {
      state.WaistPacks = !state.WaistPacks;
    },
    washBags: (state) => {
      state.WashBags = !state.WashBags;
    },
    organizer: (state) => {
      state.Organizer = !state.Organizer;
    },
    backpacks: (state) => {
      state.Backpacks = !state.Backpacks;
    },
    L1_4: (state) => {
      state.L_1_4 = !state.L_1_4;
    },
    L5_18: (state) => {
      state.L_5_18 = !state.L_5_18;
    },
    L19_35: (state) => {
      state.L_19_35 = !state.L_19_35;
    },
    morethan35L: (state) => {
      state.Morethan35L = !state.Morethan35L;
    },
    carryEssentials: (state) => {
      state.CarryEssentials = !state.CarryEssentials;
    },
    monolithSeries: (state) => {
      state.MonolithSeries = !state.MonolithSeries;
    },
    motionSeries: (state) => {
      state.MotionSeries = !state.MotionSeries;
    },
    transitLine: (state) => {
      state.TransitLine = !state.TransitLine;
    },
  },
});

export const {
  expeditions,
  extremeWeather,
  familiesGroups,
  trekkingBikepacking,
  tentSpareParts,
  tents,
  accessories,
  people1_2,
  people2_3,
  people3_4,
  groups,
  season3,
  season4,
  everydayUse,
  sportsActivities,
  travel,
  waistPacks,
  washBags,
  organizer,
  backpacks,
  L1_4,
  L5_18,
  L19_35,
  morethan35L,
  carryEssentials,
  monolithSeries,
  motionSeries,
  transitLine,
} = Filter.actions;

export default Filter.reducer;
