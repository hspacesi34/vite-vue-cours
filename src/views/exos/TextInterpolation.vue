<template>
    <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Variables</th>
        <th>Valeur</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>unLivre</td>
        <td>{{ unLivre }}</td>
      </tr>
      <tr>
        <td>isOnline</td>
        <td>{{ isOnline }}</td>
      </tr>
      <tr>
        <td>unNombre</td>
        <td>{{ unNombre }}</td>
      </tr>
      <tr>
        <td>unTableau</td>
        <td>{{ unTableau }}</td>
      </tr>
      <tr>
        <td>unTableau[0]</td>
        <td>{{ unTableau[0] }}</td>
      </tr>
      <tr>
        <td>unObjet</td>
        <td>{{ unObjet }}</td>
      </tr>
      <tr>
        <td>unObjet.name</td>
        <td>{{ unObjet.name }}</td>
      </tr>
      <tr>
        <td>unObjet['name']</td>
        <td>{{ unObjet['name'] }}</td>
      </tr>
      <tr>
        <td>unObjet.tel</td>
        <td>{{ unObjet.tel }}</td>
      </tr>
      <tr>
        <td>fonctionTest()</td>
        <td>{{ fonctionTest() }}</td>
      </tr>
      <tr>
        <td>condition ternaire</td>
        <td>{{ 1 == 1 ? "cool" : "pas cool" }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
    import { ref } from 'vue';

    const unLivre = ref('Les mémoires de Steven Seagal');
    const isOnline = ref(false);
    const unNombre = ref(1234567890);
    const unTableau = ref(["du texte", 99]);
    const unObjet = ref({"name":"COOL","tel":"060503030"});

    function fonctionTest() {
        return "Hello World";
    }
</script>