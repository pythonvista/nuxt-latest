import {Dialog, Notify} from 'quasar';

export const ShowSnack = (message, type) => {
  Notify.create({
    message: message,
    type: type,
    position: 'top-right'
  });
};

export const ShowPrompt = (message, success) => {
  Dialog.create({
    title: 'Confirm Delete',
    message: `Would you like to delete ${message} `,
    cancel: true,
    persistent: true
  })
    .onOk(() => {
      success();
    })
    .onOk(() => {})
    .onCancel(() => {
      ShowSnack('Process Aborted', 'negative');
    })
    .onDismiss(() => {});
};
export const ShowPrompt2 = (message, success) => {
  Dialog.create({
    title: message,
    message: `${message} `,
    cancel: true,
    persistent: true
  })
    .onOk(() => {
      success();
    })
    .onOk(() => {})
    .onCancel(() => {
      ShowSnack('Process Aborted', 'negative');
    })
    .onDismiss(() => {});
};

export const OpenPrompt = (title, message, success) => {
  Dialog.create({
    title: title,
    message: message,
    prompt: {
      model: '',
      type: 'text' // optional
    },
    cancel: true,
    persistent: true
  })
    .onOk(data => {
      success(data);
    })
    .onCancel(() => {
      ShowSnack('Process Aborted', 'negative');
    })
    .onDismiss(() => {});
};
