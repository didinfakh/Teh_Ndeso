import Menu from '../models/menuModel.js';
export const getMenu = async (req, res) => {
  try {
    const response = await Menu.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMenuById = async (req, res) => {
  try {
    const response = await Menu.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const createMenu = async (req, res) => {
  try {
    await Menu.create(req.body);
    res.status(201).json({ msg: 'menu created' });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateMenu = async (req, res) => {
  try {
    await Menu.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'menu updated' });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteMenu = async (req, res) => {
  try {
    await Menu.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'menu dleted' });
  } catch (error) {
    console.log(error.message);
  }
};
