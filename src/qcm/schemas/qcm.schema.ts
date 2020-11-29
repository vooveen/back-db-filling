
  
import * as mongoose from 'mongoose';

const CoursSchema = new mongoose.Schema({
    cours: String,
    synthese: String,
  });
const PropositionSchema = new mongoose.Schema({
    proposition: String,
    solution: Boolean,
  });
  const CombinaisonSchmea =  new mongoose.Schema({
    combinaison: String,
    solution: Boolean,
  });
export const QcmSchema = new mongoose.Schema({
    source: String,
    module: String,
    cours: CoursSchema,
    type_question: String,
    enonce: String,
    propositions: [PropositionSchema],
    combinaisons: [CombinaisonSchmea],
    commentaire: String,
  });
