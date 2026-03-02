<template>
  <v-sheet class="hrD">
    <hr class="modern-hr">
  </v-sheet>
</template>

<style scoped>
.hrD {
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100vw;
}

/* Moderni stil hr */
.modern-hr {
  width: 35%; /* duljina linije */
  height: 4px; /* debljina linije */
  border: none; /* ukloni default */
  border-radius: 5px; /* blago zaobljeni rubovi */
  background: linear-gradient(to right, gray, #232526); /* gradijent u skladu s dizajnom */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* lagani shadow za dubinu */
  margin: 0; /* ukloni default margin */
}
</style>
