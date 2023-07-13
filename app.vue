import { Database } from '~~/types/database.types'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase'
<script setup lang="ts">

const user = await serverSupabaseUser(event)
const client = serverSupabaseClient<Database>(event)


</script><template>
  <div>
    <section>
      <v-img src="/danke.jpg"></v-img>
    </section>
    <v-container class="text-center">

      <section>
        <p class="text-h3">Feiert ein letztes Mal mit uns!</p>
        <v-row>
          <v-col cols="6">
            <v-icon>mdi-place</v-icon>
            <p>Stadtpark</p>
          </v-col>
          <v-col cols="6">
            <v-icon>mdi-clock</v-icon>
            <p>21.07.2021</p>
            <p>ab 15:00 Uhr</p>
          </v-col>
        </v-row>
        <v-parallax height="400px"
          src="https://pps.whatsapp.net/v/t61.24694-24/354015938_676189234322345_7515145899851120929_n.jpg?ccb=11-4&oh=01_AdRuZbjAUgNkvOiBGMw-hSTW40W9503BY17ZkuRjJOEwiQ&oe=64BBFD2B"></v-parallax>

        <p class="text-h4">
          Pfüate und Baba!
        </p>
        <p class="text-body-1">
          Es ist an der Zeit dass wir unsere Koffer schnappen, Jasskarten einpacken, in die Hölzler schlüpfen und das
          Wiener
          Schnitzel endgültig für Vorarlberger Käsknöpfle eintauschen.
        </p>
        <p class="text-body-1">
          Doch bevor wir ein für alle Mal Wien die kalte Schulter zeigen, wollen wir mit euch noch einmal ur leiwand
          feiern,
          Oida! Dafür würden wir uns gemütlich im Stadtpark treffen und gemeinsam die letzten gemeinsamen Stündchen
          auskosten.
        </p>
        <p class="text-body-1">
          Wann: 21.07.23 ab 15:00 <br>
          Wo: Stadtpark Wien<br>
          Was soll ich mitbringen: Gute Laune und Getränke/Snacks nach Bedarf.<br>
        </p>
        <p>
          Wir freuen uns auf dich.
        </p>
        <p>
          In diesem Sinne
          Ciaolin und Andividerci
        </p>
      </section>
      <section class="mt-10">
        <p class="text-h5">Gästebuch</p>
        <p class="text-body-1">
          Tragt euch bitte ins Gästebuch ein, mit einer lustigen Nachricht und einem tollen Foto!
          Wir freuen uns auf euch! <v-icon>mdi-heart</v-icon>
        </p>
        <v-card variant="tonal" class="pa-5 mb-10" rounded="5">
          <v-row>
            <v-col cols="12"><v-text-field hide-details variant="outlined" label="Name"></v-text-field></v-col>
            <v-col cols="12"><v-textarea hide-details variant="outlined" label="Nachricht"></v-textarea></v-col>
            <v-col cols="12"><v-file-input accept="image/*" :prepend-icon="false" hide-details label="Föti"
                variant="outlined"></v-file-input></v-col>
            <v-col cols="12" class="text-left"><v-btn variant="flat" color="success">Ab geht die Post!</v-btn></v-col>
          </v-row>
        </v-card>
        <v-card variant="tonal" class="text-left mb-5">
          <v-row>
            <v-col cols="12" sm="7" class="pa-5">
              <span class="text-body-1">I würr euch vermissa :(</span><br>
              <span class="text-body-1 text-secondary">- Andi</span>

            </v-col>

          </v-row>
        </v-card>
        <v-card variant="tonal" class="text-left">
          <v-row>
            <v-col cols="12" sm="5">
              <v-img src="danke.jpg"></v-img>
            </v-col>
            <v-col cols="12" sm="7" class="py-5 pr-5">
              <span class="text-body-1">I würr euch vermissa :(</span><br>
              <span class="text-body-1 text-secondary">- Andi</span>

            </v-col>

          </v-row>
        </v-card>
      </section>
    </v-container>
  </div>
</template>

<style>
p {
  margin-bottom: 0.5rem;
}
</style>