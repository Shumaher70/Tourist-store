import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface filter {
   Expeditions: boolean;
   EverydayUse: boolean;
   ExtremeWeather: boolean;
   FamiliesGroups: boolean;
   SportsActivities: boolean;
   Travel: boolean;
   TrekkingBikepacking: boolean;
   BeaniesCaps: boolean;
   Hoodies: boolean;
   WaistPacks: boolean;
   WashBags: boolean;
   Longsleeves: boolean;
   Organizer: boolean;
   Sweater: boolean;
   Backpacks: boolean;
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
   AeroPress: boolean;
   BasicNature: boolean;
   Blaek: boolean;
   Coghlans: boolean;
   DrBronners: boolean;
   Eoe: boolean;
   Fiskars: boolean;
   Heimplanet: boolean;
   Campingfurniture: boolean;
   Hygiene: boolean;
   Cooking: boolean;
   KnivesEquipment: boolean;
   Sleeping: boolean;
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
   Hoodies: false,
   WaistPacks: false,
   WashBags: false,
   Longsleeves: false,
   Organizer: false,
   Sweater: false,
   Backpacks: false,
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
   AeroPress: false,
   BasicNature: false,
   Blaek: false,
   Coghlans: false,
   DrBronners: false,
   Eoe: false,
   Fiskars: false,
   Heimplanet: false,
   Campingfurniture: false,
   Hygiene: false,
   Cooking: false,
   KnivesEquipment: false,
   Sleeping: false,
};

export const Filter = createSlice({
   name: 'Zelte',
   initialState,
   reducers: {
      expeditions: (state, action: PayloadAction<boolean>) => {
         state.Expeditions = action.payload;
      },
      extremeWeather: (state, action: PayloadAction<boolean>) => {
         state.ExtremeWeather = action.payload;
      },
      familiesGroups: (state, action: PayloadAction<boolean>) => {
         state.FamiliesGroups = action.payload;
      },
      trekkingBikepacking: (state, action: PayloadAction<boolean>) => {
         state.TrekkingBikepacking = action.payload;
      },
      tentSpareParts: (state, action: PayloadAction<boolean>) => {
         state.TentSpareParts = action.payload;
      },
      tents: (state, action: PayloadAction<boolean>) => {
         state.Tents = action.payload;
      },
      accessories: (state, action: PayloadAction<boolean>) => {
         state.Accessories = action.payload;
      },
      people1_2: (state, action: PayloadAction<boolean>) => {
         state.People1_2 = action.payload;
      },
      people2_3: (state, action: PayloadAction<boolean>) => {
         state.People2_3 = action.payload;
      },
      people3_4: (state, action: PayloadAction<boolean>) => {
         state.People3_4 = action.payload;
      },
      groups: (state, action: PayloadAction<boolean>) => {
         state.Groups = action.payload;
      },
      season3: (state, action: PayloadAction<boolean>) => {
         state.Season3 = action.payload;
      },
      season4: (state, action: PayloadAction<boolean>) => {
         state.Season4 = action.payload;
      },

      // BAGS

      everydayUse: (state, action: PayloadAction<boolean>) => {
         state.EverydayUse = action.payload;
      },
      sportsActivities: (state, action: PayloadAction<boolean>) => {
         state.SportsActivities = action.payload;
      },
      travel: (state, action: PayloadAction<boolean>) => {
         state.Travel = action.payload;
      },
      waistPacks: (state, action: PayloadAction<boolean>) => {
         state.WaistPacks = action.payload;
      },
      washBags: (state, action: PayloadAction<boolean>) => {
         state.WashBags = action.payload;
      },
      organizer: (state, action: PayloadAction<boolean>) => {
         state.Organizer = action.payload;
      },
      backpacks: (state, action: PayloadAction<boolean>) => {
         state.Backpacks = action.payload;
      },
      L1_4: (state, action: PayloadAction<boolean>) => {
         state.L_1_4 = action.payload;
      },
      L5_18: (state, action: PayloadAction<boolean>) => {
         state.L_5_18 = action.payload;
      },
      L19_35: (state, action: PayloadAction<boolean>) => {
         state.L_19_35 = action.payload;
      },
      morethan35L: (state, action: PayloadAction<boolean>) => {
         state.Morethan35L = action.payload;
      },
      carryEssentials: (state, action: PayloadAction<boolean>) => {
         state.CarryEssentials = action.payload;
      },
      monolithSeries: (state, action: PayloadAction<boolean>) => {
         state.MonolithSeries = action.payload;
      },
      motionSeries: (state, action: PayloadAction<boolean>) => {
         state.MotionSeries = action.payload;
      },
      transitLine: (state, action: PayloadAction<boolean>) => {
         state.TransitLine = action.payload;
      },

      // HPT
      campingfurniture: (state, action: PayloadAction<boolean>) => {
         state.Campingfurniture = action.payload;
      },
      aeroPress: (state, action: PayloadAction<boolean>) => {
         state.AeroPress = action.payload;
      },
      basicNature: (state, action: PayloadAction<boolean>) => {
         state.BasicNature = action.payload;
      },
      blaek: (state, action: PayloadAction<boolean>) => {
         state.Blaek = action.payload;
      },
      coghlans: (state, action: PayloadAction<boolean>) => {
         state.Coghlans = action.payload;
      },
      drBronners: (state, action: PayloadAction<boolean>) => {
         state.DrBronners = action.payload;
      },
      eoe: (state, action: PayloadAction<boolean>) => {
         state.Eoe = action.payload;
      },
      fiskars: (state, action: PayloadAction<boolean>) => {
         state.Fiskars = action.payload;
      },
      heimplanet: (state, action: PayloadAction<boolean>) => {
         state.Heimplanet = action.payload;
      },
      hygiene: (state, action: PayloadAction<boolean>) => {
         state.Hygiene = action.payload;
      },
      cooking: (state, action: PayloadAction<boolean>) => {
         state.Cooking = action.payload;
      },
      knivesEquipment: (state, action: PayloadAction<boolean>) => {
         state.KnivesEquipment = action.payload;
      },
      sleeping: (state, action: PayloadAction<boolean>) => {
         state.Sleeping = action.payload;
      },

      //Tarps
      tarps: (state, action: PayloadAction<boolean>) => {
         state.Tarps = action.payload;
      },
      dawn: (state, action: PayloadAction<boolean>) => {
         state.Dawn = action.payload;
      },
      dusk: (state, action: PayloadAction<boolean>) => {
         state.Dusk = action.payload;
      },

      //All Products
      beaniesCaps: (state, action: PayloadAction<boolean>) => {
         state.BeaniesCaps = action.payload;
      },
      hoodies: (state, action: PayloadAction<boolean>) => {
         state.Hoodies = action.payload;
      },
      longsleeves: (state, action: PayloadAction<boolean>) => {
         state.Longsleeves = action.payload;
      },
      sweater: (state, action: PayloadAction<boolean>) => {
         state.Sweater = action.payload;
      },
      tshirts: (state, action: PayloadAction<boolean>) => {
         state.Tshirts = action.payload;
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
   aeroPress,
   basicNature,
   blaek,
   coghlans,
   drBronners,
   eoe,
   fiskars,
   heimplanet,
   campingfurniture,
   hygiene,
   cooking,
   knivesEquipment,
   sleeping,
   tarps,
   dawn,
   dusk,
   beaniesCaps,
   hoodies,
   longsleeves,
   sweater,
   tshirts,
} = Filter.actions;

export default Filter.reducer;
