import supabase, { supabaseUrl } from "./supabase";

//FETCH CABINS DETAILS
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

//DELETE CABIN
export async function deletCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be Deleted");
  }
  return data;
}

//CREATE AND UPDATE CABIN DETAILS
export async function createUpdateCabin(newCabin, id) {
  //SETTING IMAGE NAME AND PATH
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random() * 10}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //UPLOADING DATA
  let query = supabase.from("cabins");

  //CREATE DATA
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //UPDATE DATA
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be Created");
  }

  //***NEED TO ADD A FEATURE TO DELETE OLD IMAGE IF UPLOADING NEW ONE***
  //UPLOADING IMAGE ONLY IF ITS NEW
  if (hasImagePath) return data;

  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);
    if (storageError) {
      //DELETING DATA IF IMAGE UPLOAD FAILED
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin Image could not be uploaded and Cabin could not be Created"
      );
    }
  }

  return data;
}
